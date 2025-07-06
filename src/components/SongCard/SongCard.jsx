export const SongCard = ({item,currSong,setCurrSong}) => {
    return (
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
    )
}