// AdminMain.js
import React from "react";
import AdminNav from "./AdminNav";
import AdminHeader from "./AdminHeader";
import jwtDecode from "jwt-decode";
import errorPage from "../Main/errorPage";
// import css
import "./AdminMain.css";

const AdminMain = () => {

  const decoded = JSON.stringify(window.localStorage.getItem("token"));
  const key1 = window.localStorage.key("token");
  if (key1 == "token") {
    if (jwtDecode(decoded).member_auth == "ADMIN") {
      return (
        <div className="ADMIN">
          <AdminHeader />
          <AdminNav />
          <div className="AdminMain">
            <div className="mainADmin">
              <div className="tttt">
                <h1>관리자 페이지에 오신걸 환영합니다.</h1>
                <div className="boll"></div>
              </div>
            </div>
          </div>
        </div>
      )
    } else if (jwtDecode(decoded).member_auth == "USER") {
      return errorPage();
    }
  } else {
    return errorPage();
  }
};

export default AdminMain;