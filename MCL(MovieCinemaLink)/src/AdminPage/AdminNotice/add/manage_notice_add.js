// manage_notice_add.js
// 관리자 공지사항 등록

import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";

const manage_notice_add = (props) => {
  const history = useHistory();
  // DB 데이터 불러오기 (리스트 추가)
  const addNotice = () => {
    const category_id = document.getElementById("categoryId").value;
    const notice_title = document.getElementById("noticeTitle").value;
    const notice_content = document.getElementById("noticeContent").value;
    console.log("등록 : ", category_id, notice_title, notice_content);

    const params = {
      category_id: category_id,
      notice_title: notice_title,
      notice_content: notice_content,
      member_id: 1,
    };

    axios.post(`http://localhost:80/manage/manage_notice_add`, params);

    // 새로고침
    window.location.replace("/AdminNotice");
  };

  return (
    <div>
      <div className="manage_notice_add">
        <div class="ui_container">
          <h3>문의사항 등록</h3>
          <div class="ui_border">
            <div class="border_cont">
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

            <div class="Notice_btn">
              {/* <Link to="/AdminNotice"> */}
              <button onClick={addNotice}>등록</button>
              {/* </Link> */}
              <Link to="/AdminNotice">
                <button>목록</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default manage_notice_add;
