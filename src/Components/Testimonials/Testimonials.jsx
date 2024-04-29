import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/img/next-icon.png';
import prev_icon from '../../assets/img/back-icon.png';

import user_1 from '../../assets/img/user-1.png';
import user_2 from '../../assets/img/user-2.png';
import user_3 from '../../assets/img/user-3.png';
import user_4 from '../../assets/img/user-4.png';




const Testimonials = () => {

    const slider = useRef();

    let tX = 0;

    const slideForward = () => {
        if(tX > -50){
            tX -= 25;
        }

        slider.current.style.transform = `translateX(${tX}%)`;
    };
    const slideBackward = () => {
        if(tX < 0){
            tX += 25;
        }

        slider.current.style.transform = `translateX(${tX}%)`;
    };

  return (
    <div className='testimonials'>
        <h3>TESTIMONIALS</h3>
        <h2>What Students Says</h2>

        <div className="testimonials-slide">
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
            <img src={prev_icon} alt="" className='prev-btn' onClick={slideBackward}/>

            <div className="slider">
                <ul ref={slider}>


                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h4>Sara Alivia</h4>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum cupiditate eveniet, praesentium ipsam temporibus rem neque sequi provident maiores. Nemo?</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h4>William Jackson</h4>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum cupiditate eveniet, praesentium ipsam temporibus rem neque sequi provident maiores. Nemo?</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h4>Jessy Jackson</h4>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum cupiditate eveniet, praesentium ipsam temporibus rem neque sequi provident maiores. Nemo?</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h4>Sam Brayan</h4>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum cupiditate eveniet, praesentium ipsam temporibus rem neque sequi provident maiores. Nemo?</p>
                        </div>
                    </li>


                </ul>
            </div>
        </div>
    </div>
  )
}

export default Testimonials