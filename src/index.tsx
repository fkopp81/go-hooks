import React from "react"
import ReactDOM from "react-dom"
import { Coordinate } from "./domain/coordinate"
import "./index.css"
import App from "./presentation/App"
import { initialize } from "./services/interactors/initialize"
import * as serviceWorker from "./serviceWorker"

const game = initialize(new Coordinate(9, 9))

ReactDOM.render(<App game={game} />,
  document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
