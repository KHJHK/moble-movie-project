// Ticketing_TicketingMain.js


import "./Ticketing_TicketingMain.css";
import React, { useState } from "react";
import { movieClick,CinemaClick,DateClick,RegionClick,TimeClick,localStoragereset} from "../Ticketing/Ticketing_Selectdoing";
import Ticketing_TicketingMain_Pick from "./Ticketing_TicketingMain_Pick"
import "./Ticketing_SelectSeat.css";
import axios from "axios";
import { useEffect } from "react";
// import {movieClicked} from "../Ticketing/Ticketing_Selectdoing";

// Select 동작 구현
localStoragereset();

const Ticketing_TicketingMain = () => {



  const [modalOpenSignUp, setModalOpenSignUp] = useState(false);

  const openModalSignup = () => {
    setModalOpenSignUp(true);
  };
  const closeModalSignUp = () => {
    setModalOpenSignUp(false);
  };


  const [movie, setMovie] = useState([]);
  const [movie_region, setmovie_region] = useState([]); 
  const [movie_Cinema, setmovie_Cinema] = useState([]); 
  const [movie_Date, setmovie_Date] = useState([]); 
  const [movie_Time, setmovie_Time] = useState([]); 
  // const [movie_Seat, setmovie_Seat] = useState([]); 



  const [movie_id, setMovieId] = useState(0); 
  const [movie_RG, setMovieRg] = useState(0); 
  const [movie_cn, setMoviecn] = useState(0); 
  const [movie_Tm, setMovieTm] = useState(0); 
  const [movie_Si, setMovieSi] = useState(0); //재렌더링에 사용되니깐 절대 삭제금지




  const storeMovieId = (id) =>{
    localStorage.setItem('movie_id',id);
    setMovieId((id)=id);
   // console.log("moveid : ", localStorage.getItem('movie_id'));
  }

  const storeMovieId2 = (event) =>{
    const movieRegion = event.target.textContent;
    setMovieRg(movieRegion);
    //console.log("여기는 영화지역 클릭시 텍스트 값입니다. : "+ movieRegion)
  }

  const storeMovieId3 = (event) =>{
    const movieRegion = event.target.textContent;
    setMoviecn(movieRegion);
    //console.log("여기는 영화극장 클릭시 텍스트 값입니다. : "+ movieRegion)
  }

  const storeMovieId4 = (event) =>{
    const movieRegion = event.target.textContent;
    setMovieTm(movieRegion);
    
    // console.log("여기는 영화날짜 클릭시 텍스트 값입니다. : "+ movieRegion)
  }

  const storeMovieId5 = (event, id) =>{
    const movieRegion = event.target.textContent;
    localStorage.setItem("schedule_id", id);
    setMovieSi(id); //재렌더링에 사용되니깐 절대 삭제금지
   
    // console.log("여기는 영화시간 클릭시 텍스트 값입니다. : "+ movieRegion)
  }










useEffect(() => {
    
    axios.get(`http://localhost/ticketing/selectMovie`)
    .then((response) => {
      setMovie(response.data);
     
  })
}, []);


useEffect(() => {
  
  axios.get(`http://localhost/ticketing/selectLocation?movie_id=${movie_id}`)
  .then((response) => {
    setmovie_region(response.data);
})
//console.log("useEffect 지역에 들어온 상황(movie) : " + movie_id);
}, [movie_id]);


useEffect(() => {
  
  axios.get(`http://localhost/ticketing/selectCinema?movie_id=${movie_id}&cinema_location=${movie_RG}`)
  .then((response) => {
    setmovie_Cinema(response.data);
})
//console.log("useEffect 시네마에 들어온 상황(setmovie_Cinema) : " + movie_id);
}, [movie_RG,movie_id]);


useEffect(() => {
  
  axios.get(`http://localhost/ticketing/selectDate?movie_id=${movie_id}&cinema_name=${movie_cn}`)
  .then((response) => {
    setmovie_Date(response.data);
})
//console.log("useEffect 날짜에 들어온 상황(setmovie_Date) : " + movie_id);
}, [movie_cn,movie_id]);


useEffect(() => {
  
  axios.get(`http://localhost/ticketing/selectTime?movie_id=${movie_id}&cinema_name=${movie_cn}&schedule_date=${movie_Tm}`)
  .then((response) => {
    setmovie_Time(response.data);
})
//console.log("useEffect 시간에 들어온 상황(setmovie_Time) : " + movie_id);
}, [movie_Tm,movie_id,movie_cn]);


  return (
    <div>   
    <div className="Ticketing_TicketingMain">
     <h3>예매하기</h3>
      <div className="Ticketing_SelectMovie">
        <div className="SelectMovie" >
      
          <h3>영화 선택</h3>
            {movie.map((item) => {
          
            return (
            
            <div >
              <ul>
                <li className="SelectMV" onClick={(e) => { storeMovieId(item.movie_id), movieClick(e) }} >
                {item.movie_name}
                </li>
              </ul> 
            </div>
            
            );
        
            })}
        </div>
      </div>


      <div className="Ticketing_SelectRegion">

          <div className="SelectRegion">
            <h3>지역 선택</h3>
            
            {movie_region.map((item) => {
              
              return (
                
                <div>
                  <ul>
                    <li className="SelectRG" onClick={(e) => { storeMovieId2(e), RegionClick(e) }}>
                    {item.cinema_location}
                    </li>
                  </ul> 
                </div>
                
              );
            
            })}
            
          </div>
      </div>

      <div className="Ticketing_SelectCinema">
        <div className="SelectCinema">
          <h3>극장 선택</h3>
          {movie_Cinema.map((item) => {
              
              return (
                
                <div>
                  <ul>
                    <li className="SelectCN" onClick={(e) => {storeMovieId3(e),CinemaClick(e)}}>
                    {item.cinema_name}
                    </li>
                  </ul> 
                </div>
                
              );
            
            })}
        </div>

        
      </div>

      <div className="Ticketing_SelectDate">
        <div className="SelectDate">
        <h3>날짜 선택</h3>
          {movie_Date.map((item) => {
              
              return (
                
                <div>
                  <ul>
                    <li className="SelectDT" onClick={(e) => {storeMovieId4(e),DateClick(e)}}>
                    {item.cinema_name}
                    </li>
                  </ul> 
                </div>
                 );
            
                  })}
         </div>
      </div>
      
      <div className="Ticketing_SelectTime">

        <div className="SelectTime">
          <h3>시간 선택</h3>
              {movie_Time.map((item) => {
                  
                  return (
                    
                    <div>
                      <ul>        
                          <li className="SelectTI" onClick={(e) => {storeMovieId5(e, item.schedule_id),TimeClick(e)}}>
                          {item.theater_name+"관 "+item.schedule_time}
                        </li>
                      </ul> 
                    </div>
                    
                  );
                
                })}

        </div>        

        </div>


      
           {/* 좌석 선택 */}

      
      </div>

      <div className="SelectTicket_btn">
      <React.Fragment>
            <button className="Ticket_btn" onClick={openModalSignup}>
              예매좌석선택하기
            </button>
            <Ticketing_TicketingMain_Pick
              open={modalOpenSignUp}
              close={closeModalSignUp}
            ></Ticketing_TicketingMain_Pick>
          </React.Fragment>
      </div>   
     </div>   
  );
  
  
};

export default Ticketing_TicketingMain;
