import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import { connect } from 'react-redux';
import { FETCH_SUSHIS, EAT_SUSHI } from './reducer';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  componentDidMount() {
    setTimeout( this.props.fetchSushis, 1500 )
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.props.sushis} eatSushi={this.props.eatSushi} />
        <Table eatenSushis={this.props.eatenSushis} budget={this.props.budget} />
      </div>
    );
  }
}

const msp = (state) => {
  return {
    sushis: state.sushis,
    eatenSushis: state.eatenSushis,
    budget: state.budget
  }
}

const mdp = (dispatch) => {
  return {
    eatSushi: (id, price, eaten) => dispatch({ type: EAT_SUSHI, payload: {id, price, eaten} }),
    fetchSushis: () => dispatch(fetchActionCreator())
  }
}

export default connect(msp, mdp)(App);