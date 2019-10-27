import { Board } from "../../domain/board"
import { Coordinate } from "../../domain/coordinate"
import { FieldInteractor } from "./fieldInteractor"

export class BoardInteractor
{
  constructor(public board: Board) { }

  public fieldInteractor(coordinate: Coordinate)
  {
    const field = this.board.field(coordinate)
    return new FieldInteractor(field)
  }
}
