import React, {useState} from 'react'
import './portfolio.css'
import portfolio_data from '../../assets/portfolio-data.js'
import arrow_icon from '../../assets/arrow_icon.svg'

const portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null); // State to track the selected project
    const [isPopupVisible, setIsPopupVisible] = useState(false); // State to track popup visibility
  
    const handleItemClick = (project) => {
      setSelectedProject(project); // Set the selected project
      setIsPopupVisible(true); // Show the popup
    };
  
    const closePopup = () => {
      setIsPopupVisible(false); // Close the popup
    };
  
    return (
      <div id="portfolio" className="portfolio">
        <div className="portfolio-title">
        <div class="header-container">
          <h1>My Latest Projects</h1>
          <div class="underline"></div>
          </div>
        </div>
        <div className="portfolio-container">
          {portfolio_data.map((project, index) => (
            <div
              key={index}
              className="portfolio-item"
              onClick={() => handleItemClick(project)}
            >
              <img src={project.w_img} alt="" />
              <div className="hover-description">{project.short_description}</div>
            </div>
          ))}
        </div>
        {/* <div className="portfolio-showmore">
          <p>Show More</p>
          <img src={arrow_icon} alt="" />
        </div> */}
  
        {/* Popup for project details */}
        {isPopupVisible && (
          <div className="popup">
            <div className="popup-content">
              <h2>{selectedProject.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: selectedProject.description }}/>
              <button onClick={closePopup}>Close</button>
            </div>
          </div>
        )}
      </div>
    );
  };

export default portfolio