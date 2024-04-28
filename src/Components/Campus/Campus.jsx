import React from 'react';
import './Campus.css';

import campus_1 from '../../assets/img/campus-1.jpg'
import campus_2 from '../../assets/img/campus-2.jpg'
import campus_3 from '../../assets/img/campus-3.jpg'
import campus_4 from '../../assets/img/campus-4.jpg'
import white_arrow from '../../assets/img/white-arrow.png'




const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={campus_1} alt="" />
            <img src={campus_2} alt="" />
            <img src={campus_3} alt="" />
            <img src={campus_4} alt="" />

        </div>

        <button type="button" className='btn dark-btn'>See More <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus