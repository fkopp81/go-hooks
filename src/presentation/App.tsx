import React from "react"
import { IGame } from "./../services/game"
import "./App.css"
import { Board } from "./Board/Board"

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
        <Board game={props.game} />
      </main>
    </div>
  )
}

export default App
