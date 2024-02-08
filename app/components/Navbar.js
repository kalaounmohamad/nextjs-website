"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "./creoshift_logo.jpg";
import { useState } from "react";

export default function Navbar() {
  const [menuSet, setMenuSet] = useState(false);

  const toggleMenu = () => {
    setMenuSet(!menuSet);
    console.log("clicked");
  };
  return (
    <div>
      <nav class="max-w-5xl mx-auto flex justify-between items-center mt-10 gap-0">
        <Link href="/">
          <Image
            src={Logo}
            alt="Creoshift logo"
            width={70}
            height={70}
            placeholder="blur"
          />
        </Link>
        <a class="sm:hidden" onClick={toggleMenu}>
          <div class="w-6 h-1 bg-black mb-1"></div>
          <div class="w-6 h-1 bg-black mb-1"></div>
          <div class="w-6 h-1 bg-black"></div>
        </a>
        <div class="hidden sm:flex">
          <ul class="flex space-x-8">
            <Link href="/">Dashboard</Link>
            <Link href="/tickets">Tickets</Link>
          </ul>
        </div>
      </nav>
      <div
        id="nav-links-2"
        className={`  ${
          menuSet
            ? "sm:hidden p-4 absolute  text-white w-11/12 gap-0 text-right max-w-xl border-b-2 border-gray-200"
            : "hidden"
        }`}
        style={{ backgroundColor: "#04AA6D" }}
      >
        {/* className="hidden sm:hidden max-w-5xl mx-auto border-b-2 border-gray-200" */}
        {/* class="hidden sm:hidden" */}
        <ul class="flex flex-col mt-2 space-y-2  ">
          <Link href="/" class="hover:text-black">
            Dashboard
          </Link>
          <Link href="/tickets" class="hover:text-black">
            Tickets
          </Link>
        </ul>
      </div>
    </div>
  );
}
