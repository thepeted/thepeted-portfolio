import React from 'react';

import {FOOTER_HEIGHT} from '../constants/constants.js';

export default () => {
  const footerStyle = {
    height: FOOTER_HEIGHT
  };
  const pStyle = {
    lineHeight: FOOTER_HEIGHT + 'px',
    margin: 0,
    height: FOOTER_HEIGHT
  };
  return (
    <footer style={footerStyle}>
      <p style={pStyle}> {'\u00a9'} Peter Daily {(new Date()).getFullYear()}. View the source on <a href="https://github.com/thepeted/thepeted-portfolio">Github.</a></p>
    </footer>
  )
}
