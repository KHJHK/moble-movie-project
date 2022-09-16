import React from 'react';

const MovieList = [
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

const Test = () => {
    return (
        <div>
            <h3>영화 리스트</h3>
            <table>
                <tr>
                    <td>영화명</td>
                    <td>개봉일</td>
                    <td>포스터</td>
                </tr>
                {
                    MovieList.map((data)=> (
                        <tr key={data.key}>
                            <td>{data.name}</td>
                            <td>{data.date}</td>
                            <td><img src={data.img} alt={data.name}></img></td>
                        </tr>
                        
                    ))
                }
            </table>
        </div>
    );
};

export default Test;