import { Board } from "../../domain/board"
import { Coordinate } from "../../domain/coordinate"
import { EPlayer, EStone } from "../../domain/domainTypes/domainTypes"
import { countFreedoms } from "../game/countFreedoms"
import { groupAt } from "../game/groupAt"
import { TurnInteractor } from "./turnInteractor"

export class GameInteractor
{
  constructor(public board: Board, public turnInteractor: TurnInteractor) { }

  public playAt = (coordinate: Coordinate): EStone =>
  {
    const field = this.board.field(coordinate)
    if (field.stoneState !== EStone.empty) return field.stoneState
    field.stoneState =
      this.turnInteractor.currentPlayer() === EPlayer.black ?
        EStone.black : EStone.white
    // validate stone
    const group = groupAt(this.board, coordinate)
    const freedoms = countFreedoms(this.board, group)
    if (freedoms === 0)
    {
      field.stoneState = EStone.empty
      return EStone.empty
    }

    this.turnInteractor.end()
    return field.stoneState
  }
}
