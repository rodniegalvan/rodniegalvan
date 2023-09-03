// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// service data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "I specialize in building responsive and user-friendly websites using modern web technologies.",
  },
  {
    icon: <RxPencil2 />,
    title: "UI/UX Design",
    description: "I create intuitive and visually appealing user interfaces, focusing on a seamless user experience.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "I'm experienced in developing dynamic and interactive front-end applications with JavaScript frameworks.",
  },
  {
    icon: <RxReader />,
    title: "Content Writing",
    description: "I craft compelling content that tells stories, engages readers, and delivers your message effectively.",
  },
  {
    icon: <RxRocket />,
    title: "SEO Optimization",
    description: "I optimize websites for search engines to increase visibility and drive organic traffic.",
  },
];


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-[max] rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-8 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal max-h-[300px] line-clamp-3 overflow-hidden">
                  {item.description}
                </p>
              </div>
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
