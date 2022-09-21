// Section_article01.js

import React from "react";
import { Link } from "react-router-dom";
import "./Section_article.css";
// Import Swiper styles
import "swiper/css"; //basic
import "swiper/css/navigation";
// import "swiper/css/pagination";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Autoplay
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay]);

const MovieList01 = [
  {
    name: "늑대사냥",
    date: "2022-01-02",
    img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86154/86154_320.jpg",
  },
  {
    name: "비스트",
    date: "2023-02-30",
    img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86222/86222_320.jpg",
  },
  {
    name: "9명의 번역가",
    date: "2033-03-94",
    img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86122/86122_320.jpg",
  },
  {
    name: "정직한 후보 2",
    date: "2022-01-02",
    img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86191/86191_320.jpg",
  },
  {
    name: "비상선언",
    date: "2023-02-30",
    img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85465/85465_320.jpg",
  },
  {
    name: "라라랜드",
    date: "2033-03-94",
    img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85672/85672_320.jpg",
  },
  {
    name: "헤어진 결심",
    date: "2022-01-02",
    img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85852/85852_320.jpg",
  },
  {
    name: "미니언즈",
    date: "2023-02-30",
    img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000083/83127/83127_320.jpg",
  },
  {
    name: "모가디슈",
    date: "2033-03-94",
    img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000084/84775/84775_320.jpg",
  },
  {
    name: "늑대사냥",
    date: "2022-01-02",
    img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86154/86154_320.jpg",
  },
  {
    name: "비스트",
    date: "2023-02-30",
    img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86222/86222_320.jpg",
  },
  {
    name: "9명의 번역가",
    date: "2033-03-94",
    img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86122/86122_320.jpg",
  },
  {
    name: "정직한 후보 2",
    date: "2022-01-02",
    img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86191/86191_320.jpg",
  },
  {
    name: "비상선언",
    date: "2023-02-30",
    img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85465/85465_320.jpg",
  },
  {
    name: "라라랜드",
    date: "2033-03-94",
    img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85672/85672_320.jpg",
  },
  {
    name: "헤어진 결심",
    date: "2022-01-02",
    img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85852/85852_320.jpg",
  },
  {
    name: "미니언즈",
    date: "2023-02-30",
    img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000083/83127/83127_320.jpg",
  },
  {
    name: "모가디슈",
    date: "2033-03-94",
    img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000084/84775/84775_320.jpg",
  },
];

// const MovieList02 = [
//   {
//     name: "늑대사냥",
//     date: "2022-01-02",
//     img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86154/86154_320.jpg",
//   },
//   {
//     name: "비스트",
//     date: "2023-02-30",
//     img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86222/86222_320.jpg",
//   },
//   {
//     name: "9명의 번역가",
//     date: "2033-03-94",
//     img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86122/86122_320.jpg",
//   },
//   {
//     name: "정직한 후보 2",
//     date: "2022-01-02",
//     img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86191/86191_320.jpg",
//   },
//   {
//     name: "비상선언",
//     date: "2023-02-30",
//     img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85465/85465_320.jpg",
//   },
//   {
//     name: "라라랜드",
//     date: "2033-03-94",
//     img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85672/85672_320.jpg",
//   },
//   {
//     name: "헤어진 결심",
//     date: "2022-01-02",
//     img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85852/85852_320.jpg",
//   },
//   {
//     name: "미니언즈",
//     date: "2023-02-30",
//     img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000083/83127/83127_320.jpg",
//   },
//   {
//     name: "모가디슈",
//     date: "2033-03-94",
//     img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000084/84775/84775_320.jpg",
//   },
//   {
//     name: "늑대사냥",
//     date: "2022-01-02",
//     img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86154/86154_320.jpg",
//   },
//   {
//     name: "비스트",
//     date: "2023-02-30",
//     img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86222/86222_320.jpg",
//   },
//   {
//     name: "9명의 번역가",
//     date: "2033-03-94",
//     img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86122/86122_320.jpg",
//   },
//   {
//     name: "정직한 후보 2",
//     date: "2022-01-02",
//     img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86191/86191_320.jpg",
//   },
//   {
//     name: "비상선언",
//     date: "2023-02-30",
//     img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85465/85465_320.jpg",
//   },
//   {
//     name: "라라랜드",
//     date: "2033-03-94",
//     img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85672/85672_320.jpg",
//   },
//   {
//     name: "헤어진 결심",
//     date: "2022-01-02",
//     img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85852/85852_320.jpg",
//   },
//   {
//     name: "미니언즈",
//     date: "2023-02-30",
//     img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000083/83127/83127_320.jpg",
//   },
//   {
//     name: "모가디슈",
//     date: "2033-03-94",
//     img: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000084/84775/84775_320.jpg",
//   },
// ];

// const Button = () => {
//   return (
//     <div>
//       <button>예매하기</button>
//     </div>
//   );
// };

export default () => {
  return (
    <div className="all">
      <h3>현재 상영중인 영화</h3>
      <Swiper
        spaceBetween={30} //위 slidesPerview 여백
        slidesPerView={6} //레이아웃 뷰 개수
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        scrollbar={{ draggable: true }}
        navigation
        loop={true} //반복 재생 여부
        direction={"horizontal"} // 수평 슬라이드
        autoplay={{ delay: 3000 }} //Autoplay 자동재생 슬라이드
        pagination={{ clickable: true }}
        breakpoints={{
          // 720: {
          //   slidesPerView: 2,
          // },
          900: {
            slidesPerView: 4,
          },
          1180: {
            slidesPerView: 6,
          },
        }}
      >
        {MovieList01.map((data01) => (
          <SwiperSlide key={data01.key}>
            <Link to="/Movie_MovieInformation">
              <img src={data01.img} alt={data01.name}></img>
            </Link>
            <br />
            <p>{data01.name}</p>
            <p>{data01.date}</p>
            <br />
            <Link to="/Ticketing">
              <button>예매하기</button>
            </Link>
            <br />
            <br />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
