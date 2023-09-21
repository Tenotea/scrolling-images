import React from "react";
import BaseButton01View from "../../../../elements/buttons/base-button/views/BaseButton01.view";
import { RulesFragment } from "../RulesFragment.namespace";

export default function RulesFragment01View(props: RulesFragment.Props) {
  return (
    <section className="fixed top-0 left-0 h-[100svh] flex items-end justify-center overflow-auto backdrop-blur-md bg-black w-full bg-opacity-50 pt-5 sm:px-10 z-10">
      <div className="bg-white dark:bg-[#19263D] rounded-t-2xl py-10 px-6 w-full max-w-lg">
        <h3 className="text-2xl font-bold dark:text-white text-black">
          Rules of the Game
        </h3>
        <ul className="list-disc pl-4 mt-3 font-medium text-[#666666] dark:text-[#999FA9] text-xs gap-2 grid">
          {props.rules.map((rule, i) => (
            <li key={i}>{rule}</li>
          ))}
        </ul>

        <div className="mt-6">
          <p className="font-bold dark:text-white text-black"> Prizes</p>
          <ul className="flex items-center gap-6 mt-2 justify-stretch">
            {props.prizes.prizes.map((prize, i) => (
              <li className="max-w-[70px]" key={i}>
                <div className="bg-[#19263D] dark:bg-[#000E27] w-16 h-16 p-2 rounded-full flex items-center justify-center mx-auto">
                  <img
                    src={prize.image}
                    className="w-full h-full object-contain"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {props.prizes.isActionFetchingPrizes && (
          <div className="flex items-center justify-center mt-9">
            <div className="w-8 h-8 border-2 dark:border-white border-[#19263D] animate-spin dark:border-t-transparent border-t-transparent rounded-full"></div>
          </div>
        )}

        <div className="h-[50px] mt-10">
          <BaseButton01View
            // className="bg-[#0361F0] dark:bg-[#FEDF7C] text-white dark:text-black block w-full py-3 text-sm mt-4 px-4 rounded-lg font-semibold"
            onClick={props.onProceed}
            disabled={
              props.prizes.isStateFailedToFetch ||
              props.prizes.isActionFetchingPrizes
            }
          >
            Got It
          </BaseButton01View>
        </div>
      </div>
    </section>
  );
}
