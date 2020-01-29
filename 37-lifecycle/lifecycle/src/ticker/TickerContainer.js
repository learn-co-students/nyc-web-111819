import React from 'react'
import Ticker from './Ticker'

class TickerContainer extends React.Component {

  state = {
    number: 0,
    color: 'black'
  }

  render(){
    // console.log('rendering', this.state.number)
    return (
      <div className="box">
        <button onClick={() => {}}>Stop/Start Ticker</button>
        <Ticker color={this.state.color} number={this.state.number}/>
      </div>
    );
  }
}



export default TickerContainer 