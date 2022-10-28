// AdminNoticeList.js
import React from "react";
import "./AdminNoticeList.css";
import { Link } from "react-router-dom";

export default function AdminNoticeList(props) {
  return (
    // <div class="container">
    //   <table class="board_table">
    //     <tbody>
    <tr>
      {/* 번호 */}
      <td>
        <span>{props.notice_num}</span>
      </td>
      {/* 구분 */}
      <td>
        <span>{props.category_name}</span>
      </td>
      {/* 제목 */}
      <div>
        <Link to={`/manage_notice_detail/${props.notice_id}`}>
          <td> {props.notice_title}</td>
        </Link>
      </div>

      {/* 등록일 */}
      <td>
        <span>{props.notice_reg_date}</span>
      </td>
      {/* 조회수 */}
      <td>
        <span>{props.notice_count}</span>
      </td>
    </tr>
    //     </tbody>
    //   </table>
    // </div>
  );
}
