// Manage_Question_Detail.js

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router-dom";
import AdminHeader from "../AdminHeader";
import AdminNav from "../AdminNav";

function Manage_Question_Detail(props) {
  const { id } = useParams();

  //사용자 Q & A
  const [question_detail, setquestion_detail] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:80/manage/manage_question_detail?id=${id}`)
      .then((res) => {
        setquestion_detail(res.data);
      });
  }, []);

  // 관리자 Q & A 답변
  const [answer, setAnswerInfo] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:80/manage/manage_answer_detail?id=${id}`)
      .then((res) => {
        setAnswerInfo(res.data);
      });
  }, []);

  //Q & A 질문 삭제
  const question_delete = () => {
    const member_id = 1;
    const question_id = document.getElementById("questionId").value;
    console.log("삭제 : ", member_id, question_id);

    const params = {
      member_id: 1,
      question_id: question_id,
    };

    axios.post(`http://localhost:80/manage/manage_question_delete`, params);

    // 새로고침
    window.location.replace("/Manage_Question");
  };

  // Q & A 답변 삭제
  const deleteQA = () => {
    const answer_id = document.getElementById("answerId").value;

    const params = {
      member_id: 1,
      answer_id: answer_id,
    };

    axios.post(`http://localhost:80/manage/manage_answer_delete`, params);

    // 새로고침
    window.location.replace(
      `/Manage_Question_Detail/${question_detail.question_id}`
    );
  };

  return (
    <div className="ADMIN">
      <AdminHeader />
      <AdminNav />
      <div className="Manage_Question_Detail">
        {/* ======================== Q & A 사용자 질문 ======================== */}
        <h3>Q & A 사용자 질문</h3>
        <section className="article_detail">
          <table>
            <thead>
              <tr>
                <th>구분</th>
                <td>{question_detail.category_name}</td>

                <th>아이디</th>
                <td>{question_detail.member_account}</td>
              </tr>

              <tr>
                <th>날짜</th>
                <td>{question_detail.question_reg_date}</td>
              </tr>

              <tr>
                <th>제목</th>
                <td>{question_detail.question_title}</td>
              </tr>
              <input
                type="hidden"
                id="questionId"
                value={question_detail.question_id}
              />
            </thead>
          </table>

          {/* 내용 */}
          <div className="article_body">
            <pre>{question_detail.question_content}</pre>
          </div>
        </section>

        {/* ======================== btn ======================== */}
        <div className="question_btn">
          <button onClick={question_delete}>질문삭제</button>
        </div>
        <br />
        {/* ======================== Q & A 관리자 답변 ======================== */}
        <h3>Q & A 관리자 답변</h3>
        <section className="article_detail" id="answer">
          <table>
            <thead>
              <tr>
                <th>관리자ID</th>
                <td>{answer.member_nickname}</td>

                <th>답변날짜</th>
                <td>{answer.answer_reg_date}</td>
              </tr>

              <tr>
                <th>제목</th>
                <td>{answer.answer_title}</td>
              </tr>

              <input type="hidden" id="answerId" value={answer.answer_id} />
            </thead>
          </table>

          {/* 내용 */}
          <div className="article_body">
            <pre>{answer.answer_content}</pre>
          </div>
        </section>
        {/* ======================== btn ======================== */}
        <div className="question_btn">
          <Link to="/Manage_Question">
            <button>목록</button>
          </Link>
          <Link to={`/Manage_Answer_Add/${question_detail.question_id}`}>
            <button>답변등록</button>
          </Link>
          <Link to={`/Manage_Answer_Update/${question_detail.question_id}`}>
            <button>답변수정</button>
          </Link>
          {/* <Link to={`/manage_answer_delete/${question_detail.question_id}`}> */}
          <button onClick={deleteQA}>답변삭제</button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}
export default Manage_Question_Detail;
