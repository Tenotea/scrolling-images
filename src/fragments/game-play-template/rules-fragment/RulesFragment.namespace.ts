import { useGamePrizes } from "../shared/hooks/useGamePrizes";

export namespace RulesFragment {
  export type ViewProps = {
    onProceed: VoidFunction;
    prizes: ReturnType<typeof useGamePrizes>;
  };

  export type HookReturnType = {
    rules: string[];
  };

  export type Props = HookReturnType & ViewProps;
}
