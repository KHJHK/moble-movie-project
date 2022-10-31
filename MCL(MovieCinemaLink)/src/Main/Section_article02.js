// Section_article02.js
import axios from "axios";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

// import css
import "./Section_article.css";
import "swiper/css"; //basic
import "swiper/css/navigation";
// import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination, Autoplay]);
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";

function Section_article02() {
  const [movie, setMovie] = useState([]);

  axios
    .get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko&page=1&region=KR`
    )
    .then((res) => {
      setMovie(res.data.results);
    });

  return (
    <div className="Section_article">
      <h3>상영 예정 영화</h3>
      <div className="Section_article02">
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
          {movie.map((m, inx) => (
            <SwiperSlide>
              <div key={m.id + "-" + inx}>
                <Link
                  to={`/Movie_MovieInformationUpComing/${m.id}`}
                  id={m.id}
                  // onClick={() => movie.setId(movie.id)}
                >
                  <img src={IMG_BASE_URL + m.poster_path} />
                </Link>
                <br />
                <div className="posterContent_title">
                  <h4>{m.title}</h4>
                </div>
                <br />
                <div>
                  <p>{m.release_date}</p>
                </div>
                <br />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
export default Section_article02;
