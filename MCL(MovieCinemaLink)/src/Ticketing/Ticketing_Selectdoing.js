import React,{useEffect, useState} from "react";
var SelectMV = document.getElementsByClassName("SelectMV");
var SelectRG = document.getElementsByClassName("SelectRG");
var SelectCN = document.getElementsByClassName("SelectCN");
var SelectDT = document.getElementsByClassName("SelectDT");
var SelectTI = document.getElementsByClassName("SelectTI");


// var area1 = document.querySelector("#area1");
// var area2 = document.querySelector("#area2");
// var area3 = document.querySelector("#area3");



















export function movieClicked() {

  
  console.log("어떻게 뜨는지 테스트 하는거");
  var movievalue = localStorage.getItem('key');
  console.log(SelectMV[3].classList.value);
  
  for (var i = 0; i < SelectMV.length; i++) {
    console.log("일단 for문 들어왔다.")
    if(SelectMV[i].textContent=== movievalue){
      const moviecheck = SelectMV[i].textContent;
      console.log("...");
      SelectMV[i].classList.add("clicked");
      document.querySelector(".SelectRegion").style.display = "block";  
      
      localStorage.setItem('moviecheck',moviecheck);
      console.log(moviecheck + "입니다");
    }
  }
  }


  export function localStoragereset() {
    localStorage.removeItem('moviecheck');
    localStorage.removeItem('movieRegion');
    localStorage.removeItem('movieCinema');
    localStorage.removeItem('movieDate');
    localStorage.removeItem('movieTime');
    localStorage.removeItem('movieporster');
    localStorage.removeItem('movie_id');
    localStorage.removeItem('movieSeat');
    localStorage.removeItem('schedule_id');

    
    }


export function movieClick(event) {
  
  // console.log(this);
  // 콘솔창을 보면 둘다 동일한 값이 나온다

  console.log(event.target.classList);
  localStorage.setItem('flag', 0);

  if (event.target.classList[1] === "clicked") {
    event.target.classList.remove("clicked");
    document.querySelector(".SelectRegion").style.display = "none";
    document.querySelector(".SelectCinema").style.display = "none";
    document.querySelector(".SelectDate").style.display = "none";
    document.querySelector(".SelectTime").style.display = "none";
    document.querySelector(".SelectTicket_btn").style.display = "none";
    // document.querySelector(".TicketingSeat").style.display = "none";

    console.log("6");
  } else {
    for (var i = 0; i < SelectMV.length; i++) {
      SelectMV[i].classList.remove("clicked");
      
      
    }
    event.target.classList.add("clicked");

    if (event.target.classList.value === "SelectMV clicked") {
      document.querySelector(".SelectRegion").style.display = "block";
      for (var i = 0; i < SelectRG.length; i++) {
        SelectRG[i].classList.remove("clicked");
      }
      for (var i = 0; i < SelectCN.length; i++) {
        SelectCN[i].classList.remove("clicked");
      }
      for (var i = 0; i < SelectDT.length; i++) {
        SelectDT[i].classList.remove("clicked");
      }
      for (var i = 0; i < SelectTI.length; i++) {
        SelectTI[i].classList.remove("clicked");
      }

      document.querySelector(".SelectCinema").style.display = "none";
      document.querySelector(".SelectDate").style.display = "none";
      document.querySelector(".SelectTime").style.display = "none";
      document.querySelector(".SelectTicket_btn").style.display = "none";
      // document.querySelector(".TicketingSeat").style.display = "none";
      const moviecheck = event.target.textContent;
      localStorage.setItem('moviecheck',moviecheck);
      console.log("moviecheck"+moviecheck)
     
      
    }
  }
}

