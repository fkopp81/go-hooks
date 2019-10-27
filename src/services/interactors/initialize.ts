import { Board } from "../../domain/board"
import { Coordinate } from "../../domain/coordinate"
import { BoardInteractor } from "./boardInteractor"

export function initialize(size: Coordinate)
{
  const board = new Board(size)
  return new BoardInteractor(board)
}
