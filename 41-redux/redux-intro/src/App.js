import React from 'react';
import { connect } from 'react-redux';
import './App.css';

 function random_rgba() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

class App extends React.Component {

  render(){
    console.log('APP PROPS', this.props)
    console.log('APP STATE', this.props)

    return (
      <div className={"App" + (this.props.darkMode ? " dark" : "")}>
        <button onClick={this.props.toggle}>Dark mode</button>
        <h3>{this.props.text}</h3>
        <input 
          name="text" 
          value={this.props.text} 
          onChange={(event) => this.props.changeText(event.target.value)}/>
        <button onClick={this.props.addText}>Add!</button>

        <h4>{this.props.likes} likes</h4>
        <button onClick={this.props.dislike}>
          Dislike <span role="img" aria-label="thumbs down">👎</span>
        </button>
        <button onClick={this.props.like}>
          Like<span role="img" aria-label="thumbs up">👍</span>
        </button>
        {
          this.props.thangs.map((thang, index) => <h1 key={index} >{thang}</h1>)
        }
      </div>
    );
  }
}

// let msp = (state) => {}
let mapStateToProps = (state) => {
  return {
    // isLoggedIn: !!state.user.id,     CALCULATIONS ARE FINE
    darkMode: state.darkMode,
    text: state.text,
    likes: state.likes, 
    thangs: state.thangs 
  }
}

// let mdp = (state) => {}
let mapDispatchToProps = (dispatch) => {
  return {
    like: () => dispatch({type: 'LIKE'}),
    dislike: () => dispatch({type: 'DISLIKE'}),
    addText: () => dispatch({type: 'ADD_TEXT'}),
    toggle: () => dispatch({type: 'TOGGLE'}),
    changeText: (newText) => dispatch({type: 'CHANGE_TEXT', payload: newText})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



// currying 


// handleChange = (event) => {
//   this.setState({ [event.target.name]: event.target.value })
// }

// addText = () => {
// }

// toggle = () => {
  //   this.setState({ darkMode: !this.state.darkMode })
  // }
  // like = () => {
    //  this.setState({ likes: this.state.likes + 1 })
    // }
    
    // dislike = () => {
      //   this.setState({ likes: this.state.likes - 1 })
      // }