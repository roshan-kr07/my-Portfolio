import React from "react";
import "./Skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">My Awesome</span>
      <span className="skillTitle2">services</span>
      <span className="skillDesc">
        I am a skilled and passionate web designer with experience in creating
        visually appealing and user-friendly websites. I have a strong
        understanding of design and a keen eye for detail. I am proficient in
        HTML, CSS, and JavaScript, as well as design software such as Adobe
        Photoshop and  Illustrator.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX</h2>
            <p>Pixel perfect desing from figma to HTML,CSS or fully functional website</p>
          </div>
        </div>

        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Developer</h2>
            <p>Html, Css, JavaScript, React</p>
          </div>
        </div>

        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Design</h2>
            <p>Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
