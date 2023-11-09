import React from "react";
import "./Footer.css";
import gmail from "../../assets/gmail.png";
import whatsapp from "../../assets/whatsapp.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";




const Footer = () => {
  return (
    <section id="footerPage">
      <div className="footer-content">
        <a
          href="https://mail.google.com/mail/u/0/#compose"
          rel="noreferrer"
          target="_blank"
        >
          <img src={gmail} alt="gmail" className="foot-icons " />
        </a>
        <a
          href="https://wa.me/+918083610461"
          rel="noreferrer"
          target="_blank"
        >
          <img src={whatsapp} alt="facebook" className="foot-icons " />
        </a>
        <a
          href="https://www.instagram.com/roshan__kr_/"
          rel="noreferrer"
          target="_blank"
        >
          <img src={instagram} alt="instagram" className="foot-icons " />
        </a>
        <a
          href="https://www.linkedin.com/in/roshan-kumar-3a576229a/"
          rel="noreferrer"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin" className="foot-icons " />
        </a>
        <a
          href="https://github.com/roshan-kr07"
          rel="noreferrer"
          target="_blank"
        >
          <img src={github} alt="github" className="foot-icons " />
        </a>
      </div>
      <span className="emailId">iamroshankumar07@gmail.com</span>
      <footer className="footer">
        Copyright &#169; 2023 Roshan Kumar. All right received.
      </footer>
    </section>
  );
};

export default Footer;
