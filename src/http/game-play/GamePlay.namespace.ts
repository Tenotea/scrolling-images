export namespace GamePlayNamespace {
  export type GetGameInstanceDTO = {
    gameInstanceId: string;
  };

  export type GetGameInstanceDAO = {
    amount: number;
    amountPerChannel: null;
    billingLedgerId: string;
    clientId: string;
    createdAt: null;
    description: string;
    endDate: string;
    gameConfig: {
      chances: string;
      outcomes: string;
      startTime: string;
      durationInMins: string;
      delayInMinsBeforeNextDraw: string;
    };
    gameId: string;
    gameUiType: string;
    id: string;
    isActive: boolean;
    label: string;
    productId: null;
    startDate: string;
    tag: string;
    updatedAt: null;
    userId: string;
  };

  export type GetAvailablePrizesDTO = {
    gameInstanceId: string;
  };

  export type GetAvailablePrizesDAO = {
    page: {
      number: 0;
      size: 20;
      totalElements: 3;
      totalPages: 1;
    };
    _embedded: {
      prizes: Array<{
        amount: number;
        billingApplicationId: string;
        clientId: string;
        createdAt: string;
        description: string;
        gameInstanceId: string;
        icon: string;
        id: string;
        label: string;
        meta: null;
        notificationMessage: null;
        productId: null;
        quantity: number;
        uniqueWinnable: boolean;
        updatedAt: string;
        winnable: boolean;
      }>;
    };
  };

  export type GetGamePlayOutcomeDTO = {
    gameInstanceId: string;
    userId: string;
    prizes: string[];
  };

  export type GetGamePlayOutcomeDAO = {
    gameId: string;
    gameInstanceId: string;
    gameLabel: string;
    gameToken: null;
    gameTransactionId: string;
    prize: {
      id: string;
      createdAt: null;
      updatedAt: null;
      label: string;
      description: string;
      amount: number;
      billingApplicationId: string;
      clientId: string;
      gameInstanceId: string;
      icon: string;
      meta: null;
      notificationMessage: null;
      productId: null;
      quantity: number;
      uniqueWinnable: boolean;
      winnable: boolean;
      winningRuleId: null;
    };
    prizeId: string;
    status: "WON";
    transactionRef: null;
    userInput: null;
  };

  export type ProcessGamePlayWinningsDTO = {
    userId: string;
    gameTransactionId: string;
  };
}
