// IN this we have to add module by importing them to use

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// When adding the module also import it
import {
  Scrollbar,
  Autoplay,
  FreeMode,
  EffectCoverflow,
  Mousewheel,
  Virtual,
} from "swiper/modules";

// Add the css of that module you are going to use
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"];

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      //   modules={[Mousewheel]}
      modules={[
        Scrollbar,
        Autoplay,
        FreeMode,
        EffectCoverflow,
        Mousewheel,
        Virtual,
      ]}
      //   loop={true}
      //   allowSlideNext={false}
      //   allowSlidePrev={false}
      //   allowTouchMove={false}

      // ========================
      //   Add the Scrollbar
      //   scrollbar={{
      //     hide: true, //false to show
      //     draggable: true, // to drag with scrollbar
      //   }}

      // ========================
      // AutoPlay
      //   autoplay={{
      //     delay: 500,
      //     disableOnInteraction: false, // false to stop on moving after interaction
      //     // reverseDirection: true, // true to move in reverse direction
      //     stopOnLastSlide: false, // true to animate again
      //     pauseOnMouseEnter: true, //stop on hover
      //   }}
      // ========================
      //   effect="coverflow"
      //   coverflowEffect={{
      //     depth: 150,
      //     // modifier: 1,
      //     rotate: 50,// in z index
      //     stretch: 0,
      //     scale: 1,
      //     slideShadows: false,
      //   }}

      // ========================
      //   Move with animation slowly
      //   freeMode={{
      //     enabled: true,
      //     momentum: true, // to mave with animation
      //     snapToSlide: true,
      //   }}

      // ========================
      //   mousewheel={{
      //     enable: true,
      //     eventsTarget: ".swiperContainer", // set the body when want scroll according to the body
      //     forceToAxis:true, //true to just move when scroll in x axis
      //     // invert: true, // for opposite direction
      //   }}

      // ========================
      //   virtual={{
      //     enabled: true,
      //     addSlidesAfter: 1,
      //     addSlidesBefore: 1,
      //     slides: slides,
      //     renderSlide: (slide, index) => (
      //       <SwiperSlide key={index} virtualIndex={index}>
      //         {slide}
      //       </SwiperSlide>
      //     ),
      //   }}

      virtual={{
        slides: ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"],
      }}
      // navigation={true}
      //   mousewheel={{ forceToAxis: true }}
      centeredSlides={true}
      slidesPerView={3}
      spaceBetween={50}
      //   autoplay={true}
      //   onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      //   onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
      className="w-full h-60 pb-12 mt-36 bg-zinc-200 swiperContainer "
    >
      {slides.map((text, index) => (
        <SwiperSlide
          key={index}
          className={`flex items-center justify-center transition-all duration-500 rounded-lg 
          ${
            index === activeIndex
              ? "scale-110 bg-red-400 shadow-2xl z-10"
              : "scale-90 bg-sky-300 text-white opacity-70"
          }`}
        >
          {text}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Products;
