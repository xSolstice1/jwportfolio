import project1_img from '../assets/project_1.jpg'
import project2_img from '../assets/project_2.png'
import project3_img from '../assets/jwlogo.svg'
import project4_img from '../assets/jwlogo.svg'
import project5_img from '../assets/jwlogo.svg'
import project6_img from '../assets/jwlogo.svg'

const mywork_data = [
    {
        w_no:1,
        w_name:"Curriculum Info Application",
        w_img:project1_img,
        short_description: "A curriculum info organizer.",
        description: `
          <p>This is a <strong>curriculum info organizer</strong> with the capability to import and manipulate data from the Murdoch University Curriculum Management System.</p>
          <br>
          <p><a href="https://github.com/xSolstice1/ICT302_Project" target="_blank">Link to project</a></p>
          <br>
          <p>Tech Stack:</p>
          <p><strong>C++</strong></p>
          <p><strong>ASP.NET</strong></p>
          <p><strong>SQL</strong></p><br>
        `
    },
    {
        w_no:2,
        w_name:"Web design",
        w_img:project2_img,
        short_description: "Streamlit Dashboard",
        description: `
          <p>This <strong>Streamlit Dashboard</strong> leverages data from multiple sources and showcases insights derived from a robust ETL process. As a Data Engineer, I played a pivotal role in designing and implementing the ETL workflows that culminated in the creation of the Data Layer powering this dashboard.</p>
          <br>
          <br>
          <p>Tech Stack:</p>
          <p><strong>SQL</strong></p>
          <p><strong>Snowflake</strong></p>
          <p><strong>Python</strong></p>
          <p><strong>Streamlit</strong></p><br>
        `
    },
    {
        w_no:3,
        w_name:"Web design",
        w_img:project3_img
    },
    {
        w_no:4,
        w_name:"Web design",
        w_img:project4_img
    },
    {
        w_no:5,
        w_name:"Web design",
        w_img:project5_img
    },
    {
        w_no:6,
        w_name:"Web design",
        w_img:project6_img
    },
]
 
export default mywork_data;