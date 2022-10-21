// Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import ReactModal from "react-modal";
import { Modal, input, withWidth } from "@material-ui/core";
import axios from "axios";

const CustomModal = (props) => {
  const { isOpen } = props;
  return isOpen ? <ReactModal {...props} /> : null;
};

// const Heading = ({ useCustomModal }) => <div style={modal}></div>;

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

const Header = (props) => {
  //로그인 유지 세션
  let sessionStorage = window.sessionStorage;

  let [loginId, setLoginId] = useState("");
  let [loginPassword, setLoginPassword] = useState("");
  let [savedLoginId, setSavedLoginId] = useState("");
  let [savedLoginPassword, setSavedLoginPassword] = useState("");

  // 1: 로그인 2: ID/Pw찾기 3: 메일전송(PW찾기) 4: 회원가입 5: IW찾기 6:회원가입완료
  const [useCustomModal, setUseCustomModal] = React.useState(false);
  const [showModal1, setShowModal1] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  const [showModal3, setShowModal3] = React.useState(false);
  const [showModal4, setShowModal4] = React.useState(false);
  const [showModal5, setShowModal5] = React.useState(false);
  const [showModal6, setShowModal6] = React.useState(false);
  const [showModal7, setShowModal7] = React.useState(false);
  const [showModal8, setShowModal8] = React.useState(false);

  const ModalComponent = useCustomModal ? CustomModal : ReactModal;

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
  // const [date, setDate] = useState('');
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
  const onNicknameChange = (e) => {
    const nicknameRegex = /|didgusgn|/; //db의 nickname값과 비교
    const nicknameCurrent = e.target.value;
    setNickname(nicknameCurrent);

    if (!nicknameRegex.test(nicknameCurrent)) {
      setNicknameMessage("중복된 닉네임입니다.");
      setIsNickname(false);
    } else {
      setNicknameMessage("사용 가능한 닉네임입니다.");
      setIsNickname(true);
    }
  };

  //visible
  const [login, setLogin] = useState(false);

  const logIn = (e) => {
    if (
      (sessionStorage.getItem("loginId"),
      sessionStorage.getItem("loginPassword") == null)
    ) {
      return (
        <div className="TopMenu">
          <div className="TopMenu3">
            <strong onClick={() => setShowModal1(true)}>로그인</strong>
          </div>
          <div className="TopMenu2">
            <strong onClick={() => setShowModal4(true)}>회원가입</strong>
          </div>
        </div>
      );
    } else if (
      (sessionStorage.getItem("loginId"),
      sessionStorage.getItem("loginPassword") != null)
    ) {
      return (
        <div className="TopMenu">
          <div className="TopMenu2">
            <Link to={"/"}>
              <strong
                onClick={() => {
                  sessionStorage.removeItem("loginId", loginId),
                    sessionStorage.removeItem("loginPassword", loginPassword),
                    alert("로그아웃");
                }}
              >
                로그아웃
              </strong>
            </Link>
          </div>
          <div className="TopMenu3">
            <Link to="/Member_MyPage">
              <strong> 마이페이지</strong>
            </Link>
          </div>
        </div>
      );
    }
  };

  // axios({
  //   method: "post",
  //   url: "http://localhost:80/member/login",
  //   data: {
  //     username: loginId,
  //     password: loginPassword,
  //   },
  // })
  //   .then((res) => {
  //     console.log(res);
  //     dispatch(
  //       setUser({
  //         username: res.data.username,
  //         password: res.data.password,
  //       })
  //     );

  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  return (
    <header>
      {/* 로고 */}
      <div className="firstpart">
        <Link to="/">
          <img src="./img/toppicture.png" alt="상단 로고사진" id="toppicture" />
        </Link>

        {/* 모달창 전체 */}

        {/* 로그인 */}
        <ModalComponent
          isOpen={showModal1}
          onRequestClose={() => setShowModal1(false)}
          style={customStyles}
        >
          <form action="http://localhost:80/member/login_proc" method="post">
            <div className="customStyles">
              <header className="Modal_fullTitle">
                <strong className="Modal_title">로그인</strong>
                <button
                  className="close_btn"
                  onClick={() => setShowModal1(false)}
                >
                  &times;
                </button>
              </header>
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
                <strong onClick={() => setShowModal2(true)}>
                  아이디 / 비밀번호 찾기
                </strong>
                <br />
                <button
                  type="submit"
                  onClick={() => {
                    // setShowModal1(false);
                    // setLogin(true);
                    sessionStorage.setItem("loginId", loginId);
                    sessionStorage.setItem("loginPassword", loginPassword);

                    setSavedLoginId(sessionStorage.getItem("loginId"));
                    setSavedLoginPassword(
                      sessionStorage.getItem("loginPassword")
                    );

                    // 시큐리티 전송
                    // axios.post(`http://localhost:80/member/login`)
                  }}
                >
                  로그인
                </button>
                <button onClick={() => setShowModal4(true)}>회원가입</button>
                <button onClick={() => setShowModal1(false)}>닫기</button>
              </main>
            </div>
          </form>
        </ModalComponent>

        {/* 로그인 성공 */}
        <ModalComponent
          isOpen={showModal7}
          onRequestClose={() => setShowModal7(false)}
          style={customStyles}
        >
          <form action="http://localhost:80/member/login_success">
            <div className="customStyles">
              <header className="Modal_fullTitle">
                <strong>로그인 성공</strong>
                <button
                  className="close_btn"
                  onClick={() => setShowModal7(false)}
                >
                  &times;
                </button>
              </header>
              로그인 성공
            </div>
          </form>
        </ModalComponent>

        {/* 로그인 실패 */}
        <ModalComponent
          isOpen={showModal8}
          onRequestClose={() => setShowModal8(false)}
          style={customStyles}
        >
          <form action="http://localhost:80/member/login_fail">
            <div className="customStyles">
              <header className="Modal_fullTitle">
                <strong>로그인 실패</strong>
                <button
                  className="close_btn"
                  onClick={() => setShowModal8(false)}
                >
                  &times;
                </button>
              </header>
              로그인 실패
            </div>
          </form>
        </ModalComponent>

        {/* ID/PW 찾기 */}
        <ModalComponent
          isOpen={showModal2}
          onRequestClose={() => setShowModal2(false)}
          style={customStyles}
        >
          <div className="customStyles">
            <header className="Modal_fullTitle">
              <strong>ID/PW 찾기</strong>
              <button
                className="close_btn"
                onClick={() => setShowModal2(false)}
              >
                &times;
              </button>
            </header>
            <main>
              <br />
              <input
                text="이름"
                type="name"
                typeName="name"
                variant={"outlined"}
                onChange={onNameChangeID}
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
                variant="outlined"
                onChange={onEmailChangeID}
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
              <button onClick={() => setShowModal5(true)}>ID찾기</button>

              <br />
              <br />
              <input
                text="ID"
                type="id"
                typeName="id"
                variant="outlined"
                onChange={onIdChangePW}
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
                onChange={onNameChangePW}
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
                onChange={onEmailChangePW}
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
              <button onClick={() => setShowModal3(true)}>PW 찾기</button>
              <span />
              <button onClick={() => setShowModal2(false)}>닫기</button>
            </footer1>
          </div>
        </ModalComponent>

        {/* 메일전송(PW찾기) */}
        <ModalComponent
          isOpen={showModal3}
          onRequestClose={() => setShowModal3(false)}
          style={customStyles}
        >
          <div className="customStyles">
            <header className="Modal_fullTitle">
              <strong>메일 전송</strong>
              <button
                className="close_btn"
                onClick={() => setShowModal3(false)}
              >
                &times;
              </button>
            </header>
            <main>
              <br />
              <br />
              <p>이메일 전송 완료</p>
              <br />
              <br />
              <button onClick={() => setShowModal3(false)}>확인</button>
            </main>
          </div>
        </ModalComponent>

        {/* 회원가입 */}
        <ModalComponent
          isOpen={showModal4}
          onRequestClose={() => setShowModal4(false)}
          style={customStyles}
        >
          <div className="customStyles">
            <header className="Modal_fullTitle">
              <strong>회원가입</strong>
              <button
                className="close_btn"
                onClick={() => setShowModal4(false)}
              >
                &times;
              </button>
            </header>

            <main>
              <br />
              <div className="formbox">
                <input
                  text="이름"
                  type="name"
                  typeName="name"
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
                    name="date"
                    id="date"
                    // onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              }
              <br />

              <div>
                <input
                  text="이메일"
                  type="email"
                  typeName="email"
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
                  typeName="id"
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
                  typeName="pw"
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
                  typeName="nickname"
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
              onClick={() => setShowModal4(false)}
              disabled={!(isName && isEmail && isId && isPw && isPwCf)}
              //db로 보내기
            >
              회원가입완료
            </button>
            <button className="close" onClick={() => setShowModal4(false)}>
              닫기
            </button>
          </div>
        </ModalComponent>

        {/* ID찾기 */}
        <ModalComponent
          isOpen={showModal5}
          onRequestClose={() => setShowModal5(false)}
          style={customStyles}
        >
          <div className="customStyles">
            <header className="Modal_fullTitle">
              <strong>ID 찾기</strong>
              <button
                className="close_btn"
                onClick={() => setShowModal5(false)}
              >
                &times;
              </button>
            </header>
            <main>
              <p>ID Text Ex:did***********</p>
            </main>
            <button onClick={() => setShowModal5(false)}>확인</button>
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
                <li id="smallmenu">
                  <Link to="/Ticketing">예매하기</Link>
                </li>
                {/* <li id="smallmenu">
                  <a href="#">상영시간표</a>
                </li> */}
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
              {/* <ul>
                <li id="smallmenu">
                  <a href="#">팝콘</a>
                </li>
                <li id="smallmenu">
                  <a href="#">스낵</a>
                </li>
              </ul> */}
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
