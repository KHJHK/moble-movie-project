// Questions_Write.js
// Q&A 등록

import React, { useState, useEffect } from "react";
import "./Questions_Write.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Questions_modal from "./Questions_modal";
import Footer from "../../Main/Footer";
import Header from "../../Main/Header";

const Questions_Write = () => {
  const [categoryId, setCategoryId] = useState();
  const [questionTitle, setQuestionTitle] = useState();
  const [quetionContent, setQuetionContent] = useState();

  // DB 데이터 불러오기
  const [modalOpenSignUp, setModalOpenSignUp] = useState(false);
  const { props } = useParams("");

  function test(event) {
    alert(event.target.value);
  }

  const openModalSignup = () => {
    setModalOpenSignUp(true);
  };
  const closeModalSignUp = () => {
    setModalOpenSignUp(false);
  };

  const addQA = () => {
    setCategoryId(document.getElementById("categoryId").value);
    setQuestionTitle(document.getElementById("questionTitle").value);
    setQuetionContent(document.getElementById("quetionContent").value);
    // console.log("등록 : ", categoryId, questionTitle, quetionContent);

    const params = {
      category_id: categoryId,
      question_title: questionTitle,
      question_content: quetionContent,
      member_id: 1,
    };

    // request fail 400 error - post에서 객체 보낼 때 body에 객체를 보내야함 - controller에서도 Params를 객체 형식으로 받는듯함
    axios.post(`http://localhost:80/board/question_add_test`, params);
  };

  return (
    <div className="Questions_Write">
      <Header />

      <div class="ui_container">
        <h3>문의사항 등록</h3>
        <div class="ui_border">
          <div class="border_cont">
            <table>
              <thead>
                <tr>
                  <th>구분</th>
                  <td>
                    <select id="categoryId" className="Questions_select">
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
                      id="questionTitle"
                      className="questions_title"
                    />
                    <p></p>
                  </td>
                </tr>
              </thead>
            </table>

            {/* 내용 */}
            <textarea id="quetionContent" cols="30" rows="10"></textarea>
          </div>
          <div class="Notice_btn">
            <React.Fragment>
              <button
                className="close"
                onClick={addQA}
                value="CREATE_Questions"
              >
                등록
              </button>
              <Questions_modal
                open={modalOpenSignUp}
                close={closeModalSignUp}
              ></Questions_modal>
            </React.Fragment>

            <Link to="/Questions_Questions">
              <button>목록</button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Questions_Write;
