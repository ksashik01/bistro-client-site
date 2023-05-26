import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slide1 from '../../../assets/assets/home/slide1.jpg'
import slide2 from '../../../assets/assets/home/slide2.jpg'
import slide3 from '../../../assets/assets/home/slide3.jpg'
import slide4 from '../../../assets/assets/home/slide4.jpg'
import slide5 from '../../../assets/assets/home/slide5.jpg'


const Categorey = () => {
    return (

<section className="mt-40 mb-20">

          
          <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modul  es={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slide1} alt="" />
        
        </SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
      </Swiper>
     


</section>

        
      


    
    );
};

export default Categorey;