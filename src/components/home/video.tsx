import React from 'react'
import YouTube from 'react-youtube'

const Video:React.FC=()=>  {
    const videoId="RN3Na8aZfCY"
    const opts={
        height:'100%',
        width:'100%',
        playerVars:{
            autoplay:1,
            rel:0,
            modestbranding:1,
            controls:1
        }
    }
  return (
    <div className='max-w-full mx-4 my-6 overflow-hidden bg-red-800 rounded-2xl'>
      
        <YouTube videoId={videoId} opts={opts} className='w-full h-[240px] sm:h-[400px] lg:h-[640px]  rounded-lg'/>
    </div>
  )
}

export default Video
