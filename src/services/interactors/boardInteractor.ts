import { Board } from "../../domain/board"
import { Coordinate } from "../../domain/coordinate"
import { FieldInteractor } from "./fieldInteractor"

export class BoardInteractor
{
  constructor(public board: Board) { }

  public fieldInteractor(coordinate: Coordinate)
  {
    const field = this.board.field(coordinate)
    return new FieldInteractor(this.board, field)
  }

  public fieldInteractors()
  {
    const fieldCount = this.board.size.x * this.board.size.y
    const fieldInteractorArray = Array<FieldInteractor>(fieldCount)
    for (let x = 1; x <= this.board.size.x; x++)
    {
      for (let y = 1; y <= this.board.size.y; y++)
      {
        const index = (x - 1) * this.board.size.y + y
        const coordinate = new Coordinate(x, y)
        fieldInteractorArray[index] = this.fieldInteractor(coordinate)
        // const field = this.board.field(coordinate)
        // fieldInteractorArray[index] = new FieldInteractor(field)
      }
    }
    return fieldInteractorArray
  }

  public size = () => this.board.size
}
