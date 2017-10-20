import React, { Component } from "react"
import PropTypes from "prop-types"
import { RotatingPlane } from "better-react-spinkit"

class CodePen extends Component {
  constructor() {
    super()
    this.state = {
      loaded: false
    }
    this.handleLoad = this.handleLoad.bind(this)
  }

  getLoader() {
    const loaderHeight = 50
    const iFrameHeight = this.props.height
    const top = iFrameHeight / 2 - loaderHeight / 2
    return (
      <div style={{ position: "absolute", top, left: "50%" }}>
        <RotatingPlane size={loaderHeight} color="#db4500" duration="1s" />
      </div>
    )
  }

  handleLoad() {
    this.setState({ loaded: true })
  }

  render() {
    const { hash, height } = this.props
    return (
      <div className="codepen" style={{ position: "relative" }}>
        {!this.state.loaded && this.getLoader()}
        <iframe
          id={`cp_embed_${hash}`}
          src={`//codepen.io/thepeted/embed/${hash}?height=${height}&amp;theme-id=24278&amp;slug-hash=${hash}&amp;default-tab=result&amp;user=thepeted&amp;embed-version=2`}
          scrolling="no"
          frameBorder="0"
          height={height}
          allowTransparency="true"
          allowFullScreen="true"
          name="CodePen Embed"
          title="CodePen Embed"
          className="cp_embed_iframe"
          style={{
            width: "100%",
            overflow: "hidden",
            opacity: `${this.state.loaded ? 1 : 0}`
          }}
          onLoad={this.handleLoad}
        />
      </div>
    )
  }
}

CodePen.propTypes = {
  hash: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired
}

export default CodePen
