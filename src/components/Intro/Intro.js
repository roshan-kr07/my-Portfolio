import React from "react";
import "./Intro.css";
import bg from "../../assets/roshpic.png";
import downloadicon from "../../assets/download.png";
// import resume from '../../assets/roshan-CV.pdf'

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello !</span>
        <span className="introText">
          I'm <span className="introName">Roshan</span>
          <br />
          Website Designer
        </span>
        <p className="introPara">
          I am a skilled web designer with experience in creating <br/> visually
          appealing and user friendly website.
        </p>
        <a href={''}  download= 'Roshan-CV'>
          <button className="btn">
            <img src={downloadicon} alt="downloadicon" className="btnImg"/>
            Download CV
          </button>
        </a>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
