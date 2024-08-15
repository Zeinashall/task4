import React from "react";
import TextStyle from "../comps/TextStyle";
import AboutContent from "../comps/AboutContent";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from "next/image";

export default function AboutPage() {
  const sections = [
    {
      title: "Revolution in Travel",
      paragraph:
        "Cars have revolutionized the way we travel, providing unparalleled convenience and flexibility. From the early days of the automobile to the advanced electric vehicles of today, technology has continually pushed the boundaries of performance and efficiency. Modern cars come equipped with a myriad of features such as advanced safety systems, connectivity options, and autonomous driving capabilities. As a result, driving has become not only safer but also more enjoyable and sustainable.",
      image: "/about1.webp",
      imagePosition: "right",
    },
    {
      title: "Evolving Industry",
      paragraph:
        "The automotive industry is constantly evolving, with manufacturers competing to offer the best in design, functionality, and innovation. Sleek, aerodynamic designs are now the norm, enhancing both the aesthetic appeal and fuel efficiency of vehicles. Hybrid and electric cars are gaining popularity as consumers become more environmentally conscious and seek to reduce their carbon footprint. These advancements are paving the way for a greener future in transportation.",
      image: "/about2.webp",
      imagePosition: "left",
    },
    {
      title: "Performance and Craftsmanship",
      paragraph:
        "Car enthusiasts have a deep appreciation for the craftsmanship and engineering that goes into creating high-performance vehicles. Sports cars, in particular, are celebrated for their speed, agility, and cutting-edge technology. Manufacturers like Nissan are continually pushing the limits with models that offer thrilling driving experiences and state-of-the-art features. Collectors and hobbyists often seek out classic cars, which embody a rich history and timeless elegance.",
      image: "/about3.webp",
      imagePosition: "right",
    },
    {
      title: "Future of Automobiles",
      paragraph:
        "The future of cars is incredibly exciting, with developments in electric powertrains, autonomous driving, and smart connectivity leading the charge. Electric vehicles (EVs) are becoming more accessible, with improved battery technology extending their range and reducing charging times. Autonomous vehicles promise to transform urban mobility, reducing traffic congestion and increasing safety on the roads. As cars become more integrated with digital ecosystems, the driving experience is set to become more personalized and connected than ever before.",
      image: "/about4.webp",
      imagePosition: "left",
    },
  ];

  return (
    <div>
      <div className="container mx-auto py-12 px-4">
        <div className="h-20"></div>

        {/* Swiper container */}
        <div className="swiper-container mb-6"> 
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]} 
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="h-[530px]"
          >
            <SwiperSlide>
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/details7.webp"
                  layout="fill"
                  objectFit="cover"
                  alt="Picture1"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/details7.webp"
                  layout="fill"
                  objectFit="cover"
                  alt="Picture1"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/details2.webp"
                  layout="fill"
                  objectFit="cover"
                  alt="Picture2"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/swiper3.webp"
                  layout="fill"
                  objectFit="cover"
                  alt="Picture3"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/swiper4.webp"
                  layout="fill"
                  objectFit="cover"
                  alt="Picture4"
                />
              </div>
            </SwiperSlide>
                      </Swiper>
        </div>
        <div className="h-6"></div>

        <TextStyle
          fontStyle="italic"
          color="text-gray-600"
          alignment="text-left"
          size="text-4xl"
          shadow="shadow-lg"
          hoverColor="hover:text-blue-400"
        />
        <AboutContent sections={sections} />
      </div>
    </div>
  );
}
