import React from "react";
import { CoinsShowerIllustration } from "../../assets/images";
import { PageLayout } from "./PageLayout.namespace";

export default function PageLayout(props: PageLayout.Props) {
  return (
    <main className="max-w-md w-full mx-auto h-[100svh] relative overflow-hidden">
      <div className="h-[calc(100svh-20px)]">{props.children}</div>
      <img
        src={CoinsShowerIllustration}
        alt=""
        className="fixed right-0 mx-auto bottom-0 left-0 w-full max-h-[500px] object-cover object-top -z-[1]"
      />
      <footer className=" text-center font-[300] bg-inherit">
        <p className="text-[10px] text-black dark:text-white text-center">
          Powered by Kodobe
        </p>
      </footer>
    </main>
  );
}
