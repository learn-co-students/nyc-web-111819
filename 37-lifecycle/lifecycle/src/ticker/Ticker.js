import React from 'react'

class Ticker extends React.Component {

  render(){
    return (
      <div className="box">
        <div style={{backgroundColor: this.props.color, color: 'white'}}>
          <h1>{this.props.number}</h1>
        </div>
      </div>
    );
  }
}

export default Ticker 