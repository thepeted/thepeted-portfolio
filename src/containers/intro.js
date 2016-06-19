import React, {Component} from 'react'

import Button from '../components/button'

export default class extends Component {
  constructor(){
    super();
    this.state = {
      height: ''
    }
    this.handleResize = this.handleResize.bind(this);
  }
  componentWillMount(){
    this.setState({
      height: window.innerHeight + 'px'
    });
  }
  componentWillUnMount(){
    if (window.innerWidth >= 600 ) {
      window.removeEventListener('resize', this.handleResize);
    }
  }
  componentDidMount(){
    if (window.innerWidth >= 600 ) {
      window.addEventListener('resize', this.handleResize);
    }
  }
  handleResize(e){
    this.setState({height: e.target.innerHeight});
  }
  render(){
    const divStyle = {
      height: this.state.height
    }
    return (
      <div className="content intro" style={divStyle}>
        <div>
          <h1>Hello. My name is Peter Daily and I'm a new web developer.</h1>
          <p>I've recently found a passion for front end web development. I'm learning HTML5, CSS3 and JavaScript by making single page web apps.</p>
          <p>
            Here are some of my favourite creations (so far..) <Button title="Go" url="#work" />
          </p>

        </div>
      </div>
    );
  }

}
