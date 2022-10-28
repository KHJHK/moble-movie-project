// AdminMember.js
import React from "react";

import AdminHeader from "../AdminHeader";
import AdminNav from "../AdminNav";

import "./AdminMember.css";

const AdminMember = () => {
  return (
    <div className="AdminMember">
      <AdminHeader />
      <AdminNav />
      <h3>회원 관리</h3>
    </div>
  );
};

export default AdminMember;
