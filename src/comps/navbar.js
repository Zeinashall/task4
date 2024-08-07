import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import "../app/globals.css";
import Link from "next/link";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    const menu = document.querySelector(".navbar ul.menu");
    if (menu) {
      menu.classList.toggle("active");
    }
  };

  const handleLoginClick = () => {
    const element = document.getElementById("login");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuActive(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-black z-30">
      <div className="container mx-auto">
        <div className="navbar flex justify-between items-center py-4">
          <Link
            href="/"
            className="logo text-white flex items-center text-2xl no-underline"
          >
            <Image src="/icon12.png" width={35} height={35} alt="Logo" />
            <span className="logo-primary text-[rgb(134,6,6)] font-['Rock Salt'] italic mx-1">
              N
            </span>
            issan
            <span className="logo-primary text-[rgb(134,6,6)] font-['Rock Salt'] italic mx-1">
              V
            </span>
            ehicles
          </Link>
          <div className="mobile-menu flex items-center gap: 0.25rem ">
            <div
              className="burger-menu menu-toggle text-2xl text-[rgb(134,6,6)] cursor-pointer p-4 md:hidden"
              onClick={toggleMenu}
            >
              <i className="fas fa-bars"></i>
            </div>
            <ul
              className={`menu flex flex-row md:items-center ${
                menuActive ? "block" : "hidden"
              } md:block`}
            >
              <li className="md:inline-block my-2 md:my-0 ">
                <Link
                  passHref
                  href="/aboutpage"
                  className="text-white text-xl no-underline p-4 block md:inline-block hover:bg-[rgb(134,6,6)] hover:rounded-lg hover:cursor-pointer hover:shadow-md"
                >
                  About
                </Link>
              </li>
              <li className="md:inline-block my-2 md:my-0 ">
                <Link
                  href="/detailspage"
                  className="text-white text-xl no-underline p-4 block md:inline-block hover:bg-[rgb(134,6,6)] hover:rounded-lg hover:cursor-pointer hover:shadow-md"
                >
                  Details
                </Link>
              </li>
              <li className="md:inline-block my-2 md:my-0 ">
                <Link
                  href="/loginpage"
                  className="text-white text-xl no-underline p-4 block md:inline-block hover:bg-[rgb(134,6,6)] hover:rounded-lg hover:cursor-pointer hover:shadow-md"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
