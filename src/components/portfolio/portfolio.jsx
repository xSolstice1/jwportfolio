import React from 'react'
import './portfolio.css'
import portfolio_data from '../../assets/portfolio-data.js'
import arrow_icon from '../../assets/arrow_icon.svg'

const portfolio = () => {
  return (
    <div id='portfolio' className='portfolio'>
        <div className="portfolio-title">
            <h1>My latest projects</h1>
        </div>
        <div className="portfolio-container">
            {portfolio_data.map((project,index)=>{
                return <img key={index} src={project.w_img} alt=""/>
            })}
        </div>
        <div className="portfolio-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt=""/>
        </div>
    </div>
  )
}

export default portfolio