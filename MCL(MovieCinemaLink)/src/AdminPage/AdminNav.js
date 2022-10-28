// AdminNav.js
import React from "react";
import { Link } from "react-router-dom";
import "./AdminNav.css";
import AdminHeader from "./AdminHeader";

const AdminNav = () => {
  return (
    <div className="AdminNav">
      <Link to="/AdminMember">
        <h3>회원 관리</h3>
      </Link>

      <Link to="/AdminTheater">
        <h3>상영관 관리</h3>
      </Link>

      <Link to="/AdminMovie">
        <h3>영화 관리</h3>
      </Link>

      <Link to="/AdminNotice">
        <h3>공지사항</h3>
      </Link>

      <Link to="/manage_question_list">
        <h3>Q&A</h3>
      </Link>
    </div>
  );
};

export default AdminNav;
