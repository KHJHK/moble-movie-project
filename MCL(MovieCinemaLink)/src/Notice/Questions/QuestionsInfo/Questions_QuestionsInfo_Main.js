// Questions_QuestionsInfo_Main.js

import React from "react";
import "./Questions_QuestionsInfo_Main.css";
import { Questions_QuestionsMainJson } from "../Questions_QuestionsMainJson";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Questions_QuestionsInfo_Main(props) {
  const { id } = useParams();

  const Questions_QuestionsInfo_Main1 = (key) => {
    if (id == Questions_QuestionsMainJson.results[key].questions_id) {
      return (
        <div className="Questions_QuestionsInfo_Main">
          <section className="article_detail">
            <table>
              <thead>
                <tr>
                  <th>번호</th>
                  <td>
                    {Questions_QuestionsMainJson.results[key].questions_id}
                  </td>

                  <th>회원ID</th>
                  <td>
                    {
                      Questions_QuestionsMainJson.results[key]
                        .questions_memberId
                    }
                  </td>
                </tr>

                <tr>
                  <th>등록일</th>
                  <td>
                    {
                      Questions_QuestionsMainJson.results[key]
                        .questions_reg_date
                    }
                  </td>

                  <th>구분</th>
                  <td>
                    {
                      Questions_QuestionsMainJson.results[key]
                        .questions_category_name
                    }
                  </td>
                </tr>

                <tr>
                  <th>제목</th>
                  <td>
                    {Questions_QuestionsMainJson.results[key].questions_title}
                  </td>
                </tr>
              </thead>
            </table>

            {/* 내용 */}
            <div class="article_body">내용</div>
          </section>
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
  };
  return (
    <div>
      <div>
        {Object.keys(Questions_QuestionsMainJson.results).map((key) =>
          Questions_QuestionsInfo_Main1(key)
        )}
      </div>
    </div>
  );
}
export default Questions_QuestionsInfo_Main;
