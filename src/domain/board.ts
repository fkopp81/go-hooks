import { Coordinate } from "./coordinate"
import { Field, fieldFactory } from "./field"

export class Board
{
  public size: Coordinate
  private fields: Field[][] = [[]]

  constructor(public sizeOrFields: Coordinate | Field[][])
  {
    if (Array.isArray(sizeOrFields))
    {
      this.fields = sizeOrFields
      this.size = new Coordinate(this.fields.length, this.fields[0].length)
      return
    }
    this.size = sizeOrFields
    this.generate(sizeOrFields)
  }

  public field(coordinate: Coordinate)
  {
    if (!coordinate.validate(this.size)) throw new Error("out of bounds")
    return this.fields[coordinate.xIndex()][coordinate.yIndex()]
  }

  public generate(size: Coordinate)
  {
    this.fields = new Array<Field[]>(size.x)
    for (let xIndex = 0; xIndex < size.x; xIndex++)
    {
      const column = Array<Field>(size.y)
      for (let yIndex = 0; yIndex < size.y; yIndex++)
      {
        const fieldCoordinate = new Coordinate(xIndex + 1, yIndex + 1)
        column[yIndex] = fieldFactory(fieldCoordinate, size)
      }
      this.fields[xIndex] = column
    }
    this.size = size
  }
}
