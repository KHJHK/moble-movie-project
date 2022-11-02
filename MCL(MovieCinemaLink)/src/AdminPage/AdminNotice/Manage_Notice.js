// Adminmanage_adminList.js
// 관리자 공지사항 리스트

import React, { useState, useEffect } from "react";
import AdminHeader from "../AdminHeader";
import AdminNav from "../AdminNav";
import "./ManageNotice.css";
import axios from "axios";
import Manage_Notice_List from "./Manage_Notice_List.js";
import Manage_Delete_Notice_List from "./Manage_Delete_Notice_List.js";
import { Link } from "react-router-dom";

const Manage_Notice = () => {
  // 관리자페이지 공지사항 리스트
  const [NoticeList, setNoticeList] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:80/manage/manage_notice_list`).then((res) => {
      // console.log("res.data : " + JSON.stringify(res[1]));
      setNoticeList(res.data);
    });
  }, []);

  // 관리자페이지 공지사항 삭제 리스트
  const [NoticeDeleteList, setNoticeDeleteList] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:80/manage/manage_delete_notice_list`)
      .then((res) => {
        // console.log("res.data : " + JSON.stringify(res[1]));
        setNoticeDeleteList(res.data);
      });
  }, []);

  return (
    <div className="ADMIN">
      <AdminHeader />
      <AdminNav />
      <div className="ADManageNotice">
        <h3>관리자페이지 공지사항 리스트</h3>
        <div>
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
              {NoticeList.map((item) => {
                return (
                  <Manage_Notice_List
                    notice_id={item.notice_id}
                    notice_num={item.notice_num}
                    category_name={item.category_name}
                    notice_title={item.notice_title}
                    notice_reg_date={item.notice_reg_date}
                    notice_count={item.notice_count}
                  />
                );
              })}
            </tbody>
          </table>
        </div>

        <Link to="Manage_Notice_Add">
          <button>공지사항 추가</button>
        </Link>

        <h3>관리자페이지 공지사항 삭제 리스트</h3>
        <div>
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
              {NoticeDeleteList.map((item) => {
                return (
                  <Manage_Delete_Notice_List
                    notice_id={item.notice_id}
                    notice_num={item.notice_num}
                    category_name={item.category_name}
                    notice_title={item.notice_title}
                    notice_reg_date={item.notice_reg_date}
                    notice_count={item.notice_count}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Manage_Notice;
