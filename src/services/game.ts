import { BoardInteractor } from "./interactors/boardInteractor"
import { TurnInteractor } from "./interactors/turnInteractor"

export interface IGame
{
  board: BoardInteractor
  turn: TurnInteractor
}
