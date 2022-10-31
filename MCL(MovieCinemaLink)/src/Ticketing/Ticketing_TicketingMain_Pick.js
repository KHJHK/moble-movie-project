// Ticketing_TicketingMain_Pick.js
import React, { useState, useEffect } from "react";
import SeatPicker from "react-seat-picker";
// import css
import "./Ticketing_SelectSeat.css";
import Ticketing_TicketingMain_result from "./Ticketing_TicketingMain_result";
import axios from "axios";

const Ticketing_Ticketing_TicketingMain_result = (props) => {
  console.log("pick창 넘어옴  ");
  const [movie_buy_respone, setMoviebuy_respone] = useState(false);
  const [movie_buy_respone2, setMoviebuy_respone2] = useState([]);
  const [applyChange, setApplyChange] = useState(0);

  var isFirstRender = localStorage.getItem("isFirstRender");
  var sid = localStorage.getItem("schedule_id");

  useEffect(() => {
    axios
      .get(`http://localhost/ticketing/selectedSeat?schedule_id=${sid}`)
      .then((response) => {
        setMoviebuy_respone2(response.data);
      });
  }, [localStorage.getItem("schedule_id"), applyChange]);

  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;
  const [modalOpenSignUp, setModalOpenSignUp] = useState(false);

  const openModalSignup = () => {
    if (selected.toString() === "") {
      document.querySelector("#seatTest").style.display = "block";
    } else {
      setModalOpenSignUp(true);
    }
  };
  const closeModalSignUp = () => {
    setModalOpenSignUp(false);
  };

  const [selected, setSelected] = React.useState([]);

  const addSeatCallback = ({ row, number, id }, addCb) => {
    setSelected((prevItems) => [...prevItems, number]);
    const newTooltip = `${id} 선택가능`;
    addCb(row, number, id, newTooltip);
    addCb(row, number, id);
    document.querySelector("#seatTest").style.display = "none";
  };

  const removeSeatCallback = ({ row, number, id }, removeCb) => {
    setSelected((list) => list.filter((item) => item !== number));
    removeCb(row, number, id);
  };

  // 좌석 이용중 : isReserved: true

  const rows = [
    [
      { id: "A1", number: "A1", isReserved: movie_buy_respone },
      { id: "A2", number: "A2", isReserved: movie_buy_respone },
      { id: "A3", number: "A3", isReserved: movie_buy_respone },
      { id: "A4", number: "A4", isReserved: movie_buy_respone },
      null,
      { id: "A5", number: "A5", isReserved: movie_buy_respone },
      { id: "A6", number: "A6", isReserved: movie_buy_respone },
      { id: "A7", number: "A7", isReserved: movie_buy_respone },
      { id: "A8", number: "A8", isReserved: movie_buy_respone },
      null,
      { id: "A9", number: "A9", isReserved: movie_buy_respone },
      { id: "A10", number: "A10", isReserved: movie_buy_respone },
      { id: "A11", number: "A11", isReserved: movie_buy_respone },
      { id: "A12", number: "A12", isReserved: movie_buy_respone },
      null,
      { id: "A13", number: "A13", isReserved: movie_buy_respone },
      { id: "A14", number: "A14", isReserved: movie_buy_respone },
      { id: "A15", number: "A15", isReserved: movie_buy_respone },
      { id: "A16", number: "A16", isReserved: movie_buy_respone },
    ],
    [
      { id: "B1", number: "B1", isReserved: movie_buy_respone },
      { id: "B2", number: "B2", isReserved: movie_buy_respone },
      { id: "B3", number: "B3", isReserved: movie_buy_respone },
      { id: "B4", number: "B4", isReserved: movie_buy_respone },
      null,
      { id: "B5", number: "B5", isReserved: movie_buy_respone },
      { id: "B6", number: "B6", isReserved: movie_buy_respone },
      { id: "B7", number: "B7", isReserved: movie_buy_respone },
      { id: "B8", number: "B8", isReserved: movie_buy_respone },
      null,
      { id: "B9", number: "B9", isReserved: movie_buy_respone },
      { id: "B10", number: "B10", isReserved: movie_buy_respone },
      { id: "B11", number: "B11", isReserved: movie_buy_respone },
      { id: "B12", number: "B12", isReserved: movie_buy_respone },
      null,
      { id: "B13", number: "B13", isReserved: movie_buy_respone },
      { id: "b14", number: "B14", isReserved: movie_buy_respone },
      { id: "B15", number: "B15", isReserved: movie_buy_respone },
      { id: "B16", number: "B16", isReserved: movie_buy_respone },
    ],
    [
      { id: "C1", number: "C1", isReserved: movie_buy_respone },
      { id: "C2", number: "C2", isReserved: movie_buy_respone },
      { id: "C3", number: "C3", isReserved: movie_buy_respone },
      { id: "C4", number: "C4", isReserved: movie_buy_respone },
      null,
      { id: "C5", number: "C5", isReserved: movie_buy_respone },
      { id: "C6", number: "C6", isReserved: movie_buy_respone },
      { id: "C7", number: "C7", isReserved: movie_buy_respone },
      { id: "C8", number: "C8", isReserved: movie_buy_respone },
      null,
      { id: "C9", number: "C9", isReserved: movie_buy_respone },
      { id: "C10", number: "C10", isReserved: movie_buy_respone },
      { id: "C11", number: "C11", isReserved: movie_buy_respone },
      { id: "C12", number: "C12", isReserved: movie_buy_respone },
      null,
      { id: "C13", number: "C13", isReserved: movie_buy_respone },
      { id: "C14", number: "C14", isReserved: movie_buy_respone },
      { id: "C15", number: "C15", isReserved: movie_buy_respone },
      { id: "C16", number: "C16", isReserved: movie_buy_respone },
    ],
    [
      { id: "D1", number: "D1", isReserved: movie_buy_respone },
      { id: "D2", number: "D2", isReserved: movie_buy_respone },
      { id: "D3", number: "D3", isReserved: movie_buy_respone },
      { id: "D4", number: "D4", isReserved: movie_buy_respone },
      null,
      { id: "D5", number: "D5", isReserved: movie_buy_respone },
      { id: "D6", number: "D6", isReserved: movie_buy_respone },
      { id: "D7", number: "D7", isReserved: movie_buy_respone },
      { id: "D8", number: "D8", isReserved: movie_buy_respone },
      null,
      { id: "D9", number: "D9", isReserved: movie_buy_respone },
      { id: "D10", number: "D10", isReserved: movie_buy_respone },
      { id: "D11", number: "D11", isReserved: movie_buy_respone },
      { id: "D12", number: "D12", isReserved: movie_buy_respone },
      null,
      { id: "D13", number: "D13", isReserved: movie_buy_respone },
      { id: "D14", number: "D14", isReserved: movie_buy_respone },
      { id: "D15", number: "D15", isReserved: movie_buy_respone },
      { id: "D16", number: "D16", isReserved: movie_buy_respone },
    ],
    [
      { id: "E1", number: "E1", isReserved: movie_buy_respone },
      { id: "E2", number: "E2", isReserved: movie_buy_respone },
      { id: "E3", number: "E3", isReserved: movie_buy_respone },
      { id: "E4", number: "E4", isReserved: movie_buy_respone },
      null,
      { id: "E5", number: "E5", isReserved: movie_buy_respone },
      { id: "E6", number: "E6", isReserved: movie_buy_respone },
      { id: "E7", number: "E7", isReserved: movie_buy_respone },
      { id: "E8", number: "E8", isReserved: movie_buy_respone },
      null,
      { id: "E9", number: "E9", isReserved: movie_buy_respone },
      { id: "E10", number: "E10", isReserved: movie_buy_respone },
      { id: "E11", number: "E11", isReserved: movie_buy_respone },
      { id: "E12", number: "E12", isReserved: movie_buy_respone },
      null,
      { id: "E13", number: "E13", isReserved: movie_buy_respone },
      { id: "E14", number: "E14", isReserved: movie_buy_respone },
      { id: "E15", number: "E15", isReserved: movie_buy_respone },
      { id: "E16", number: "E16", isReserved: movie_buy_respone },
    ],
    [
      { id: "F1", number: "F1", isReserved: movie_buy_respone },
      { id: "F2", number: "F2", isReserved: movie_buy_respone },
      { id: "F3", number: "F3", isReserved: movie_buy_respone },
      { id: "F4", number: "F4", isReserved: movie_buy_respone },
      null,
      { id: "F5", number: "F5", isReserved: movie_buy_respone },
      { id: "F6", number: "F6", isReserved: movie_buy_respone },
      { id: "F7", number: "F7", isReserved: movie_buy_respone },
      { id: "F8", number: "F8", isReserved: movie_buy_respone },
      null,
      { id: "F9", number: "F9", isReserved: movie_buy_respone },
      { id: "F10", number: "F10", isReserved: movie_buy_respone },
      { id: "F11", number: "F11", isReserved: movie_buy_respone },
      { id: "F12", number: "F12", isReserved: movie_buy_respone },
      null,
      { id: "F13", number: "F13", isReserved: movie_buy_respone },
      { id: "F14", number: "F14", isReserved: movie_buy_respone },
      { id: "F15", number: "F15", isReserved: movie_buy_respone },
      { id: "F16", number: "F16", isReserved: movie_buy_respone },
    ],
    [
      { id: "G1", number: "G1", isReserved: movie_buy_respone },
      { id: "G2", number: "G2", isReserved: movie_buy_respone },
      { id: "G3", number: "G3", isReserved: movie_buy_respone },
      { id: "G4", number: "G4", isReserved: movie_buy_respone },
      null,
      { id: "G5", number: "G5", isReserved: movie_buy_respone },
      { id: "G6", number: "G6", isReserved: movie_buy_respone },
      { id: "G7", number: "G7", isReserved: movie_buy_respone },
      { id: "G8", number: "G8", isReserved: movie_buy_respone },
      null,
      { id: "G9", number: "G9", isReserved: movie_buy_respone },
      { id: "G10", number: "G10", isReserved: movie_buy_respone },
      { id: "G11", number: "G11", isReserved: movie_buy_respone },
      { id: "G12", number: "G12", isReserved: movie_buy_respone },
      null,
      { id: "G13", number: "G13", isReserved: movie_buy_respone },
      { id: "G14", number: "G14", isReserved: movie_buy_respone },
      { id: "G15", number: "G15", isReserved: movie_buy_respone },
      { id: "G16", number: "G16", isReserved: movie_buy_respone },
    ],
  ];

  console.log("값 확인: " + movie_buy_respone2);
  var isSeatFind = false;
  //   var isFirstCall = false

  if (movie_buy_respone2.length !== 0) {
    for (var i = 0; i < movie_buy_respone2.length; i++) {
      for (var j = 0; j < rows.length; j++) {
        for (var k = 0; k < rows[j].length; k++) {
          if (rows[j][k] !== null && rows[j][k].id === movie_buy_respone2[i]) {
            rows[j][k].isReserved = true;
            isSeatFind = true;
            break;
          }
        }
        if (isSeatFind) {
          isSeatFind = false;
          break;
        }
      }
    }
    //render 시도했는데 실패함
    if (isFirstRender === "T") {
      setApplyChange(applyChange + 1);
      localStorage.setItem("isFirstRender", "F");
    }
  }

  // (arr.find 함수는 쓰는법 몰라서 안씀)
  //   if(movie_buy_respone2 !== null){
  //     console.log(movie_buy_respone2)
  //     for(var i = 0; i <  movie_buy_respone2.length; i++){
  //         for(var j = 0; j < rows.length; j++){
  //             if(rows[j].find(x => x !== null)){
  //                 if(rows[j].find(x => x.id === movie_buy_respone2[i])){
  //                     rows[j].find(x => x.id === movie_buy_respone2[i]).isReserved = true;
  //                     continue;
  //                 }
  //             }
  //         }
  //       }
  //   }

  const movievalue = selected.toString();
  localStorage.setItem("movieSeat", movievalue);

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modalf"}>
      {open ? (
        <div className="customStylesSeat">
          <div className="Modal_fullTitle">
            <h3>좌석 선택</h3>

            <button
              className="close_btn"
              onClick={() => {
                setSelected(""), close();
              }}
            >
              &times;
            </button>
          </div>
          <main>
            <div className="TicketingSeat">
              {/* <h3>좌석 선택</h3> */}
              <div className="screen">screen</div>
              <SeatPicker
                addSeatCallback={addSeatCallback.bind(this)}
                removeSeatCallback={removeSeatCallback.bind(this)}
                rows={rows}
                alpha
                maxReservableSeats={4} //최대 선택할 수 있는 좌석 수
                visible
              />

              <div className="SelectedSeatInquiry">
                <span>
                  <br />
                  <h4>[ 선택한 좌석 ]</h4>
                  <br />
                  <h4>{selected.toString()}</h4>
                  <p id="seatTest"> 좌석을 선택해주세요!!</p>
                </span>
              </div>
            </div>
          </main>
          <br />

          {/* <Link to="/Member_MyPage_MemberInformation"> */}
          <React.Fragment>
            <button className="close" onClick={openModalSignup}>
              예매하기
            </button>
            <Ticketing_TicketingMain_result
              open={modalOpenSignUp}
              close={closeModalSignUp}
            ></Ticketing_TicketingMain_result>
          </React.Fragment>
          {/* </Link> */}

          <button
            className="close"
            onClick={() => {
              setSelected(""), close();
            }}
          >
            닫기
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Ticketing_Ticketing_TicketingMain_result;
