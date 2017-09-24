import React, {Component} from 'react'

import Button from '../components/button'

const Intro = ({ height }) => (
  <div className="content intro" style={{ height }}>
    <div>
      <h1>Hello. My name is Peter Daily and I'm a new web developer.</h1>
      <p>I've recently found a passion for front end web development. I'm learning HTML5, CSS3 and JavaScript by making single page web apps.</p>
      <p>
        Here are some of my favourite creations (so far..) <Button title="Go" url="#work" />
      </p>
    </div>
  </div>
);

export default Intro