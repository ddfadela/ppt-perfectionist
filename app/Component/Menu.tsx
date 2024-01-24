"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LuDownload, LuMenu } from "react-icons/lu";
import { CgClose } from "react-icons/cg";
import React from 'react';
const Menu = () => {
  const navlinks = [
    { id: 1, link: "#works", name: "Works" },
    { id: 2, link: "#about", name: "About" },
    { id: 3, link: "#services", name: "Services" },
    { id: 4, link: "#faq", name: "FAQs" },
    { id: 5, link: "#contact", name: "Contact" },
  ];

  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };
  return (
    
<nav
  className={` max-w-[calc(min(1920px,100vw))] bg-white w-screen flex items-center justify-center w-[100%] fixed top-0 drop-shadow-sm z-30 ${
    scrolled ? "" : "" /* Remove the bg-white class */
  }`}
>
      {/* -------------- LARGE SCREEN NAV ------------------------------ */}
      <div className="w-full hidden md:flex justify-between items-center md:mx-6 lg:mx-16">
      <Link href="/" passHref>
          <div onClick={scrollToTop}>
            <Image src="/assets/logoppt.png" alt="Logo" width={180} height={90} quality={100} unoptimized />
          </div>
        </Link>

        <ul className="list-none hidden md:flex flex-row gap-4 lg:gap-10 py-5">
          {navlinks.map((nav) => (
            <li
              key={nav.id}
              className={`text-sm lg:text-[16px] cursor-pointer hover:text-blue-main  relative  ${
                pathname === nav.link ? "text-blue-main font-bold " : "font-medium "
              }`}
            >
              <Link href={nav.link} className="text-indigo-600 font-bold">{nav.name}</Link>
            </li>
          ))}
        </ul>
        
      </div>

      {/* ------------------- MOBILE NAV --------------------------------- */}
      <div className="md:hidden w-full flex justify-between mx-5 py-2">
        {/* ... (logo) */}
        <div
          className="flex items-center gap-4 cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? (
            <CgClose size={36} className="text-black" />
          ) : (
            <LuMenu size={36} className="text-black" />
          )}
        </div>

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-white absolute top-0 left-0 z-10 w-[100vw] min-h-[calc(100vh-54px)] mt-[54px] `}
        >
          <div className="list-none flex justify-center items-center pb-[60px] flex-col gap-7 w-full">
            {navlinks.map((nav) => (
              <div
                key={nav.id}
                className={`text-[18px] cursor-pointer hover:text-blue-main relative  ${
                  pathname === nav.link ? "text-blue-main font-bold " : "font-medium "
                }`}
                onClick={() => {
                  setToggle(false);
                }}
              >
                <Link href={nav.link} className="font-bold text-indigo-600">{nav.name}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
