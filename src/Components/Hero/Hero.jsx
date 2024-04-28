import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/img/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We Ensure The Best Education For A Better World</h1>
            <p className="description">
                Our cutting-edge curriculum is designed to empowers students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.
            </p>
            <button className="btn">Explore More <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero