import React from "react";
import { BaseButton } from "../BaseButton.namespace";

export default function BaseButton02View(props: BaseButton.ViewProps) {
  return (
    <button
      className="bg-[#E6EEFD] dark:bg-[#333631] text-[#0361F0] dark:text-[#FED75B] block w-full text-sm px-4 rounded-lg font-semibold h-full"
      {...props}
    />
  );
}
