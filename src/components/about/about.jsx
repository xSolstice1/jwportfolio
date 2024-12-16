import React from 'react'
import './about.css'
import profile_img from '../../assets/profile_img.jfif'

const about = () => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <div className='header-container'>
                <h1>About Me</h1>
                <div className='underline'/>
            </div>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt=""/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am currently a Data Engineer @ Luxoft, building Data Pipelines and Analytical Dashboards for a prominent investment holdings.</p>
                    <p>I am particularly interested in creating solutions for the masses and am currently aspiring to be a Software Engineer.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>Snowflake</p>
                        <hr style={{width:"75%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>SQL</p>
                        <hr style={{width:"80%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Tableau</p>
                        <hr style={{width:"40%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>C++</p>
                        <hr style={{width:"75%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Python</p>
                        <hr style={{width:"60%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>React</p>
                        <hr style={{width:"40%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Javascript</p>
                        <hr style={{width:"50%"}}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>5</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
        </div>
    </div>
  )
}

export default about