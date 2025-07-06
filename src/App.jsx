import { useEffect, useState } from 'react'
import {NavBar} from './components/Navbar/Navbar';
import { getTracks } from './api/api'
import { PLayer } from './components/Player/Player';
import { SongCard } from './components/SongCard/SongCard';

function App() {
  const [data, setData] = useState([]);
  const [searchedSong, setSearchedSong] = useState([])
  const [loading, setLoading] = useState(false)
  const [currSong, setCurrSong] = useState({
    'title': '',
    'src': '',
  });
  

  useEffect(() => {
    async function fetchData() {
      try{
        setLoading(true);
        const data = await getTracks();
       
        setData(data || []);
      }catch(err){
        console.error(err);
      }finally{
        setLoading(false);
      }
    }
    fetchData();
  },[])
  
  const displayedSongs = searchedSong.length > 0 ? searchedSong : data;
  return (
    <div className='bg-blue-400 w-full h-full p-5 '>

      <NavBar setData={setSearchedSong}/>
      {loading ? (
        <h2 className='text-black'>Loading ...</h2>
      ) : null}
      <div className='flex flex-wrap gap-2 mt-20 p-5 w-[100%]  text-center'>
      {
        displayedSongs.length > 0 ? (
          displayedSongs.map(item => (
          <SongCard item={item} currSong={currSong} setCurrSong={setCurrSong}/>
        ))) : (
          null
        )
      }
      </div>

      <PLayer currSong={currSong} />
    </div>
  )

  
}

export default App
