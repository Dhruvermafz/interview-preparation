"use client"
import React from 'react'

const TileAndScore = ({Score}) => {
  return (
    <div className='header'>
        <h1 className='title'>2048</h1>
        <div className="score">
            <p>Score</p>
            <p className='number'>{Score}</p>
        </div>
      
    </div>
  )
}

export default TileAndScore
