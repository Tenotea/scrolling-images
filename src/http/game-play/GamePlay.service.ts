import { GamePlayNamespace } from "./GamePlay.namespace";
import HttpClient from "..";
import { getApplicationState } from "../../utils/utils.index";

export class GamePlayService extends HttpClient {
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

  async GetGameInstance(dto: GamePlayNamespace.GetAvailablePrizesDTO) {
    return this.SendRequest<GamePlayNamespace.GetGameInstanceDAO>({
      method: "get",
      path: `/gameInstances/${dto.gameInstanceId}`,
    });
  }

  async GetAvailablePrizes(dto: GamePlayNamespace.GetAvailablePrizesDTO) {
    return this.SendRequest<GamePlayNamespace.GetAvailablePrizesDAO>({
      method: "get",
      path: "/prizes",
      query: dto,
    });
  }

  async GetGamePlayOutcome(dto: GamePlayNamespace.GetGamePlayOutcomeDTO) {
    return this.SendRequest<GamePlayNamespace.GetGamePlayOutcomeDAO>({
      method: "post",
      path: `/play/${dto.gameInstanceId}`,
      body: {
        processWinning: false,
        userId: dto.userId,
        prizes: dto.prizes,
      },
    });
  }

  async ProcessGamePlayWinnings(
    dto: GamePlayNamespace.ProcessGamePlayWinningsDTO
  ) {
    return this.SendRequest<GamePlayNamespace.GetGamePlayOutcomeDAO>({
      method: "post",
      path: `/payout/game-transaction/`,
      body: {
        userId: dto.userId,
        gameTransactionId: dto.gameTransactionId,
      },
    });
  }
}
