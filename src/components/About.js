import React from "react";
import Lindsey from "../assets/lindseyCir.png";

export const About = () => {
  return (
    <div className="aboutContainer" id="about">
      <span className="headingText headingWhite">ABOUT ME</span>
      <img src={Lindsey} alt="Lindsey Headshot" className="lindseyImage" />
      <span className="aboutText smallText">
      Hi! I'm Lindsey! A dedicated web developer hailing from the vibrant city of New Orleans.
<p></p>
My journey into the world of web development ignited during my formative years when I dabbled in creating Angelfire websites using HTML and CSS, riding the wave of '90s coolness!
<p></p>
My first formal step was a web development course at Operation Spark, where I honed my skills in HTML, CSS, and Javascript. Eager to further my knowledge and expertise, I enrolled in Bloom Tech's immersive Full-Stack Web Development program. This experience deepened my technical skills and also imparted invaluable lessons in leadership, teamwork, and the art of effective problem solving.
<p></p>
Today I'm a Quality Assurance Analyst with over 6 years of expertise in testing and web development. I thrive as a collaborative and versatile team player, well versed in anticipating potential challenges, conducting in-depth root cause analyses, and presenting impactful resolutions.
<p></p>
I'm eager to seize new opportunities that will elevate my career trajectory and allow me to contribute my skills and expertise to innovative projects. Let's collaborate!
      </span>
    </div>
  );
};
