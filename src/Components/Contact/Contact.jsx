import React, { useState } from 'react';
import './Contact.css';
import msg_icon from '../../assets/img/msg-icon.png';
import mail_icon from '../../assets/img/mail-icon.png';
import phone_icon from '../../assets/img/phone-icon.png';
import location_icon from '../../assets/img/location-icon.png';
import white_arrow from '../../assets/img/white-arrow.png';



const Contact = () => {

    const [result, setResult] = useState('');

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Submitting....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "32e2b867-b108-4cac-b09e-97eaf25d5bb7");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully.");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };



  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send Us a Message <img src={msg_icon} alt="" /></h3>
            <p>
                Feel free to reach out through contact form or find our contact information below. Your feedback, questions and suggestions are important to us as we strive to provide exceptional services to our university community.
            </p>

            <ul>
                <li><img src={mail_icon} alt="" /> contact@edusity.edu</li>
                <li><img src={phone_icon} alt="" /> +1 123-456-7890</li>
                <li><img src={location_icon} alt="" /> 77 Massachusetts Ave, Cambridge<br />MA 02139, United States</li>
            </ul>
        </div>


        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Your Name : </label>
                <input type="text" placeholder='Name' id='name' name='name' required/>

                <label htmlFor="phone">Your Phone Number :</label>
                <input type="tel" name="phone" id="phone" placeholder='Phone Number' required/>

                <label htmlFor="message">Write your message here</label>
                <textarea name="message" id="message" rows="6" placeholder='Write your message...'></textarea>

                <button type="submit" className='btn dark-btn'>
                    Submit Now <img src={white_arrow} alt="" />
                </button>

            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact