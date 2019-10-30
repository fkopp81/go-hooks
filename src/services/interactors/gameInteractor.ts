import { Board } from "../../domain/board"
import { Coordinate } from "../../domain/coordinate"
import { EPlayer, EStone } from "../../domain/domainTypes/domainTypes"
import { countFreedoms } from "../game/countFreedoms"
import { FieldChange } from "../game/fieldChange"
import { findCapturedGroups } from "../game/findCapturedGroups"
import { groupAt } from "../game/groupAt"
import { IPlayers } from './../../domain/domainTypes/domainTypes';
import { captureGroup } from './../game/captureGroup';
import { TurnInteractor } from "./turnInteractor"

export class GameInteractor
{
  constructor(
    public board: Board,
    public fieldChange: FieldChange,
    public players: IPlayers,
    public turnInteractor: TurnInteractor) { }

  public playAt = (coordinate: Coordinate): void =>
  {
    const color = this.turnInteractor.currentPlayer() === EPlayer.black ?
      EStone.black : EStone.white

    // check for captured groups
    const capturedGroups = findCapturedGroups(this.board, color, coordinate)
    console.log(capturedGroups)

    const field = this.board.field(coordinate)
    if (field.stoneState !== EStone.empty) return
    field.stoneState = color


    // validate stone
    const group = groupAt(this.board, coordinate)
    const freedoms = countFreedoms(this.board, group)
    if (freedoms === 0 && !capturedGroups.length) return
    this.fieldChange.change(field, field.stoneState)
    // capturedGroups
    //   .forEach((capturedGroup) => this.fieldChange.changeGroup(capturedGroup,
    //     EStone.empty))
    capturedGroups.forEach((capturedGroup) =>
      captureGroup(this.fieldChange, capturedGroup, this.players))
    this.turnInteractor.end()

    // return field.stoneState
  }
}
