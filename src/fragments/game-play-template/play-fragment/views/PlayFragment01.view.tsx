import React from "react";
// { useEffect, useState }
import {
  BalanceCoinIllustration,
  // BasePrizeCover,
  // GrandPrizeCover,
  IconError,
} from "../../../../assets/images";
import BaseButton01View from "../../../../elements/buttons/base-button/views/BaseButton01.view";
import BaseButton02View from "../../../../elements/buttons/base-button/views/BaseButton02.view";
import ShuffleAndWinIllustration from "../../../../elements/illustrations/ShuffleAndWinIllustration";
import { PlayFragment } from "../PlayFragment.namespace";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import InfoIllustration from "../../../../elements/illustrations/InfoIllustration";
import { scratchCardImages } from "../../../../utils/utils.index";
import RouletteBackground from "../../../../elements/illustrations/RouletteBackground";
import { createPortal } from "react-dom";
import Marquee from "react-fast-marquee";

export function PlayFragment01View(props: PlayFragment.Props) {
  const [parent] = useAutoAnimate({ duration: 200 });
  // const [marqueeSpeed, setMarqueeSpeed] = useState(300);
  // const decelerationRef = useRef<number | null>(null);

  // function decelerateMarquee() {
  //   let intervalCounter = 0;
  //   decelerationRef.current = setInterval(() => {
  //     console.log(intervalCounter);
  //     if (intervalCounter >= 750) {
  //       if (decelerationRef.current) {
  //         clearInterval(decelerationRef.current);
  //       }
  //       return;
  //     }
  //     setMarqueeSpeed((m) => m - 1);
  //     intervalCounter += 1;
  //   }, 1);
  // }

  // useEffect(() => {
  //   if (props.isGamePlayReady) {
  //     setMarqueeSpeed(1000);
  //     setTimeout(() => {
  //       setMarqueeSpeed(150);
  //     }, 2000);
  //   }
  // }, [props.isGamePlayReady]);

  return (
    <section
      ref={parent}
      className="w-11/12 mx-auto flex h-[calc(100%-20px)] flex-col pt-5 relative"
    >
      {/* Declare section for game title */}
      <div
        className="flex justify-center relative w-full"
        style={{ height: props.isGrandPrizeRound ? 120 : 60 }}
      >
        <ShuffleAndWinIllustration grandPrize={props.isGrandPrizeRound} />
      </div>

      {/* Game play sound is added here. */}
      <div
        className="absolute top-2 my-auto right-0 h-min p-2"
        onClick={props.onViewRules}
      >
        <InfoIllustration />
      </div>

      {/* Wrapper for the game view. */}
      <div className="my-[15px] relative transform-gpu scale-[0.9]">
        <svg width="0" height="0">
          <defs>
            <clipPath id="faceClip" clipPathUnits="objectBoundingBox">
              <path d="M0.502,1 H0.498 C0.266,0.999,0.111,0.951,0.079,0.921 C0.045,0.891,0,0.732,0,0.5 C0,0.268,0.045,0.109,0.079,0.079 C0.111,0.048,0.266,0.001,0.498,0 L0.502,0 C0.734,0.001,0.889,0.049,0.921,0.079 C0.955,0.109,1,0.268,1,0.5 C1,0.732,0.955,0.891,0.921,0.921 C0.889,0.952,0.734,1,0.502,1" />
            </clipPath>
          </defs>
        </svg>

        <div className="relative h-[250px]" ref={props.animationRef}>
          <div className="h-full w-full absolute top-0 left-0">
            <RouletteBackground grandPrize={props.isGrandPrizeRound} />
          </div>
          {props.isOverlayInView && (
            <div className="w-full h-full absolute inset-0 z-[2] rounded-lg bg-[rgba(245,245,245,0.9)] dark:bg-[rgba(3,14,37,0.8)] flex items-center justify-center px-10">
              <div className="w-full">
                <h5 className="text-center text-sm font-medium text-black dark:text-white">
                  {props.isGrandPrizeRound
                    ? "You are playing for the grand prize. You stand to win"
                    : "You are playing for a Cash Prize of"}

                  <span className="block text-2xl font-extrabold text-[#0250C8] dark:text-[#FEDF7C] mt-1">
                    {props.isGrandPrizeRound
                      ? "₦4 Million or ₦2,000"
                      : "₦2,000"}
                  </span>
                </h5>
                <p className="text-sm text-center mt-10 text-black dark:text-white">
                  Press{" "}
                  <span className="text-[#1EB12D] font-black"> Play </span> to
                  Begin
                </p>
              </div>
            </div>
          )}

          <Marquee
            speed={200}
            className="h-full"
            style={{ scrollBehavior: "smooth" }}
            play={!props.selectedPicture}
          >
            <div className="h-full flex items-center gap-2">
              {props.pictureOptions.map((c) => {
                return (
                  <div
                    key={c.id}
                    style={{
                      clipPath: "url(#faceClip)",
                      pointerEvents: props.isGamePlayReady ? "all" : "none",
                      display: "block",
                    }}
                    onClick={() => props.handlePictureSelect(c)}
                  >
                    <div
                      style={{
                        height: 150,
                        width: 150,
                      }}
                    >
                      <div
                        className="relative mx-auto w-[97%] mt-[1.5%] h-[97%]"
                        style={{ clipPath: "url(#faceClip)" }}
                      >
                        {props.selectedPicture?.id === c.id ? (
                          <div className="bg-[#19263D] dark:bg-[#000E27] h-full w-full flex items-center justify-center">
                            <img
                              src={props.selectedPicture.image}
                              alt=""
                              className=" w-3/4 mx-auto block h-auto"
                            />
                          </div>
                        ) : (
                          <img
                            src={c.image}
                            className="w-full h-full object-cover transform rotate-180 flip-anim"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Marquee>
        </div>

        <div className="text-center h-[50px]">
          <p className="text-xs mb-0.5 font-semibold dark:text-white text-black">
            Available Coins
          </p>
          <div className="border-4 rounded-full px-2.5 py-1 border-[#0248B4] bg-[#001231] text-white dark:border-[#B29B4B] dark:bg-[#0D182A] flex items-center gap-1 max-w-max mx-auto">
            <span
              className="font-bold text-lg"
              style={{ fontSize: "clamp(6px, 4vw, 20px)" }}
            >
              {props.walletBalance.toLocaleString()}
            </span>
            <img
              src={BalanceCoinIllustration}
              alt=""
              style={{ height: "clamp(10px, 4vw, 20px)" }}
            />
          </div>
        </div>
      </div>

      {props.isStateInsufficientBalance &&
        createPortal(
          <div className="fixed top-5 left-0 right-0 w-11/12 mx-auto py-3 max-w-md px-3 bg-red-100 text-xs rounded-lg text-black flex justify-between items-center gap-4 z-[1]">
            <p className="">
              <img src={IconError} className="inline-block mr-2" />
              You have insufficient coins
            </p>
            <button
              className="font-bold text-[#0248B4] flex-shrink-0 h-min"
              onClick={props.handleViewTasks}
            >
              View Tasks
            </button>
          </div>,
          document.body
        )}

      {props.isStateFailedToFetch && (
        <div className="fixed top-5 left-0 right-0 w-11/12 mx-auto py-3 max-w-md px-3 bg-red-100 text-xs rounded-lg text-black flex justify-between items-center gap-4 z-[1]">
          <p className="">
            <img src={IconError} className="inline-block mr-2" />
            Something went wrong, please try again later.
          </p>
        </div>
      )}

      <div className="grid grid-rows-2 items-center h-[115px] gap-[15px] mt-auto transform-gpu scale-[0.9]">
        <BaseButton01View
          onClick={props.handleGameStart}
          disabled={
            props.isGameplayStart ||
            props.isStateFailedToFetch ||
            props.isFetchingWalletBalance ||
            props.isStateInsufficientBalance
          }
          style={{ fontSize: "clamp(6px, 4vw, 14px)" }}
        >
          {typeof props.costPerShuffle !== "undefined"
            ? `${
                props.costPerShuffle > 0
                  ? `Play with ${props.costPerShuffle} Coins`
                  : "Play for FREE"
              }`
            : "Play for Free"}
        </BaseButton01View>
        <BaseButton02View
          style={{ fontSize: "clamp(6px, 4vw, 14px)" }}
          onClick={props.onViewHistory}
        >
          View History
        </BaseButton02View>
      </div>

      {scratchCardImages.map((i) => (
        <img
          src={i.image}
          key={i.id}
          className="hidden absolute -z-[1000] pointer-events-none"
        />
      ))}
    </section>
  );
}
