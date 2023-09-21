import React from "react";
import { PlayFragment } from "./PlayFragment.namespace";
import { usePlayFragment01Hook } from "./hooks/PlayFragment01.hook";
import { PlayFragment01View } from "./views/PlayFragment01.view";

export function PlayFragment(
  props: PlayFragment.HookParams & PlayFragment.ViewProps
) {
  const pfHook = usePlayFragment01Hook(props);
  return (
    <PlayFragment01View
      {...pfHook}
      onViewHistory={props.onViewHistory}
      onViewRules={props.onViewRules}
    />
  );
}
