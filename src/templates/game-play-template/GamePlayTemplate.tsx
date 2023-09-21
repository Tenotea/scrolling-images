import React from "react";
import HistoryFragment from "../../fragments/game-play-template/history-fragment/HistoryFragment";
import { PlayFragment } from "../../fragments/game-play-template/play-fragment/PlayFragment";
import RulesFragment from "../../fragments/game-play-template/rules-fragment/RulesFragment";
import { GamePlayStep, useGamePlayTemplate } from "./GamePlayTemplate.hook";

export default function GamePlayTemplate() {
  const {
    handleJumpToNextStep,
    gamePlayStep,
    handleSelectPrize,
    handleJumpToPreviousStep,
    selectedPrize,
    FeedbackFragment,
    handleViewHistory,
    isActionViewHistory,
    gamePlaySessionId,
    prizesData,
    handleRefresh,
  } = useGamePlayTemplate();
  return (
    <div className="h-full">
      {gamePlayStep === GamePlayStep.READING_RULES && (
        <RulesFragment onProceed={handleJumpToNextStep} prizes={prizesData} />
      )}
      <PlayFragment
        key={gamePlaySessionId}
        onViewRules={handleJumpToPreviousStep}
        onViewHistory={handleViewHistory}
        gamePlayStep={gamePlayStep}
        onSelect={handleSelectPrize}
        prizes={prizesData}
        onRefresh={handleRefresh}
      />
      {gamePlayStep === GamePlayStep.PRIZE_SELECTED && selectedPrize && (
        <FeedbackFragment
          onClose={handleJumpToPreviousStep}
          prize={selectedPrize}
        />
      )}
      {isActionViewHistory && <HistoryFragment onExit={handleViewHistory} />}
    </div>
  );
}
