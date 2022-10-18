// Questions_QuestionsMain_Questions.js
import React from "react";
import "./Questions_QuestionsMain.css";
import { Link } from "react-router-dom";

export default function Questions_QuestionsMain_Questions(props) {
  return (
    // <div class="container">
    //   <table class="board_table">
    //     <tbody>
    <tr>
      <td>
        <span>{props.questions_id}</span>
      </td>
      <td>
        <span>{props.questions_category_name}</span>
      </td>
      <td className="tbodyTitle" key={props.questions_id}>
        <Link to={`/Questions_QuestionsInfo/${props.questions_id}`}>
          <strong>{props.questions_title}</strong>
        </Link>
      </td>
      <td>
        <span>{props.questions_reg_date}</span>
      </td>
      <td>
        <span>{props.questions_memberId}</span>
      </td>
    </tr>
    //     </tbody>
    //   </table>
    // </div>
  );
}
