import Head from "next/head";
import About from "../comps/about";
import Details from "../comps/details";
import Login from "../comps/login";
import "../app/globals.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nissan Website</title>
        <meta name="description" content="Nissan Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="imagecontainer pt-[91px]">
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
                src="/nissan-kicks.webp"
                layout="fill"
                objectFit="cover"
                alt="Picture1"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/swiper2.webp"
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
      <About />
      <Details />
      <Login />
    </div>
  );
}
