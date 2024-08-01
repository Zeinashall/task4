import Head from "next/head";
import { useEffect } from "react";
import Navbar from "../comps/navbar";
import Footer from "../comps/footer";
import About from "../comps/aboutpage";
import Details from "../comps/details";
import Login from "../comps/login";
import "../app/globals.css";

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
        <img src="nissan-kicks.webp" width="100%" alt="Nissan Kicks" />
      </div>
      <About />
      <Details />
      <Login />
    </div>
  );
}
