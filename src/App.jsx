import { useEffect, useState } from 'react'
import {NavBar} from './components/Navbar/Navbar';
import { getTracks } from './api/api'

function App() {
  const [data, setData] = useState([]);
  const [searchedSong, setSearchedSong] = useState([])
  const [loading, setLoading] = useState(false)
  const [currSong, setCurrSong] = useState('');
  
  useEffect(() => {
    async function fetchData() {
      try{
        setLoading(true);
        const data = await getTracks();
        console.log(data);
        setData(data || []);
      }catch(err){
        console.error(err);
      }finally{
        setLoading(false);
      }
    }
    fetchData();
  },[])
  console.log('cursong',currSong)
  return (
    <div className='bg-blue-400 w-full h-full p-5 '>
      <NavBar setData={setSearchedSong}/>
      <div className='flex flex-wrap gap-2 mt-20 p-5 border border-amber-200 text-center'>
      {
        searchedSong.length > 0 ? (
          searchedSong.map(item => (
          <div 
            key={item["id"]} 
            onClick={() => setCurrSong(item['audio'])}
            className= {`w-[190px] ${currSong === item.audio ? " bg-orange-300" : ""}`}>
            <img src={item['album_image']} className='rounded-xl size-40'/>
            <h3 >{item["album_name"]}</h3>
            <h2>{item['artist_name']}</h2>
          </div>
        ))) : (
          data.map(item => (
          <div 
            key={item["id"]} 
            onClick={() => setCurrSong(item['audio'])}
            className= {`w-[190px] ${currSong === item.audio ? " p-2 rounded bg-orange-300" : ""}`}
          >
            <img src={item['album_image']} className='rounded-xl size-50'/>
            <h3 >{item["album_name"]}</h3>
            <h2>{item['artist_name']}</h2>
          </div>
        ))
        )
      }
      </div>

      <div className='mt-5'>
        <audio 
          src={currSong} 
          controls 
          autoPlay 
          className='w-[90%] fixed bottom-10 z-10 ' />
      </div>
    </div>
  )

  
}

export default App
