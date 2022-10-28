// AdminHeader.js
import React from "react";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <div>
      <Link to="/">
        <img src="./img/toppicture.png" alt="상단 로고사진" id="toppicture" />
      </Link>
      <Link to="/AdminMain">
        <h2>MCL 관리자 페이지</h2>
      </Link>
    </div>
  );
};

export default AdminHeader;
