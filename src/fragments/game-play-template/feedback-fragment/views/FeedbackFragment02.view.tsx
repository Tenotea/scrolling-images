import React from "react";
import { ConfettiIllustration } from "../../../../assets/images";
import BaseButton01View from "../../../../elements/buttons/base-button/views/BaseButton01.view";
import CongratulationsIllustration from "../../../../elements/illustrations/CongratulationsIllustration";
import MoniepointLogo from "../../../../elements/illustrations/MoniepointLogo";
// import ShareIcon from "../../../../elements/illustrations/ShareIcon";
import { FeedBackFragment } from "../FeedBackFragment.namespace";

export default function FeedbackFragment02View(props: FeedBackFragment.Props) {
  return (
    <section className="fixed top-0 left-0 w-full backdrop-blur-md bg-black bg-opacity-50 z-[1] pt-5 h-[100svh]">
      <div className="bg-gradient-to-b from-[#396afda0] to-40% to-white dark:bg-[#19263D] bg-white dark:from-[#19263D] dark:to-[#19263D] px-5 rounded-lg max-w-[470px] mx-auto py-10 w-11/12 z-[1] relative transform-gpu scale-[0.87]">
        <img
          src={ConfettiIllustration}
          alt=""
          className="absolute top-0 left-0 w-full -z-[1] max-h-[400px] object-cover"
        />
        <div className="max-w-max mx-auto">
          <MoniepointLogo />
        </div>

        <div className="mx-auto mt-20 mb-5 w-full">
          <CongratulationsIllustration />
        </div>

        <p className="font-semibold text-center text-black dark:text-white">
          You have won a
        </p>

        <h5 className="font-bold text-2xl text-center text-[#0361F0] dark:text-[#FED75B]">
          {props.prize.name}
        </h5>

        {/* <button className="flex items-center gap-2 text-[#0361F0] dark:text-[#FED75B] mx-auto my-6">
          <ShareIcon />
          Share
        </button> */}

        <div className="h-[50px] mt-8">
          <BaseButton01View onClick={props.onClose}>Close</BaseButton01View>
        </div>
      </div>
    </section>
  );
}
