import React from "react"
import { EPlayer } from "../../domain/domainTypes/domainTypes"
import { TurnInteractor } from "./../../services/interactors/turnInteractor"
import { useActivePlayer } from './../Hooks/turnHook';
import "./Player.css"

interface IProps
{
  color: EPlayer
  turn: TurnInteractor
}

export const Player: React.FC<IProps> = (props) =>
{
  const activePlayer = useActivePlayer(props.turn)
  const classes = ["player", props.color]
  if (activePlayer === props.color) classes.push("active")
  return <div className={classes.join(" ")}>
    {props.color.toLocaleUpperCase()}
  </div>
}
