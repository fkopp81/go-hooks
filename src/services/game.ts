import { BoardInteractor } from "./interactors/boardInteractor"
import { GameInteractor } from "./interactors/gameInteractor"
import { TurnInteractor } from "./interactors/turnInteractor"

export interface IGame
{
  board: BoardInteractor
  game: GameInteractor
  turn: TurnInteractor
}
