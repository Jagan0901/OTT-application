import { WebSeriesList } from './WebSeriesList';
import { useEffect,useState } from 'react';
import { showsAPI } from './api';
import { Loading } from './Loading';

export function TV_Shows() {

  const [webSeriesList,setWebSeriesList] = useState(null);

  const getShows = ()=> {
    fetch(`${showsAPI}/TVShows`)
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
