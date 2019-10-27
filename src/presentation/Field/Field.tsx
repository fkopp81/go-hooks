import React from "react"
import { FieldInteractor } from "../../services/interactors/fieldInteractor"

import "./Field.css"
export const FieldBox = 20

interface IProps
{
  interactor: FieldInteractor
}

export const Field: React.FC<IProps> = (props) =>
{
  const coordinate = props.interactor.field.coordinate
  return <svg
    className="field"
    height={FieldBox}
    width={FieldBox}
    x={coordinate.xIndex() * FieldBox}
    y={coordinate.yIndex() * FieldBox}
  >
    {/* <text y={15}>{`${coordinate.x}, ${coordinate.y}`}</text> */}
    <line
      x1={props.interactor.isLeft() ? "50%" : "0"}
      y1="50%"
      x2={props.interactor.isRight() ? "50%" : "100%"}
      y2="50%"
      stroke="black"
    />
    <line
      x1="50%"
      y1={props.interactor.isTop() ? "50%" : "100%"}
      y2={props.interactor.isBottom() ? "50%" : "0"}
      x2="50%"
      stroke="black"
    />
  </svg>
}
