// manage_notice_update.js Q&A 등록

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const manage_notice_update = (props) => {
  const { id } = useParams();

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
      member_id: 1,
      notice_id: notice_id,
      category_id: category_id,
      notice_title: notice_title,
      notice_content: notice_content,
    };

    axios.post(`http://localhost:80/manage/manage_notice_update`, params);

    // 새로고침
    window.location.replace("/AdminNotice");
  };

  return (
    <div>
      <div className="manage_notice_update">
        <div class="ui_container">
          <h3>공지사항 수정</h3>
          <div class="ui_border">
            <div class="border_cont">
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

            <div class="Notice_btn">
              <button onClick={UpdateNotice}>수정완료</button>
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

export default manage_notice_update;
