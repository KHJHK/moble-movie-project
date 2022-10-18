// Notice_NoticeMain_Notice.js
import React from "react";
import "./Notice_NoticeMain.css";
import { Link } from "react-router-dom";

export default function Notice_NoticeMain_Notice(props) {
  return (
    // <div class="container">
    //   <table class="board_table">
    //     <tbody>
    <tr>
      <td>
        <span>{props.notice_id}</span>
      </td>
      <td>
        <span>{props.category_name}</span>
      </td>
      <td className="tbodyTitle" key={props.notice_id}>
        <Link to={`/Notice_NoticeInfo/${props.notice_id}`}>
          <strong>{props.notice_title}</strong>
        </Link>
      </td>
      <td>
        <span>{props.notice_reg_date}</span>
      </td>
      <td>
        <span>{props.notice_count}</span>
      </td>
    </tr>
    //     </tbody>
    //   </table>
    // </div>
  );
}
