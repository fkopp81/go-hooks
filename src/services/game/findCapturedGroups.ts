import { Board } from "../../domain/board";
import { Coordinate } from "../../domain/coordinate";
import { EStone } from "../../domain/domainTypes/domainTypes";
import { adjacentCoordinates } from './adjacentCoordinates';
import { countFreedoms } from './countFreedoms';
import { groupAt } from './groupAt';

export function findCapturedGroups(
  board: Board, color: EStone, playedAt: Coordinate)
{
  if (color === EStone.empty) return []
  return adjacentCoordinates(board, playedAt)
    .map((coordinate) => board.field(coordinate))
    .filter((field) => ![EStone.empty, color].includes(field.stoneState))
    .map((field) => groupAt(board, field.coordinate))
    .filter((group) => countFreedoms(board, group) <= 1)
}
