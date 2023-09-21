export namespace BillingNamespace {
  export type GetWalletDTO = {
    clientLedgerId: string;
  };

  export type GetWalletDAO = {
    _embedded: {
      wallets: Array<{
        balance: number;
      }>;
    };
  };
}
