// manage_QuestionList.js
//관리자 Q&A 리스트

import React, { useState, useEffect } from "react";
import AdminHeader from "../AdminHeader";
import AdminNav from "../AdminNav";
import { Link } from "react-router-dom";
import axios from "axios";
import Manage_Question_List from "./Manage_Question_List.js";
import Manage_Question_Delete_List from "./Manage_Question_Delete_List.js";

const manage_QuestionList = () => {
  //관리자페이지 Q & A 리스트
  const [QuestionList, setQuestionList] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:80/manage/manage_question_list`).then((res) => {
      // console.log("res.data : " + JSON.stringify(res[1]));
      setQuestionList(res.data);
    });
  }, []);
  // 관리자페이지 Q & A 삭제 리스트
  const [QuestionDeleteList, setQuestionDeleteList] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:80/manage/manage_question_delete_list`)
      .then((res) => {
        // console.log("res.data : " + JSON.stringify(res[1]));
        setQuestionDeleteList(res.data);
      });
  }, []);

  return (
    <div classNameName="manage_QuestionList">
      <AdminHeader />
      <AdminNav />
      <h3>관리자페이지 Q & A 리스트</h3>

      {/* <!-- Notice list --> */}
      <div classNameName="container">
        <table classNameName="board_table">
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
                회원ID
              </th>
            </tr>
          </thead>
          {/* DB 데이터 불러오기 */}
          <tbody>
            {QuestionList.map((item) => {
              return (
                <Manage_Question_List
                  question_id={item.question_id}
                  question_num={item.question_num}
                  category_name={item.category_name}
                  question_title={item.question_title}
                  question_reg_date={item.question_reg_date}
                  member_account={item.member_account}
                />
              );
            })}
          </tbody>
        </table>
        <h3>Q&A 삭제 리스트</h3>
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
                회원ID
              </th>
            </tr>
          </thead>
          {/* DB 데이터 불러오기 */}
          <tbody>
            {QuestionDeleteList.map((item) => {
              return (
                <Manage_Question_Delete_List
                  question_id={item.question_id}
                  question_num={item.question_num}
                  category_name={item.category_name}
                  question_title={item.question_title}
                  question_reg_date={item.question_reg_date}
                  member_account={item.member_account}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default manage_QuestionList;
