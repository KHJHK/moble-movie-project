// Theater_MovieTheaterLocationMovement.js

export function areaclick() {
  const areaclicke = document.querySelector("#areaText");
  const Theaterclick = document.querySelector("#TheaterText");
  const resultclick = document.querySelector("#resultText");
  const Theartmenu = document.querySelector("#Theater1");
  const Theartmenu2 = document.querySelector("#Theater2");

  areaclicke.innerHTML = "천안시";
  Theartmenu.innerHTML = "터미널점";
  Theartmenu2.innerHTML = "시청점";
  Theaterclick.innerHTML = "선택해주세요";
  resultclick.innerHTML = "선택해주세요";
}

export function areaclick1() {
  const areaclicke = document.querySelector("#areaText");
  const Theaterclick = document.querySelector("#TheaterText");
  const resultclick = document.querySelector("#resultText");
  const Theartmenu = document.querySelector("#Theater1");
  const Theartmenu2 = document.querySelector("#Theater2");

  areaclicke.innerHTML = "오산시";
  Theartmenu.innerHTML = "운암점";
  Theartmenu2.innerHTML = "시청점";
  Theaterclick.innerHTML = "선택해주세요";
  resultclick.innerHTML = "선택해주세요";
}

export function areaclick2() {
  const areaclicke = document.querySelector("#areaText");
  const Theaterclick = document.querySelector("#TheaterText");
  const resultclick = document.querySelector("#resultText");
  const Theartmenu = document.querySelector("#Theater1");
  const Theartmenu2 = document.querySelector("#Theater2");

  areaclicke.innerHTML = "평택시";
  Theartmenu.innerHTML = "시청점";
  Theartmenu2.innerHTML = "소사벌점";
  Theaterclick.innerHTML = "선택해주세요";
  resultclick.innerHTML = "선택해주세요";
}

export function Theaterclick() {
  const areaclicke = document.querySelector("#areaText");
  const resultclick = document.querySelector("#resultText");
  const Theartmenu = document.querySelector("#Theater1");
  const TheaterText = document.querySelector("#TheaterText");
  TheaterText.innerHTML = Theartmenu.innerHTML;
  resultclick.innerHTML = areaclicke.innerHTML + " " + TheaterText.innerHTML;

  var container = document.getElementById("map");

  if (resultclick.innerHTML === "오산시 운암점") {
    var options = {
      center: new window.kakao.maps.LatLng(37.1493, 127.076),
      level: 3, //이미지 지도의 확대 레벨
    };

    var map = new window.kakao.maps.Map(container, options);
    var markerPosition = new window.kakao.maps.LatLng(37.1493, 127.076);
    var marker = new window.kakao.maps.Marker({ position: markerPosition }); //이미지지도에 표시할 마커 생성
    var infowindow = new window.kakao.maps.InfoWindow({
      content:
        '<div style="width:150px;color:red;text-align:center;padding:6px 0;font-size:17px";>MCL 오산 운암점</div>',
    });

    infowindow.open(map, marker);
    marker.setMap(map);
  } else if (resultclick.innerHTML === "천안시 터미널점") {
    var options = {
      center: new window.kakao.maps.LatLng(36.8195, 127.1567),
      level: 3, //이미지 지도의 확대 레벨
    };

    var map = new window.kakao.maps.Map(container, options);
    var markerPosition = new window.kakao.maps.LatLng(36.8195, 127.1567);
    var marker = new window.kakao.maps.Marker({ position: markerPosition }); //이미지지도에 표시할 마커 생성
    var infowindow = new window.kakao.maps.InfoWindow({
      content:
        '<div style="width:150px;color:red;text-align:center;padding:6px 0;font-size:17px";>MCL 천안 터미널점</div>',
    });

    infowindow.open(map, marker);
    marker.setMap(map);
  } else if (resultclick.innerHTML === "평택시 시청점") {
    var options = {
      center: new window.kakao.maps.LatLng(36.9926, 127.1131),
      level: 3, //이미지 지도의 확대 레벨
    };

    var map = new window.kakao.maps.Map(container, options);
    var markerPosition = new window.kakao.maps.LatLng(36.9926, 127.1131);
    var marker = new window.kakao.maps.Marker({ position: markerPosition }); //이미지지도에 표시할 마커 생성
    var infowindow = new window.kakao.maps.InfoWindow({
      content:
        '<div style="width:150px;color:red;text-align:center;padding:6px 0;font-size:17px";>MCL 평택 시청점</div>',
    });

    infowindow.open(map, marker);
    marker.setMap(map);
  }
}

export function Theaterclick1() {
  const areaclicke = document.querySelector("#areaText");
  const resultclick = document.querySelector("#resultText");
  const Theartmenu = document.querySelector("#Theater2");
  const TheaterText = document.querySelector("#TheaterText");
  TheaterText.innerHTML = Theartmenu.innerHTML;
  resultclick.innerHTML = areaclicke.innerHTML + " " + TheaterText.innerHTML;

  var container = document.getElementById("map");

  if (resultclick.innerHTML === "천안시 시청점") {
    var options = {
      center: new window.kakao.maps.LatLng(36.8151, 127.1138),
      level: 3, //이미지 지도의 확대 레벨
    };

    var map = new window.kakao.maps.Map(container, options);
    var markerPosition = new window.kakao.maps.LatLng(36.8151, 127.1138);
    var marker = new window.kakao.maps.Marker({ position: markerPosition }); //이미지지도에 표시할 마커 생성
    var infowindow = new window.kakao.maps.InfoWindow({
      content:
        '<div style="width:150px;color:red;text-align:center;padding:6px 0;font-size:17px";>MCL 천안 시청점</div>',
    });

    infowindow.open(map, marker);
    marker.setMap(map);
  } else if (resultclick.innerHTML === "오산시 시청점") {
    var options = {
      center: new window.kakao.maps.LatLng(37.1505, 127.0762),
      level: 3, //이미지 지도의 확대 레벨
    };

    var map = new window.kakao.maps.Map(container, options);
    var markerPosition = new window.kakao.maps.LatLng(37.1505, 127.0762);
    var marker = new window.kakao.maps.Marker({ position: markerPosition }); //이미지지도에 표시할 마커 생성
    var infowindow = new window.kakao.maps.InfoWindow({
      content:
        '<div style="width:150px;color:red;text-align:center;padding:6px 0;font-size:17px";>MCL 오산 시청점</div>',
    });

    infowindow.open(map, marker);
    marker.setMap(map);
  } else if (resultclick.innerHTML === "평택시 소사벌점") {
    var options = {
      center: new window.kakao.maps.LatLng(37.0013, 127.1142),
      level: 3, //이미지 지도의 확대 레벨
    };

    var map = new window.kakao.maps.Map(container, options);
    var markerPosition = new window.kakao.maps.LatLng(37.0013, 127.1142);
    var marker = new window.kakao.maps.Marker({ position: markerPosition }); //이미지지도에 표시할 마커 생성
    var infowindow = new window.kakao.maps.InfoWindow({
      content:
        '<div style="width:150px;color:red;text-align:center;padding:6px 0;font-size:17px";>MCL 평택 소사벌점</div>',
    });

    infowindow.open(map, marker);
    marker.setMap(map);
  }
}
