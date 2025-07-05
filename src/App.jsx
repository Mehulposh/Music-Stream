import { useEffect, useState } from 'react'
import {NavBar} from './components/Navbar/Navbar';
import { getTracks } from './api/api'

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
          <div 
            key={item["id"]} 
            onClick={() => setCurrSong({
              'title': item['album_name'],
              'src': item.audio,
            })}
            className= {`w-[190px] ${currSong.src === item.audio ? " p-2 rounded bg-orange-300" : ""}`}
          >
            <img src={item['album_image']} className='rounded-xl size-50 mb-2'/>
            <h3 className='mb-2' >{item["album_name"]}</h3>
            <h2>{item['artist_name']}</h2>
          </div>
        ))) : (
          null
        )
      }
      </div>

      <div className="fixed bottom-5 w-[90%] rounded left-20 bg-black/70 p-4 z-50">
        <p 
          className="text-white text-center font-bold text-xl mb-2"
        >
          {currSong.title}
        </p>
        <audio src={currSong.src} controls autoPlay className="w-full" />
      </div>
    </div>
  )

  
}

export default App
