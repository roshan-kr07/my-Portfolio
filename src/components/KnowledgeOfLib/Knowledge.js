import React from "react";
import "./Knowledge.css";
import react from "../../assets/react.png";
import JavaScript from "../../assets/javascript.png";
import html from "../../assets/htlm.png";
import css from "../../assets/css.png";

const Knowledge = () => {
  return (
    <section id="knowledgePage">
      <span className="knowledgePageTitle">Knowdlege of </span>
      <span className="knowledgePageTitle2">Library & Packages</span>
      <p className="knowledgeDesc">
        1+ years of working experience in JavaScript,React,Html and Css
        Moreover, knowdlege of famous packages like Redux, Styled-Component
        Material-ui, Type-Script.
      </p>
      <div className="knowledgeImgs">
        <a
          href="https://react.dev/"
          rel="noreferrer"
          target="_blank"
        >
          <img src={react} alt="react" className="knowledgeImg" />
        </a>

        <a
          href="https://en.wikipedia.org/wiki/JavaScript"
          rel="noreferrer"
          target="_blank"
        >
          <img src={JavaScript} alt="JavaScript" className="knowledgeImg" />
        </a>

        <a
          href="https://en.wikipedia.org/wiki/HTML"
          rel="noreferrer"
          target="_blank"
        >
          <img src={html} alt="htm" className="knowledgeImg" />
        </a>

        <a
          href="https://en.wikipedia.org/wiki/CSS"
          rel="noreferrer"
          target="_blank"
        >
          <img src={css} alt="css" className="knowledgeImg" />
        </a>
      </div>
    </section>
  );
};

export default Knowledge;
