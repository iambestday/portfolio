import React from 'react'
import ReactPlayer from 'react-player'

function Player() {
  return (
    <div className='player-wrapper'>
    <ReactPlayer
      className='react-player'
      url='https://soundcloud.com/pacoversailles/unwind-1'
      width='100%'
      height='100%'
    />
  </div>
  )
}

export default Player