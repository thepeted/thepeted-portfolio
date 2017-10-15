import React from "react"
import ReactDOM from "react-dom"

import App from "./containers/app"

require("./styles/main.sass") // root stylesheeet - .css, .scss or .sass

ReactDOM.render(<App />, document.querySelector(".container"))
