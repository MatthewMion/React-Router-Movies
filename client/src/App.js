import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Route, Link, Switch} from 'react-router-dom'
import Movie from './Movies/Movie'
import MovieCard from './Movies/MovieCard';
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';


export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // console.log(response)
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);
  // console.log(movieList)
  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      {/* <Link to='/'>Movie List</Link>
      <Link to='/movies/:movieID'>Movie</Link> */}

      {/* // <div>Replace this Div with your Routes</div> */}
      <Route exact path='/'>  
        <MovieList movies={movieList}/>
      </Route>
      <Route exact path='/movies/:movieID'>
        <Movie movies={movieList}/>
      </Route>
    </div>
  );
}
