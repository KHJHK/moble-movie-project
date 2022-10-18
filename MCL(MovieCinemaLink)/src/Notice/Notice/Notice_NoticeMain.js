// Notice_NoticeMain.js
import React from "react";
import { useState } from "react";
import { Notice_NoticeMainJson } from "../Notice/Notice_NoticeMainJson";
import Notice_NoticeMain_Notice from "./Notice_NoticeMain_Notice";

const Notice_NoticeMain = () => {
  const [id, setId] = useState("");
  return (
    <section>
      <h3>공지사항</h3>

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
                조회수
              </th>
            </tr>
          </thead>
          {/* 데이터 불러오기 */}
          <tbody>
            {Notice_NoticeMainJson.results.map((item) => {
              return (
                <Notice_NoticeMain_Notice
                  notice_id={item.notice_id}
                  category_name={item.category_name}
                  notice_title={item.notice_title}
                  notice_reg_date={item.notice_reg_date}
                  notice_count={item.notice_count}
                  // setId={setId}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Notice_NoticeMain;
