import React from "react";
import downArrow from "../assets/downArrow.png";

export const Hero = () => {
  return (
    <div className="heroContainer">
      <span className="heroLargeText">Hi!</span>
      <span className="heroLargeText">I'm Lindsey</span>
      <span className="heroSmallText">
        A New Orleans based software developer.
      </span>
      <img src={downArrow} alt="down arrow" className="downArrow" />
    </div>
  );
};
