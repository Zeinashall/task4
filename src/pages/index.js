
import Head from "next/head";
import { useEffect } from "react";
import Navbar from "../comps/navbar";
import Footer from "../comps/footer";
import About from "../comps/aboutpage";
import Details from "../comps/details";
import Login from "../comps/login";
import "../app/globals.css";
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export default function Home() {
  useEffect(() => {
    const anchors = document.querySelectorAll(".menu a");
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      });
    });

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", function (e) {
          e.preventDefault();
        });
      });
    };
    
  }, []);

  return (
    <div>
      <Head>
        <title>Nissan Website</title>
        <meta name="description" content="Nissan Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="imagecontainer" id="home">
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><Image
      src="/nissan-kicks.webp"
         layout="responsive"
      width={2000}
      height={1000}
      alt="Picture1"/></SwiperSlide>

      <SwiperSlide><Image
      src="/swiper2.webp"
         layout="responsive"
      width={2000}
      height={1000}
      alt="Picture2"/>  </SwiperSlide>

      <SwiperSlide><Image
      src="/swiper3.webp"
         layout="responsive"
      width={2000}
      height={1000}
      alt="Picture3"/></SwiperSlide>

      <SwiperSlide><Image
      src="/swiper4.webp"
         layout="responsive"
      width={2000}
      height={1000}
      alt="Picture4"/>  </SwiperSlide>
          </Swiper>

      </div>
      <About />
      <Details />
      <Login />
    </div>
  );
}
