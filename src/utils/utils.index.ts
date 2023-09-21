import decode from "jwt-decode";
import {
  SC1,
  SC10,
  SC11,
  SC12,
  SC13,
  SC14,
  SC15,
  SC16,
  SC17,
  SC18,
  SC19,
  SC2,
  SC20,
  SC21,
  SC22,
  SC23,
  SC24,
  SC3,
  SC4,
  SC5,
  SC6,
  SC7,
  SC8,
  SC9,
} from "../assets/images";

export function getApplicationState() {
  const searchParams = new URL(window.location.href).searchParams;
  const token = searchParams.get("token");
  const jwtPayload: Record<string, string> = token ? decode(token) : {};

  return {
    accessToken: token,
    customerId: jwtPayload.userId,
    clientId: searchParams.get("client-id"),
    gameInstanceId: searchParams.get("gameInstanceId"),
    appId: searchParams.get("app-id") || "picture-shuffle",
  };
}

export const scratchCardImages = [
  {
    id: "ze03dj44",
    image: SC1,
  },
  {
    id: "ze03dj45",
    image: SC2,
  },
  {
    id: "ze03dj46",
    image: SC3,
  },
  {
    id: "ze03dj47",
    image: SC4,
  },
  {
    id: "ze03dj48",
    image: SC5,
  },
  {
    id: "ze03dj49",
    image: SC6,
  },
  {
    id: "ze03dj50",
    image: SC7,
  },
  {
    id: "ze03dj51",
    image: SC8,
  },
  {
    id: "ze03dj52",
    image: SC9,
  },
  {
    id: "ze03dj53",
    image: SC10,
  },
  {
    id: "ze03dj54",
    image: SC11,
  },
  {
    id: "ze03dj55",
    image: SC12,
  },
  {
    id: "ze03dj56",
    image: SC13,
  },
  {
    id: "ze03dj57",
    image: SC14,
  },
  {
    id: "ze03dj58",
    image: SC15,
  },
  {
    id: "ze03dj59",
    image: SC16,
  },
  {
    id: "ze03dj60",
    image: SC17,
  },
  {
    id: "ze03dj61",
    image: SC18,
  },
  {
    id: "ze03dj62",
    image: SC19,
  },
  {
    id: "ze03dj63",
    image: SC20,
  },
  {
    id: "ze03dj64",
    image: SC21,
  },
  {
    id: "ze03dj65",
    image: SC22,
  },
  {
    id: "ze03dj66",
    image: SC23,
  },
  {
    id: "ze03dj67",
    image: SC24,
  },
];
