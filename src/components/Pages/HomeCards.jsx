/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination" ;

// import required modules
import { Pagination } from "swiper";
import "./HomeCard.css";


import imgCox from "./../../Recourse/images/Rectangle 1.png"
import imgSund from "./../../Recourse/images/sundorbon.png"
import imgSre from "./../../Recourse/images/Sreemongol.png"
import imgSaj from "./../../Recourse/images/Sajek.png"
import { Link } from "react-router-dom";
import { DestinationData } from "./HomeContents";

const HomeCards = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(-1);
  const {setSingleDest, setLoading, loading} = useContext(DestinationData)

  const [data, setData] = useState([]);
  useEffect( () =>{
    fetch("http://localhost:5000/destinations")
    .then(res => res.json())
    .then(info => setData(info))
    setLoading(false)
  } , [])

  const params = {
    onSlideChange: (swiper) => {
      setCurrentSlideIndex(swiper.activeIndex);
    },
  };
    console.log(currentSlideIndex, data)

  useEffect(() =>{
    const dd = data.find(f => f.id == currentSlideIndex)
    setSingleDest(dd)
    
    console.log(dd)
  } , [currentSlideIndex, loading])

  const handleClick = (id) =>{
    setCurrentSlideIndex(id)
  }

  return (
    <div>
      <Swiper
      {...params}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        // onSlideChange={() => console.log('slide change')}
        // onClick={handleClick}
      >

        {
          data.map(d => <SwiperSlide 
          key={d.id} 
          onClick={() => handleClick(d.id)} 
          className= {`swipperImg rounded-2xl ${d.id == currentSlideIndex && "my-active"}`}
          >
            <img className="w-full h-full rounded-2xl" src={d.img} alt="" />
            <h3 className="swipperImgTitle"><Link>{d.title}</Link></h3>

          </SwiperSlide>)
        }

        <span>
          {/* <SwiperSlide className="swipperImg rounded-2xl">
            <img className="w-full h-full rounded-2xl" src={imgCox} alt="" />
            <h3 className="swipperImgTitle"><Link>COX'S BAZAR</Link></h3>
        </SwiperSlide>

        <SwiperSlide className="swipperImg rounded-2xl">
            <img className="w-full h-full rounded-2xl" src={imgSre} alt="" />
            <h3 className="swipperImgTitle"><Link>SREEMANGAL</Link></h3>
        </SwiperSlide>

        <SwiperSlide className="swipperImg rounded-2xl">
            <img className="w-full h-full rounded-2xl" src={imgSund} alt="" />
            <h3 className="swipperImgTitle"><Link>SUNDARBANS</Link></h3>
        </SwiperSlide>

        <SwiperSlide className="swipperImg rounded-2xl">
            <img className="w-full h-full rounded-2xl" src={imgSaj} alt="" />
            <h3 className="swipperImgTitle"><Link>SAJEK</Link></h3>
        </SwiperSlide> */}
        </span>
        
      </Swiper>
    </div>
  );
};

export default HomeCards;
