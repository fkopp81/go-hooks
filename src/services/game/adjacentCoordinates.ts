import { Board } from "../../domain/board"
import { Coordinate } from "../../domain/coordinate"

export function adjacentCoordinates(board: Board, coordinate: Coordinate)
{
  const coordinates: Coordinate[] = []
  if (coordinate.y > 1)
  {
    coordinates.push(new Coordinate(coordinate.x, coordinate.y - 1))
  }
  if (coordinate.x < board.size.x)
  {
    coordinates.push(new Coordinate(coordinate.x + 1, coordinate.y))
  }
  if (coordinate.y < board.size.y)
  {
    coordinates.push(new Coordinate(coordinate.x, coordinate.y + 1))
  }
  if (coordinate.x > 1)
  {
    coordinates.push(new Coordinate(coordinate.x - 1, coordinate.y))
  }
  return coordinates
}
