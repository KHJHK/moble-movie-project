// AdminNav.js
import React from "react";
import { Link } from "react-router-dom";
// import css
import "./AdminNav.css";

const AdminNav = () => {
  return (
    <div className="AdminNav">
      <div className="AdminNav2">
        <div className="ADMember">
          <Link to="/AdminMember">
            <h3>회원 관리</h3>
          </Link>
        </div>

        <div className="ADMovie">
          <Link to="/AdminMovie">
            <h3>영화 관리</h3>
          </Link>
        </div>
        <div className="ADNotice">
          <Link to="/Manage_Notice">
            <h3>공지사항</h3>
          </Link>
        </div>

        <div className="ADQuestion">
          <Link to="/Manage_Question">
            <h3>Q&A</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
