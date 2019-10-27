import { FieldHorizontalType, FieldVerticalType } from "../../domain/domainTypes/domainTypes"
import { Field } from "../../domain/field"

export class FieldInteractor
{
  constructor(public field: Field) { }

  public isLeft = () =>
    this.field.horizontalPosition === FieldHorizontalType.left
  public isRight = () =>
    this.field.horizontalPosition === FieldHorizontalType.right
  public isTop = () =>
    this.field.verticalPosition === FieldVerticalType.top
  public isBottom = () =>
    this.field.verticalPosition === FieldVerticalType.bottom
}
