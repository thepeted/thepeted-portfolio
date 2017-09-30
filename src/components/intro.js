import React, {Component} from 'react'
import scrollToElement from 'scroll-to-element';
import { MIN_HEIGHT, SCROLL_SPEED }from '../constants/constants'

const Intro = ({ height }) => (
  <div className="content intro" style={{ height, minHeight: MIN_HEIGHT + 'px' }}>
    <div>
      <h1>Hello and welcome. My name is Peter Daily and I'm a web developer.</h1>
      <p>I am passionate about frontend web development.  I specialise in creating user interfaces with HTML, CSS and JavaScript.</p>
      <p>
        I find I learn and improve through working on fun projects - here is a showcase of some of my favourite creations. <span className='button' onClick={() => scrollToElement('#work', { duration: SCROLL_SPEED })}>Go</span>
      </p>
    </div>
  </div>
);

export default Intro