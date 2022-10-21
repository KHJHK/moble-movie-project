// Notice_NoticeMain.js
import React, { useState, useEffect } from "react";
import "./Notice_NoticeMain.css";
import Notice_NoticeMain_Notice from "./Notice_NoticeMain_Notice";
import axios from "axios";

const Notice_NoticeMain = () => {
  // DB 데이터 불러오기
  const [notice, setNotice] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:80/board/notice`).then((res) => {
      // console.log("res.data : " + JSON.stringify(res[1]));
      setNotice(res.data);
    });
  }, []);

  return (
    <div className="Notice_NoticeMain">
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

          <tbody>
            {/* 데이터 불러오기 */}
            {notice.map((item) => {
              return (
                <Notice_NoticeMain_Notice
                  notice_id={item.notice_id}
                  notice_num={item.notice_num}
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
    </div>
  );
};

export default Notice_NoticeMain;
