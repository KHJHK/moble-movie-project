// AdminMain.js
import React from "react";

// import
import AdminNav from "./AdminNav";
import AdminHeader from "./AdminHeader";
import "./AdminMain.css";

const AdminMain = () => {
  return (
    <div className="AdminMain">
      <AdminHeader />
      <AdminNav />
      <div className="content">내용</div>
    </div>
  );
};

export default AdminMain;
