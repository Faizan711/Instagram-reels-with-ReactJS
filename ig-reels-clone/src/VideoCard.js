import React from 'react'
import { useRef, useState } from 'react'
import './VideoCard.css'
import VideoHeader from './VideoHeader'

function VideoCard() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)
    const videoRef = useRef(null)

    const onVideoPress = () => {
        if(isVideoPlaying){
            videoRef.current.play();
            setIsVideoPlaying(false);
        }
        else{
            videoRef.current.pause();
            setIsVideoPlaying(true);
        }
    }
  return (
    <div className='videoCard'>
        <VideoHeader/>
        <video
        ref={videoRef} 
        onClick={onVideoPress}
        className="videoCard__player"
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
        loop
        />
    </div>
  )
}

export default VideoCard