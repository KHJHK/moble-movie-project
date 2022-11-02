// Manage_Delete_Notice_List.js
import React from "react";

export default function Manage_Delete_Notice_List(props) {
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
      <td className="tbodyTitle">
        <strong> {props.notice_title}</strong>
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
