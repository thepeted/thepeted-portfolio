import React, {Component} from 'react'

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
  componentWillMount(){
    window.removeEventListener('resize', this.handleResize);
  }
  componentDidMount(){
    window.addEventListener('resize', this.handleResize);
  }
  handleResize(e){
    this.setState({height: e.target.innerHeight});
  }
  render(){
    const divStyle = {
      height: window.innerHeight
    }
    return (
      <div className="content outro" id="Get-In-Touch" style={divStyle}>
        <div>
          <h1>Like what you see? Keep in touch!</h1>

          <p>Social buttons here</p>
        </div>
      </div>
    );
  }

}
