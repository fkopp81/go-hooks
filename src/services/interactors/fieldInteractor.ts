import { EHorizontal, EVertical } from "../../domain/domainTypes/domainTypes"
import { Field } from "../../domain/field"

export class FieldInteractor
{
  constructor(public field: Field) { }

  public isLeft = () =>
    this.field.horizontalPosition === EHorizontal.left
  public isRight = () =>
    this.field.horizontalPosition === EHorizontal.right
  public isTop = () =>
    this.field.verticalPosition === EVertical.top
  public isBottom = () =>
    this.field.verticalPosition === EVertical.bottom
}
