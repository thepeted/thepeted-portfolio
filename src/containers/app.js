import React, { Component } from 'react';

import throttle from 'lodash.throttle';

import Footer from '../components/footer';
import Header from '../components/header';
import Intro from '../components/intro';
import Outro from '../components/outro';
import Showcase from './showcase';


class App extends Component {
  constructor() {
    super();
    this.state = {
      height: window.innerHeight
    }

    this.handleResize = this.handleResize.bind(this)
  }

  componentDidMount(){
    if (window.innerWidth >= 600 ) {
      window.addEventListener('resize', throttle(this.handleResize, 16, false));
    }
  }

  componentWillUnMount(){
    if (window.innerWidth >= 600 ) {
      window.removeEventListener('resize', this.handleResize);
    }
  }

  handleResize(e) {
    this.setState({height: e.target.innerHeight});
  }

  render() {
    return (
      <div>
        <Header />
        <Intro height={this.state.height} />
        <Showcase />
        <Outro height={this.state.height} />
        <Footer />
      </div>
    );
  }
}

export default App
