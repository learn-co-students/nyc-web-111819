import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    eatenSushis: [],
    budget: 105
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(data => {
      // add an eaten key to each sushi eaten: false
      // let mySushi = {name: 'tobiko', price: 10}... mySushi.eaten ===> undefined (falsey)
      this.setState({ sushis: data })
    })
  }

  eatSushi = (id, price, eaten ) => {
    if(price <= this.state.budget && !eaten){ // only when its not eaten and its price is low enough
      let newSushis = this.state.sushis.map(sushi => { // map over the original array 
        if(sushi.id === id){ // find your condition
          sushi.eaten = true // do the update 
        }
        return sushi // regardless, return the object 
      })
      
      // WITHOUT MAP SHORTCUT ////// USING ARRAY.FINDINDEX
      // let mySushiIndex = this.state.sushis.findIndex(sushi => sushi.id === id) // find the index of the target sushi
      // let mySushiCopy = {...this.state.sushis[mySushiIndex], eaten: true} // copy its object and add eaten: true
      // let newSushis = [...this.state.sushis] // create a copy of the original array 
      // newSushis[mySushiIndex] = mySushiCopy // update the sushi @ the index to my modified copy with eaten: true
  
      this.setState({ 
        sushis: newSushis,
        eatenSushis: [...this.state.eatenSushis, id],
        budget: this.state.budget - price
      })
    } else {
      window.open("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSklpwBW2RjOugiPzZ1iu1tED80vDAO8BoMwhwb1VdBD7WQ7nh0")
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} eatSushi={this.eatSushi} />
        <Table eatenSushis={this.state.eatenSushis} budget={this.state.budget} />
      </div>
    );
  }
}

export default App;