import React from 'react';
import './App.css';
import BathroomCard from './BathroomCard';
import Navbar from './Navbar';

class App extends React.Component {

  state = {
    bathrooms: [],
    filter: ''
  }

  changeFilter = (newFilter) => {
    this.setState({ filter: newFilter})
  }

  getBathrooms = () => {
    fetch('http://localhost:3000/bathrooms?_embed=reviews')
      .then(res => res.json())
      .then(data => {
        this.setState({ bathrooms: data })
      })
  }

  render(){
    let displayedBathrooms = [...this.state.bathrooms]
    displayedBathrooms = displayedBathrooms.filter(bathroom => bathroom.type.includes(this.state.filter))
    console.log(displayedBathrooms)

    return (
      <div className="App">
        <h1>Royal 👑 Flush</h1>
        <button className="filter-item" onClick={this.getBathrooms}>Flush!</button>
        <Navbar changeFilter={this.changeFilter} />
        {this.state.bathrooms.length === 0 && <div>press flush</div>}
        {displayedBathrooms.map(({id, location, image, type, reviews}) => (
          <BathroomCard 
            key={id} 
            name={location} 
            image={image}
            type={type}
            reviews={reviews}/>
        ))}
     </div>
    );
  }

}

/**
 * arrow func versions ===> left side 
 * () => {}
 * justOne => {}
 * ({butIfItsAnObject: true}) => {}
 * (more, than, one) => {}
 * 
 * 
 * arrow func versions ===> right side
 * implicit vs explicit returns
 * () => { someBehaviorHere }    NEEDS EXPLICIT RETURN
 * () => ({ returningAnObj: true }) RETURNING OBJECT NEEDS PARENS
 * () => isRaining ?  'rain' : "sunshine" // implicitly returns either "rain" or "sunshine"
 * 
 */

export default App;
