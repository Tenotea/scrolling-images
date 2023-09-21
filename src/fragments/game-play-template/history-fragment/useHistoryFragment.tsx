import { useEffect, useState } from "react";
import { gamesService } from "../../../http/games/Games.index";
import { getApplicationState } from "../../../utils/utils.index";
import { GamesNamespace } from "../../../http/games/Games.namespace";

export default function useHistoryFragment() {
  const { gameInstanceId, customerId } = getApplicationState();
  const [history, setHistory] = useState<
    GamesNamespace.GetGameTransactionsByCustomerIdDAO["_embedded"]["gameTransactions"]
  >([]);
  const [isActionFetchingHistory, setIsActionFetchingHistory] = useState(true);
  const [isStateFailedToFetch, setIsStateFailedToFetch] = useState(false);

  async function handleGetGamePlayHistory() {
    if (!gameInstanceId || !customerId) {
      setIsStateFailedToFetch(true);
      setIsActionFetchingHistory(false);
      return;
    }

    setIsActionFetchingHistory(true);
    const { data, error } = await gamesService.GetGameTransactionsByCustomerId({
      gameInstanceId,
      userId: customerId,
    });
    setIsActionFetchingHistory(false);

    if (error) {
      setIsStateFailedToFetch(true);
    }

    if (data) {
      setHistory(
        data._embedded.gameTransactions.filter((tx) =>
          ["WON", "LOST"].includes(tx.status)
        )
      );
    }
  }

  useEffect(() => {
    handleGetGamePlayHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    history,
    isActionFetchingHistory,
    isStateFailedToFetch,
  };
}
