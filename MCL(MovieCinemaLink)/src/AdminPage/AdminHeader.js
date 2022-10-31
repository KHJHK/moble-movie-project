// AdminHeader.js
import React from "react";
import { Link } from "react-router-dom";
import "./AdminHeader.css";

const AdminHeader = () => {
  return (
    <div className="AdminHeader">
      <div className="UserPageLogo">
        <Link to="/">
          <img src="./img/toppicture.png" alt="상단 로고사진" id="toppicture" />
        </Link>
      </div>
      <div className="ManagePageLogo">
        <Link to="/AdminMain">
          <h3>관리자 페이지</h3>
        </Link>
      </div>
    </div>
  );
};

export default AdminHeader;
