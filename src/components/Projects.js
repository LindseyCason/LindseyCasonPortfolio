import React from "react";
import SwizzleImage from "../assets/SwizzleImages.JPG";
import TicTac from "../assets/TicTacToeImages.JPG";
import Rock from "../assets/RockPaperScissorsImages.JPG";
import LifeGPA from "../assets/LifeGPAImages.JPG";

export const Projects = () => {
  return (
    <div className="projectContainer" id="projects">
      <span className="headingText headingWhite">PROJECTS</span>
      <div className="projectBox">
        <div className="projectCard">
          <div className="titleBox">Swizzle Cocktail Hub</div>
          <img
            src={SwizzleImage}
            alt="screenshot of swizzle project"
            className="projectImage"
          />
          <div className="footerBox">
            <a
              href="http://swizzle-cocktail-hub-lindseyacason.vercel.app/"
              className="projectLinks"
              target="_blank"
              rel="noreferrer"
            >
              Website
            </a>
            <a
              href="https://github.com/LindseyCason/cocktail"
              className="projectLinks"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          </div>
        </div>

        <div className="projectCard">
          <div className="titleBox">Tic Tac Toe</div>
          <img
            src={TicTac}
            alt="screent shot of tic tac toe project"
            className="projectImage"
          />
          <div className="footerBox">
            <a
              href="https://mytictactoe-jolly-fly.now.sh/"
              className="projectLinks"
              target="_blank"
              rel="noreferrer"
            >
              Website
            </a>
            <a
              href="https://github.com/LindseyCason/mytictactoe"
              className="projectLinks"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          </div>
        </div>

        <div className="projectCard">
          <div className="titleBox">HTML/CSS Marketing Page</div>
          <img
            src={LifeGPA}
            alt="screenshot of marketing page project"
            className="projectImage"
          />
          <div className="footerBox">
            <a
              href="https://marketing-page-lindsey.vercel.app/index.html"
              className="projectLinks"
              target="_blank"
              rel="noreferrer"
            >
              Website
            </a>
            <a
              href="https://github.com/LindseyCason/Marketing-page-lindsey"
              className="projectLinks"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          </div>
        </div>

        <div className="projectCard">
          <div className="titleBox">Rock Paper Scissors</div>
          <img
            src={Rock}
            alt="screenshot of rock paper scissors project"
            className="projectImage"
          />
          <div className="footerBox">
            <a
              href="https://rockpaperscissors-five-cyan.now.sh/"
              className="projectLinks"
              target="_blank"
              rel="noreferrer"
            >
              Website
            </a>
            <a
              href="https://github.com/LindseyCason/rockpaperscissors"
              className="projectLinks"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
