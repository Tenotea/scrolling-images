export namespace GamesNamespace {
  export type GetGameTransactionsByCustomerIdDTO = {
    gameInstanceId: string;
    userId: string;
  };

  export type GetGameTransactionsByCustomerIdDAO = {
    page: {
      number: null;
      size: null;
      totalElements: null;
      totalPages: null;
    };
    _embedded: {
      gameTransactions: Array<{
        appId: string;
        clientId: string;
        createdAt: string;
        drawId: null;
        gameInstanceId: string;
        gameToken: null;
        id: string;
        prizeAmount: null;
        prizeId: null;
        prizeLabel: null;
        status: string;
        terminalId: string;
        transactionRef: string;
        transactionTime: string;
        updatedAt: string;
        userEmail: null;
        userId: string;
        userInput: null;
        userName: null;
        userPhone: null;
      }>;
    };
  };
}
