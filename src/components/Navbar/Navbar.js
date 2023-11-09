import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import contact from "../../assets/contact.png";
// import menu from '../../assets/menu.png'
import { Link } from "react-scroll";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const onClickMenuHide = () => {
    setShowMenu(false);
  };

  const onClickMenuShow = () => {
    setShowMenu(!showMenu);
  };

  const onClickContact = () => {
    document
      .getElementById("contactPage")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
          className="desktopMenuListItem"
        >
          Serivces
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="knowledgePage"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
          className="desktopMenuListItem"
        >
          Experience
        </Link>
      </div>
      <button className="desktopMenuBtn" onClick={onClickContact}>
        <img src={contact} alt="" className="desktopMenuImg" />
        Contact Me
      </button>

      {/* mobile nav bar */}
      <div className="mobMenu" onClick={onClickMenuShow}>
        <BiMenuAltRight size={30} />
      </div>
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
          className="listItem"
          onClick={onClickMenuHide}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
          className="listItem"
          onClick={onClickMenuHide}
        >
          Serivces
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
          className="listItem"
          onClick={onClickMenuHide}
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="knowledgePage"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
          className="listItem"
          onClick={onClickMenuHide}
        >
          Experience
        </Link>

        <Link
          activeClass="active"
          to="contactPage"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
          className="listItem"
          onClick={onClickMenuHide}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
