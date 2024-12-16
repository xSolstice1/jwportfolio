import React from 'react'
import './contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "36b9bb19-ae20-4d8c-bcee-2608acff2e8d");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        alert("Form Submitted Successfully!");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        alert(data.message);
        }
    };
  return (
    <div id='contact' className='contact'>
        <div className='contact-title'>
            <h1>Get in touch!</h1>
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
            <form onSubmit={onSubmit} action="" className="contact-right">
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