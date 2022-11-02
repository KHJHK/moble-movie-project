import React from "react";
import { Link } from "react-router-dom";

const error = () => {
  return (
    <div>
      <Link to="./error">
        <img src="./img/error.png" alt="error" id="error" />
      </Link>
    </div>
  );
};

export default error;
