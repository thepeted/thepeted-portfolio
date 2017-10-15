import React, { Component } from "react"

import data from "../data/showcase-data"

import Codepen from "../components/codepen"
import Description from "../components/description"

export default class Showcase extends Component {
  constructor() {
    super()
    this.state = {
      activeIdx: null,
      showcases: data
    }
  }

  handleClick(i) {
    if (i === this.state.activeIdx) {
      this.setState({
        activeIdx: null
      })
    } else {
      this.setState({
        activeIdx: i
      })
    }
  }

  render() {
    return (
      <div id="work">
        {this.state.showcases.map((showcase, i) => {
          let content = null
          const idName = showcase.title.replace(/\s/g, "-")
          if (this.state.activeIdx === i) {
            content = (
              <div className="main">
                <Codepen hash={showcase.hash} height={showcase.height} />
                <Description content={showcase.description} />
              </div>
            )
          }
          return (
            <div
              className={
                showcase.fullWidth ? "showcase full-width" : "showcase"
              }
              id={idName}
              key={idName}
            >
              <a
                href={`#${idName}`}
                onClick={() => this.handleClick(i)}
                className={
                  this.state.activeIdx === i
                    ? "showcase-header active"
                    : "showcase-header"
                }
              >
                <h2>{showcase.title}</h2>
              </a>
              {content}
            </div>
          )
        })}
      </div>
    )
  }
}
