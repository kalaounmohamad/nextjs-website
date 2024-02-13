"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../img/creoshift_logo.jpg";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

// import FaTimes from "./x-icon.svg";
// import FiMenu from "./menu-icon.svg";

export default function Navbar() {
  const [menuSet, setMenuSet] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuSet(!menuSet);
  };

  const closeMenu = () => {
    setMenuSet(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setMenuSet(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mx-4 sm:mx-8">
      <nav class="max-w-screen-xl mx-auto flex justify-between items-center mt-4 sm:mt-8 flex-wrap w-full">
        <Link href="/">
          <Image
            src={Logo}
            alt="Creoshift logo"
            width={70}
            loading="eager"
            className="hover:opacity-75"
          />
        </Link>
        {/* {menuSet ? (
          <FaTimes
            className="sm:hidden block h-6 w-6 cursor-pointer"
            onClick={toggleMenu}
          />
        ) : (
          <FiMenu
            className="sm:hidden block h-6 w-6 cursor-pointer"
            onClick={toggleMenu}
          />
        )} */}
        {menuSet ? (
          // <Image
          //   src={FaTimes}
          //   alt="Close menu"
          //   className="sm:hidden block h-6 w-6 cursor-pointer"
          //   onClick={toggleMenu}
          // />

          <button
            className="sm:hidden block  text-black cursor-pointer  z-20  text-3xl p-0 font-bold"
            onClick={toggleMenu}
          >
            ✕
          </button>
        ) : (
          <button
            className="sm:hidden block text-black cursor-pointer text-3xl p-0 font-bold"
            onClick={toggleMenu}
          >
            ☰
          </button>

          // <Image
          //   src={FiMenu}
          //   alt="Open menu"
          //   className="sm:hidden block h-6 w-6 cursor-pointer"
          //   onClick={toggleMenu}
          // />
        )}
        <div
          class={`${
            menuSet
              ? " absolute sm:relative top-0 z-10 pt-8 h-screen"
              : // ? " absolute sm:relative top-28 sm:top-auto"
                "hidden"
          } w-full  px-4 sm:px-0 -ml-4 sm:ml-0  sm:flex sm:items-center sm:w-auto bg-[#04AA6D] sm:bg-[#f4ebfa]`}
        >
          <ul class="text-base sm:flex sm:justify-between gap-5 space-y-4 sm:space-y-0">
            <li>
              <Link
                href="/"
                onClick={closeMenu}
                // className="block font-semibold text-white sm:text-gray-500"
                className={`block font-semibold text-white sm:text-gray-500 ${
                  pathname === "/" ? "underline" : ""
                }`}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/tickets"
                onClick={closeMenu}
                // className="block font-semibold text-white sm:text-gray-500"
                className={`block font-semibold text-white sm:text-gray-500 ${
                  pathname === "/tickets" ? "underline" : ""
                }`}
              >
                Tickets
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
