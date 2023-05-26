import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import '@smastrom/react-rating/style.css'



// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import { useEffect } from "react";
import { Rating } from "@smastrom/react-rating";


const Testimonial = () => {

    const [reviews, SetReviews] = useState([]);
    useEffect(() =>{
        fetch ('Review.json')
        .then (res => res.json())
        .then (data => SetReviews(data))

    },[])




    return (
    <section className="">
        <SectionTitle subHeading="What our Client Say"
               heading="Testimonials"   
        >

        </SectionTitle>
        <Swiper  navigation={true} modules={[Navigation]} className="mySwiper">
        <div > 
        {


      reviews.map(review => <SwiperSlide
      key={review._id}
      
      >

         

            <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
     
    />

        <p>{review.details}</p>
        <h3 className="text-2xl text-orange-400">{review.name}</h3>

           

                </SwiperSlide> )
                

        }

</div>

      </Swiper>

      </section>
    );
};

export default Testimonial;