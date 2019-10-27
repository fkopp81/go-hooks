export enum EHorizontal
{
  left, middle, right,
}

export enum EVertical
{
  top, middle, bottom,
}

export enum EPlayer
{
  black, white,
}

export enum EStone
{
  empty = 0, black, white,
}

export interface IField
{
  horizontalPosition: EHorizontal
  verticalPosition: EVertical
}

