import { EPlayer } from "./domainTypes/domainTypes"
import { Player } from "./player";

export const players = {
  [EPlayer.black]: new Player(EPlayer.black),
  [EPlayer.white]: new Player(EPlayer.white),
}
