import { PrizeModel } from "../../../types";
import { GamePlayStep } from "../../../templates/game-play-template/GamePlayTemplate.hook";
import { useGamePrizes } from "../shared/hooks/useGamePrizes";
import { usePlayFragment01Hook } from "./hooks/PlayFragment01.hook";

export namespace PlayFragment {
  export type ViewProps = {
    onViewHistory: VoidFunction;
    onViewRules: VoidFunction;
  };

  export type HookParams = {
    prizes: ReturnType<typeof useGamePrizes>;
    onRefresh: VoidFunction;
    gamePlayStep: GamePlayStep;
    onSelect: (prize: PrizeModel) => void;
  };

  export type HookReturnType = ReturnType<typeof usePlayFragment01Hook>;

  export type Props = HookReturnType & ViewProps;
}
