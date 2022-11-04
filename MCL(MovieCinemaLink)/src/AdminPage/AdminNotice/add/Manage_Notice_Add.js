// Manage_Notice_Add.js
// 관리자 공지사항 등록

import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import AdminHeader from "../../AdminHeader";
import AdminNav from "../../AdminNav";
import jwtDecode from "jwt-decode";
import "./Manage_Notice_Add.css"

const Manage_Notice_Add = (props) => {
  const history = useHistory();
  // DB 데이터 불러오기 (리스트 추가)
  const decoded = jwtDecode(JSON.stringify(localStorage.getItem("token")));

  const addNotice = () => {
    const category_id = document.getElementById("categoryId").value;
    const notice_title = document.getElementById("noticeTitle").value;
    const notice_content = document.getElementById("noticeContent").value;
    console.log("등록 : ", category_id, notice_title, notice_content);

    const params = {
      category_id: category_id,
      notice_title: notice_title,
      notice_content: notice_content,
      member_id: decoded.member_id,
    };

    axios.post(`http://localhost:80/manage/manage_notice_add`, params);

    // 새로고침
    window.location.replace("/Manage_Notice");
  };

  return (
    <div className="ADMIN">
      <AdminHeader />
      <AdminNav />

      <div className="ADMIN">
        <div className="Manage_Notice_Add">
          <div className="uicontainer">
            <h3>공지사항 등록</h3>
            <div className="ui_border">
              <div className="border_cont">
                <table>
                  <thead>
                    <tr>
                      <th>구분</th>
                      <td>
                        <select id="categoryId" className="notices_select">
                          <option value="1">영화</option>
                          <option value="2">예매</option>
                          <option value="3">극장</option>
                          <option value="4">무비푸드</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <th>제목</th>
                      <td>
                        <input
                          type="text"
                          id="noticeTitle"
                          className="notices_title"
                        />
                      </td>
                    </tr>
                  </thead>
                </table>

                {/* 내용 */}
                <textarea id="noticeContent" cols="30" rows="10"></textarea>
              </div>

              <div className="Notice_btn">
                {/* <Link to="/Manage_Notice"> */}
                <button onClick={addNotice}>등록</button>
                {/* </Link> */}
                <Link to="/Manage_Notice">
                  <button>목록</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manage_Notice_Add;
