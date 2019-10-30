import React from "react"
import { EPlayer, IPlayer } from "../../domain/domainTypes/domainTypes"
import { Player as PlayerObject } from "./../../domain/player"
import { TurnInteractor } from "./../../services/interactors/turnInteractor"
import { useActivePlayer } from "./../Hooks/turnHook"
import "./Player.css"

interface IProps
{
  player: IPlayer
  turn: TurnInteractor
}

export const Player: React.FC<IProps> = (props) =>
{
  const player = props.player as PlayerObject
  const activePlayer = useActivePlayer(props.turn)
  const classes = ["player", player.color]
  if (activePlayer === player.color) classes.push("active")
  return <div className={classes.join(" ")}>
    <div className="color">{player.color.toLocaleUpperCase()}</div>
    <div className="captures">{player.captures}</div>
  </div>
}
