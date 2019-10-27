import { Board } from "../../domain/board"
import { Coordinate } from "../../domain/coordinate"
import { Group } from "../../domain/group"
import { adjacentCoordinates } from "./adjacentCoordinates"

export function countFreedoms(board: Board, group: Group)
{
  const freedomCoordinates: Coordinate[] = []
  group.coordinates.forEach((coordinate) =>
    adjacentCoordinates(board, coordinate)
      .filter((adjacentCoordinate) =>
        !board.field(adjacentCoordinate).stoneState)
      .filter((adjacentCoordinate) =>
        !freedomCoordinates
          .find((freedomCoordinate) => freedomCoordinate
            .equal(adjacentCoordinate)))
      .forEach((adjacentCoordinate) => freedomCoordinates
        .push(adjacentCoordinate)))
  console.log(freedomCoordinates)
  return freedomCoordinates.length
}
