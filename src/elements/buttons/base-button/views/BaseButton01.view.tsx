import React from "react";
import { BaseButton } from "../BaseButton.namespace";

export default function BaseButton01View(props: BaseButton.ViewProps) {
  return (
    <button
      className="bg-[#0361F0] dark:bg-[#FEDF7C] text-white dark:text-black block w-full text-sm px-4 rounded-lg font-semibold disabled:bg-[#E5E5E5] disabled:text-[#999999] disabled:dark:bg-[#19222C] disabled:dark:text-[#665E3C] transition-colors h-full duration-200"
      {...props}
    />
  );
}
