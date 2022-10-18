// Questions_QuestionsMain.js
import React from "react";
import "./Questions_QuestionsMain.css";
import { useState } from "react";
import { Questions_QuestionsMainJson } from "../Questions/Questions_QuestionsMainJson";
import Questions_QuestionsMain_Questions from "./Questions_QuestionsMain_Questions";
import { Link } from "react-router-dom";

const Questions_QuestionsMain = () => {
  const [id, setId] = useState("");
  return (
    <section>
      <h3>문의사항</h3>

      {/* 검색창 */}
      <div id="board_search">
        <div class="container">
          <div class="search_window">
            <div class="search_wrap">
              {/* <label for="search" class="blind">공지사항 내용 검색</label> */}
              <input
                id="search"
                type="search"
                name=""
                placeholder="검색어를 입력해주세요."
              />
              <button type="submit">검색</button>
            </div>
          </div>
        </div>
      </div>
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
          {/* 데이터 불러오기 */}
          <tbody>
            {Questions_QuestionsMainJson.results.map((item) => {
              return (
                <Questions_QuestionsMain_Questions
                  questions_id={item.questions_id}
                  questions_category_name={item.questions_category_name}
                  questions_title={item.questions_title}
                  questions_reg_date={item.questions_reg_date}
                  questions_memberId={item.questions_memberId}
                  // setId={setId}
                />
              );
            })}
          </tbody>
        </table>
        <Link to="Questions_Write">
          <button className="Questions_QuestionsMain_btn">등록</button>
        </Link>
      </div>
    </section>
  );
};

export default Questions_QuestionsMain;
