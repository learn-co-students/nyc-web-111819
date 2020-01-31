import React from 'react'
import Ticker from './Ticker'

class TickerContainer extends React.Component {

  state = {
    number: 0,
    color: 'black',
    interval: null
  }

  componentDidMount() {
    this.startInterval()
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.state.number > prevState.number){
      this.setState({ color: 'green' })
    } else if(this.state.number < prevState.number){
      this.setState({ color: 'red' })
    }
    // one exit case: when the numbers are the same, it won't setState
  }

  startInterval = () => {
    let intervalId = setInterval(() => this.setState({ number: Math.floor(Math.random() * 100)}), 1000)
    this.setState({ interval: intervalId })
  }

  handleInterval = () => {
    if(this.state.interval){
      clearInterval(this.state.interval);
      this.setState({ interval: null })
    } else {
      this.startInterval()
    }
  }

  render(){
    // console.log('rendering', this.state.number)
    console.log(this.state)
    return (
      <div className="box">
        <button onClick={this.handleInterval}>Stop/Start Ticker</button>
        <Ticker color={this.state.color} number={this.state.number}/>
      </div>
    );
  }
}



export default TickerContainer 