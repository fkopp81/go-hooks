import { Board } from "../../domain/board"
import { Coordinate } from "../../domain/coordinate"
import { EStone } from "../../domain/domainTypes/domainTypes"
import { Field } from "../../domain/field"
import { Group } from "../../domain/group"

export type TFieldChangeCallback = (newStoneState: EStone) => void

export class FieldChange
{
  private subscribedFields: Map<Coordinate, TFieldChangeCallback> =
    new Map()

  constructor(private board: Board) { }

  public subscribe(coordinate: Coordinate, callback: TFieldChangeCallback)
  {
    this.subscribedFields.set(coordinate, callback)
  }

  public change(field: Field, newStoneState: EStone)
  {
    field.stoneState = newStoneState
    const coordinate = field.coordinate
    const callback = this.subscribedFields.get(coordinate)
    if (!callback) return
    callback(newStoneState)
  }

  public changeGroup(group: Group, newStoneState: EStone)
  {
    for (const coordinate of group.coordinates)
    {
      const field = this.board.field(coordinate)
      this.change(field, newStoneState)
    }
  }
}
