import React, { useEffect } from "react"
import { EPlayer } from "../../domain/domainTypes/domainTypes"
import { TurnInteractor } from "./../../services/interactors/turnInteractor"

export function useActivePlayer(turnInteractor: TurnInteractor)
{
  const [activePlayer, setActivePlayer] = React.useState(EPlayer.black)

  useEffect(() =>
  {
    turnInteractor.subject.subscribe((player) =>
    {
      setActivePlayer(player)
    })
  })

  return activePlayer
}
