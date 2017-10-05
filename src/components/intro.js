import React, {Component} from 'react'
import scrollToElement from 'scroll-to-element';
import { MIN_HEIGHT, SCROLL_SPEED }from '../constants/constants'

const Intro = ({ height }) => (
  <div className="content intro" style={window.innerWidth >= 600 ? { height, minHeight: MIN_HEIGHT + 'px' } : {}}>
    <div>
      <h1>Hello! I'm Peter Daily, a web developer based in Manchester.</h1>
      <p>I'm passionate about creating beautiful and functional user interfaces. I usually work with JavaScript, React and Sass but picking up something new isn't a problem. </p>
      <p>
        I like to be creative and work on fun projects in my spare time - here are some of my favourites. <span className='button go' onClick={() => scrollToElement('#work', { duration: SCROLL_SPEED })}>Go</span>
      </p>
    </div>
  </div>
);

export default Intro