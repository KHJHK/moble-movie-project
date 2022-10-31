// Questions_QuestionsInfo_Main.js
import React, { useState, useEffect } from "react";
import "./Questions_QuestionsInfo_Main.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Questions_modal_Delete from "../modal/Questions_modal_Delete";
import jwtDecode from "jwt-decode";

function Questions_QuestionsInfo_Main(props) {
  const { id } = useParams(); 

  // DB 데이터 불러오기 (상세정보)
  const [questions, setQuestionsInfo] = useState("");


  const deleteBTN = ()=>{
    console.log ("테스트합니다 : "+ questions.member_account);
  };

  const decode = jwtDecode(
    JSON.stringify(window.localStorage.getItem("token"))
  );

  useEffect(() => {
    axios
      .get(`http://localhost:80/board/question_detail?id=${id}`)
      .then((res) => {
        
        setQuestionsInfo(res.data);

      });
  }, []);




useEffect(() => {
 
  if(questions.member_account!==decode.member_account){
    document.querySelector(".Q_amethyst").style.display="none"
    document.querySelector(".Q_delete").style.display="none"
    }else{
      document.querySelector(".Q_amethyst").style.display="block"
      document.querySelector(".Q_delete").style.display="block"

      document.querySelector(".Q_amethyst").style.float="right"
      document.querySelector(".Q_delete").style.float="right"


    }
  
}, [questions]);

  // if(questions.member_account!==decode.member_account){
  // document.querySelector(".Q_amethyst").style.display="none"
  // document.querySelector(".Q_delete").style.display="none"
  // console.log("들어왔다.")
  // }










  // DB 데이터 불러오기 (리스트 삭제)
  const deleteQA = () => {
    const member_id = 1; //document.getElementById("memberId").value;
    const question_id = document.getElementById("questionId").value;
    console.log("삭제 : ", member_id, question_id);

    const params = {
      member_id: 1,
      question_id: question_id,
    };

    axios.post(`http://localhost:80/board/question_delete`, params);

    // 새로고침
    window.location.replace("/Questions_Questions");
  };

  // 관리자 DB 데이터 불러오기 (관리자 답변)
  const [answer, setAnswerInfo] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:80/board/answer_detail?id=${id}`)
      .then((res) => {
        setAnswerInfo(res.data);
      });
  }, []);

  // 등록했을 때 팝업창 실행
  const [modalOpenDelete, setmodalOpenDelete] = useState(false);

  return (
    <div className="Questions_QuestionsInfo_Main">
      {/* ======================== 사용자 질문 ======================== */}
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
            {/* <tr>
              <td id="questionId">{questions.question_id}</td>
            </tr> */}
            <input
              type="hidden"
              id="questionId"
              value={questions.question_id}
            />
          </thead>
        </table>

        {/* 내용 */}
        <div className="article_body">
          <pre>{questions.question_content}</pre>
        </div>
      </section>
      <br />

      {/* ======================== 관리자 답변 ======================== */}
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

            <input type="hidden" id="questionId" value={answer.question_id} />
          </thead>
        </table>

        {/* 내용 */}
        <div className="article_body">
          <pre>{answer.answer_content}</pre>
        </div>
      </section>
      {/* ======================== btn ======================== */}
      <div className="Notice_btn">
        <Link to="/Questions_Questions">
          <button>목록</button>
        </Link>

        <Link to={`/Questions_Update/${questions.question_id}`}>
          <button  className='Q_amethyst'>수정</button>
        </Link>

        <React.Fragment>
          <button onClick={() => setmodalOpenDelete(true)} className='Q_delete'>삭제</button>
          <Questions_modal_Delete
            open={modalOpenDelete}
            close={() => setmodalOpenDelete(false)}
            deleteQAFunc={deleteQA}
          />
        </React.Fragment>
      </div>
    </div>
  );
}
export default Questions_QuestionsInfo_Main;
