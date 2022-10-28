// Member_MyPage_MemberInformation_PasswordConfirmation.js
import React, {useState} from "react";
import "../Member/Member_MyPage.js"
import axios from "axios";
// import { Link } from "react-router-dom";
import Ticketing_TicketingMain_result3 from "./Ticketing_TicketingMain_result3"



const Ticketing_Ticketing_TicketingMain_result = (props) => {


  const [movie, setMovie] = useState([]);
  const [movie_SeatPass, setMovie_SeatPass] = useState([]);


  axios
    .get(
      `http://localhost/ticketing/selectMovie`
    )

    .then((res) => {
      //console.log("res.data.results : " + JSON.stringify(res.data.results));
      // console.log("res.data.results : " + JSON.stringify(res.data.results[0]));
      setMovie(res.data);
    });





  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;
  const [modalOpenSignUp, setModalOpenSignUp] = useState(false);

  const openModalSignup = () => {
     
    console.log("비밀번호 값: "+ document.querySelector('#password').value);



    if(document.querySelector('#password').value==="1234"){


      console.log(movie);

      const params = {
        schedule_id: localStorage.getItem('schedule_id'),
        seat_name: localStorage.getItem('movieSeat')
      };
  
      axios.post(`http://localhost:80/ticketing/insertSeat`, params)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          // 없을시 받는 창 구현(X)
          // setSHowModalX(true);
          console.log(error);
        });

      for (var i = 0; i < movie.length; i++) {
        var moviecheck = localStorage.getItem('moviecheck');
        console.log(movie[i].movie_name);
        console.log(moviecheck);

        if(movie[i].movie_name===moviecheck){
          console.log("제목값이 일치했습니다.!!!!");
          const poster_path = movie[i].movie_poster_path;
          localStorage.setItem("movieporster", poster_path);

          var a = localStorage.getItem("movieporster");
          console.log(a);
        }
      }
    
    
      setModalOpenSignUp(true);
    
    }

      else if(document.querySelector('#password').value===""){
        document.querySelector('#warningtext').innerHTML= "비밀번호를 눌러라!!!";}

     else {document.querySelector('#warningtext').innerHTML= "비밀번호가 틀렸습니다!!!!";}
   
  };
  const closeModalSignUp = () => {

    setModalOpenSignUp(false);
  };
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            <strong>비밀번호 확인</strong>

            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <br />
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              id="password"
            />
            <p id="warningtext">비밀번호를 입력해주세요</p>
            <br />
            <br />

            {props.children}
          </main>
          <br />
          {/* <Link to="/Member_MyPage_MemberInformation"> */}
          <React.Fragment>
            <button className="close" onClick={openModalSignup}>
              확인
            </button>
            <Ticketing_TicketingMain_result3
              open={modalOpenSignUp}
              close={closeModalSignUp}
            ></Ticketing_TicketingMain_result3>
          </React.Fragment>
          {/* </Link> */}

          <button className="close" onClick={close}>
            닫기
          </button>
        </section>
      ) : null}
    </div>
  );
};

export default Ticketing_Ticketing_TicketingMain_result;
