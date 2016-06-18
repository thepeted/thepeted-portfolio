import React, {Component} from 'react';
import Social from '../components/fa-icon';

import data from '../data/social-data';

import {FOOTER_HEIGHT} from '../constants/constants';

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
      height: window.innerHeight - FOOTER_HEIGHT
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
    this.setState({height: e.target.innerHeight - FOOTER_HEIGHT});
  }
  render(){
    const divStyle = {
      height: this.state.height
    }
    return (
      <div className="content outro" id="Get-In-Touch" style={divStyle}>
        <div>
          <h2>Like what you see? Keep in touch!</h2>
          <div className="social">
            {
              data.map((social, i) => {
                return (
                  <Social
                    faClass={social.faClass}
                    link={social.link}
                    key={i}
                    />
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }

}
