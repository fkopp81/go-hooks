import React from "react"
import { BoardInteractor } from "../services/interactors/boardInteractor"
import "./App.css"
import { Board } from "./Board/Board"

interface IProps
{
  boardInteractor: BoardInteractor
}

const App: React.FC<IProps> = (props) =>
{
  return (
    <div className="App">
      <header className="AppHeader">
        <h1>Go Hooks!</h1>
      </header>
      <main className="appMain">
        <Board boardInteractor={props.boardInteractor} />
      </main>
    </div>
  )
}

export default App
