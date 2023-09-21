import React from "react";
import { RulesFragment } from "./RulesFragment.namespace";
import { useRulesFragmentO1 } from "./hooks/RulesFragment01.hook";
import RulesFragment01View from "./views/RulesFragment01.view";

export default function RulesFragment(props: RulesFragment.ViewProps) {
  const rfHook = useRulesFragmentO1();
  return (
    <RulesFragment01View
      {...rfHook}
      onProceed={props.onProceed}
      prizes={props.prizes}
    />
  );
}
