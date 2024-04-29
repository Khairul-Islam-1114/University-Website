import React from 'react';
import './About.css';
import about_img from '../../assets/img/about_image.jpg';
import play_icon from '../../assets/img/play-icon.png';


const About = () => {
  return (
    <div className='about'>
        <div className="about-left">

            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/>


        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tommorow's Leaders Today</h2>
            <p>At Edusity University, we prepare you to launch your career by providing a supportive, creative, and professional environment from which to learn practical skills, build a network of industry contacts, and gain real-world experience. You’ll have the opportunity to generate innovative design and business solutions.</p>
        </div>
    </div>
  )
}

export default About