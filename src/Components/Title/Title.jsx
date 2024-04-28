import React from 'react';
import './Title.css'

const Title = ({subtitle_1,subtitle_2,main_title}) => {
  return (
    <div className='title'>
        <p><span>{subtitle_1}</span>  <span>{subtitle_2}</span></p>
        <h2>{main_title }</h2>
    </div>
  )
}

export default Title