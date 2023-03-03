import { MoviesList } from './MoviesList';
import { useState, useEffect } from 'react';
import { movieAPI } from './api';
import { Loading } from './Loading';

export function Movies() {

const [moviesList,setMoviesList] = useState(null);

 const getMovies = ()=> {
  fetch(`${movieAPI}/Movies`,{
    method:"GET",
    headers: {"x-auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGJkZWYzNDYwNzhlMzVlZjM1ZDg3ZiIsImlhdCI6MTY3NTM1NTAyOX0.yavdcq05w3wK_6HYXxMq9KtJ6qVZ12E3GxuEXt_eOSo"}
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


