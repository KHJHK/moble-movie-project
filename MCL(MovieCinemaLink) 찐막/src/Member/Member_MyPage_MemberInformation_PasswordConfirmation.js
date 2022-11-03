// Member_MyPage_MemberInformation_PasswordConfirmation.js
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Member_MyPage_MemberInformation_PasswordConfirmation.css";
// import Member_MyPage_MemeberInfomation from "../Member/Member_MyPage_MemberInformation";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Member_MyPage_Membermiddle from "./Member_MyPage_Membermiddle";

const Member_MyPage_MemberInformation_PasswordConfirmation = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;
  const [modalOpenSignUp, setModalOpenSignUp] = useState(false);

  const openModalSignup = () => {
    setModalOpenSignUp(true);
  };
  const closeModalSignUp = () => {
    setModalOpenSignUp(false);
  };
  let localStorage = window.localStorage;
  // localStorage.getItem("token");

  const decoded = jwtDecode(JSON.stringify(localStorage.getItem("token")));

  // const password = document.getElementById("password");
  const [pw, setPw] = useState("");
  const [result, setResult] = useState("");
  // setPw(password.target.value);

  const pwCk2 = (e) => {
    const pwCurrent = e.target.value;
    setPw(pwCurrent);
  };

  async function pwCk() {
    try {
      const response = await axios.post(
        `http://localhost:80/member/member_pw_check`,
        {
          input_pw: pw,
          member_pw: decoded.member_pw,
        }
      );
      // console.log((pw));

      console.log(response.data);
      setResult(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <div className="customStyles">
          <div className="Modal_fullTitle">
            <h4>비밀번호 확인</h4>
            <button className="x_button" onClick={close}>
              &times;
            </button>
          </div>
          <main>
            <br />
            <input
              onChange={pwCk2}
              type="password"
              placeholder="비밀번호를 입력하세요"
              id="pw"
            />
            <br />
            <br />
          </main>
          <br />
          {/* <Link to="/Member_MyPage_MemberInformation"> */}
          <React.Fragment>
            <button
              className="close"
              onClick={() => {
                openModalSignup();
                pwCk();
                // console.log(decoded.member_pw);
              }}
            >
              확인
            </button>
            <Member_MyPage_Membermiddle
              open={modalOpenSignUp}
              close={closeModalSignUp}
              result={result}
            />
          </React.Fragment>
          {/* </Link> */}

          <button className="close" onClick={close}>
            닫기
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Member_MyPage_MemberInformation_PasswordConfirmation;
