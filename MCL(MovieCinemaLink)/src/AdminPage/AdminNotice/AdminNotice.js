// Adminmanage_adminList.js
import React, { useState, useEffect } from "react";
import AdminHeader from "../AdminHeader";
import AdminNav from "../AdminNav";
import axios from "axios";
import AdminNoticeList from "./AdminNoticeList.js";
import AdminNoticeDeleteList from "./AdminNoticeDeleteList.js";
import { Link } from "react-router-dom";
import "./AdminNotice.css";

const AdminNotice = () => {
  // 관리자페이지 공지사항 리스트
  const [NoticeList, setNoticeList] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:80/manage/manage_notice`).then((res) => {
      // console.log("res.data : " + JSON.stringify(res[1]));
      setNoticeList(res.data);
    });
  }, []);
  // 관리자페이지 공지사항 삭제 리스트
  const [NoticeDeleteList, setNoticeDeleteList] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:80/manage/manage_delete_notice`).then((res) => {
      // console.log("res.data : " + JSON.stringify(res[1]));
      setNoticeDeleteList(res.data);
    });
  }, []);

  return (
    <div className="AdminNotice">
      <AdminHeader />
      {/* <AdminNav /> */}
      <h3>관리자페이지 공지사항 리스트</h3>
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
          {NoticeList.map((item) => {
            return (
              <AdminNoticeList
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
      <Link to="manage_notice_add">
        <button>공지사항 추가</button>
      </Link>

      <h3>관리자페이지 공지사항 삭제 리스트</h3>
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
              <AdminNoticeDeleteList
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
  );
};

export default AdminNotice;
