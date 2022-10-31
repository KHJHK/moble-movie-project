// Questions_Update.js Q&A 등록

import React, { useState, useEffect } from "react";
import "./Questions_Update.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Questions_modal_Update from "../modal/Questions_modal_Update";
import Footer from "../../../Main/Footer";
import Header from "../../../Main/Header";
import jwtDecode from "jwt-decode";
const Questions_Update = (props) => {
  const { question_id } = useParams();

  // DB 데이터 불러오기 (상세정보)
  const [questions, setQuestionsInfo] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:80/board/question_detail?id=${question_id}`)
      .then((res) => {
        // console.log(
        //   "res.data : " + JSON.stringify(res[1])
        // );
        setQuestionsInfo(res.data);
      });
  }, []);

  // DB 데이터 불러오기 (리스트 수정)
  const UpdateQA = () => {
    // 삭제
    const question_id = document.getElementById("questionId").value;
    // 추가
    const category_id = document.getElementById("categoryId").value;
    const question_title = document.getElementById("questionTitle").value;
    const quetion_content = document.getElementById("quetionContent").value;
    console.log("수정 : ", category_id, question_title, quetion_content);
    const decode = jwtDecode(
      JSON.stringify(window.localStorage.getItem("token"))
    );
    const params = {
      member_id: decode.member_id,
      question_id: question_id,
      category_id: category_id,
      question_title: question_title,
      question_content: quetion_content,
    };

    axios.post(`http://localhost:80/board/question_update`, params);

    // 새로고침
    window.location.replace("/Questions_Questions");
  };

  // 등록했을 때 팝업창 실행
  const [modalOpenUpdate, setModalOpenUpdate] = useState(false);

  return (
    <div>
      <Header />
      <div className="Questions_Update">
        <div class="ui_container">
          <h3>문의사항 수정</h3>
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
                        placeholder={questions.question_title}
                      />
                    </td>
                  </tr>
                  <input
                    type="hidden"
                    id="questionId"
                    value={questions.question_id}
                  />
                </thead>
              </table>

              {/* 내용 */}
              <textarea
                id="quetionContent"
                cols="30"
                rows="10"
                placeholder={questions.question_content}
              />
            </div>
            {/* const [modalOpenUpdate, setModalOpenUpdate] = useState(false); */}
            {/* modal */}
            <div class="Notice_btn">
              <React.Fragment>
                <button onClick={() => setModalOpenUpdate(true)}>
                  수정완료
                </button>
                <Link to="/Questions_Questions">
                  <button>목록</button>
                </Link>
                <Questions_modal_Update
                  open={modalOpenUpdate}
                  close={() => setModalOpenUpdate(false)}
                  UpdateQAFunc={UpdateQA}
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

export default Questions_Update;
