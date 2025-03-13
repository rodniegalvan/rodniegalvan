// data
const workSlider = {
  slides: [
    {
      images: [
        {
          title: "Shopify",
          path: "/thumb1.jpg",
          link: "https://wildsideseats.net/",
        },
        {
          title: "Web Scraping",
          path: "/web-scraping.png",
          link: "https://rodnie-web-scraping.vercel.app/",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
      ],
    },
  ],
};

const defaultLinks = "https://launching-soon-mu.vercel.app/";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

//required modules
import { Pagination } from "swiper";
import Image from "next/image";

//icons
import { BsArrowRight } from "react-icons/bs";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[240px sm:h-[480px]"
    >
      {workSlider.slides.map((slide, slideIndex) => {
        return (
          <SwiperSlide key={slideIndex}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, imageIndex) => {

                return (
                  <div
                    key={imageIndex}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div
                      className="flex items-center justify-center relative overflow-hidden group"
                      onClick={() => {
                        window.open(image.link ? image.link : defaultLinks, "_blank");
                      }}
                    >
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt="" />
                      {/* overlay */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          <div className="delay-100">Live</div>
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            Project
                          </div>
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
