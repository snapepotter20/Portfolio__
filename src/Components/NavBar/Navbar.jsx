import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { logo, contact, menu } from "../../assets";

const Navbar = () => {
    const [showMenu , setshowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Works
        </Link>
        <Link
          activeClass="active"
          to="others"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Others
        </Link>
      </div>
      <button className="desktopMenuBtn">
        <img src={contact} alt="contactImg" className="desktopMenuImg" onClick={()=>{
            document.getElementById('contactPage').scrollIntoView({behavior:'smooth'});
        }}/>
        <p>Contact Me</p>
      </button>


      <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setshowMenu(!showMenu)}/>
      <div className="navMenu" style={{display:showMenu ? 'flex' : 'none'}}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={()=>setshowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={()=>setshowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={()=>setshowMenu(false)}
        >
          Works
        </Link>
        <Link
          activeClass="active"
          to="others"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={()=>setshowMenu(false)}
        >
          Others
        </Link>
        <Link
          activeClass="active"
          to="contactPage"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={()=>setshowMenu(false)}
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
