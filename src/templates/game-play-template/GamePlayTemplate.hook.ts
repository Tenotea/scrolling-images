import { useState } from "react";
import { PrizeModel } from "../../types";
import FeedbackFragment02View from "../../fragments/game-play-template/feedback-fragment/views/FeedbackFragment02.view";
import FeedbackFragment01View from "../../fragments/game-play-template/feedback-fragment/views/FeedbackFragment01.view";
import { useGamePrizes } from "../../fragments/game-play-template/shared/hooks/useGamePrizes";

export enum GamePlayStep {
  READING_RULES,
  READY_TO_SHUFFLE,
  PRIZE_SELECTED,
}

export function useGamePlayTemplate() {
  const prizesData = useGamePrizes();
  const [isActionViewHistory, setIsActionViewHistory] = useState(false);
  const [selectedPrize, setSelectedPrize] = useState<PrizeModel | null>(null);
  const [gamePlayStep, setGamePlayStep] = useState<GamePlayStep>(
    GamePlayStep.READING_RULES
  );
  const [gamePlaySessionId, setGamePlaySessionId] = useState(Date.now());

  function handleJumpToNextStep() {
    setGamePlayStep(gamePlayStep + 1);
  }

  function handleJumpToPreviousStep() {
    setGamePlayStep(gamePlayStep - 1);
  }

  function handleSelectPrize(prize: PrizeModel) {
    setSelectedPrize(prize);
    setGamePlayStep(GamePlayStep.PRIZE_SELECTED);
  }

  function handleRefresh() {
    setGamePlaySessionId(Date.now());
  }

  function handleViewHistory() {
    setIsActionViewHistory(!isActionViewHistory);
  }

  return {
    prizesData,
    handleJumpToNextStep,
    gamePlayStep,
    selectedPrize,
    handleSelectPrize,
    handleJumpToPreviousStep,
    handleViewHistory,
    isActionViewHistory,
    gamePlaySessionId,
    handleRefresh,
    FeedbackFragment:
      selectedPrize && selectedPrize.id.length > 1
        ? FeedbackFragment02View
        : FeedbackFragment01View,
  };
}
