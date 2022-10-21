// Section_article01.js
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import "./Section_article.css";
import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation, Pagination, Autoplay]);
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";

function Section_article01() {
  const [movie, setMovie] = useState([]);

  function mainmovieClick(event) {
    console.log(event.target);
    // console.log(this);
    // 콘솔창을 보면 둘다 동일한 값이 나온다

    console.log(event.target.classList);
    // console.log(event.target.value);
    // console.log(event.target.value);
    const movievalue = event.target.classList.value;
    localStorage.setItem("key", movievalue);
  }

  axios
    .get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko&page=1&region=KR`
    )
    .then((res) => {
      setMovie(res.data.results);
    });

  return (
    <div className="Section_article">
      <h3>현재 상영중인 영화</h3>
      <div className="Section_article01">
        <Swiper
          style={{ zIndex: 0 }}
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
            720: {
              slidesPerView: 3,
            },
            900: {
              slidesPerView: 5,
            },
            1180: {
              slidesPerView: 6,
            },
          }}
        >
          {Object.keys(movie).map((id) => (
            <SwiperSlide>
              <div key={movie.id}>
                <Link
                  to={`/Movie_MovieInformation/${movie.id}`}
                  id={movie.id}
                  onClick={() => movie.setId(movie.id)}
                >
                  <img src={IMG_BASE_URL + movie[id].poster_path} />
                </Link>
                <br />
                <div className="posterContent_title">
                  <h4>{movie[id].title}</h4>
                </div>
                <br />
                <div>
                  <p>{movie[id].release_date}</p>
                </div>
                <br />
                <Link to="Ticketing">
                  <button className={movie[id].title} onClick={mainmovieClick}>
                    예매하기
                  </button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
export default Section_article01;

// 현재상영영화
