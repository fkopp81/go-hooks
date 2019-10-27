export enum FieldHorizontalType
{
  left, middle, right,
}

export enum FieldVerticalType
{
  top, middle, bottom,
}

export interface IField
{
  horizontalPosition: FieldHorizontalType
  verticalPosition: FieldVerticalType
}

