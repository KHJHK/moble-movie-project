// Member_MyPage_resign.js
// 회원탈퇴
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import jwtDecode from "jwt-decode";

export default function ads() {
  confirmAlert({
    title: "예매를 취소하시겠습니까?",
    message: "Are you sure you want to cancel the reservation?",
    buttons: [
      {
        label: "yes",
        onClick: () => alert("예매가 취소되었습니다."),
      },

      {
        label: "No",
      },
    ],
  });
}

export function ads2() {
  let localStorage = window.localStorage;
  const decoded = jwtDecode(JSON.stringify(localStorage.getItem("token")));

  async function resign() {
    try {
      const response = await axios.post(
        `http://localhost:80/member/member_delete`,
        {
          member_account: decoded.member_account,
        }
      );
      console.log(response.data);
      alert(response.data);
      window.location.href = "http://localhost:3000/";
      localStorage.removeItem("token");
    } catch (error) {
      console.log(error);
    }
  }

  confirmAlert({
    title: "회원탈퇴를 진행하시겠습니까?",

    message: "Are you sure you want to cancel the reservation?",

    buttons: [
      {
        label: "yes",
        onClick: () => resign(),
      },

      {
        label: "No",
      },
    ],
  });
}
