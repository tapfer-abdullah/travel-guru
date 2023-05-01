/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './SharedPages/Header';
import { Link, useLoaderData, useLocation } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Destinations = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div className="px-3 md:px-32 h-full w-full">
            <Header></Header>
            
            <div>
            <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

        {data.map(d => <SwiperSlide>
            <img className="w-full h-full rounded-2xl" src={d.img} alt="" />
            <h3 className="swipperImgTitle"><Link>COX'S BAZAR</Link></h3>
        </SwiperSlide>)}

        {/* <SwiperSlide>Slide 1</SwiperSlide> */}
        
      </Swiper>
            </div>
        </div>
    );
};

export default Destinations;