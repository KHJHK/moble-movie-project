// AdminNotice.js
import React from "react";
import AdminHeader from "../AdminHeader";
import AdminNav from "../AdminNav";
import "./AdminNotice.css";

const AdminNotice = () => {
  return (
    <div className="AdminNotice">
      <AdminHeader />
      <AdminNav />
      <h3>상영관 관리</h3>
    </div>
  );
};

export default AdminNotice;
