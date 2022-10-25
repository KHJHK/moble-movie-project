// Notice_NoticeInfo_Main.js

import React, { useState, useEffect } from "react";
import "./Notice_NoticeInfo_Main.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function Notice_NoticeInfo_Main(props) {
  const { id } = useParams();

  // DB 데이터 불러오기
  const [noticeInfo, setNoticeInfo] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:80/board/notice_detail?id=${id}`)
      .then((res) => {
        // console.log(
        //   "res.data : " + JSON.stringify(res[1])
        // );
        setNoticeInfo(res.data);
      });
  }, []);

  return (
    <div className="Notice_NoticeInfo_Main">
      <section className="article_detail">
        <table>
          <thead>
            <tr>
              <th>구분</th>
              <td>{noticeInfo.category_name}</td>

              <th>아이디</th>
              <td>{noticeInfo.member_nickname}</td>
            </tr>

            <tr>
              <th>날짜</th>
              <td>{noticeInfo.notice_reg_date}</td>

              <th>조회수</th>
              <td>{noticeInfo.notice_count}</td>
            </tr>

            <tr>
              <th>제목</th>
              <td>{noticeInfo.notice_title}</td>
            </tr>
          </thead>
        </table>

        {/* 내용 */}
        <div class="article_body">
          <pre>{noticeInfo.notice_content}</pre>
        </div>
      </section>

      {/* btn */}
      <div className="Notice_btn">
        <Link to="/Notice_Notice">
          <button>목록</button>
        </Link>
      </div>
    </div>
  );
}
export default Notice_NoticeInfo_Main;
