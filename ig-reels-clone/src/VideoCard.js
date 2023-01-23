import React from 'react'
import './VideoCard.css'

function VideoCard() {
  return (
    <div className='videoCard'>
        <video 
        className="videoCard__player"
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
        loop
        />
    </div>
  )
}

export default VideoCard