import React from 'react';
import './App.css';
import BathroomCard from './BathroomCard';
import Navbar from './Navbar';

class App extends React.Component {

  state = {
    bathrooms: [],
    filter: ''
  }

  componentDidMount(){
    fetch('http://localhost:3000/bathrooms?_embed=reviews')
      .then(res => res.json())
      .then(data => {
        this.setState({ bathrooms: data })
      })
  }

  handleAddReview = (reviewInfo) => {
    // using map to find a single object in an array of objects and make some change JUST TO THAT ONE 
    let newBathrooms = this.state.bathrooms.map(bathroom => {
      if(bathroom.id === reviewInfo.bathroomId){
          bathroom.reviews.push(reviewInfo)
      }
      return bathroom
    })
    
    this.setState({ bathrooms: newBathrooms })
  }

  changeFilter = (newFilter) => {
    this.setState({ filter: newFilter})
  }

  render(){
    let displayedBathrooms = [...this.state.bathrooms]
    displayedBathrooms = displayedBathrooms.filter(bathroom => bathroom.type.includes(this.state.filter))
    console.log(displayedBathrooms)

    return (
      <div className="App">
        <h1>Royal 👑 Flush</h1>
        <Navbar changeFilter={this.changeFilter} />
        {this.state.bathrooms.length === 0 && <h1>🧻🚽FLUSHING🚽🧻</h1>}
        {displayedBathrooms.map(({id, location, image, type, reviews}) => (
          <BathroomCard 
            key={id} 
            id={id}
            name={location} 
            image={image}
            type={type}
            reviews={reviews}
            handleAddReview={this.handleAddReview}/>
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
