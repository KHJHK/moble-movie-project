// Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <nav>
        <a href="https://cocoder.tistory.com" target="_blank">
          Blog
        </a>{" "}
        |
        <a href="https://github.com/cocoder16" target="_blank">
          Github
        </a>
      </nav>
      <p>
        <span>저자 : 김희중</span>
        <br />
        <span>이메일 : cocoder16@gmail.com</span>
        <br />
        <span>Copyright 2022. cocoder. All Rights Reserved.</span>
      </p>
    </footer>
  );
};

export default Footer;
