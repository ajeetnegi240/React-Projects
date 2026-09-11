import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar,Mousewheel } from 'swiper/modules';
import {MediaCard} from "../index"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';

export default function MediaSlider({
    spaceBetween= 10,
    slidesPerView = 5,
    navigation = true,
    pangination = true,
    mousewheel = true,
    cards=[],
    heading}){

    
    return (
      <div className=" w-9/10  sm:h-[25vw] h-[35vw] bg-transparent ">
        <h1 className='text-white text-2xl m-2
        drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]'>{heading}</h1>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          breakpoints={
            {200:{
              spaceBetween:3,
              slidesPerView:2
            },
            340:{
              spaceBetween:5,
              slidesPerView:3
            },
            640:{
              spaceBetween:5,
              slidesPerView:4
            },
            740:{
              spaceBetween:10,
              slidesPerView:5
            }
          }}
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          slideToClickedSlide
          mousewheel

          className="h-[100%] bg-transparent "
        >
                {cards.map((eachAnime)=>
                <SwiperSlide className="">
                    <MediaCard anime={eachAnime}/>
                </SwiperSlide>)}
          ...
        </Swiper>
      </div>

  );
};