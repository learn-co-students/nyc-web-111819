import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainerHook';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

//   state = {
//     sushis: [],
//     eatenSushis: [],
//     budget: 105
//   }

//   componentDidMount(){
//     fetch(API)
//     .then(res => res.json())
//     .then(data => {
//       this.setState({ sushis: data })
//     })
//   }

//   eatSushi = (id, price, eaten ) => {
//     if(price <= this.state.budget && !eaten){ 
//       let newSushis = this.state.sushis.map(sushi => { 
//         if(sushi.id === id){ 
//           sushi.eaten = true
//         }
//         return sushi 
//       })
    
//       this.setState({ 
//         sushis: newSushis,
//         eatenSushis: [...this.state.eatenSushis, id],
//         budget: this.state.budget - price
//       })
//     } else {
//       window.open("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSklpwBW2RjOugiPzZ1iu1tED80vDAO8BoMwhwb1VdBD7WQ7nh0")
//     }
//   }

function App(props) {
    const eatSushi = () => {},
        sushis = [],
        eatenSushis = [],
        budget = 105;

    return (
      <div className="app">
        <SushiContainer sushis={sushis} eatSushi={eatSushi} />
        <Table eatenSushis={eatenSushis} budget={budget} />
      </div>
    );
}

export default App;