import React from "react"
import PropTypes from "prop-types"

const Description = ({ content }) => {
  function createMarkup() {
    return { __html: content }
  }
  return (
    <div className="description">
      <p dangerouslySetInnerHTML={createMarkup()} />
    </div>
  )
}

Description.propTypes = {
  content: PropTypes.node.isRequired
}

export default Description
