import { useEffect, useState } from 'react'
import {NavBar} from './components/Navbar/Navbar';
import { getTracks } from './api/api'

function App() {
  const [data, setData] = useState([]);
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
    <div className='bg-blue-400 w-full h-full p-5'>
      <NavBar />
      <div className='flex flex-wrap gap-2 mt-3'>
      {
        data.map(item => (
          <div key={item["id"]} onClick={() => setCurrSong(item['audio'])}>
            <img src={item['album_image']} className='rounded-xl h-40'/>
            <h3 >{item["album_name"]}</h3>
            <h2>{item['artist_name']}</h2>
          </div>
        ))
      }
      </div>

      <div className='mt-5'>
        <audio src={currSong} controls autoPlay className='w-full ' />
      </div>
    </div>
  )

  
}

export default App
