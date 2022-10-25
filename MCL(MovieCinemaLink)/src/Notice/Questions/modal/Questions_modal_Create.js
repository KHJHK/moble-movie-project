// Questions_modal_Create.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Questions_Write from "../Write/Questions_Write";

const Questions_modal_Create = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, addQAFunc } = props;
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modalf"}>
      {open ? (
        <div className="customStyles">
          <header className="Modal_fullTitle">
            <strong>알림</strong>

            <button className="close_btn" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <br />
            <br />
            <strong>Q & A 등록완료</strong>
            <br />
            <br />
          </main>
          <br />

          <Link to="/Questions_Questions">
            <button onClick={addQAFunc}>확인</button>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default Questions_modal_Create;
