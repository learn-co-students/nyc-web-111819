import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogCard from './HogCard';

class App extends Component {
  state = {
    hogs, // key-value assignment shortcut
    onlyGreased: false,
    sort: 'no sort'
  }

  toggleGreased = () => {
    this.setState({ onlyGreased: !this.state.onlyGreased })
  }

  changeSort = (sortType) => {
    this.setState({ sort: sortType })
  }  

  render() {
    let pigList = [...this.state.hogs];
    if (this.state.onlyGreased){
      pigList = pigList.filter(pig => pig.greased)
    }
    if (this.state.sort === 'name') {
      pigList.sort((pigOne,pigTwo) => pigOne.name.toLowerCase() > pigTwo.name.toLowerCase() ? -1 : 1)
    }
    if (this.state.sort === 'weight') {
      pigList.sort((a,b) => a.weight - b.weight)
    }
      
    let pigComponentList = pigList.map(pig => 
      <HogCard 
        key={pig.name} 
        {...pig} />
      )

    return (
      <div className="App">
          <Nav 
            toggleGreased={this.toggleGreased}
            changeSort={this.changeSort}
            sort={this.state.sort}
            greased={this.state.onlyGreased}/>
          {pigComponentList}
      </div>
    )
  }
}

export default App;

// destructuring props
// <HogCard {...pig} />