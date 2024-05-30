import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { Navigation } from 'swiper/modules';

import team from '../../images/home-team.jpg';
import friend from '../../images/home-team-friend.png';
import friends from '../../images/home-team-friends.png';

const Slider = () => {
    return (
        <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
            <img className="team__content-image" src={team} alt="team" /> 
            </SwiperSlide>
            <SwiperSlide>
            <img className="team__content-image" src={friend} alt="team" />
            </SwiperSlide> 
            <SwiperSlide>
            <img className="team__content-image" src={friends} alt="team" /> 
            </SwiperSlide>
        </Swiper>
        </>
    );
}
export default Slider;