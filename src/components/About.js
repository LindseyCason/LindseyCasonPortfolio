import React from "react";
import Lindsey from "../assets/lindseyCir.png";

export const About = () => {
  return (
    <div className="aboutContainer" id="about">
      <span className="headingText headingWhite">ABOUT ME</span>
      <img src={Lindsey} alt="Lindsey Headshot" className="lindseyImage" />
      <span className="aboutText smallText">
        Hi! I'm Lindsey! I'm a software developer based in New Orleans, LA who
        loves to build and problem solve websites and web applications.
        <p>
          My journey to software development began as a youngster building
          Angelfire websites (HTML/CSS) about whatever was cool in the 90's. I
          went on to study graphic design and like many others, I quickly
          realized it was not my passion. I wanted to build websites and
          applications, things that can be both creative and solve problems.
        </p>{" "}
        I did some research and took my first software development course at
        Operation Spark where we focused on HTML, CSS and Javascript. After
        completion, I decided to continue my education with Lambda School. I
        enrolled in the immersive Full-Stack Web Development program. My time at
        Lambda School taught me, not only software development but leadership
        skills, teamwork and the importance of understanding the problem/goal
        and planning ahead.
      </span>
    </div>
  );
};
