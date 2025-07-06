export const PLayer = ({currSong}) => {
    return (
    <div className="fixed bottom-5 w-[90%] rounded left-20 bg-black/70 p-4 z-50">
        <p 
          className="text-white text-center font-bold text-xl mb-2"
        >
          {currSong.title}
        </p>
        <audio src={currSong.src} controls autoPlay className="w-full" />
      </div>
    )
}