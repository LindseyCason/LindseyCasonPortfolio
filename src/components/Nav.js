import React, { useState } from "react";
import hamIcon from "../assets/hamIcon.png";

export const Nav = () => {
  const [hamVis, setHamVis] = useState("hamLinkContainerHidden");

  const hamVisibility = () => {
    if (hamVis === "hamLinkContainerHidden") {
      setHamVis("hamLinkContainerShow");
    } else {
      setHamVis("hamLinkContainerHidden");
    }
  };

  return (
    <>
      <div className="navContainer">
        <ul className="navLinkContainer">
          <li className="navLink">
            <a href="#projects">PROJECTS</a>
          </li>
          <li className="navLink">
            <a href="#skills">SKILLS</a>
          </li>
          <li className="navLink">
            <a href="#about">ABOUT</a>
          </li>
          <li className="navLink">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
      <div className="navHamburgerContainer">
        <img
          src={hamIcon}
          alt="menu icon"
          className="hamIcon"
          onClick={hamVisibility}
        />
        <ul className={hamVis} id="hamBox">
          <li className="hamLink">
            <a href="#projects">PROJECTS</a>
          </li>
          <li className="hamLink">
            <a href="#skills">SKILLS</a>
          </li>
          <li className="hamLink">
            <a href="#about">ABOUT</a>
          </li>
          <li className="hamLink">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </>
  );
};
