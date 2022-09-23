// Ticketing_SelectSeat.js

import React from "react";
import SeatPicker from "react-seat-picker";
import "./Ticketing_SelectSeat.css";

const Ticketing_SelectSeat = () => {
  const [selected, setSelected] = React.useState([]);

  const addSeatCallback = ({ row, number, id }, addCb) => {
    setSelected((prevItems) => [...prevItems, number]);
    // const newTooltip = `${id} 선택가능`;
    // addCb(row, number, id, newTooltip);
    addCb(row, number, id);
  };

  const removeSeatCallback = ({ row, number, id }, removeCb) => {
    setSelected((list) => list.filter((item) => item !== number));
    removeCb(row, number, id);
  };

  // 좌석 이용중 : isReserved: true

  const rows = [
    [
      { id: "A1", number: "A1" },
      { id: "A2", number: "A2" },
      { id: "A3", number: "A3" },
      { id: "A4", number: "A4" },
      null,
      { id: "A5", number: "A5" },
      { id: "A6", number: "A6" },
      { id: "A7", number: "A7" },
      { id: "A8", number: "A8" },
      null,
      { id: "A9", number: "A9" },
      { id: "A10", number: "A10" },
      { id: "A11", number: "A11" },
      { id: "A12", number: "A12" },
      null,
      { id: "A3", number: "A13" },
      { id: "A14", number: "A14" },
      { id: "A15", number: "A15" },
      { id: "A16", number: "A16" },
    ],
    [
      { id: "B1", number: "A1" },
      { id: "B2", number: "A2" },
      { id: "B3", number: "A3" },
      { id: "B4", number: "A4" },
      null,
      { id: "B5", number: "B5" },
      { id: "B6", number: "B6" },
      { id: "B7", number: "B7" },
      { id: "B8", number: "B8" },
      null,
      { id: "B9", number: "B9" },
      { id: "B10", number: "B10" },
      { id: "B11", number: "B11" },
      { id: "B12", number: "B12" },
      null,
      { id: "B13", number: "B13" },
      { id: "b14", number: "B14" },
      { id: "B15", number: "B15" },
      { id: "B16", number: "B16" },
    ],
    [
      { id: "C1", number: "C1" },
      { id: "C2", number: "C2" },
      { id: "C3", number: "C3" },
      { id: "C4", number: "C4" },
      null,
      { id: "C5", number: "C5" },
      { id: "C6", number: "C6" },
      { id: "C7", number: "C7" },
      { id: "C8", number: "C8" },
      null,
      { id: "C9", number: "C9" },
      { id: "C10", number: "C10" },
      { id: "C11", number: "C11" },
      { id: "C12", number: "C12" },
      null,
      { id: "C13", number: "C13" },
      { id: "C14", number: "C14" },
      { id: "C15", number: "C15" },
      { id: "C16", number: "C16" },
    ],
    [
      { id: "D1", number: "D1" },
      { id: "D2", number: "D2" },
      { id: "D3", number: "D3" },
      { id: "D4", number: "D4" },
      null,
      { id: "D5", number: "D5" },
      { id: "D6", number: "D6" },
      { id: "D7", number: "D7" },
      { id: "D8", number: "D8" },
      null,
      { id: "D9", number: "D9" },
      { id: "D10", number: "D10" },
      { id: "D11", number: "D11" },
      { id: "D12", number: "D12" },
      null,
      { id: "D13", number: "D13" },
      { id: "D14", number: "D14" },
      { id: "D15", number: "D15" },
      { id: "D16", number: "D16" },
    ],
    [
      { id: "E1", number: "E1" },
      { id: "E2", number: "E2" },
      { id: "E3", number: "E3" },
      { id: "E4", number: "E4" },
      null,
      { id: "E5", number: "E5" },
      { id: "E6", number: "E6" },
      { id: "E7", number: "E7" },
      { id: "E8", number: "E8" },
      null,
      { id: "E9", number: "E9" },
      { id: "E10", number: "E10" },
      { id: "E11", number: "E11" },
      { id: "E12", number: "E12" },
      null,
      { id: "E13", number: "E13" },
      { id: "E14", number: "E14" },
      { id: "E15", number: "E15" },
      { id: "E16", number: "E16" },
    ],
    [
      { id: "F1", number: "F1" },
      { id: "F2", number: "F2" },
      { id: "F3", number: "F3" },
      { id: "F4", number: "F4" },
      null,
      { id: "F5", number: "F5" },
      { id: "F6", number: "F6" },
      { id: "F7", number: "F7" },
      { id: "F8", number: "F8" },
      null,
      { id: "F9", number: "F9" },
      { id: "F10", number: "F10" },
      { id: "F11", number: "F11" },
      { id: "F12", number: "F12" },
      null,
      { id: "F13", number: "F13" },
      { id: "F14", number: "F14" },
      { id: "F15", number: "F15" },
      { id: "F16", number: "F16" },
    ],
    [
      { id: "G1", number: "G1" },
      { id: "G2", number: "G2" },
      { id: "G3", number: "G3" },
      { id: "G4", number: "G4" },
      null,
      { id: "G5", number: "G5" },
      { id: "G6", number: "G6" },
      { id: "G7", number: "G7" },
      { id: "G8", number: "G8" },
      null,
      { id: "G9", number: "G9" },
      { id: "G10", number: "G10" },
      { id: "G11", number: "G11" },
      { id: "G12", number: "G12" },
      null,
      { id: "G13", number: "G13" },
      { id: "G14", number: "G14" },
      { id: "G15", number: "G15" },
      { id: "G16", number: "G16" },
    ],
  ];

  return (
    <div className="Ticketing_SelectSeat">
      <h3>좌석 선택</h3>
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
          <p>선택한 좌석 : {selected.toString() + ", "}</p>
        </span>
        <button className="btn btn-warning">Continue</button>
      </div>
    </div>
  );
};

export default Ticketing_SelectSeat;
