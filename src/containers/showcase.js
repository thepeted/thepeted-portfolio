import React, {Component} from 'react';

import data from '../data/showcase-data';

import Codepen from '../components/codepen';
import Description from '../components/description';


export default class Showcase extends Component {
  constructor(){
    super();
    this.state = {
      activeIdx: null,
      showcases: data
    };
  }
  render() {
    return (
      <div>
        {this.state.showcases.map((showcase, i) => {
          let content = null
          if (this.state.activeIdx === i) {
            content = (
              <div className="main">
                <Codepen hash={showcase.hash} height={showcase.height}/>
                <Description content={showcase.description} />
              </div>
            )
          }
          return (
            <div className="showcase" key={i}>
              <h2 onClick={() => this.handleClick(i) }>
                {showcase.title}
              </h2>
              {content}
            </div>
          );
        })}
      </div>
    )
  }
  handleClick(i){
    if (i === this.state.activeIdx) {
      this.setState({
        activeIdx: null
      });
    } else {
      this.setState({
        activeIdx: i
      });
    }
  }
}
