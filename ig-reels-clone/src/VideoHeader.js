import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import './VideoHeader.css'

function VideoHeader() {
  return (
    <div className='videoHeader'>
        <ArrowBackIcon/>
        <h3>Reels</h3>
        <CameraAltOutlinedIcon/>
    </div>
  )
}

export default VideoHeader