import { Coordinate } from "./coordinate"
import { FieldHorizontalType, FieldVerticalType } from "./domainTypes/domainTypes"

export class Field
{
  constructor(
    public coordinate: Coordinate,
    public horizontalPosition: FieldHorizontalType,
    public verticalPosition: FieldVerticalType,
  ) { }
}

export function fieldFactory(coordinate: Coordinate, boardSize: Coordinate)
{
  const horizontalPosition = coordinate.x === 1 ? FieldHorizontalType.left :
    coordinate.x < boardSize.x ? FieldHorizontalType.middle :
      FieldHorizontalType.right
  const verticalPosition = coordinate.y === 1 ? FieldVerticalType.bottom :
    coordinate.y < boardSize.y ? FieldVerticalType.middle :
      FieldVerticalType.top
  return new Field(coordinate, horizontalPosition, verticalPosition)
}
