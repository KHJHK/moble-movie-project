// Questions_QuestionsMain_Questions.js
import React from "react";
import "./Questions_QuestionsMain.css";
import { Link } from "react-router-dom";
import errorPage from "../../Main/errorPage";

export default function Questions_QuestionsMain_Questions(props) {

  // `/Questions_QuestionsInfo/${props.question_id}`

  if (localStorage.getItem("token") === null) {
    return (
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
          <Link onClick={() => alert("로그인 후 이용가능 합니다.")} to={"#"}>
            <strong>{props.question_title}</strong>
          </Link>
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
  } else {
    return (
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
          <Link to={`/Questions_QuestionsInfo/${props.question_id}`}>
            <strong>{props.question_title}</strong>
          </Link>
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
}
