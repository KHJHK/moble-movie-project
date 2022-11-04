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

      {/* <!-- Notice list --> */}
      <div className="container">
        <table className="board_table">
          <thead>
            <tr>
              <th scope="col" className="th_num">
                번호
              </th>
              <th scope="col" className="th_category">
                구분
              </th>
              <th scope="col" className="th_title">
                제목
              </th>
              <th scope="col" className="th_date">
                등록일
              </th>
              <th scope="col" className="th_views">
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
