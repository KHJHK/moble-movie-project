// Notice_NoticeMain_Notice.js
import React from "react";
import "./Notice_NoticeMain.css";
import { Link } from "react-router-dom";

export default function Notice_NoticeMain_Notice(props) {
  return (
    // <div className="container">
    //   <table className="board_table">
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
      <td className="tbodyTitle" key={props.notice_id}>
        <Link to={`/Notice_NoticeInfo/${props.notice_id}`}>
          <strong>{props.notice_title}</strong>
        </Link>
      </td>
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
