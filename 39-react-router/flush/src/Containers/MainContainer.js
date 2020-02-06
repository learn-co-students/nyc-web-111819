import React from 'react';
import BathroomCard from '../Components/BathroomCard';
import BathroomPage from '../Components/BathroomPage';
import FilterBar from '../Components/FilterBar';

const apiBase = 'http://localhost:3000/'


class MainContainer extends React.Component{
    
    state = {
        bathrooms: [],
        filter: '',
        searchTerm: '',
        selectedBathroomId: null
    }
    
    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })
    }

    componentDidMount(){
        fetch(apiBase + 'bathrooms?_embed=reviews')
        .then(res => res.json())
        .then(data => { this.setState({ bathrooms: data }) })
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

    renderAllBathrooms = (displayedBathrooms) => {
        return (
            <>  
                {this.state.bathrooms.length === 0 && <h1>🧻🚽FLUSHING🚽🧻</h1>}
                {displayedBathrooms.map((bathroomObject) => (
                    <BathroomCard 
                        key={bathroomObject.id} 
                        {...bathroomObject}
                        selectBathroom={this.selectBathroom}/>
                ))}
            </>
        )
    }

    renderSingleBathroom = () => {
        let selectedBathroom = this.state.bathrooms.find(bathroom => bathroom.id === this.state.selectedBathroomId)
        return (
            <BathroomPage 
                        key={selectedBathroom.id} 
                        {...selectedBathroom}
                        handleAddReview={this.handleAddReview}
                        selectBathroom={this.selectBathroom}/>
        )
    }

    selectBathroom = (id) => {
        this.setState({ selectedBathroomId: id })
    }


    render(){
        let displayedBathrooms = [...this.state.bathrooms]
        if(this.state.filter !== "") {
            displayedBathrooms = displayedBathrooms.filter(bathroom => bathroom.type === this.state.filter)
        } 
        displayedBathrooms = displayedBathrooms.filter(bathroom => bathroom.location.includes(this.state.searchTerm))

        return (
            <>
                {!this.state.selectedBathroomId && 
                    <FilterBar 
                        searchTerm={this.state.searchTerm}
                        changeFilter={this.changeFilter} 
                        handleChange={this.handleChange}/>}
                <div className="main-container">
                    {this.state.selectedBathroomId 
                        ? this.renderSingleBathroom()
                        : this.renderAllBathrooms(displayedBathrooms)
                    }
                </div>
            </>
        )
    }
}

export default MainContainer;