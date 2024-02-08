"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "./creoshift_logo.jpg";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [menuSet, setMenuSet] = useState(false);

  const toggleMenu = () => {
    setMenuSet(!menuSet);
  };
  return (
    <div>
      <nav class="max-w-5xl mx-auto flex justify-between items-center mt-4 sm:mt-8 flex-wrap w-full">
        <Link href="/">
          <Image
            src={Logo}
            alt="Creoshift logo"
            width={70}
            placeholder="blur"
          />
        </Link>
        {menuSet ? (
          <FaTimes
            className="sm:hidden block h-6 w-6 cursor-pointer"
            onClick={toggleMenu}
          />
        ) : (
          <FiMenu
            className="sm:hidden block h-6 w-6 cursor-pointer"
            onClick={toggleMenu}
          />
        )}
        <div
          class={`${
            menuSet ? " absolute sm:relative top-28 sm:top-auto" : "hidden"
          } w-full px-4 -ml-4 sm:flex sm:items-center sm:w-auto bg-[#04AA6D] sm:bg-[#f4ebfa]`}
        >
          <ul class="text-base sm:flex sm:justify-between ">
            <li>
              <Link
                href="/"
                className="sm:px-5 py-2 block font-semibold text-white sm:text-gray-500"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/tickets"
                className="sm:px-5 py-2 block font-semibold text-white sm:text-gray-500"
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
