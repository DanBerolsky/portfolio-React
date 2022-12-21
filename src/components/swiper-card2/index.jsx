import React, { useEffect, useState } from "react";
import ReactGA from 'react-ga4';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';
import "./index.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

const swiperCardEvent = ()=>{
    ReactGA.event({
        category: 'swiperCardEvent',
        action: 'swiperCardEvent',
      }); 
}
function importAll(r) {
  return r.keys().map(r);
}
export default function App() {
  const filenames = importAll(require.context('../../../public/img-swiper', false, /\.(mp4|avif|png|jpe?g|svg)$/));
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const slidesPerGroupPerWidth = ()=>{
    return width<1130?2:3
  }
  return (
    <div onClick={swiperCardEvent} className='swiper-card card'>
      <Swiper 
        slidesPerView={slidesPerGroupPerWidth()}
        spaceBetween={30}
        slidesPerGroup={slidesPerGroupPerWidth()}
        loop={true}
        loopFillGroupWithBlank={false}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4600,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        style={{
          "--swiper-navigation-color": "#da0808",
          "--swiper-pagination-color": "#bd6bff",
          "--swiper-navigation-size" : "20px",
          "--swiper-pagination-bullet-inactive-color":"#8162df"
        }}
        className="mySwiper"
      >
        {
        filenames.map((filename, index) => {
          if(filename.includes(".mp4"))
            return (
          <SwiperSlide key={index}>
            <video width="100%" height="100%" autoPlay playsInline muted loop >
              <source src={filename} type="video/mp4"/>
              Your browser doesn't support HTML video.
            </video>
          </SwiperSlide>)
          return(<SwiperSlide key={index}><img src={filename} alt="ProPPle" /></SwiperSlide>)
        })
        }
      </Swiper>
    </div>
  );
}
