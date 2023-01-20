import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { movieAPI } from './api';
import { Loading } from './Loading';

 






export function EditMovies() {
  // const moviesList = INITIAL_MOVIES_LIST;

  const { movieId } = useParams();
  const [movie,setMovie] = useState(null);
  
  const getMovieInfo = ()=> {
    fetch(`${movieAPI}/Movies/${movieId}`,{
     method:"GET"
     })
     .then((data)=> data.json())
     .then((mv)=> setMovie(mv))
   }
 
   useEffect(()=>getMovieInfo(), [])   
  




  return movie ? <EditMovieForm movie= {movie}/> : <Loading/> 

}


 function EditMovieForm({ movie }){

  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);

  const [castName1, setCastName1] = useState(movie.casts[0].name);
  const [castPic1, setCastPic1]   = useState(movie.casts[0].pic);
  const [castName2, setCastName2] = useState(movie.casts[1].name);
  const [castPic2, setCastPic2]   = useState(movie.casts[1].pic);
  const [castName3, setCastName3] = useState(movie.casts[2].name);
  const [castPic3, setCastPic3]   = useState(movie.casts[2].pic);
  const [castName4, setCastName4] = useState(movie.casts[3].name);
  const [castPic4, setCastPic4]   = useState(movie.casts[3].pic);
  const [castName5, setCastName5] = useState(movie.casts[4].name);
  const [castPic5, setCastPic5]   = useState(movie.casts[4].pic);
  const [castName6, setCastName6] = useState(movie.casts[5].name);
  const [castPic6, setCastPic6]   = useState(movie.casts[5].pic);          
  const navigate = useNavigate()
  
  return(
    <div className='add-movies'>
      <TextField
        id="outlined-basic"
        label="Movie name"
        variant="outlined"
        type="text"
        onChange={(event) => setName(event.target.value)}
        value = {name}
        placeholder='Enter a name' />
        

      <TextField
        id="outlined-basic"
        label="Movie poster"
        variant="outlined"
        type="text"
        placeholder='Enter a poster'
        value = {poster}
        onChange={(event) => setPoster(event.target.value)} />

      <TextField
        id="outlined-basic"
        label="Movie rating"
        variant="outlined"
        type="number"
        onChange={(event) => setRating(event.target.value)}
        value = {rating}
        placeholder='Enter a rating' />

      <TextField
        id="outlined-basic"
        label="Movie summary"
        variant="outlined"
        type="text"
        onChange={(event) => setSummary(event.target.value)}
        value = {summary}
        placeholder='Enter a summary' />
      <TextField
        id="outlined-basic"
        label="Movie trailer"
        variant="outlined"
        type="text"
        placeholder='Enter trailer'
        value = {trailer}
        onChange={(event) => setTrailer(event.target.value)} />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <TextField
        id="outlined-basic"
        label="Cast&crew name 1"
        variant="outlined"
        type="text"
        placeholder='Enter cast(or crew) name 1'
        value = {castName1}
        onChange={(event) => setCastName1(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="Cast&crew pic 1"
        variant="outlined"
        type="text"
        placeholder='Enter cast(or crew) pic 1 URL '
        value = {castPic1}
        onChange={(event) => setCastPic1(event.target.value)} />
        <br></br>
      <TextField
        id="outlined-basic"
        label="Cast&crew name 2"
        variant="outlined"
        type="text"
        placeholder='Enter cast(or crew) name 2'
        value = {castName2}
        onChange={(event) => setCastName2(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="Cast&crew pic 2"
        variant="outlined"
        type="text"
        placeholder='Enter cast(or crew) pic 2 URL '
        value = {castPic2}
        onChange={(event) => setCastPic2(event.target.value)} />
        <br></br>
      <TextField
        id="outlined-basic"
        label="Cast&crew name 3"
        variant="outlined"
        type="text"
        placeholder='Enter cast(or crew) name 3'
        value = {castName3}
        onChange={(event) => setCastName3(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="Cast&crew pic 3"
        variant="outlined"
        type="text"
        placeholder='Enter cast(or crew) pic 3 URL '
        value = {castPic3}
        onChange={(event) => setCastPic3(event.target.value)} />
        <br></br>
      <TextField
        id="outlined-basic"
        label="Cast&crew name 4"
        variant="outlined"
        type="text"
        placeholder='Enter cast(or crew) name 4'
        value = {castName4}
        onChange={(event) => setCastName4(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="Cast&crew pic 4"
        variant="outlined"
        type="text"
        placeholder='Enter cast(or crew) pic 4 URL '
        value = {castPic4}
        onChange={(event) => setCastPic4(event.target.value)} />
        <br></br>
      <TextField
        id="outlined-basic"
        label="Cast&crew name 5"
        variant="outlined"
        type="text"
        placeholder='Enter cast(or crew) name 5'
        value = {castName5}
        onChange={(event) => setCastName5(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="Cast&crew pic 5"
        variant="outlined"
        type="text"
        placeholder='Enter cast(or crew) pic 5 URL '
        value = {castPic5}
        onChange={(event) => setCastPic5(event.target.value)} />
        <br></br>
      <TextField
        id="outlined-basic"
        label="Cast&crew name 6"
        variant="outlined"
        type="text"
        placeholder='Enter cast(or crew) name 6'
        value = {castName6}
        onChange={(event) => setCastName6(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="Cast&crew pic 6"
        variant="outlined"
        type="text"
        placeholder='Enter cast(or crew) pic 6 URL '
        value = {castPic6}
        onChange={(event) => setCastPic6(event.target.value)} />                                        
      <Button
        variant="contained"
        color='success'
        onClick={() => {
          const updatedMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer,
            casts: [
             {
              name:castName1,
              pic: castPic1
             },
             {
              name:castName2,
              pic: castPic2
             },
             {
              name:castName3,
              pic: castPic3
             },
             {
              name:castName4,
              pic: castPic4
             },
             {
              name:castName5,
              pic: castPic5
             },
             {
              name:castName6,
              pic: castPic6
             }                                                                 
          ]

            // castPic: castPic
          };
          //1. method - POST
          //2. body - data -> should be in json format
          //3. headers - JSON

          fetch(`${movieAPI}/Movies/${movie.id}`,{
            method :"PUT",
            body   :JSON.stringify(updatedMovie),
            headers: {"Content-Type" : "application/json"}
            })
            .then((data)=>data.json())
            .then(()=> navigate("/Movies"))
          // moviesList.push(newMovie); 
          // setMoviesList([...moviesList]);
          
        }}
      >SAVE</Button>
    </div>    
  )
 }
