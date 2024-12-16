import React, {useState} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css'
import logo from '../assets/jwlogo.svg'
import underline from '../assets/nav_underline.svg'

const Navbar = () => {

    const [menu, setMenu] = useState("home");

    return (
        <div className='navbar'>
            <img src={logo} alt=""/>
            <ul className="nav-menu">
                <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt=""/>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline} alt=""/>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#portfolio'><p onClick={()=>setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu==="portfolio"?<img src={underline} alt=""/>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt=""/>:<></>}</li>
            </ul>
            <div className="nav-connect">Connect with me!</div>
        </div>
    )
}

export default Navbar