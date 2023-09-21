import { PrizeModel } from "../../../types";

export namespace FeedBackFragment {
  export type Props = {
    prize: PrizeModel;
    onClose: VoidFunction;
  };
}
