// Questions_QuestionsInfo_Main.js

import React, { useState, useEffect } from "react";
import "./Questions_QuestionsInfo_Main.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function Questions_QuestionsInfo_Main(props) {
  const { id } = useParams();

  // DB 데이터 불러오기
  const [questions, setQuestionsInfo] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:80/board/question_detail?id=${id}`)
      .then((res) => {
        // console.log(
        //   "res.data : " + JSON.stringify(res[1])
        // );
        setQuestionsInfo(res.data);
      });
  }, []);

  return (
    <div className="Questions_QuestionsInfo_Main">
      <section className="article_detail">
        <table>
          <thead>
            <tr>
              <th>구분</th>
              <td>{questions.category_name}</td>

              <th>회원ID</th>
              <td>{questions.member_account}</td>
            </tr>

            <tr>
              <th>제목</th>
              <td>{questions.question_title}</td>

              <th>등록일</th>
              <td>{questions.question_reg_date}</td>
            </tr>
          </thead>
        </table>

        {/* 내용 */}
        <div class="article_body">
          <p>{questions.question_content}</p>
        </div>
      </section>

      {/* btn */}
      <div className="Notice_btn">
        <Link to="/Questions_Questions">
          <button>목록</button>
        </Link>
        {/* 수정필요 */}
        <Link to="/Questions_Write">
          <button>수정</button>
        </Link>
        {/* 추가필요 */}
        <button>삭제</button>
      </div>
    </div>
  );
}
export default Questions_QuestionsInfo_Main;
