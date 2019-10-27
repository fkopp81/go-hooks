import { Turn } from "../domain/turn"
import { BoardInteractor } from "./interactors/boardInteractor"

export interface IGame
{
  boardInteractor: BoardInteractor
  turn: Turn
}
