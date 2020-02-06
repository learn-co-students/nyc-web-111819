import React from 'react';
import './App.css';
import Navbar from './Navbar';
import ReactMapGL from 'react-map-gl';
import MainContainer from './Containers/MainContainer';

const apiBase = 'http://localhost:3000/'


class App extends React.Component {

  state = {
    currentUser: null
  }

  componentDidMount(){
    const token = localStorage.token

    fetch(apiBase + 'bathrooms?_embed=reviews')
      .then(res => res.json())
      .then(data => {
        this.setState({ bathrooms: data })

      })
    }
    if(token){
      fetch(apiBase + `users/${token}`)
        .then(res => res.json())
        .then(user => this.setState({ currentUser: user}))
    }

  setUser = (response) => {
    this.setState({
      currentUser: response
      }, () => {
      localStorage.token = response.token
    })
  }

  logout = () => {
    this.setState({
      currentUser: null
      }, () => {
      localStorage.removeItem("token")
    })
  }

  render(){


    return (
      <div className="App">
        <Navbar/>
        <MainContainer />
     </div>
    );
  }
}

export default App;

{/* <ReactMapGL
width={400}
height={400}
latitude={37.7577}
longitude={-122.4376}
zoom={8}
mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
onViewportChange={(viewport) => {
  // const {width, height, latitude, longitude, zoom} = viewport;
  // Optionally call `setState` and use the state to update the map.
}}
/> */}
