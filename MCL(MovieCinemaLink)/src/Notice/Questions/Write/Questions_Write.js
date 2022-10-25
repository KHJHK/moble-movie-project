// Questions_Write.js Q&A 등록

import React, { useState, useEffect } from "react";
import "./Questions_Write.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Questions_modal_Create from "../modal/Questions_modal_Create";
import Footer from "../../../Main/Footer";
import Header from "../../../Main/Header";

const Questions_Write = (props) => {
  // DB 데이터 불러오기 (리스트 추가)
  const addQA = () => {
    const category_id = document.getElementById("categoryId").value;
    const question_title = document.getElementById("questionTitle").value;
    const quetion_content = document.getElementById("quetionContent").value;
    console.log("등록 : ", category_id, question_title, quetion_content);

    const params = {
      category_id: category_id,
      question_title: question_title,
      question_content: quetion_content,
      member_id: 1,
    };

    axios.post(`http://localhost:80/board/question_add`, params);
  };

  // 등록했을 때 팝업창 실행
  const [modalOpenSignUp, setModalOpenSignUp] = useState(false);

  return (
    <div>
      <Header />
      <div className="Questions_Write">
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
                    </td>
                  </tr>
                </thead>
              </table>

              {/* 내용 */}
              <textarea id="quetionContent" cols="30" rows="10"></textarea>
            </div>
            {/* const [modalOpenSignUp, setModalOpenSignUp] = useState(false); */}
            {/* modal */}
            <div class="Notice_btn">
              <React.Fragment>
                <button onClick={() => setModalOpenSignUp(true)}>등록</button>
                <Link to="/Questions_Questions">
                  <button>목록</button>
                </Link>
                <Questions_modal_Create
                  open={modalOpenSignUp}
                  close={() => setModalOpenSignUp(false)}
                  addQAFunc={addQA}
                />
              </React.Fragment>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Questions_Write;
