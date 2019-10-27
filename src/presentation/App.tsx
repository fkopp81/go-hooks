import React from "react"
import { BoardInteractor } from "../services/interactors/boardInteractor"
import "./App.css"
import logo from "./logo.svg"

interface IProps
{
  boardInteractor: BoardInteractor
}

const App: React.FC<IProps> = (props) =>
{
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
