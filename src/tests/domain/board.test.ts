import { Board } from "../../domain/board"
import { Coordinate } from "../../domain/coordinate"
import { EHorizontal, EVertical } from "../../domain/domainTypes/domainTypes"

it("generates", () =>
{
  const size = new Coordinate(19, 19)
  const board = new Board(size)
  for (let x = 1; x <= size.x; x++)
  {
    for (let y = 1; y <= size.y; y++)
    {
      const coordinate = new Coordinate(x, y)
      const field = board.field(coordinate)
      expect(coordinate.equal(field.coordinate)).toBeTruthy()
      if (x === 1)
      {
        expect(field.horizontalPosition).toBe(EHorizontal.left)
      }
      else if (x === size.x)
      {
        expect(field.horizontalPosition).toBe(EHorizontal.right)
      }
      else expect(field.horizontalPosition).toBe(EHorizontal.middle)
      if (y === 1)
      {
        expect(field.verticalPosition).toBe(EVertical.bottom)
      }
      else if (y === size.y)
      {
        expect(field.verticalPosition).toBe(EVertical.top)
      }
      else expect(field.verticalPosition).toBe(EVertical.middle)
    }
  }
})
