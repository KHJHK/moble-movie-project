// Manage_Question_Delete_List.js
import React from "react";
import { Link } from "react-router-dom";

export default function Manage_Question_Delete_List(props) {
  return (
    // <div class="container">
    //   <table class="board_table">
    //     <tbody>
    <tr>
      {/* 번호 */}
      <td>
        <span>{props.question_num}</span>
      </td>
      {/* 구분 */}
      <td>
        <span>{props.category_name}</span>
      </td>
      {/* 제목 */}
      <td className="tbodyTitle" key={props.question_id}>
        <strong>{props.question_title}</strong>
      </td>
      {/* 등록일 */}
      <td>
        <span>{props.question_reg_date}</span>
      </td>
      {/* 회원ID */}
      <td>
        <span>{props.member_account}</span>
      </td>
    </tr>
    //     </tbody>
    //   </table>
    // </div>
  );
}
