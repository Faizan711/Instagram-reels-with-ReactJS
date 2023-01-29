import React from 'react'
import { useRef, useState } from 'react'
import './VideoCard.css'
import VideoFooter from './VideoFooter'
import VideoHeader from './VideoHeader'

function VideoCard({url, likes, shares, channel, avatarSrc, song}) {
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
        src={url}
        loop
        />
        <VideoFooter
        channel={channel}
        likes={likes}
        shares={shares}
        avatarSrc={avatarSrc}
        song={song}
        />
    </div>
  )
}

export default VideoCard