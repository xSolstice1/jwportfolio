import React from 'react'
import './contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className='contact-title'>
            <h1>Get in touch!</h1>
            <img src={theme_pattern} alt=""/>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>
                    Let's Talk!
                </h1>
                <p>
                    I'm currently open to new opportunities, so feel free to contact me!
                </p>
                <div className="contact-detalis">
                        <div className="contact-detail">
                            <img src={mail_icon} alt =""/>
                            <p>xsolsticegfx@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt =""/>
                            <p>Singapore, Singapore</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt =""/>
                            <p>+65 9070 6929</p>
                        </div>
                </div>
            </div>
            <form action="" className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type='text' placeholder='Enter your name here' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type='text' placeholder='Enter your email here' name='email'/>
                <label htmlFor="">Enter your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message here'></textarea>
                <button type='submit' className="contact-submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default contact