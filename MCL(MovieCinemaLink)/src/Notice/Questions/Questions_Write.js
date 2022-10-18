// Questions_Write.js

import React from "react";
import "./Questions_Write.css";
import { Link } from "react-router-dom";

import Footer from "../../Main/Footer";
import Header from "../../Main/Header";

const Questions_Write = () => {
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
                    <select className="Questions_select">
                      <option value="box01">회원</option>
                      <option value="box02">로그인/회원가입</option>
                      <option value="box03">영화</option>
                      <option value="box04">예매</option>
                      <option value="box05">기타</option>
                    </select>
                  </td>
                </tr>

                <tr>
                  <th>제목</th>
                  <td>
                    <input type="text" className="questions_title" />
                  </td>
                </tr>
              </thead>
            </table>

            <textarea id="" cols="30" rows="10">
              내용을 입력해 주세요.
            </textarea>
          </div>
          <div class="Notice_btn">
            {/* 수정필요 */}
            <Link to="/Questions_Questions">
              <button>등록</button>
            </Link>

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
