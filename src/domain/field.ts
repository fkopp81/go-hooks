import { Coordinate } from "./coordinate"
import { EHorizontal, EStone, EVertical } from "./domainTypes/domainTypes"

export class Field
{
  constructor(
    public coordinate: Coordinate,
    public horizontalPosition: EHorizontal,
    public verticalPosition: EVertical,
    public stoneState = EStone.empty,
  ) { }
}

export function fieldFactory(coordinate: Coordinate, boardSize: Coordinate)
{
  const horizontalPosition = coordinate.x === 1 ? EHorizontal.left :
    coordinate.x < boardSize.x ? EHorizontal.middle :
      EHorizontal.right
  const verticalPosition = coordinate.y === 1 ? EVertical.bottom :
    coordinate.y < boardSize.y ? EVertical.middle :
      EVertical.top
  return new Field(coordinate, horizontalPosition, verticalPosition)
}
