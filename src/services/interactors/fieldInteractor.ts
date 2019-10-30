import { Board } from "../../domain/board"
import { EHorizontal, EVertical } from "../../domain/domainTypes/domainTypes"
import { Field } from "../../domain/field"
import { countFreedoms } from "../game/countFreedoms"
import { groupAt } from "../game/groupAt"

export class FieldInteractor
{
  constructor(private board: Board, public field: Field) { }

  public findGroup = () =>
  {
    return groupAt(this.board, this.field.coordinate)
  }

  public countFreedoms = () =>
  {
    return countFreedoms(this.board, this.findGroup())
  }

  public isLeft = () =>
    this.field.horizontalPosition === EHorizontal.left
  public isRight = () =>
    this.field.horizontalPosition === EHorizontal.right
  public isTop = () =>
    this.field.verticalPosition === EVertical.top
  public isBottom = () =>
    this.field.verticalPosition === EVertical.bottom

  public play = () =>
  {

  }
}
