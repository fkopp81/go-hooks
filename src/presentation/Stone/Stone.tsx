import React from "react"
import { EStone } from "../../domain/domainTypes/domainTypes"

interface IProps
{
  state: EStone
}

export const Stone: React.FC<IProps> = (props) =>
{
  const fill = props.state === EStone.black ? "black" : "white"
  const stone = props.state ?
    <circle cx="50%" cy="50%" r="40%" fill={fill} stroke="darkgrey" />
    : null
  return <svg className="stone">
    {stone}
  </svg>
}
