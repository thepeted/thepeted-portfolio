import React from "react"
import PropTypes from "prop-types"

const FaIcon = ({ faClass, link }) => (
  <a href={link} target="_blank">
    <i className={`fa ${faClass} fa-3x`} />
  </a>
)

FaIcon.propTypes = {
  faClass: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default FaIcon
