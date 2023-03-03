import "./App.css"
import { useState } from 'react';
import { LikeDislike } from "./LikeDislike";
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { movieAPI } from './api';



export function MoviesList({movies,refresh}){
  const [show,setShow] = useState(true);
  const navigate = useNavigate()
  
  const ratingStyles = {
    color: movies.rating >= 9 ? 'darkGoldenrod' : movies.rating >=8 ? 'green': 'red',
    fontWeight: 'bold'
  }

  const likeDeleteEdit = {
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'space-between'
  }


    return(
      <div className="movie-container">
        <img className="movie-poster" src = {movies.poster} alt={movies.name}/>
        <div className="movie-N-btn-p">
        <div className="movie-N-btn">
            <h2 className="movie-name">{movies.name}</h2>
            <IconButton 
             onClick={()=>{
              setShow(!show)
            }}>{show ? <ExpandLessIcon className="movie-toggle" /> : <ExpandMoreIcon className="movie-toggle" />}
            </IconButton>
            
            <IconButton
             color = 'primary'
            onClick={()=> navigate(`/Movies/${movies.id}`)}
            ><InfoIcon className="movie-info"/>
            </IconButton>            
        </div>
        <p className="movie-rating" style={ratingStyles}>⭐{movies.rating}</p>            
        </div>
        {show ? <p className="movie-summary" >{movies.summary}</p> : ""}
        <div style={likeDeleteEdit}>
        <LikeDislike />
        <div>
        <IconButton
             color = 'error'
            onClick={()=>{
              fetch(`${movieAPI}/Movies/${movies.id}`,{
                method: "DELETE",
                headers: {"x-auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGJkZWYzNDYwNzhlMzVlZjM1ZDg3ZiIsImlhdCI6MTY3NTM1NTAyOX0.yavdcq05w3wK_6HYXxMq9KtJ6qVZ12E3GxuEXt_eOSo"}
              }).then(()=>refresh())
            
            }
            }
            ><DeleteIcon />
            </IconButton>
            <IconButton
             color = 'secondary'
            onClick={()=> navigate(`/Movies/edit/${movies.id}`)}
            ><EditIcon  className=""/>
            </IconButton>
            </div>          
        </div>
        
      </div>
    )
}