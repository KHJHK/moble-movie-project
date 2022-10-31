// AdminMember.js
import React, { useEffect, useState } from "react";
import axios from "axios";

import AdminHeader from "../AdminHeader";
import AdminNav from "../AdminNav";
import "./AdminMember.css";

const AdminMember = () => {
  const [admin, setAdmin] = useState([]);
  const [user, setUser] = useState([]);
  const [resign, setResign] = useState([]);

  useEffect(() => {
    // 관리자 명단
    axios.get(`http://localhost/manage/manage_adminList`).then((res) => {
      setAdmin(res.data);
    });
    // 회원 명단
    axios.get(`http://localhost/manage/manage_userList`).then((res) => {
      setUser(res.data);
    });
    // 탈퇴 회원 명단
    axios.get(`http://localhost/manage/manage_resignList`).then((res) => {
      setResign(res.data);
    });
  }, []);

  return (
    <div>
      <AdminHeader />
      <AdminNav />
      <div className="AdminMember">
        <table>
          <tr>
            <h3>관리자 명단</h3>
          </tr>
          <tr>
            <th>번호</th>
            <th>ID</th>
            <th>이름</th>
            <th>이메일</th>
            <th>닉네임</th>
            <th>생년월일</th>
            <th>가입일</th>
            <th>정보수정일</th>
          </tr>
          {admin.map((a) => (
            <tr>
              <td>{a.member_num}</td>
              <td>{a.member_account}</td>
              <td>{a.member_name}</td>
              <td>{a.member_email}</td>
              <td>{a.member_nickname}</td>
              <td>{a.member_birth}</td>
              <td>{a.member_reg_date}</td>
              <td>{a.member_modify_date}</td>
            </tr>
            // </div>
          ))}
        </table>
        <br />

        <table>
          <tr>
            <h3>회원 명단</h3>
          </tr>
          <tr>
            <th>번호</th>
            <th>ID</th>
            <th>이름</th>
            <th>이메일</th>
            <th>닉네임</th>
            <th>생년월일</th>
            <th>가입일</th>
            <th>정보수정일</th>
            <th>회원강제탈퇴</th>
          </tr>
          {user.map((u) => (
            <tr>
              <td>{u.member_num}</td>
              <td>{u.member_account}</td>
              <td>{u.member_name}</td>
              <td>{u.member_email}</td>
              <td>{u.member_nickname}</td>
              <td>{u.member_birth}</td>
              <td>{u.member_reg_date}</td>
              <td>{u.member_modify_date}</td>
              <td>
                <button
                  onClick={() => {
                    axios
                      .post(`http://localhost/manage/manage_member_delete`, {
                        member_account: u.member_account,
                        member_email: u.member_email,
                      })
                      .then((res) => {
                        console.log(res);
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                    // 새로고침
                    window.location.replace("/Member");
                  }}
                >
                  강제탈퇴
                </button>
              </td>
            </tr>
          ))}
        </table>
        <br />

        <table>
          <tr>
            <h3>탈퇴 회원 명단</h3>
          </tr>
          <tr>
            <th>번호</th>
            <th>ID</th>
            <th>이름</th>
            <th>이메일</th>
            <th>닉네임</th>
            <th>생년월일</th>
            <th>가입일</th>
            <th>탈퇴일자</th>
          </tr>

          {resign.map((r) => (
            <tr>
              <td>{r.member_num}</td>
              <td>{r.member_account}</td>
              <td>{r.member_name}</td>
              <td>{r.member_email}</td>
              <td>{r.member_nickname}</td>
              <td>{r.member_birth}</td>
              <td>{r.member_reg_date}</td>
              <td>{r.member_modify_date}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AdminMember;
