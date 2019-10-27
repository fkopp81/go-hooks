import React from "react"
import { FieldInteractor } from "../../services/interactors/fieldInteractor"

import { EStone } from "../../domain/domainTypes/domainTypes"
import { Stone } from "./../Stone/Stone"
import "./Field.css"
export const FieldBox = 20

interface IProps
{
  interactor: FieldInteractor
}

export const Field: React.FC<IProps> = (props) =>
{
  const [stone, setStone] = React.useState(props.interactor.field.stoneState)
  const stoneChangeHandler = () =>
  {
    props.interactor.field.stoneState =
      Math.random() < .5 ?
        EStone.black :
        EStone.white
    setStone(props.interactor.field.stoneState)
  }
  const coordinate = props.interactor.field.coordinate
  return <svg
    className="field"
    height={FieldBox}
    width={FieldBox}
    onClick={stoneChangeHandler}
    x={coordinate.xIndex() * FieldBox}
    y={coordinate.yIndex() * FieldBox}
  >
    {/* <text y={15}>{`${coordinate.x}, ${coordinate.y}`}</text> */}
    <rect className="background" x="0" y="0" width="100%" height="100%" />
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
    <Stone state={stone} />
  </svg>
}
