import { Avatar, Button } from '@mui/material'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import React from 'react'
import './VideoFooter.css'
import Ticker from 'react-ticker';


function VideoFooter({likes, shares, channel, avatarSrc, song}) {
  return (
    <div className='videoFooter'>
        <div className='videoFooter_text'>
            <Avatar src={avatarSrc}/>
            <h3>
                {channel} .<Button>Follow</Button>
            </h3>
        </div>
        <div className='videoFooter_ticker'>
            <MusicNoteIcon className='videoFooter_icon'/>
            <Ticker mode='smooth'>
                {({ index }) => (
                    <>
                        <h1>{song}</h1>
                    </>
                )}
            </Ticker>
        </div>
    </div>
  )
}

export default VideoFooter