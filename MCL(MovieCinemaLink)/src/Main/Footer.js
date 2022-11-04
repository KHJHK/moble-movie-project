// Footer.js
import React from "react";
// import css
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <hr />
      <footer>
        <nav>
          <a href="https://cocoder.tistory.com" target="_blank">
            Blog
          </a>
          |
          <a
            href="https://github.com/KHJHK/moble-movie-project.git"
            target="_blank"
          >
            Github
          </a>
          |
          <a
            href="https://20191281.notion.site/2-_MCL-Project-451bac735834435b870a8fd923c830a8"
            target="_blank"
          >
            Notion
          </a>
          <br />
          <br />
          <h4>MCL Project</h4>
          <h4>Copyright 2022. cocoder. All Rights Reserved.</h4>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
