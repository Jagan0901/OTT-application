import { MoviesList } from './MoviesList';
import { useState, useEffect } from 'react';
import { movieAPI } from './api';
import { Loading } from './Loading';

export function Movies() {

const [moviesList,setMoviesList] = useState(null);

 const getMovies = ()=> {
  fetch(`${movieAPI}/Movies`,{
    method:"GET"
    })
    .then((res)=> res.json())
    .then((movie)=> setMoviesList(movie))
}

 useEffect(()=> getMovies(), [])

 return (
  moviesList ?
  <div className='App-container'>
    
    {moviesList.map((movie) => <MoviesList movies={movie} key={movie.id} refresh={getMovies} />)}

   </div>
   : <Loading/>
);
}


