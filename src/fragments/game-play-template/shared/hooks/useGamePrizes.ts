import { useEffect, useState } from "react";
import { PrizeModel } from "../../../../types";
import { getApplicationState } from "../../../../utils/utils.index";
import { gamePlayService } from "../../../../http/game-play/Gameplay.index";

export function useGamePrizes() {
  const [prizes, setPrizes] = useState<PrizeModel[]>([]);
  const [isActionFetchingPrizes, setIsActionFetchingPrizes] = useState(false);
  const [isStateFailedToFetch, setIsStateFailedToFetch] = useState(false);
  async function handleGetPrizes() {
    setIsStateFailedToFetch(false);
    const { gameInstanceId } = getApplicationState();
    if (!gameInstanceId) {
      setIsStateFailedToFetch(true);
      return;
    }

    setIsActionFetchingPrizes(true);
    const { data, error } = await gamePlayService.GetAvailablePrizes({
      gameInstanceId: gameInstanceId,
    });

    if (data) {
      setPrizes(
        data._embedded.prizes.map((prize) => ({
          id: prize.id,
          image: prize.icon,
          name: prize.label,
        }))
      );
    }

    if (error) {
      setIsStateFailedToFetch(true);
    }

    setIsActionFetchingPrizes(false);
  }

  useEffect(() => {
    handleGetPrizes();
  }, []);

  return { prizes, isActionFetchingPrizes, isStateFailedToFetch };
}