export function RegionClick(event) {
  console.log(event.target);
  // console.log(this);
  // 콘솔창을 보면 둘다 동일한 값이 나온다

  console.log(event.target.classList);

  if (event.target.classList[1] === "clicked") {
    event.target.classList.remove("clicked");
    document.querySelector(".SelectCinema").style.display = "none";
    document.querySelector(".SelectDate").style.display = "none";
    document.querySelector(".SelectTime").style.display = "none";
    document.querySelector(".SelectTicket_btn").style.display = "none";
    // document.querySelector(".TicketingSeat").style.display = "none";
    console.log("6");
    localStorage.removeItem('movieRegion');
  } else {
    for (var i = 0; i < SelectRG.length; i++) {
      SelectRG[i].classList.remove("clicked");
    }

    event.target.classList.add("clicked");
    if (event.target.classList.value === "SelectRG clicked") {
      document.querySelector(".SelectCinema").style.display = "block";
      for (var i = 0; i < SelectCN.length; i++) {
        SelectCN[i].classList.remove("clicked");
      }
      for (var i = 0; i < SelectDT.length; i++) {
        SelectDT[i].classList.remove("clicked");
      }
      for (var i = 0; i < SelectTI.length; i++) {
        SelectTI[i].classList.remove("clicked");
      }
      document.querySelector(".SelectDate").style.display = "none";
      document.querySelector(".SelectTime").style.display = "none";
      document.querySelector(".SelectTicket_btn").style.display = "none";
      // document.querySelector(".TicketingSeat").style.display = "none";

      

          const movieRegion = event.target.textContent;
          localStorage.setItem('movieRegion',movieRegion);
         console.log(movieRegion)

    }
  }
}

export function CinemaClick(event) {
  console.log(event.target);
  // console.log(this);
  // 콘솔창을 보면 둘다 동일한 값이 나온다

  console.log(event.target.classList);

  if (event.target.classList[1] === "clicked") {
    event.target.classList.remove("clicked");
    document.querySelector(".SelectDate").style.display = "none";
    document.querySelector(".SelectTime").style.display = "none";
    document.querySelector(".SelectTicket_btn").style.display = "none";
    document.querySelector(".SelectTicket_btn").style.display = "none";
    // document.querySelector(".TicketingSeat").style.display = "none";
   
  } else {
    for (var i = 0; i < SelectCN.length; i++) {
      SelectCN[i].classList.remove("clicked");
    }

    event.target.classList.add("clicked");
    if (event.target.classList.value === "SelectCN clicked") {
      document.querySelector(".SelectDate").style.display = "block";
      for (var i = 0; i < SelectDT.length; i++) {
        SelectDT[i].classList.remove("clicked");
      }
      for (var i = 0; i < SelectTI.length; i++) {
        SelectTI[i].classList.remove("clicked");
      }
      document.querySelector(".SelectTime").style.display = "none";
      document.querySelector(".SelectTicket_btn").style.display = "none";
      // document.querySelector(".TicketingSeat").style.display = "none";
      document.querySelector(".SelectTicket_btn").style.display = "none";
      

        const movieCinema = event.target.textContent;
          localStorage.setItem('movieCinema',movieCinema);
         console.log(movieCinema)
    }
  }
}

export function DateClick(event) {
  console.log(event.target);
  // console.log(this);
  // 콘솔창을 보면 둘다 동일한 값이 나온다

  console.log(event.target.classList);

  if (event.target.classList[1] === "clicked") {
    event.target.classList.remove("clicked");
    document.querySelector(".SelectTime").style.display = "none";
    document.querySelector(".SelectTicket_btn").style.display = "none";
    // document.querySelector(".TicketingSeat").style.display = "none";
    localStorage.removeItem('movieDate');

    console.log("6");
  } else {
    for (var i = 0; i < SelectDT.length; i++) {
      SelectDT[i].classList.remove("clicked");
    }

    event.target.classList.add("clicked");
    const movieDate = event.target.textContent;
    localStorage.setItem('movieDate',movieDate);
   console.log(movieDate)
    
    if (event.target.classList.value === "SelectDT clicked") {
      document.querySelector(".SelectTime").style.display = "block";
      // document.querySelector(".TicketingSeat").style.display = "none";
      document.querySelector(".SelectTicket_btn").style.display = "none";

      for (var i = 0; i < SelectTI.length; i++) {
        SelectTI[i].classList.remove("clicked");
      }
    }
  }
}

export function TimeClick(event) {
  console.log(event.target);
  // console.log(this);
  // 콘솔창을 보면 둘다 동일한 값이 나온다

  console.log(event.target.classList);

  if (event.target.classList[1] === "clicked") {
    event.target.classList.remove("clicked");
    // document.querySelector(".TicketingSeat").style.display = "none";
    document.querySelector(".SelectTicket_btn").style.display = "none";
    console.log("6");
  } else {
    for (var i = 0; i < SelectTI.length; i++) {
      SelectTI[i].classList.remove("clicked");
    }
    event.target.classList.add("clicked");
    // document.querySelector(".TicketingSeat").style.display = "block";
    document.querySelector(".SelectTicket_btn").style.display = "block";
    const movieTime = event.target.textContent;
          localStorage.setItem('movieTime',movieTime);
         console.log(movieTime)
    
  }
}


