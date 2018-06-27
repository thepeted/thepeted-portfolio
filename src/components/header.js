import React from "react"
import PropTypes from "prop-types"

import classNames from "classnames"
import scrollToElement from "scroll-to-element"

import { SCROLL_SPEED } from "../constants/constants"

const Header = ({ showHomeButton }) => {
  const homeButtonClassNames = classNames("home-link", {
    hidden: !showHomeButton
  })
  return (
    <header>
      <div className="nav">
        <button
          className={homeButtonClassNames}
          onClick={() =>
            scrollToElement(".container", { duration: SCROLL_SPEED })}
        >
          <i className="fa fa-lg fa-home" aria-hidden="true" />
        </button>
        <div>
          <button
            onClick={() =>
              window.open(
                "//drive.google.com/file/d/1Tcm6iI_EAuXrLz0Ofr4S9yAyDNGkhGdy/view?usp=sharing",
                "_blank"
              )}
          >
            CV
          </button>
          <button
            onClick={() =>
              scrollToElement("#Get-In-Touch", { duration: SCROLL_SPEED })}
          >
            Contact Me
          </button>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  showHomeButton: PropTypes.bool.isRequired
}

export default Header
