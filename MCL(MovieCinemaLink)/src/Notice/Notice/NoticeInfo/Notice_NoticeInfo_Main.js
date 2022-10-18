// Notice_NoticeInfo_Main.js

import React from "react";
import "./Notice_NoticeInfo_Main.css";
import { Notice_NoticeMainJson } from "../Notice_NoticeMainJson";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Notice_NoticeInfo_Main(props) {
  const { id } = useParams();

  const Notice_NoticeInfo_Main1 = (key) => {
    if (id == Notice_NoticeMainJson.results[key].notice_id) {
      return (
        <div className="Notice_NoticeInfo_Main">
          <section className="article_detail">
            <table>
              <thead>
                <tr>
                  <th>번호</th>
                  <td>{Notice_NoticeMainJson.results[key].notice_id}</td>

                  <th>아이디</th>
                  <td>{Notice_NoticeMainJson.results[key].notice_id}</td>
                </tr>

                <tr>
                  <th>날짜</th>
                  <td>{Notice_NoticeMainJson.results[key].notice_reg_date}</td>

                  <th>조회수</th>
                  <td>{Notice_NoticeMainJson.results[key].notice_count}</td>
                </tr>

                <tr>
                  <th>제목</th>
                  <td>{Notice_NoticeMainJson.results[key].notice_title}</td>

                  <th>카테고리</th>
                  <td>{Notice_NoticeMainJson.results[key].category_name}</td>
                </tr>
              </thead>
            </table>

            {/* 내용 */}
            <div class="article_body">내용</div>
          </section>
          <Link to="/Notice_Notice">
            <button>목록</button>
          </Link>
        </div>
      );
    }
  };
  return (
    <div>
      <div>
        {Object.keys(Notice_NoticeMainJson.results).map((key) =>
          Notice_NoticeInfo_Main1(key)
        )}
      </div>
    </div>
  );
}
export default Notice_NoticeInfo_Main;
