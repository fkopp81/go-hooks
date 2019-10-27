import { Board } from "../../domain/board"
import { Coordinate } from "../../domain/coordinate"
import { EPlayer, EStone } from "../../domain/domainTypes/domainTypes"
import { Group } from "../../domain/group"
import { adjacentCoordinates } from "./adjacentCoordinates"

export function groupAt(
  board: Board,
  coordinate: Coordinate,
  group: Coordinate[] = [coordinate],
)
{
  const field = board.field(coordinate)
  if (!field.stoneState) throw new Error("Empty field at coordinate")
  const color = field.stoneState
  const player = color === EStone.black ?
    EPlayer.black : EPlayer.white
  const newCoordinates = adjacentCoordinates(board, coordinate)
    .filter((adjacentCoordinate) =>
      board.field(adjacentCoordinate).stoneState === color)
    .filter((adjacentCoordinate) => !group.find((groupCoordinate) =>
      groupCoordinate.equal(adjacentCoordinate)))

  newCoordinates.forEach((adjacentCoordinate) => group.push(adjacentCoordinate))
  newCoordinates
    .forEach((adjacentCoordinate) => groupAt(board, adjacentCoordinate, group))
  return new Group(color, group)
}
