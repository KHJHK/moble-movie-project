// Member_MyPage_MemberInformation_PasswordConfirmation.js
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Member_MyPage_MemberInformation_PasswordConfirmation.css";
import Member_MyPage_MemeberInfomation from "../Member/Member_MyPage_MemberInformation";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { Collapse } from "@material-ui/core";

const Member_MyPage_MemberInformation_PasswordConfirmation = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, result } = props;
    const [modalOpenSignUp, setModalOpenSignUp] = useState(false);

    const openModalSignup = () => {
        setModalOpenSignUp(true);
    };
    const closeModalSignUp = () => {
        setModalOpenSignUp(false);
    };

    const resultCk = document.getElementById("resultCk");
    const check = () => {

        if (result === "비밀번호가 맞습니다.") {

            return (
                <div>
                    <React.Fragment>
                        <button className="close" onClick={
                            () => {
                                openModalSignup();
                            }
                        }>
                            확인
                        </button>
                        <Member_MyPage_MemeberInfomation
                            open={modalOpenSignUp}
                            close={closeModalSignUp}
                        ></Member_MyPage_MemeberInfomation>
                    </React.Fragment>
                    <button className="close" onClick={close}>
                        닫기
                    </button>
                </div>
            )
        } else {
            return (
                <div>
                    <button className="close" onClick={close}>
                        닫기
                    </button>
                </div>
            )

        }
    }

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? "openModal modal" : "modal"}>
            {open ? (
                <section>
                    <header>
                        <strong>비밀번호확인</strong>

                        <button className="close" onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>
                        <br />
                        {result}
                        <br />

                    </main>
                    <br />
                    {/* <Link to="/Member_MyPage_MemberInformation"> */}
                    {check()}
                    {/* </Link> */}
                </section>
            ) : null}
        </div>
    );
};

export default Member_MyPage_MemberInformation_PasswordConfirmation;
