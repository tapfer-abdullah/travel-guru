/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination" ;

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import "./HomeCard.css";


import imgCox from "./../../Recourse/images/Rectangle 1.png"
import imgSund from "./../../Recourse/images/sundorbon.png"
import imgSre from "./../../Recourse/images/Sreemongol.png"
import imgSaj from "./../../Recourse/images/Sajek.png"
import { Link } from "react-router-dom";

const HomeCards = () => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="swipperImg">
            <img className="w-full h-full rounded-2xl" src={imgCox} alt="" />
            <h3 className="swipperImgTitle"><Link>COX'S BAZAR</Link></h3>
        </SwiperSlide>

        <SwiperSlide className="swipperImg">
            <img className="w-full h-full" src={imgSre} alt="" />
            <h3 className="swipperImgTitle"><Link>SREEMANGAL</Link></h3>
        </SwiperSlide>

        <SwiperSlide className="swipperImg">
            <img className="w-full h-full" src={imgSund} alt="" />
            <h3 className="swipperImgTitle"><Link>SUNDARBANS</Link></h3>
        </SwiperSlide>

        <SwiperSlide className="swipperImg">
            <img className="w-full h-full" src={imgSaj} alt="" />
            <h3 className="swipperImgTitle"><Link>SAJEK</Link></h3>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default HomeCards;
