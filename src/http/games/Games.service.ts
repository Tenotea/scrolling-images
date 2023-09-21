import HttpService from "..";
import { getApplicationState } from "../../utils/utils.index";
import { GamesNamespace } from "./Games.namespace";

export class GamesService extends HttpService {
  constructor() {
    const headers = getApplicationState();
    super({
      baseURL: import.meta.env.VITE_APP_GAMEPLAY_SERVICE_BASEURL,
      headers: {
        "App-Id": headers.appId,
        "Client-Id": headers.clientId,
        "Terminal-Id": headers.clientId,
        Token: headers.accessToken,
      },
    });
  }

  async GetGameTransactionsByCustomerId(
    dto: GamesNamespace.GetGameTransactionsByCustomerIdDTO
  ) {
    return this.SendRequest<GamesNamespace.GetGameTransactionsByCustomerIdDAO>({
      method: "get",
      path: "/gameTransactions",
      query: { ...dto, sort: "createdAt,desc", size: 50 },
    });
  }
}
