import React from "react";
import AngleRightIllustration from "../../../elements/illustrations/AngleRightIllustration";
import TransactionCreditIllustration from "../../../elements/illustrations/TransactionCreditIllustration";
import TransactionDebitIllustration from "../../../elements/illustrations/TransactionDebitIllustration";
import { HistoryFragment } from "./HistoryFragment.namespace";
import useHistoryFragment from "./useHistoryFragment";

export default function HistoryFragment(props: HistoryFragment.Props) {
  const { history, isStateFailedToFetch, isActionFetchingHistory } =
    useHistoryFragment();
  return (
    <section className="h-[100svh] w-full left-0 fixed bottom-0 z-[1] bg-[#F5F5F5] dark:bg-[#000E27] p-5 max-w-md right-0 mx-auto overflow-auto">
      <h2
        className="text-lg text-black dark:text-white font-bold flex items-center gap-3 max-w-max"
        onClick={props.onExit}
      >
        <div className="h-[20px]">
          <AngleRightIllustration />
        </div>
        History
      </h2>
      <ul className="bg-white dark:bg-[#19263D] rounded-lg mt-2 grid gap-3 py-6 px-5">
        {history.map((h) => (
          <li className="py-2 flex items-center justify-between" key={h.id}>
            <div className="flex items-center gap-6">
              {h.status === "WON" ? (
                <TransactionCreditIllustration />
              ) : (
                <TransactionDebitIllustration />
              )}
              <div className="">
                <p className="text-black dark:text-white text-sm font-semibold">
                  {new Date(h.transactionTime).toLocaleDateString()}
                </p>
                <p className="text-xs -mt-0.5 text-[#808080] dark:text-[#999FA9]">
                  {h.status === "WON" ? "Won" : "Lost"}
                </p>
              </div>
            </div>
            <p className="text-xs font-medium text-[#808080] dark:text-[#999FA9]">
              -100 Coins
            </p>
          </li>
        ))}

        {history.length < 1 && isActionFetchingHistory && (
          <div className="flex items-center justify-center mt-9">
            <div className="w-8 h-8 border-2 dark:border-white light:border-[#0361F0] animate-spin dark:border-t-transparent light::border-t-transparent rounded-full"></div>
          </div>
        )}

        {history.length < 1 &&
        !isStateFailedToFetch &&
        !isActionFetchingHistory ? (
          <p className="text-sm font-bold text-[#808080] dark:text-[#999FA9] text-center">
            No entries.
          </p>
        ) : (
          isStateFailedToFetch && <p>Something went wrong, try again later.</p>
        )}
      </ul>
    </section>
  );
}
