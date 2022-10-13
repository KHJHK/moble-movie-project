
var SelectMV = document.getElementsByClassName("SelectMV");
var SelectRG = document.getElementsByClassName("SelectRG");
var SelectCN = document.getElementsByClassName("SelectCN");
var SelectDT = document.getElementsByClassName("SelectDT");
var SelectTI = document.getElementsByClassName("SelectTI");




export function movieClick(event) {
  console.log(event.target);
  // console.log(this);
  // 콘솔창을 보면 둘다 동일한 값이 나온다

  console.log(event.target.classList);
  
  if (event.target.classList[1] === "clicked") {
    event.target.classList.remove("clicked");
    document.querySelector(".SelectRegion").style.display="none";
    document.querySelector(".SelectCinema").style.display="none";
    document.querySelector(".SelectDate").style.display="none";
    document.querySelector(".SelectTime").style.display="none";

    
    console.log("6")
  } 
  
  else {
    for (var i = 0; i < SelectMV.length; i++) {
      SelectMV[i].classList.remove("clicked");
    }
    event.target.classList.add("clicked");
    if(event.target.classList.value==="SelectMV clicked") {
    document.querySelector(".SelectRegion").style.display="block";
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
    
    document.querySelector(".SelectCinema").style.display="none";
    document.querySelector(".SelectDate").style.display="none";
    document.querySelector(".SelectTime").style.display="none";
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
    document.querySelector(".SelectCinema").style.display="none";
    document.querySelector(".SelectDate").style.display="none";
    document.querySelector(".SelectTime").style.display="none";
    console.log("6")
  } 
  
  else {
    for (var i = 0; i < SelectRG.length; i++) {
      SelectRG[i].classList.remove("clicked");
    }

   
    event.target.classList.add("clicked");
    if(event.target.classList.value==="SelectRG clicked") {
    document.querySelector(".SelectCinema").style.display="block";
    for (var i = 0; i < SelectCN.length; i++) {
      SelectCN[i].classList.remove("clicked");
    }
    for (var i = 0; i < SelectDT.length; i++) {
      SelectDT[i].classList.remove("clicked");
    }
    for (var i = 0; i < SelectTI.length; i++) {
      SelectTI[i].classList.remove("clicked");
    }
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
    document.querySelector(".SelectDate").style.display="none";
    document.querySelector(".SelectTime").style.display="none";
    console.log("6")
  } 
  
  else {
    for (var i = 0; i < SelectCN.length; i++) {
      SelectCN[i].classList.remove("clicked");
    }

   
    event.target.classList.add("clicked");
    if(event.target.classList.value==="SelectCN clicked") {
    document.querySelector(".SelectDate").style.display="block";
    for (var i = 0; i < SelectDT.length; i++) {
      SelectDT[i].classList.remove("clicked");
    }
    for (var i = 0; i < SelectTI.length; i++) {
      SelectTI[i].classList.remove("clicked");
    }
    
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
    document.querySelector(".SelectTime").style.display="none";

    console.log("6")
  } 
  
  else {
    for (var i = 0; i < SelectDT.length; i++) {
      SelectDT[i].classList.remove("clicked");
    }

   
    event.target.classList.add("clicked");
    if(event.target.classList.value==="SelectDT clicked") {
    document.querySelector(".SelectTime").style.display="block";
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
    console.log("6")
  } 
  
  else {
    for (var i = 0; i < SelectTI.length; i++) {
      SelectTI[i].classList.remove("clicked");
    }
    event.target.classList.add("clicked");
  }
}







