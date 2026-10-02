import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar,Mousewheel } from 'swiper/modules';
import {HeroCard} from "../index"



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';

export default function HeroSlider(
    {spaceBetween= 10,
    slidesPerView = 1,
    navigation = true,
    pangination = true,
    mousewheel = true,
    cards=[],
    heading,
    loading=false}){
    
    
    return (
        <>
        {!loading &&(
        <div className=" justify-center bg-transparent w-9/10 h-[55vw] sm:h-[45vw] "
>
            <div className="flex bg-transparent justify-center">
                <h1 className='text-white m-2
                drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]
                self-center text-2xl'>{heading}</h1>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar]}
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                slideToClickedSlide
                pagination={{ clickable: true }}
                mousewheel
                onSlideChange={() => console.log('slide change')}


                className ="h-[100%] bg-transparent 
                            [&_.swiper-pagination-bullet]:bg-black
                            [&_.swiper-pagination-bullet]:opacity-200
                            [&_.swiper-pagination-bullet-active]:opacity-100"


                >
                {cards.map((eachAnime)=>
                <SwiperSlide className="">
                    <HeroCard anime={eachAnime}/>
                </SwiperSlide>)}
                ...
            </Swiper>
        </div>)}
        {loading&&(
        <div className=" justify-center bg-transparent w-9/10 h-[55vw] sm:h-[45vw] ">Loading...</div>
        )}
        </>

    );
};