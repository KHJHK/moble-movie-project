// AdminMain.js
import React from "react";
import AdminNav from "./AdminNav";
import AdminHeader from "./AdminHeader";
import "./AdminMain.css";

const AdminMain = () => {
  return (
    <div className="AdminMain">
      <AdminHeader />
      <AdminNav />
    </div>
  );
};

export default AdminMain;
