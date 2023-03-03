import { useParams } from 'react-router-dom';
import { showsAPI } from './api';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import { Loading } from './Loading';

export function EditShows() {

  const {showId} = useParams();
  const [series,setSeries] = useState(null)

  const getShows = () => {

    fetch(`${showsAPI}/TVShows/${showId}`,{
      method: "GET"
    })
    .then((data) => data.json())
    .then((show) => setSeries(show))
  }

  useEffect(()=> getShows(), []);

  return series ? <EditShowForm series = {series}/> : <Loading/>
}


function EditShowForm({series}){

  const [name, setName] = useState(series.name);
  const [poster, setPoster] = useState(series.poster);
  const [rating, setRating] = useState(series.rating);
  const [summary, setSummary] = useState(series.summary);
  const [trailer, setTrailer] = useState(series.trailer);

  const [castName1, setCastName1] = useState(series.casts[0].name);
  const [castPic1, setCastPic1]   = useState(series.casts[0].pic);
  const [castName2, setCastName2] = useState(series.casts[1].name);
  const [castPic2, setCastPic2]   = useState(series.casts[1].pic);
  const [castName3, setCastName3] = useState(series.casts[2].name);
  const [castPic3, setCastPic3]   = useState(series.casts[2].pic);
  const [castName4, setCastName4] = useState(series.casts[3].name);
  const [castPic4, setCastPic4]   = useState(series.casts[3].pic);
  const [castName5, setCastName5] = useState(series.casts[4].name);
  const [castPic5, setCastPic5]   = useState(series.casts[4].pic);
  const [castName6, setCastName6] = useState(series.casts[5].name);
  const [castPic6, setCastPic6]   = useState(series.casts[5].pic);
  
  const navigate = useNavigate()
  
  return(
    <div className='add-webSeries'>

      <TextField
        id="outlined-basic"
        label="TV show name"
        variant="outlined"
        type="text"
        placeholder='Enter name'
        value={name}
        onChange={(event) => setName(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="TV show poster"
        variant="outlined"
        type="text"
        placeholder='Enter poster'
        value={poster}
        onChange={(event) => setPoster(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="TV show rating"
        variant="outlined"
        type="number"
        placeholder='Enter rating'
        value={rating}
        onChange={(event) => setRating(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="TV show summary"
        variant="outlined"
        type="text"
        placeholder='Enter summary'
        value={summary}
        onChange={(event) => setSummary(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="TV show trailer"
        variant="outlined"
        type="text"
        placeholder='Enter trailer'
        value={trailer}
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
        value={castName1}
        onChange={(event) => setCastName1(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="Cast&crew pic 1"
        variant="outlined"
        type="text"
        placeholder='Enter cast(or crew) pic 1 URL '
        value={castPic1}
        onChange={(event) => setCastPic1(event.target.value)} />
        <br></br>
      <TextField
        id="outlined-basic"
        label="Cast&crew name 2"
        variant="outlined"
        type="text"
        placeholder='Enter cast(or crew) name 2'
        value={castName2}
        onChange={(event) => setCastName2(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="Cast&crew pic 2"
        variant="outlined"
        type="text"
        placeholder='Enter cast(or crew) pic 2 URL '
        value={castPic2}
        onChange={(event) => setCastPic2(event.target.value)} />
        <br></br>
      <TextField
        id="outlined-basic"
        label="Cast&crew name 3"
        variant="outlined"
        type="text"
        placeholder='Enter cast(or crew) name 3'
        value={castName3}
        onChange={(event) => setCastName3(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="Cast&crew pic 3"
        variant="outlined"
        type="text"
        placeholder='Enter cast(or crew) pic 3 URL '
        value={castPic3}
        onChange={(event) => setCastPic3(event.target.value)} />
        <br></br>
      <TextField
        id="outlined-basic"
        label="Cast&crew name 4"
        variant="outlined"
        type="text"
        placeholder='Enter cast(or crew) name 4'
        value={castName4}
        onChange={(event) => setCastName4(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="Cast&crew pic 4"
        variant="outlined"
        type="text"
        placeholder='Enter cast(or crew) pic 4 URL '
        value={castPic4}
        onChange={(event) => setCastPic4(event.target.value)} />
        <br></br>
      <TextField
        id="outlined-basic"
        label="Cast&crew name 5"
        variant="outlined"
        type="text"
        placeholder='Enter cast(or crew) name 5'
        value={castName5}
        onChange={(event) => setCastName5(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="Cast&crew pic 5"
        variant="outlined"
        type="text"
        placeholder='Enter cast(or crew) pic 5 URL '
        value={castPic5}
        onChange={(event) => setCastPic5(event.target.value)} />
        <br></br>
      <TextField
        id="outlined-basic"
        label="Cast&crew name 6"
        variant="outlined"
        type="text"
        placeholder='Enter cast(or crew) name 6'
        value={castName6}
        onChange={(event) => setCastName6(event.target.value)} />
      <TextField
        id="outlined-basic"
        label="Cast&crew pic 6"
        variant="outlined"
        type="text"
        placeholder='Enter cast(or crew) pic 6 URL '
        value={castPic6}
        onChange={(event) => setCastPic6(event.target.value)} />
      <Button
        variant="contained"
        color = "success"
        onClick={() => {
          const updatedShow = {
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
          fetch(`${showsAPI}/TVShows/${series.id}`,{
            method  :"PUT",
            body    : JSON.stringify(updatedShow),
            headers : {"Content-Type" : "application/json", "x-auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGJkZWYzNDYwNzhlMzVlZjM1ZDg3ZiIsImlhdCI6MTY3NTM1NTAyOX0.yavdcq05w3wK_6HYXxMq9KtJ6qVZ12E3GxuEXt_eOSo"}
          })
          .then((data) => data.json())
          .then(() => navigate("/TVShows"))

          // webSeriesList.push(tvShow);
          // setWebSeriesList([...webSeriesList]);
          
        }}
      >Save</Button>
    </div>
  )
}