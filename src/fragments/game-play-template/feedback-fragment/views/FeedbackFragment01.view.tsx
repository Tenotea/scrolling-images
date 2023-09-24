import React from "react";
import { SadMojiIllustration } from "../../../../assets/images";
import BaseButton01View from "../../../../elements/buttons/base-button/views/BaseButton01.view";
import BaseButton02View from "../../../../elements/buttons/base-button/views/BaseButton02.view";
import MoniepointLogo from "../../../../elements/illustrations/MoniepointLogo";
import { FeedBackFragment } from "../FeedBackFragment.namespace";

export default function FeedbackFragment01View(props: FeedBackFragment.Props) {
  return (
    <section className="fixed top-0 left-0 w-full backdrop-blur-md bg-black bg-opacity-50 z-[1] pt-5 h-[100svh]">
      <div className="bg-gradient-to-b from-[#396afda0] to-40% to-white dark:bg-[#19263D] bg-white dark:from-[#19263D] dark:to-[#19263D]  px-5 rounded-lg max-w-[470px] mx-auto py-10 w-11/12 transform-gpu  scale-[0.87]">
        <div className="max-w-max mx-auto">
          <MoniepointLogo />
        </div>

        <div className="max-w-max mx-auto mt-20 mb-5">
          <img src={SadMojiIllustration} alt="" />
        </div>
        <h5 className="font-bold text-2xl text-center text-black dark:text-white">
          You did not reveal any prize
        </h5>
        <p className="font-semibolld text-center text-black dark:text-white mt-2">
          Better luck next time, keep playing!
        </p>
        <div className="grid grid-cols-2 gap-4 mt-8 h-[50px]">
          <BaseButton02View onClick={props.onClose}>Close</BaseButton02View>
          <BaseButton01View onClick={props.onClose}>Try Again</BaseButton01View>
        </div>
      </div>
    </section>
  );
}
