import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Swiper.css";

// import required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import axios from "axios";

export default function App() {
  const [projects, setProject] = useState([])

  useEffect(() => {
    axios.get("Swiper.json")
    .then((res) => {
      setProject(res.data.projects)
    })
  }, [])
  return (
    <>
      <Swiper  slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        
       
        modules={[Navigation, Pagination, Scrollbar, A11y]} 
        navigation={true}
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="mySwiper wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s"
      >
      {projects.slice(0, 4).map((projects => 
        <SwiperSlide key={projects.id}>
           <div  className="MainSwipesDiv animate__animated animate__backInLeft" >
              <img  src={projects.photo} alt="Not_Found" />
              <a href={projects.link} target="_blank">
              <button >Read more</button>
              </a>
            </div>
        </SwiperSlide>
      ))}
      </Swiper>
    </>
  );
}
