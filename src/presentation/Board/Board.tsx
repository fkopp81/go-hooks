import React from "react"
import { BoardInteractor } from "../../services/interactors/boardInteractor"
import { Field, FieldBox } from "../Field/Field"

import "./Board.css"

interface IProps
{
  interactor: BoardInteractor
}

export const Board: React.FC<IProps> = (props) =>
{
  const fields = props.interactor.fieldInteractors()
    .map((fieldInteractor, index) =>
      <Field interactor={fieldInteractor} key={index} />)
  const size = props.interactor.size()
  const viewBox = [0, 0, size.x * FieldBox, size.y * FieldBox]
  return <svg className="board" viewBox={viewBox.join(" ")}>
    <rect className="background" x="0" y="0" width="100%" height="100%" />
    {fields}
  </svg>
}
