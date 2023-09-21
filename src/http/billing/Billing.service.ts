import { BillingNamespace } from "./Billing.namespace";
import HttpClient from "..";
import { getApplicationState } from "../../utils/utils.index";

export class BillingService extends HttpClient {
  constructor() {
    const headers = getApplicationState();
    super({
      baseURL: import.meta.env.VITE_APP_BILLING_SERVICE_BASEURL,
      headers: {
        "App-Id": headers.appId,
        "Client-Id": headers.clientId,
        Token: "Bearer " + headers.accessToken,
        Authorization: "Bearer " + headers.accessToken,
      },
    });
  }

  async GetWallet(dto: BillingNamespace.GetWalletDTO) {
    return this.SendRequest<BillingNamespace.GetWalletDAO>({
      method: "get",
      path: "/wallets",
      query: dto,
    });
  }
}
