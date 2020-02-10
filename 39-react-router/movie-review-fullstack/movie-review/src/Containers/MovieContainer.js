import React from 'react';
import MovieCard from '../Components/MovieCard'
import MoviePage from '../Components/MoviePage';
import { Route, Switch } from 'react-router-dom';

class MovieContainer extends React.Component {
  
  state = {
    selectedMovie: null
  }

  selectMovie = (id) => {
    // /movies/:id
    this.props.history.push(`/movies/${id}`)
    // this.setState({
    //   selectedMovie: id
    // })
  }

  render(){
    // let selectedMovie = this.props.movies.find(movie => movie.id === this.state.selectedMovie)
    // this.state.selectedMovie is now represented in the url (/movies/:id)


    return (
      <div className="movie-container">
        <Switch>
          <Route path="/movies/:id" component={MoviePage}/>
          <Route path="/movies" render={() => this.props.movies.map(movie => <MovieCard key={movie.id} handleClick={this.selectMovie} movie={movie} />)}/>
        </Switch>
        {/* {this.state.selectedMovie 
          ? <MoviePage {...selectedMovie}/>
          : null
        } */}
      </div>
    );
  }
}

export default MovieContainer;