// Member_MyPage_resign.js
// 회원탈퇴
import { confirmAlert } from "react-confirm-alert";

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
  confirmAlert({
    title: "회원탈퇴를 진행하시겠습니까?",

    message: "Are you sure you want to cancel the reservation?",

    buttons: [
      {
        label: "yes",
        onClick: () => alert("회원이 탈퇴되었습니다.."),
      },

      {
        label: "No",
      },
    ],
  });
}
