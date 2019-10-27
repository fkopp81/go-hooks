import React from "react"
import { BoardInteractor } from "../../services/interactors/boardInteractor"

import "./Board.css"

const FieldBox = 20

interface IProps
{
  boardInteractor: BoardInteractor
}

export const Board: React.FC<IProps> = (props) =>
{
  const size = props.boardInteractor.size()
  const viewBox = [0, 0, size.x * FieldBox, size.y * FieldBox]
  return <svg className="board" viewBox={viewBox.join(" ")}>
    <rect className="background" x="0" y="0" width="100%" height="100%" />
  </svg>
}
