import React from "react";
import SwizzleImage from "../assets/SwizzleImages.JPG";
import TicTac from "../assets/TicTacToeImages.JPG";
import Rock from "../assets/RockPaperScissorsImages.JPG";
import LifeGPA from "../assets/LifeGPAImages.JPG";
import Memories from "../assets/MemoriesImages.JPG";

export const Projects = () => {
  return (
    <div className="projectContainer" id="projects">
      <span className="headingText headingWhite">PROJECTS</span>

      <div className="projectBox">
        <div className="projectCard">
          <div className="titleBox">Swizzle Cocktail Hub</div>
          <div className="swizzleImageBox">
            <img
              src={SwizzleImage}
              alt="screenshot of swizzle project"
              className="projectImage"
            />
            <div className="swizzleStack stack">
              <ul>
                <li>JavaScript</li>
                <li>ReactJS</li>
                <li>RestAPI</li>
                <li>HTML/CSS</li>
                <li>Responsive</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>

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
          <div className="ticTacImageBox">
            <img
              src={TicTac}
              alt="screent shot of tic tac toe project"
              className="projectImage"
            />
            <div className="ticTacStack stack">
              <ul>
                <li>JavaScript</li>
                <li>ReactJS</li>
                <li>HTML/CSS</li>
                <li>Responsive</li>
                <li>State Management</li>
                <li>Class Components</li>
              </ul>
            </div>
          </div>

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
          <div className="titleBox">Memories App (MERN)</div>
          <div className="memoriesImageBox">
            <img
              src={Memories}
              alt="screenshot of memories project"
              className="projectImage"
            />
            <div className="memoriesStack stack">
              <ul>
                <li>JavaScript</li>
                <li>ReactJS</li>
                <li>NodeJS</li>
                <li>MongoDB</li>
                <li>Material UI</li>
                <li>Responsive</li>
              </ul>
            </div>
          </div>
          <div className="footerBox">
            <a
              href="https://memories-app-lindsey.netlify.app/"
              className="projectLinks"
              target="_blank"
              rel="noreferrer"
            >
              Website
            </a>
            <a
              href="https://github.com/LindseyCason/MemoriesApp"
              className="projectLinks"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          </div>
        </div>
        <div className="projectCard">
          <div className="titleBox">
            HTML/CSS
            <br />
            Marketing Page
          </div>
          <div className="lifeGPAimageBox">
            <img
              src={LifeGPA}
              alt="screenshot of marketing page project"
              className="projectImage"
            />

            <div className="lifeGPAStack stack">
              <ul>
                <li>JavaScript</li>
                <li>HTML/CSS</li>
                <li>Responsive</li>
              </ul>
            </div>
          </div>
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
          <div className="rockImageBox">
            <img
              src={Rock}
              alt="screenshot of rock paper scissors project"
              className="projectImage"
            />
            <div className="rockStack stack">
              <ul>
                <li>JavaScript</li>
                <li>HTML/CSS</li>
                <li>ReactJS</li>
                <li>State Management</li>
                <li>React Hooks</li>
                <li>Responsive</li>
              </ul>
            </div>
          </div>
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
