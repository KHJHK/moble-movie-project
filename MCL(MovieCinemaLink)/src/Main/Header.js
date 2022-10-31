// Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import axios from "axios";
import jwtDecode from "jwt-decode";
// import css
import "./Header.css";
import "./modal.css";

const CustomModal = (props) => {
  const { isOpen } = props;
  return isOpen ? <ReactModal {...props} /> : null;
};

//ModalComponent 스타일
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    alignItems: "center",
    transform: "translate(-50%, -50%)",
  },
};

const Header = () => {
  //로그인 유지 세션
  // let sessionStorage = window.sessionStorage;
  let localStorage = window.localStorage;

  // 로그인 회원의 정보
  const [list, setList] = useState([]);

  let [loginId, setLoginId] = useState("");
  let [loginPassword, setLoginPassword] = useState("");

  const [useCustomModal, setUseCustomModal] = React.useState(false);

  // 로그인 화면 1
  const [showModal1, setShowModal1] = React.useState(false);
  // 회원가입 화면 4
  const [showModal4, setShowModal4] = React.useState(false);
  // 회원가입 결과 3
  const [showModal3, setShowModal3] = React.useState(false);
  // ID,PW 찾기 화면 2
  const [showModal2, setShowModal2] = React.useState(false);
  // ID 찾기 5
  const [showModal5, setShowModal5] = React.useState(false);

  // PW 변경
  // (PW 변경 -> 인증메일전송) 11 =>
  // 인증번호 전송 후 PW 설정창 6 =>
  // PW 재설정 결과 12
  const [showModal11, setShowModal11] = React.useState(false);
  const [showModal6, setShowModal6] = React.useState(false);
  const [showModal12, setShowModal12] = React.useState(false);

  // 7, 8 : 로그인 실패, 성공 (미구현)
  const [showModal7, setShowModal7] = React.useState(false);
  const [showModal8, setShowModal8] = React.useState(false);

  const ModalComponent = useCustomModal ? CustomModal : ReactModal;

  // ==========================================================================
  // 2: ID/PW찾기
  //ID 찾기
  const [nameID, setNameID] = useState("");
  const [emailID, setEmailID] = useState("");

  const [nameMessageID, setNameMessageID] = useState("");
  const [emailMessageID, setEmailMessageID] = useState("");

  const [isNameID, setIsNameID] = useState(false);
  const [isEmailID, setIsEmailID] = useState(false);

  const onNameChangeID = (e) => {
    setNameID(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 5) {
      setNameMessageID("2글자 이상 5글자 미만으로 입력해주세요.");
      setIsNameID(false);
    } else {
      setNameMessageID("올바른 이름 형식입니다.");
      setIsNameID(true);
    }
  };

  const onEmailChangeID = (e) => {
    const emailIDRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailIDCurrent = e.target.value;
    setEmailID(emailIDCurrent);

    if (!emailIDRegex.test(emailIDCurrent)) {
      setEmailMessageID("이메일 형식이 틀렸습니다.");
      setIsEmailID(false);
    } else {
      setEmailMessageID("올바른 이메일 형식입니다.");
      setIsEmailID(true);
    }
  };

  // FoundId
  const [idId, setIdId] = useState("");

  //PW 찾기

  const [idPW, setIdPW] = useState("");
  const [namePW, setNamePW] = useState("");
  const [emailPW, setEmailPW] = useState("");

  const [idMessagePW, setIdMessagePW] = useState("");
  const [nameMessagePW, setNameMessagePW] = useState("");
  const [emailMessagePW, setEmailMessagePW] = useState("");

  const [isIdPW, setIsIdPW] = useState(false);
  const [isNamePW, setIsNamePW] = useState(false);
  const [isEmailPW, setIsEmailPW] = useState(false);

  const onIdChangePW = (e) => {
    const idPWRegex = /[~!@#$%^&*()_+|<>?:{}.,/;='"|a-z|A-Z|0-9]/;
    const idPWCurrent = e.target.value;
    setIdPW(idPWCurrent);

    if (!idPWRegex.test(idPWCurrent)) {
      setIdMessagePW("영문, 숫자만 입력 가능합니다.");
      setIsIdPW(false);
    } else {
      setIdMessagePW("올바른 아이디 형식입니다.");
      setIsIdPW(true);
    }
  };
  const onNameChangePW = (e) => {
    setNamePW(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 5) {
      setNameMessagePW("2글자 이상 5글자 미만으로 입력해주세요.");
      setIsNamePW(false);
    } else {
      setNameMessagePW("올바른 이름 형식입니다.");
      setIsNamePW(true);
    }
  };

  const onEmailChangePW = (e) => {
    const emailPWRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailPWCurrent = e.target.value;
    setEmailPW(emailPWCurrent);

    if (!emailPWRegex.test(emailPWCurrent)) {
      setEmailMessagePW("이메일 형식이 틀렸습니다.");
      setIsEmailPW(false);
    } else {
      setEmailMessagePW("올바른 이메일 형식입니다.");
      setIsEmailPW(true);
    }
  };

  //4 : 회원가입

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwCf, setPwCf] = useState("");
  const [nickname, setNickname] = useState("");

  //오류메시지 상태저장
  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [idMessage, setIdMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [pwCfMessage, setPwCfMessage] = useState("");
  const [nicknameMessage, setNicknameMessage] = useState("");

  // 유효성 검사
  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isId, setIsId] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const [isPwCf, setIsPwCf] = useState(false);
  const [isNickname, setIsNickname] = useState(false);

  /*로그인경우 예매하기로 넘어가는 함수*/
  function Ticketlogin() {
    if (localStorage.getItem("token") !== null) {
      window.location.replace("/Ticketing");
    } else {
      setShowModal1(true);
    }
  }

  // 조건문
  const onNameChange = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 5) {
      setNameMessage("2글자 이상 5글자 미만으로 입력해주세요.");
      setIsName(false);
    } else {
      setNameMessage("올바른 이름 형식입니다.");
      setIsName(true);
    }
  };

  const onEmailChange = (e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일 형식이 틀렸습니다.");
      setIsEmail(false);
    } else {
      setEmailMessage("올바른 이메일 형식입니다.");
      setIsEmail(true);
    }
  };
  const onIdChange = (e) => {
    const idRegex = /[~!@#$%^&*()_+|<>?:{}.,/;='"|a-z|A-Z|0-9]/;
    const idCurrent = e.target.value;
    setId(idCurrent);

    if (!idRegex.test(idCurrent)) {
      setIdMessage("영문, 숫자만 입력 가능합니다.");
      setIsId(false);
    } else {
      setIdMessage("올바른 아이디 형식입니다.");
      setIsId(true);
    }
  };
  const onPwChange = (e) => {
    const pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const pwCurrent = e.target.value;
    setPw(pwCurrent);

    if (!pwRegex.test(pwCurrent)) {
      setPwMessage("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.");
      setIsPw(false);
    } else {
      setPwMessage("안전한 비밀번호입니다.");
      setIsPw(true);
    }
  };
  const onPwCfChange = (e) => {
    const pwCfCurrent = e.target.value;
    setPwCf(pwCfCurrent);

    if (pw === pwCfCurrent) {
      setPwCfMessage("비밀번호가 같습니다.");
      setIsPwCf(true);
    } else {
      setPwCfMessage("비밀번호가 다릅니다.");
      setIsPwCf(false);
    }
  };

  const [dbCk, setDbCk] = useState("");
  const [dbCk2, setDbCk2] = useState([]);
  const onNicknameChange = (e) => {
    // axios.get(`http://localhost:80/manage/manage_userList`)
    //   .then((res) => {
    //     setDbCk(res.data);
    //     console.log(res.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // const nicknameCurrent = e.target.value;
    // setNickname(nicknameCurrent);
    // for (var i = 0; i < 99; i++) {
    //   // setDbCk2(dbCk[i].member_nickname);
    // }
    // if (dbCk2 == nicknameCurrent) {
    //   setNicknameMessage("중복된 닉네임");
    //   setIsNickname(false);
    // } else {
    //   setNicknameMessage("사용가능 닉네임");
    //   setIsNickname(true);
    // }
    // if (!nicknameRegex.test(nicknameCurrent)) {
    //   setNicknameMessage("중복된 닉네임입니다.");
    //   setIsNickname(false);
    // } else if (nicknameRegex.test(nicknameCurrent)) {
    //   setNicknameMessage("사용 가능한 닉네임입니다.");
    //   setIsNickname(true);
    // }
  };

  // 회원가입 정보 보내기

  // const [signUpRs, setSignUpRs] = useState("");

  const SignUp = (e) => {
    const member_account = document.getElementById("memberAccount").value;
    const member_pw = document.getElementById("memberPw").value;
    const member_email = document.getElementById("memberEmail").value;
    const member_name = document.getElementById("memberName").value;
    const member_nickname = document.getElementById("memberNickname").value;
    const member_birth = document.getElementById("memberBirth").value;

    const params = {
      member_account: member_account,
      member_pw: member_pw,
      member_email: member_email,
      member_name: member_name,
      member_nickname: member_nickname,
      member_birth: member_birth,
    };

    axios
      .post(`http://localhost:80/member/signup`, params)
      .then((res) => {
        console.log(res.data);
        console.log(
          "회원가입 : ",
          member_account,
          member_pw,
          member_email,
          member_name,
          member_nickname,
          member_birth
        );
        setSignUpResult(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 회원가입 닉네임 중복확인

  // 회원가입 결과

  const [signUpResult, setSignUpResult] = useState("");

  // id 찾기
  const [fName, setFName] = useState(""); //id찾기 이름 입력 값
  const [fEmail, setFEmail] = useState(""); //id찾기 이메일 입력 값

  const FindId = (e) => {
    axios
      .get(
        `http://localhost:80/member/find_id?member_name=${fName}&member_email=${fEmail}`
      )
      .then((res) => {
        setIdId(res.data);
      });
  };

  // pw 찾기
  const [fPWId, setFPWId] = useState(""); //pw찾기 아이디 입력 값
  const [fPWName, setFPWName] = useState(""); //pw찾기 이름 입력 값
  const [fPWEmail, setFPWEmail] = useState(""); //pw찾기 이메일 입력 값

  const [fPWCode, setFPWCode] = useState(""); // 회원정보 확인 값

  function FindPW(e) {
    axios
      .get(
        `http://localhost:80/member/find_pw?member_account=${fPWId}&member_name=${fPWName}&member_email=${fPWEmail}`
      )
      .then((res) => {
        setFPWCode(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // 회원정보 일치 or 실패
  const Authentication = (e) => {
    if (fPWCode == "인증번호가 전송되었습니다.") {
      setShowModal11(false);
      setShowModal6(true);
    } else {
      setShowModal11(false);
    }
  };

  // 비밀번호 재설정 ing
  const PwSet = (e) => {
    axios
      .get(
        `http://localhost:80/member/reset_pw?member_email=${fPWEmail}&member_pw=${rsPw}&member_code=${rsCode}`
      )
      .then((res) => {
        setRsResult(res.data);
      });
  };
  // fPwEmail                                 //재설정 이메일
  const [rsCode, setRsCode] = useState(""); //재설정 인증번호
  const [rsPw, setRsPw] = useState(""); //재설정 비밀번호
  const [rsPwCk, setRsPwCk] = useState(""); //재설정 비밀번호 확인
  const [rsResult, setRsResult] = useState(""); // 재설정 결과 값

  const Authentication2 = (e) => {
    if (rsResult == "비밀번호가 재설정 되었습니다.") {
      setShowModal6(false);
      setShowModal12(false);
    } else {
      setShowModal12(false);
    }
  };

  // ==========================================================

  async function LoginPost() {
    try {
      const response = await axios.post(`http://localhost:80/member/login`, {
        member_account: loginId,
        member_pw: loginPassword,
      });
      // console.log(response.data);

      if (response.data == "비밀번호가 일치하지 않습니다.") {
        console.log(response.data);
        alert(response.data);
      } else if (response.data == "아이디가 없습니다.") {
        console.log(response.data);
        setShowModal8(true);
        alert(response.data);
      } else if (response.data == "탈퇴 회원 입니다.") {
        alert(response.data);
      } else {
        // 로그인 성공 시
        localStorage.setItem("token", JSON.stringify(response.data));
        alert("로그인 성공");
        setShowModal1(false);

        // 로그인 회원 정보 list에 넣어주기
        const decoded = jwtDecode(JSON.stringify(response.data));
        setList({
          member_account: decoded.member_account,
          member_pw: decoded.member_pw,
          member_auth: decoded.member_auth,
          member_birth: decoded.member_birth,
          member_email: decoded.member_email,
          member_id: decoded.member_id,
          member_modify_date: decoded.member_modify_date,
          member_name: decoded.member_name,
          member_nickname: decoded.member_nickname,
          member_reg_date: decoded.member_reg_date,
        });
        console.log("list : " + list);
        window.location.href = "http://localhost:3000/";
      }
    } catch (error) {
      console.log(error);
    }
  }

  // const [isAdmin, setIsAdmin] = useState(false);

  // if (decoded2.member_auth == "ADMIN") {
  //   setIsAdmin(true);
  // } else {
  //   setIsAdmin(false);
  // }

  // 로그인, 회원가입 || 로그아웃, 마이페이지

  // 관리자 상태 확인
  function qwer() {
    const decoded2 = jwtDecode(JSON.stringify(localStorage.getItem("token")));

    if (decoded2.member_auth == "ADMIN") {
      return (
        <Link to="/AdminMain">
          <h4>관리자</h4>
        </Link>
      );
    }
  }

  const logIn = (e) => {
    if (localStorage.getItem("token") == null) {
      return (
        <div className="TopMenu">
          <div className="TopMenu3">
            <h4 onClick={() => setShowModal1(true)}>로그인</h4>
          </div>
          <div className="TopMenu2">
            <h4 onClick={() => setShowModal4(true)}>회원가입</h4>
          </div>
        </div>
      );
    } else if (localStorage.getItem("token") != null) {
      return (
        <div className="TopMenu">
          <div className="TopMenu1">{qwer()}</div>
          <div className="TopMenu2">
            <Link to={"/"}>
              <h4
                onClick={() => {
                  localStorage.removeItem("token");
                  alert("로그아웃");
                  window.location.href = "http://localhost:3000/";
                }}
              >
                로그아웃
              </h4>
            </Link>
          </div>
          <div className="TopMenu3">
            <Link to="/Member_MyPage">
              {/* <React.Fragment> */}
              <h4> 마이페이지</h4>

              {/* <Member_MyPage
                  member_account={list.member_account}
                  member_auth={list.member_auth}
                  member_birth={list.member_birth}
                  member_email={list.member_email}
                  member_id={list.member_id}
                  member_modify_date={list.member_modify_date}
                  member_name={list.member_name}
                  member_nickname={list.member_nickname}
                  member_pw={list.member_pw}
                  member_reg_date={list.member_reg_date}
                />
              </React.Fragment> */}
              {/* 회원정보 넘기기 */}
            </Link>
          </div>
        </div>
      );
    }
  };

  return (
    <header>
      {/* 로고 */}
      <div className="firstpart">
        <div className="imgspace">
          <Link to="/">
            <img
              src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F45568503-bf10-4f63-be4e-a4b3413cb210%2FKakaoTalk_20221031_162545044.png?table=block&id=2034f064-6f48-47d0-8c20-cc786ae79122&spaceId=a1667a61-abcb-4508-b4f5-60651e2ec6d2&width=2000&userId=5327ba06-0f76-4f4c-a1e6-2c1fc32fc768&cache=v2"
              alt="상단 로고사진"
              id="toppicture"
            />
          </Link>
        </div>

        {/* 로그인 */}
        <ModalComponent
          isOpen={showModal1}
          onRequestClose={() => setShowModal1(false)}
          style={customStyles}
        >
          <div className="customStyles">
            <div className="Modal_fullTitle">
              <h4>로그인</h4>
              <button
                className="close_btn"
                onClick={() => setShowModal1(false)}
              >
                &times;
              </button>
            </div>
            <main>
              <br />
              <input
                type="text"
                name="username"
                placeholder="아이디"
                onChange={(e) => {
                  setLoginId(e.target.value);
                }}
              />
              <br />

              <input
                type="password"
                name="password"
                placeholder="비밀번호"
                onChange={(e) => {
                  setLoginPassword(e.target.value);
                }}
              />
              <br />
              <h4 onClick={() => setShowModal2(true)}>
                아이디 / 비밀번호 찾기
              </h4>
              <br />
              <button
                type="submit"
                onClick={() => {
                  LoginPost();
                }}
              >
                로그인
              </button>
              <button onClick={() => setShowModal4(true)}>회원가입</button>
              <button onClick={() => setShowModal1(false)}>닫기</button>
            </main>
          </div>
          {/* </form> */}
        </ModalComponent>

        {/* 회원가입 화면*/}
        <ModalComponent
          isOpen={showModal4}
          onRequestClose={() => setShowModal4(false)}
          style={customStyles}
        >
          <div className="customStyles">
            <div className="Modal_fullTitle">
              <h4>회원가입</h4>
              <button
                className="close_btn"
                onClick={() => setShowModal4(false)}
              >
                &times;
              </button>
            </div>

            <main>
              <br />
              <div>
                <input
                  text="이름"
                  type="name"
                  name="member_name"
                  id="memberName"
                  variant={"outlined"}
                  onChange={onNameChange}
                  placeholder="이름"
                  size="small"
                />
                {name.length > 0 && (
                  <p className={`message ${isName ? "success" : "error"}`}>
                    {nameMessage}
                  </p>
                )}
              </div>
              <br />

              {
                <div>
                  <input
                    type="date"
                    name="member_birth"
                    id="memberBirth"
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              }
              <br />

              <div>
                <input
                  text="이메일"
                  type="email"
                  name="member_email"
                  id="memberEmail"
                  variant="outlined"
                  onChange={onEmailChange}
                  placeholder="이메일"
                  size="small"
                />
                {email.length > 0 && (
                  <p className={`message ${isEmail ? "success" : "error"}`}>
                    {emailMessage}
                  </p>
                )}
              </div>
              <br />

              <div>
                <input
                  text="ID"
                  type="id"
                  name="member_account"
                  id="memberAccount"
                  variant="outlined"
                  onChange={onIdChange}
                  placeholder="아이디"
                  size="small"
                />
                {id.length > 0 && (
                  <p className={`message ${isId ? "success" : "error"}`}>
                    {idMessage}
                  </p>
                )}
              </div>
              <br />

              <div>
                <input
                  onChange={onPwChange}
                  text="PW"
                  type={"password"}
                  name="member_pw"
                  id="memberPw"
                  variant="outlined"
                  placeholder="비밀번호"
                  size="small"
                />
                {pw.length > 0 && (
                  <p className={`message ${isPw ? "success" : "error"}`}>
                    {pwMessage}
                  </p>
                )}
              </div>
              <br />

              <div>
                <input
                  onChange={onPwCfChange}
                  text="PWCF"
                  type={"password"}
                  typeName="pwCf"
                  variant="outlined"
                  placeholder="비밀번호확인"
                  size="small"
                />
                {pwCf.length > 0 && (
                  <p className={`message ${isPwCf ? "success" : "error"}`}>
                    {pwCfMessage}
                  </p>
                )}
              </div>
              <br />

              <div>
                <input
                  onChange={onNicknameChange}
                  text="nickname"
                  type={"nickname"}
                  variant="outlined"
                  name="member_nickname"
                  id="memberNickname"
                  placeholder="닉네임"
                  size="small"
                />
                {nickname.length > 0 && (
                  <p className={`message ${isNickname ? "success" : "error"}`}>
                    {nicknameMessage}
                  </p>
                )}
              </div>
            </main>

            <button
              type="submit"
              onClick={
                //db로 보내기
                (e) => {
                  SignUp(e), setShowModal3(true), setShowModal4(false);
                }
              }
              disabled={!(isName && isEmail && isId && isPw && isPwCf)}
            >
              회원가입완료
            </button>
            <button className="close" onClick={() => setShowModal4(false)}>
              닫기
            </button>
          </div>
        </ModalComponent>

        {/* 회원가입 결과 */}
        <ModalComponent
          isOpen={showModal3}
          onRequestClose={() => setShowModal3(false)}
          style={customStyles}
        >
          <div className="customStyles">
            <div className="Modal_fullTitle">
              <h4>회원가입</h4>
              <button
                className="close_btn"
                onClick={() => setShowModal3(false)}
              >
                &times;
              </button>
            </div>
            <main>
              <br />
              {signUpResult}
              <br />
              <br />
            </main>
            <button onClick={() => setShowModal3(false)}>확인</button>
          </div>
        </ModalComponent>

        {/* ID/PW 찾기 화면 */}
        <ModalComponent
          isOpen={showModal2}
          onRequestClose={() => setShowModal2(false)}
          style={customStyles}
        >
          <div className="customStyles">
            <div className="Modal_fullTitle">
              <h4>ID / PW 찾기</h4>
              <button
                className="close_btn"
                onClick={() => setShowModal2(false)}
              >
                &times;
              </button>
            </div>
            <main>
              <br />
              <input
                text="이름"
                type="name"
                id="find_name"
                typeName="name"
                variant={"outlined"}
                onChange={(e) => {
                  setFName(e.target.value), onNameChangeID;
                }}
                placeholder="이름 입력"
                size="small"
              />
              {nameID.length > 0 && (
                <p className={`message ${isNameID ? "success" : "error"}`}>
                  {nameMessageID}
                </p>
              )}
              <br />
              <input
                text="이메일"
                type="email"
                typeName="email"
                id="find_email"
                variant="outlined"
                onChange={(e) => {
                  setFEmail(e.target.value), onEmailChangeID;
                }}
                placeholder="이메일 입력"
                size="small"
              />
              {emailID.length > 0 && (
                <p className={`message ${isEmailID ? "success" : "error"}`}>
                  {emailMessageID}
                </p>
              )}
              <br />
              <br />
              <button
                disabled={!(isNameID && isEmailID)}
                onClick={(e) => {
                  setShowModal5(true), FindId(e);
                }}
              >
                ID 찾기
              </button>
              {/* ///////////////////////////////////////////////////////////////////////////////////////////// */}
              <br />
              <br />
              <input
                text="ID"
                type="id"
                typeName="id"
                variant="outlined"
                onChange={(e) => {
                  setFPWId(e.target.value), onIdChangePW;
                }}
                placeholder="아이디"
                size="small"
              />
              {idPW.length > 0 && (
                <p className={`message ${isIdPW ? "success" : "error"}`}>
                  {idMessagePW}
                </p>
              )}
              <br />
              <input
                text="이름"
                type="name"
                typeName="name"
                variant={"outlined"}
                onChange={(e) => {
                  setFPWName(e.target.value), onNameChangePW;
                }}
                placeholder="이름 입력"
                size="small"
              />
              {namePW.length > 0 && (
                <p className={`message ${isNamePW ? "success" : "error"}`}>
                  {nameMessagePW}
                </p>
              )}
              <br />
              <input
                text="이메일"
                type="email"
                typeName="email"
                variant="outlined"
                onChange={(e) => {
                  setFPWEmail(e.target.value), onEmailChangePW;
                }}
                placeholder="이메일 입력"
                size="small"
              />
              {emailPW.length > 0 && (
                <p className={`message ${isEmailPW ? "success" : "error"}`}>
                  {emailMessagePW}
                </p>
              )}
              <br />
              <br />
            </main>
            {/* 현재 footer에 다른 css가 적용되어 있다.(회색) */}
            <footer1>
              <button
                disabled={!(isIdPW && isNamePW && isEmailPW)}
                onClick={(e) => {
                  setShowModal11(true), FindPW(e);
                }}
              >
                PW 찾기
              </button>
              <span />
              <button onClick={() => setShowModal2(false)}>닫기</button>
            </footer1>
          </div>
        </ModalComponent>

        {/* ID찾기 */}
        <ModalComponent
          isOpen={showModal5}
          onRequestClose={() => setShowModal5(false)}
          style={customStyles}
        >
          <div className="customStyles">
            <div className="Modal_fullTitle">
              <h4>ID 찾기</h4>
              <button
                className="close_btn"
                onClick={() => setShowModal5(false)}
              >
                &times;
              </button>
            </div>
            <main>
              <p>ID : {idId}</p>
            </main>
            <button onClick={() => setShowModal5(false)}>확인</button>
          </div>
        </ModalComponent>

        {/* 비밀번호 변경 -> 인증메일전송 */}
        <ModalComponent
          isOpen={showModal11}
          onRequestClose={() => setShowModal11(false)}
          style={customStyles}
        >
          <div className="customStyles">
            <div className="Modal_fullTitle">
              <h4>PW 찾기</h4>
              <button
                className="close_btn"
                onClick={() => setShowModal11(false)}
              >
                &times;
              </button>
            </div>
            <main>
              <br />
              {fPWCode}
              <br />
              <br />
            </main>
            <button
              onClick={(e) => {
                // setShowModal11(false),
                Authentication(e);
              }}
            >
              확인
            </button>
          </div>
        </ModalComponent>

        {/* 인증번호 전송 후 비밀번호 설정창 */}
        <ModalComponent
          isOpen={showModal6}
          onRequestClose={() => setShowModal6(false)}
          style={customStyles}
        >
          <div className="customStyles">
            <div className="Modal_fullTitle">
              <h4>PW 찾기</h4>
              <button
                className="close_btn"
                onClick={() => setShowModal6(false)}
              >
                &times;
              </button>
            </div>
            <main>
              <br />
              {fPWEmail}
              <p />
              <input
                type={"text"}
                placeholder="인증번호"
                onChange={(e) => setRsCode(e.target.value)}
              />
              <input
                type={"password"}
                placeholder="비밀번호 재설정"
                onChange={(e) => setRsPw(e.target.value)}
              />
              <input
                type={"password"}
                placeholder="비밀번호 재설정 확인"
                onChange={(e) => setRsPwCk(e.target.value)}
              />
              <br />
              <br />
            </main>
            <button
              onClick={(e) => {
                // setShowModal11(false),
                setShowModal12(true), PwSet(e);
              }}
            >
              확인
            </button>
          </div>
        </ModalComponent>

        {/* 비밀번호 재설정 결과 */}
        <ModalComponent
          isOpen={showModal12}
          onRequestClose={() => setShowModal12(false)}
          style={customStyles}
        >
          <div className="customStyles">
            <div className="Modal_fullTitle">
              <h4>PW 재설정</h4>
              <button
                className="close_btn"
                onClick={() => setShowModal12(false)}
              >
                &times;
              </button>
            </div>
            <main>
              <br />
              {rsResult}
              <br />
              <br />
            </main>
            <button
              onClick={(e) => {
                Authentication2(e);
              }}
            >
              확인
            </button>
          </div>
        </ModalComponent>

        {/* =================================================================================== */}
        {logIn()}
      </div>

      <div class="maincenter">
        <div id="menu">
          <ul>
            <li>
              <a href="#">영화</a>
              <ul>
                <li id="smallmenu">
                  <Link to="/NowPlayingMovie">현재 상영중인 영화</Link>
                </li>
                <li id="smallmenu">
                  <Link to="/UpComingMovie">상영 예정 영화</Link>
                </li>
              </ul>
            </li>

            <li>
              <a href="#">예매</a>
              <ul>
                <li id="smallmenu" onClick={Ticketlogin}>
                  예매하기
                </li>
              </ul>
            </li>

            <li>
              <a href="#">극장</a>
              <ul>
                <li id="smallmenu">
                  <Link to="/Theater_MovieTheaterLocationInformation">
                    영화관 위치정보
                  </Link>
                </li>
                <li id="smallmenu">
                  <Link to="/Theater_Theater">상영관</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/Food_MovieFood">무비푸드</Link>
            </li>
            <li>
              <a href="#">공지사항</a>
              <ul>
                <li id="smallmenu">
                  <Link to="/Notice_Notice">공지사항</Link>
                </li>
                <li id="smallmenu">
                  <Link to="/Questions_Questions">Q&A</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
