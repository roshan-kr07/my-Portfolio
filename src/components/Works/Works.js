import React, { useState } from "react";
import "./Works.css";
import { useCollapse } from "react-collapsed";

import realestate from "../../assets/project-1.jpg";
import beachresort from "../../assets/project-2.jpg";
import foodapp from "../../assets/project-3.jpg";
import applestore from "../../assets/project-4.jpg";
import meetups from "../../assets/project-5.jpg";
import ecommerce from "../../assets/project-6.jpg";

const Works = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <section id="works">
      <span className="worksTitle">Recent Projects </span>
      <span className="worksTitle2">Portfolio</span>
      <span className="worksDesc">
        I take pride in paying attention to the smallest details and making sure
        that my work in pixel perfect. I am excidet to bring my skills and
        experience to help businesses achieve their goals and create a stong
        online persence.
      </span>
      <span>
        <div className="worksImgs">
          <a
            href="https://full-stack-website-roshan-chi.vercel.app/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={realestate} alt="portfolio-1" className="worksImg" />
          </a>
          <a
            href="https://react-beach-resort-roshan.vercel.app/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={beachresort} alt="portfolio-2" className="worksImg" />
          </a>

          <a
            href="https://food-app-react-redux-roshan.vercel.app/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={foodapp} alt="portfolio-2" className="worksImg" />
          </a>
        </div>
        <section className="worksImgs" {...getCollapseProps()}>
          <a
            href="https://apple-ecommerce-roshan-react-app.vercel.app/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={applestore} alt="portfolio-4" className="worksImg" />
          </a>
          <a
            href="https://next-js-demo-project-kappa.vercel.app/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={meetups} alt="portfolio-5" className="worksImg" />
          </a>
          <a
            href="https://e-commerce-roshan-react-redux-app.vercel.app/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={ecommerce} alt="portfolio-6" className="worksImg" />
          </a>
        </section>
      </span>

      <button
        className="worksBtn"
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {isExpanded ? "See less" : "See more"}
      </button>
    </section>
  );
};

export default Works;
