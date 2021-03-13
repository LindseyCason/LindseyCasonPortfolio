import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaPhone,
  FaQuestion,
  FaTwitter,
} from "react-icons/fa";

export const Contact = () => {
  return (
    <div className="contactContainer" id="contact">
      <span className="headingText headingBlack">LET'S CONNECT</span>
      <div className="contactBox">
        <a href="tel:15045643792" className="contactLink">
          <FaPhone /> : 504-564-3792
        </a>
        <a href="mailto:lindseyacason@gmail.com" className="contactLink">
          <FaEnvelope /> : LindseyACason@gmail.com
        </a>
        <a href="https://github.com/LindseyCason/" className="contactLink">
          <FaGithub /> : My GitHub
        </a>
        <a href="https://twitter.com/IAcceptCookies" className="contactLink">
          <FaTwitter /> : @IAcceptCookies
        </a>
        <a
          href="mailto:lindseyacason@gmail.com?subject=Suggestions%20or%20Comments%20from%20Lindsey's%20Portfolio&body=Hey%20there!%0D%0AThanks%20for%20reaching%20out!%20Feel%20free%20to%20send%20me%20any%20feedback%20you%20may%20have%20below.%0D%0AThank%20you!%0D%0ALindsey%20Cason"
          target="_blank"
          rel="noreferrer"
          className="contactLink"
        >
          <FaQuestion /> : Suggestions or Comments?
        </a>
      </div>
    </div>
  );
};
