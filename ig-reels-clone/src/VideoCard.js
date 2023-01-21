import React from 'react'
import './VideoCard.css'

function VideoCard() {
  return (
    <div className='videoCard'>
        <video 
        className="videoCard__player"
        src="https://www.instagram.com/khaby00/?utm_source=ig_embed&ig_rid=67c52c10-1779-4904-a66d-aa2a936cfd5a"
        alt="ig-reels-videos"
        loop
        />
    </div>
  )
}

export default VideoCard