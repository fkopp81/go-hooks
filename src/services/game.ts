import { IPlayers } from "./../domain/domainTypes/domainTypes";
import { FieldChange } from "./game/fieldChange"
import { BoardInteractor } from "./interactors/boardInteractor"
import { GameInteractor } from "./interactors/gameInteractor"
import { TurnInteractor } from "./interactors/turnInteractor"

export interface IGame
{
  board: BoardInteractor
  fieldChange: FieldChange
  game: GameInteractor
  players: IPlayers
  turn: TurnInteractor
}
