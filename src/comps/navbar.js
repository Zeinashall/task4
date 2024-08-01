import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import "../app/globals.css";

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
    // Optionally, you can close the menu after clicking on a link
    setMenuActive(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-black z-30">
      <div className="container mx-auto">
        <div className="navbar flex justify-between items-center py-4">
          <a href="#" className="logo text-white flex items-center text-2xl no-underline">
            <Image src="/icon12.png" width={35} height={35} alt="Logo" />
            <span className="logo-primary text-[rgb(134,6,6)] font-['Rock Salt'] italic mx-1">N</span>issan
            <span className="logo-primary text-[rgb(134,6,6)] font-['Rock Salt'] italic mx-1">V</span>ehicles
          </a>
          <div className="mobile-menu flex items-center">
            <div className="burger-menu menu-toggle text-2xl text-[rgb(134,6,6)] cursor-pointer p-4 md:hidden" onClick={toggleMenu}>
              <i className="fas fa-bars"></i>
            </div>
            <ul className={`menu flex flex-col md:flex-row md:items-center ${menuActive ? 'block' : 'hidden'} md:block`}>
              <li className="md:inline-block my-2 md:my-0 md:ml-4">
                <a href="#aboutpage" className="text-white text-xl no-underline p-4 block md:inline-block hover:bg-[rgb(134,6,6)] hover:rounded-lg hover:cursor-pointer hover:shadow-md">
                  About
                </a>
              </li>
              <li className="md:inline-block my-2 md:my-0 md:ml-4">
                <a href="#details" className="text-white text-xl no-underline p-4 block md:inline-block hover:bg-[rgb(134,6,6)] hover:rounded-lg hover:cursor-pointer hover:shadow-md">
                  Details
                </a>
              </li>
              <li className="md:inline-block my-2 md:my-0 md:ml-4">
                <a href="#login" className="text-white text-xl no-underline p-4 block md:inline-block hover:bg-[rgb(134,6,6)] hover:rounded-lg hover:cursor-pointer hover:shadow-md">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


