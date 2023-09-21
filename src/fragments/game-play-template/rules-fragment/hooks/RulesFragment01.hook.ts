import { RulesFragment } from "../RulesFragment.namespace";

export function useRulesFragmentO1(): RulesFragment.HookReturnType {
  const rules = [
    "Select an image that intrigues you",
    "Some images have attached rewards",
    "You stand a chance of winning if you select a frame with a reward",
  ];

  return { rules };
}
