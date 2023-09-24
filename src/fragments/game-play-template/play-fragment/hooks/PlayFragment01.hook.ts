/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { SadFaceIllustration } from "../../../../assets/images";
import { PlayFragment } from "../PlayFragment.namespace";
import { PrizeModel } from "../../../../types";
import { gamePlayService } from "../../../../http/game-play/Gameplay.index";
import {
  getApplicationState,
  scratchCardImages,
} from "../../../../utils/utils.index";
import { billingService } from "../../../../http/billing/Billing.index";
import { GamePlayNamespace } from "../../../../http/game-play/GamePlay.namespace";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export function usePlayFragment01Hook(params: PlayFragment.HookParams) {
  const [pictureOptions, setPictureOptions] = useState<PrizeModel[]>([]);
  const { gameInstanceId, customerId } = getApplicationState();
  const [walletBalance, setWalletBalance] = useState(0);
  const [isOverlayInView, setIsOverlayInView] = useState(true);
  const gamePlayOutcome =
    useRef<GamePlayNamespace.GetGamePlayOutcomeDAO | null>(null);
  const [isGameplayStart, setIsGameplayStart] = useState(false);
  const [isGamePlayReady, setIsGamePlayReady] = useState(false);
  const [isFetchingWalletBalance, setIsFetchingWalletBalance] = useState(false);
  const [isStateFailedToFetch, setIsStateFailedToFetch] = useState(false);
  const [isStateInsufficientBalance, setIsStateInsufficientBalance] =
    useState(false);
  const [gameInstance, setGameInstance] =
    useState<GamePlayNamespace.GetGameInstanceDAO | null>(null);
  const [animationRef] = useAutoAnimate();
  const [isGrandPrizeRound, setIsGrandPrizeRound] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState<PrizeModel | null>(
    null
  );

  function toggleGrandPrizeMode() {
    return;
    setIsGrandPrizeRound(
      getRandomInRange(
        0,
        parseInt(import.meta.env.VITE_APP_WINNING_ODDS ?? "5")
      ) === 2
    );
  }

  function getRandomInRange(min: number, max: number) {
    return Math.ceil(Math.random() * (max - min) + min);
  }

  function shuffle<T>(array: Array<T>) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function handleViewTasks() {
    parent.postMessage(
      { type: "NAVIGATE_TO_TASK", data: null },
      // eslint-disable-next-line no-global-assign
      (origin = "*")
    );
  }

  async function handleGetGameInstance() {
    if (!gameInstanceId) {
      setIsStateFailedToFetch(true);
      return;
    }
    const gameInstance = await gamePlayService.GetGameInstance({
      gameInstanceId: gameInstanceId,
    });
    if (!gameInstance.data) {
      setIsStateFailedToFetch(true);
      return;
    }
    setGameInstance(gameInstance.data);
  }

  async function handleGetWallet() {
    try {
      if (!customerId || !gameInstance) return;
      setIsFetchingWalletBalance(true);
      const { data, error } = await billingService.GetWallet({
        clientLedgerId: gameInstance.billingLedgerId,
      });
      if (data) {
        const bal = data._embedded.wallets?.[0]?.balance || 0;
        if (gameInstance.amount > bal) {
          setIsStateInsufficientBalance(true);
        }
        setIsFetchingWalletBalance(false);
        setWalletBalance(bal);
      }
      if (error) {
        setIsStateFailedToFetch(true);
      }
    } catch (error) {
      setIsStateFailedToFetch(true);
    }
  }

  async function getPictureOptions() {
    const startIndex = getRandomInRange(0, scratchCardImages.length - 10);
    const baseFaces = scratchCardImages.slice(startIndex, startIndex + 9);

    setPictureOptions(shuffle([...baseFaces]));
  }

  async function shufflePictureOptions() {
    setPictureOptions(shuffle(pictureOptions.slice()));
  }

  async function handleActionPlayToWin() {
    if (isGameplayStart) return;
    if (!gameInstance) {
      setIsStateFailedToFetch(true);
      return;
    }

    setIsGameplayStart(true);
    setWalletBalance((wb) => wb - gameInstance.amount);

    const { data, error } = await gamePlayService.GetGamePlayOutcome({
      gameInstanceId: gameInstanceId || "",
      userId: customerId,
      prizes: isGrandPrizeRound
        ? params.prizes.prizes.map((p) => p.id)
        : params.prizes.prizes
            .filter((p) => p.id !== import.meta.env.VITE_APP_GRAND_PRIZE_ID)
            .map((p) => p.id),
    });

    if (error) {
      setIsStateFailedToFetch(true);
      setIsGameplayStart(false);
      setWalletBalance((wb) => wb + gameInstance.amount);
      return;
    }

    if (data) {
      gamePlayOutcome.current = data;
      setIsGamePlayReady(true);
      setIsOverlayInView(false);
    }
  }

  function handlePictureSelect(image: PrizeModel) {
    setSelectedPicture({
      ...image,
      image:
        gamePlayOutcome.current?.status === "WON"
          ? gamePlayOutcome.current.prize.icon
          : SadFaceIllustration,
    });
  }

  async function handleProcessWinning() {
    await gamePlayService.ProcessGamePlayWinnings({
      userId: gameInstance!.userId,
      gameTransactionId: gamePlayOutcome.current!.gameTransactionId,
    });
  }

  useEffect(() => {
    if (!selectedPicture) return;
    setIsGamePlayReady(false);
    if (gamePlayOutcome.current?.status === "WON") {
      handleProcessWinning();
      setTimeout(() => {
        params.onSelect({
          id: gamePlayOutcome.current!.prize.id,
          image: gamePlayOutcome.current!.prize.icon,
          name: gamePlayOutcome.current!.prize.label,
        });
        setIsGameplayStart(() => false);
        setIsOverlayInView(true);
        setSelectedPicture(null);
      }, 3000);
    } else {
      setTimeout(() => {
        params.onSelect({
          id: "2",
          image: SadFaceIllustration,
          name: "Try Again",
        });
        setIsOverlayInView(true);
        setIsGameplayStart(() => false);
        setSelectedPicture(null);
      }, 3000);
    }
  }, [selectedPicture]);

  useEffect(() => {
    handleGetWallet();
  }, [gameInstance]);

  useEffect(() => {
    getPictureOptions();
    handleGetGameInstance();
    toggleGrandPrizeMode();
  }, []);

  return {
    isGrandPrizeRound,
    pictureOptions,
    shufflePictureOptions,
    prizes: params.prizes.prizes,
    walletBalance,
    isStateFailedToFetch,
    isFetchingWalletBalance,
    handleGameStart: handleActionPlayToWin,
    costPerShuffle: gameInstance?.amount,
    isStateInsufficientBalance,
    handleViewTasks,
    handlePictureSelect,
    isGameplayStart,
    gamePlayStep: params.gamePlayStep,
    animationRef,
    selectedPicture,
    isGamePlayReady,
    gamePlayOutcome: gamePlayOutcome.current?.status,
    isOverlayInView,
  };
}
