// Questions_QuestionsMain.js 리스트
import React, { useState, useEffect } from "react";
import "./Questions_QuestionsMain.css";
import Questions_QuestionsMain_Questions from "./Questions_QuestionsMain_Questions";
import { Link } from "react-router-dom";
import axios from "axios";
import setShowModal1 from "../../Main/Header";

const Questions_QuestionsMain = () => {
  // DB 데이터 불러오기
  const [questions, setQuestionsInfo] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:80/board/question_list`).then((res) => {
      // console.log("res.data : " + JSON.stringify(res[1]));
      setQuestionsInfo(res.data);
    });
  }, []);

  function loginCheck() {
    if (localStorage.getItem("token") !== null) {
      window.location.replace("/Questions_Write");
    } else {
      alert("로그인 필요");
    }
  }

  return (
    <div className="Questions_QuestionsMain">
      <h3>문의사항</h3>

      {/* <!-- Notice list --> */}
      <div class="container">
        <table class="board_table">
          <thead>
            <tr>
              <th scope="col" class="th_num">
                번호
              </th>
              <th scope="col" class="th_category">
                구분
              </th>
              <th scope="col" class="th_title">
                제목
              </th>
              <th scope="col" class="th_date">
                등록일
              </th>
              <th scope="col" class="th_views">
                회원ID
              </th>
            </tr>
          </thead>
          {/* DB 데이터 불러오기 */}
          <tbody>
            {questions.map((item) => {
              return (
                <Questions_QuestionsMain_Questions
                  question_id={item.question_id}
                  question_num={item.question_num}
                  category_name={item.category_name}
                  question_title={item.question_title}
                  question_reg_date={item.question_reg_date}
                  member_account={item.member_account}
                />
              );
            })}
          </tbody>
        </table>
        <div className="Notice_btn">
          <button onClick={loginCheck}>Q & A 등록</button>
        </div>
      </div>
    </div>
  );
};

export default Questions_QuestionsMain;
