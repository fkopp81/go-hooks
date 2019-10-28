import { Board } from "../../domain/board"
import { Coordinate } from "../../domain/coordinate"
import { Turn } from "../../domain/turn"
import { IGame } from "./../game"
import { BoardInteractor } from "./boardInteractor"
import { GameInteractor } from "./gameInteractor"
import { TurnInteractor } from "./turnInteractor"

export function initialize(size: Coordinate): IGame
{
  const board = new Board(size)
  const boardInteractor = new BoardInteractor(board)
  const turn = new Turn()
  const turnInteractor = new TurnInteractor(turn)
  const gameInteractor = new GameInteractor(board, turnInteractor)
  return { board: boardInteractor, game: gameInteractor, turn: turnInteractor }
}
