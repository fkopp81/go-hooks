import React from "react"
import { EPlayer } from "../domain/domainTypes/domainTypes"
import { IGame } from "./../services/game"
import "./App.css"
import { Board } from "./Board/Board"
import { Player } from "./Player/Player"

interface IProps
{
  game: IGame
}

const App: React.FC<IProps> = (props) =>
{
  return (
    <div className="App">
      <header className="AppHeader">
        <h1>Go Hooks!</h1>
      </header>
      <main className="appMain">
        <Player
          player={props.game.players.white}
          turn={props.game.turn}
        />
        <Player
          player={props.game.players.black}
          turn={props.game.turn}
        />
        <Board game={props.game} />
      </main>
    </div>
  )
}

export default App
