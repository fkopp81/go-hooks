import React from "react"
import { BoardInteractor } from "../../services/interactors/boardInteractor"
import { Field, FieldBox } from "../Field/Field"

import { IGame } from "./../../services/game"
import "./Board.css"

interface IProps
{
  game: IGame
}

export const Board: React.FC<IProps> = (props) =>
{
  const interactor = props.game.board
  const fields = interactor.fieldInteractors()
    .map((fieldInteractor, index) =>
      <Field
        fieldChange={props.game.fieldChange}
        interactor={fieldInteractor}
        key={index}
        onPlay={props.game.game.playAt}
        turn={props.game.turn}
      />)
  const size = interactor.size()
  const viewBox = [0, 0, size.x * FieldBox, size.y * FieldBox]
  return <svg className="board" viewBox={viewBox.join(" ")}>
    <rect className="background" x="0" y="0" width="100%" height="100%" />
    {fields}
  </svg>
}
