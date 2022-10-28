// AdminMovie.js
import React from "react";
import AdminHeader from "../AdminHeader";
import AdminNav from "../AdminNav";
import "./AdminMovie.css";

const AdminMovie = () => {
  return (
    <div className="AdminMovie">
      <AdminHeader />
      <AdminNav />
      <h3>영화 관리</h3>
    </div>
  );
};

export default AdminMovie;
