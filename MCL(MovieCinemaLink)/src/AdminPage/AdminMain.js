// AdminMain.js
import React from "react";
import AdminNav from "./AdminNav";
import AdminHeader from "./AdminHeader";
import jwtDecode from "jwt-decode";
import errorPage from "../Main/errorPage";
// import css
import "./AdminMain.css";

const AdminMain = () => {

  
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
}
    

export default AdminMain;