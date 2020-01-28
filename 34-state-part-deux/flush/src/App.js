import React from 'react';
import './App.css';
import BathroomCard from './BathroomCard';

function App() {
  return (
    <div className="App">
      <h1>Flush</h1>
      <BathroomCard location={{name: "Chipotle", rating: 3}}/>
      <BathroomCard location={{}}/>
      <BathroomCard location={{}}/>
      <BathroomCard location={{}}/>
      
    </div>
  );
}

export default App;
