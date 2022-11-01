// Manage_Answer_Add.js
// 관리자 Q&A 답변등록

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Manage_Answer_Add = (prop) => {
  const { id } = useParams();

  // DB 데이터 불러오기 (상세정보)
  const [AnswerAdd, setAnswerAdd] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:80/manage/manage_answer_detail?id=${id}`)
      .then((res) => {
        setAnswerAdd(res.data);
      });
  }, []);

  // DB 데이터 불러오기 (리스트 추가)
  const addQA = () => {
    const answer_title = document.getElementById("answerTitle").value;
    const answer_content = document.getElementById("answerContent").value;

    const params = {
      question_id: id,
      answer_title: answer_title,
      answer_content: answer_content,
      member_id: 1,
    };

    axios.post(`http://localhost:80/manage/manage_answer_add`, params);

    // 새로고침
    window.location.replace(`/Manage_Question_Detail/${id}`);
  };

  return (
    <div>
      <div className="manage_answer_add">
        <div className="ui_container">
          <h3>Q & A 답변등록</h3>
          <div className="ui_border">
            <div className="border_cont">
              <table>
                <thead>
                  <tr>
                    <th>제목</th>
                    <td>
                      <input
                        type="text"
                        id="answerTitle"
                        className="answers_title"
                      />
                    </td>
                  </tr>
                </thead>
              </table>

              {/* 내용 */}
              <textarea id="answerContent" cols="30" rows="10"></textarea>
            </div>

            <div className="Notice_button">
              <button onClick={addQA}>등록</button>
              <Link to="/Manage_Question">
                <button>목록</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manage_Answer_Add;
