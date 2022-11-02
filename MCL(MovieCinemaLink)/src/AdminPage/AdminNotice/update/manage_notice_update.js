// Manage_Notice_Update.js Q&A 등록

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import AdminHeader from "../../AdminHeader";
import AdminNav from "../../AdminNav";
import jwtDecode from "jwt-decode";

const Manage_Notice_Update = (props) => {
  const { id } = useParams();
  const decoded = jwtDecode(JSON.stringify(localStorage.getItem("token")));
  // DB 데이터 불러오기 (상세정보)
  const [notice_detail, setnotice_detail] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:80/manage/manage_notice_detail?id=${id}`)
      .then((res) => {
        setnotice_detail(res.data);
      });
  }, []);

  // DB 데이터 불러오기 (리스트 수정)
  const UpdateNotice = () => {
    // 삭제
    const notice_id = document.getElementById("noticeId").value;
    // 추가
    const category_id = document.getElementById("categoryId").value;
    const notice_title = document.getElementById("noticeTitle").value;
    const notice_content = document.getElementById("noticeContent").value;
    console.log("수정 : ", category_id, notice_title, notice_content);

    const params = {
      member_id: decoded.member_id,
      notice_id: notice_id,
      category_id: category_id,
      notice_title: notice_title,
      notice_content: notice_content,
    };

    axios.post(`http://localhost:80/manage/manage_notice_update`, params);

    // 새로고침
    window.location.replace("/Manage_Notice");
  };

  return (
    <div className="ADMIN">
      <AdminHeader />
      <AdminNav />
      <div className="Manage_Notice_Update">
        <div className="ui_container">
          <h3>공지사항 수정</h3>
          <div className="ui_border">
            <div className="border_cont">
              <table>
                <thead>
                  <tr>
                    <th>구분</th>
                    <td>
                      <select id="categoryId" className="notice_select">
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
                        className="notice_title"
                        placeholder={notice_detail.notice_title}
                      />
                    </td>
                  </tr>
                  <input
                    type="hidden"
                    id="noticeId"
                    value={notice_detail.notice_id}
                  />
                </thead>
              </table>

              {/* 내용 */}
              <textarea
                id="noticeContent"
                cols="30"
                rows="10"
                placeholder={notice_detail.notice_content}
              />
            </div>

            <div className="Notice_btn">
              <button onClick={UpdateNotice}>수정완료</button>
              <Link to="/Manage_Notice">
                <button>목록</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manage_Notice_Update;
