import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { showsAPI } from './api';

export function Add_TV_Shows() {

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const [castName1, setCastName1] = useState("");
  const [castPic1, setCastPic1] = useState("");
  const [castName2, setCastName2] = useState("");
  const [castPic2, setCastPic2] = useState("");
  const [castName3, setCastName3] = useState("");
  const [castPic3, setCastPic3] = useState("");
  const [castName4, setCastName4] = useState("");
  const [castPic4, setCastPic4] = useState("");
  const [castName5, setCastName5] = useState("");
  const [castPic5, setCastPic5] = useState("");
  const [castName6, setCastName6] = useState("");
  const [castPic6, setCastPic6] = useState("");

  const navigate = useNavigate()

  return (

    <div className='add-webSeries'>

      <TextField
        id="outlined-basic"
        label="TV show id"
        variant="outlined"
        type="number"
        placeholder='Enter any id'
        onChange={(event) => setId(event.target.value)} />      

      <TextField
        id="outlined-basic"
        label="TV show name"
        variant="outlined"
        type="text"
        placeholder='Enter name'
        onChange={(event) => setName(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="TV show poster"
        variant="outlined"
        type="text"
        placeholder='Enter poster'
        onChange={(event) => setPoster(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="TV show rating"
        variant="outlined"
        type="number"
        placeholder='Enter rating'
        onChange={(event) => setRating(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="TV show summary"
        variant="outlined"
        type="text"
        placeholder='Enter summary'
        onChange={(event) => setSummary(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="TV show trailer"
        variant="outlined"
        type="text"
        placeholder='Enter trailer'
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
        onChange={(event) => setCastName1(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="Cast&crew pic 1"
        variant="outlined"
        type="text"
        placeholder='Enter cast(or crew) pic 1 URL '
        onChange={(event) => setCastPic1(event.target.value)} />
        <br></br>
      <TextField
        id="outlined-basic"
        label="Cast&crew name 2"
        variant="outlined"
        type="text"
        placeholder='Enter cast(or crew) name 2'
        onChange={(event) => setCastName2(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="Cast&crew pic 2"
        variant="outlined"
        type="text"
        placeholder='Enter cast(or crew) pic 2 URL '
        onChange={(event) => setCastPic2(event.target.value)} />
        <br></br>
      <TextField
        id="outlined-basic"
        label="Cast&crew name 3"
        variant="outlined"
        type="text"
        placeholder='Enter cast(or crew) name 3'
        onChange={(event) => setCastName3(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="Cast&crew pic 3"
        variant="outlined"
        type="text"
        placeholder='Enter cast(or crew) pic 3 URL '
        onChange={(event) => setCastPic3(event.target.value)} />
        <br></br>
      <TextField
        id="outlined-basic"
        label="Cast&crew name 4"
        variant="outlined"
        type="text"
        placeholder='Enter cast(or crew) name 4'
        onChange={(event) => setCastName4(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="Cast&crew pic 4"
        variant="outlined"
        type="text"
        placeholder='Enter cast(or crew) pic 4 URL '
        onChange={(event) => setCastPic4(event.target.value)} />
        <br></br>
      <TextField
        id="outlined-basic"
        label="Cast&crew name 5"
        variant="outlined"
        type="text"
        placeholder='Enter cast(or crew) name 5'
        onChange={(event) => setCastName5(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="Cast&crew pic 5"
        variant="outlined"
        type="text"
        placeholder='Enter cast(or crew) pic 5 URL '
        onChange={(event) => setCastPic5(event.target.value)} />
        <br></br>
      <TextField
        id="outlined-basic"
        label="Cast&crew name 6"
        variant="outlined"
        type="text"
        placeholder='Enter cast(or crew) name 6'
        onChange={(event) => setCastName6(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="Cast&crew pic 6"
        variant="outlined"
        type="text"
        placeholder='Enter cast(or crew) pic 6 URL '
        onChange={(event) => setCastPic6(event.target.value)} />
      <Button
        variant="contained"
        onClick={() => {
          const newShow = {
            id: id,
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
          };
          fetch(`${showsAPI}/TVShows`,{
            method  :"POST",
            body    : JSON.stringify(newShow),
            headers : {"Content-Type" : "application/json", "x-auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGJkZWYzNDYwNzhlMzVlZjM1ZDg3ZiIsImlhdCI6MTY3NTM1NTAyOX0.yavdcq05w3wK_6HYXxMq9KtJ6qVZ12E3GxuEXt_eOSo"}
          })
          .then((data) => data.json())
          .then(() => navigate("/TVShows"))

          // webSeriesList.push(tvShow);
          // setWebSeriesList([...webSeriesList]);
          
        }}
      >Add TV Show</Button>
    </div>

  );
}
