// Manage_Notice_Detail.js

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function Manage_Notice_Detail(props) {
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

  // DB 데이터 불러오기 (리스트 삭제)
  const notice_delete = () => {
    const member_id = 1;
    const notice_id = document.getElementById("noticeId").value;
    console.log("삭제 : ", member_id, notice_id);

    const params = {
      member_id: 1,
      notice_id: notice_id,
    };

    axios.post(`http://localhost:80/manage/manage_notice_delete`, params);

    // 새로고침
    window.location.replace("/Manage_Notice");
  };

  return (
    <div className="Manage_Notice_Detail">
      <section className="article_detail">
        <table>
          <thead>
            <tr>
              <th>구분</th>
              <td>{notice_detail.category_name}</td>

              <th>아이디</th>
              <td>{notice_detail.member_nickname}</td>
            </tr>

            <tr>
              <th>날짜</th>
              <td>{notice_detail.notice_reg_date}</td>

              <th>조회수</th>
              <td>{notice_detail.notice_count}</td>
            </tr>

            <tr>
              <th>제목</th>
              <td>{notice_detail.notice_title}</td>
            </tr>
            <input
              type="hidden"
              id="noticeId"
              value={notice_detail.notice_id}
            />
          </thead>
        </table>

        {/* 내용 */}
        <div className="article_body">
          <pre>{notice_detail.notice_content}</pre>
        </div>
      </section>

      {/* button */}
      <div className="Notice_button">
        <Link to="/Manage_Notice">
          <button>목록</button>
        </Link>
        <Link to={`/Manage_Notice_Update/${notice_detail.notice_id}`}>
          <button>수정</button>
        </Link>
        {/* <Link to="/Manage_Notice"> */}
        <button onClick={notice_delete}>삭제</button>
        {/* </Link> */}
      </div>
    </div>
  );
}
export default Manage_Notice_Detail;
