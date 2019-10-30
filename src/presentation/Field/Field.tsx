import React from "react"
import { FieldInteractor } from "../../services/interactors/fieldInteractor"

import { EPlayer, EStone } from "../../domain/domainTypes/domainTypes"
import { FieldChange } from "../../services/game/fieldChange"
import { Coordinate } from "./../../domain/coordinate"
import { TurnInteractor } from "./../../services/interactors/turnInteractor"
import { useFieldChange } from "./../Hooks/useFieldChange";
import { Stone } from "./../Stone/Stone"
import "./Field.css"
export const FieldBox = 20

interface IProps
{
  fieldChange: FieldChange,
  interactor: FieldInteractor
  onPlay: (coordinate: Coordinate) => void
  turn: TurnInteractor
}

export const Field: React.FC<IProps> = (props) =>
{
  const coordinate = props.interactor.field.coordinate

  // const [stone, setStone] = React.useState(props.interactor.field.stoneState)
  const fieldState = useFieldChange(coordinate, props.fieldChange,
    props.interactor.field.stoneState)

  const clickHandler = () =>
  {
    props.onPlay(props.interactor.field.coordinate)
    // const newStone = props.onPlay(props.interactor.field.coordinate)
    // if (stone === newStone) return
    // setStone(newStone)
    // console.log(props.interactor.findGroup(), props.interactor.countFreedoms())
  }
  return <svg
    className="field"
    height={FieldBox}
    width={FieldBox}
    onClick={clickHandler}
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
    <Stone state={fieldState} />
  </svg>
}
