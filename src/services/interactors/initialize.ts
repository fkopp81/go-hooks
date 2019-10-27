import { Board } from "../../domain/board"
import { Coordinate } from "../../domain/coordinate"
import { Turn } from "../../domain/turn"
import { IGame } from "./../game"
import { BoardInteractor } from "./boardInteractor"

export function initialize(size: Coordinate): IGame
{
  const board = new Board(size)
  const boardInteractor = new BoardInteractor(board)
  const turn = new Turn()
  return { boardInteractor, turn }
}
