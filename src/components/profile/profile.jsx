import React from 'react'
import './profile.css'
import profile_img from '../../assets/profile_img.jfif'

const Hero = () => {
    return (
        <div className='profile'>
            <img src={profile_img} alt="JW"/>
            <h1><span>I'm Ang Jin Wei,</span> a Data Engineer / Aspiring Software Engineer based in Singapore.</h1>
            <p>I am current a Data Engineer @ Luxoft, recently graduated with a Bachelors of Information Technology, majoring in Computer Science and Business Information Systems.</p>
            <div className='profile-action'>
                <div className="profile-connect">Connect with me</div>
                <div className="profile-resume">Resume</div>
            </div>
        </div>
    )
}

export default Hero