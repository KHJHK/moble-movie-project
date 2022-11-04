// AdminHeader.js
import React from "react";
import { Link } from "react-router-dom";
import "./AdminHeader.css";

const AdminHeader = () => {
  return (
    <div className="AdminHeader">
      {/* 사용자 페이지 */}
      <div className="UserPageLogo">
        <Link to="/">
          <img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F45568503-bf10-4f63-be4e-a4b3413cb210%2FKakaoTalk_20221031_162545044.png?table=block&id=2034f064-6f48-47d0-8c20-cc786ae79122&spaceId=a1667a61-abcb-4508-b4f5-60651e2ec6d2&width=2000&userId=5327ba06-0f76-4f4c-a1e6-2c1fc32fc768&cache=v2" alt="상단 로고사진" id="toppicture" />
        </Link>
      </div>
      {/* 관리자 페이지 */}
      <div className="ManagePageLogo">
        <Link to="/AdminMain">
          <h3>관리자 페이지</h3>
        </Link>
      </div>
    </div>
  );
};

export default AdminHeader;
