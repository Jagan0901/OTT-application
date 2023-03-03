import { WebSeriesList } from './WebSeriesList';
import { useEffect,useState } from 'react';
import { showsAPI } from './api';
import { Loading } from './Loading';

export function TV_Shows() {

  const [webSeriesList,setWebSeriesList] = useState(null);

  const getShows = ()=> {
    fetch(`${showsAPI}/TVShows`,{
      method:"GET",
      headers: {"x-auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGJkZWYzNDYwNzhlMzVlZjM1ZDg3ZiIsImlhdCI6MTY3NTM1NTAyOX0.yavdcq05w3wK_6HYXxMq9KtJ6qVZ12E3GxuEXt_eOSo"}
    })
    .then((data)=>data.json())
    .then((tvShows)=> setWebSeriesList(tvShows))
  }
  useEffect(() => getShows(),[])

  return (
    webSeriesList ? 
    <div>
      <div className='App-container'>
        {webSeriesList.map((ws) => (
          <WebSeriesList key={ws.id} webSeries={ws} refresh={getShows}/>
        ))}
      </div>
    </div>
    : <Loading/>

  );
}
