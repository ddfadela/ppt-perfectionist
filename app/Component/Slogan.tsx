"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import NavLogo from "../../public//assets/FATIMA-removebg-preview.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Slogan = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const [visibleText, setVisibleText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  const textToDisplay =
    "Take your presentations to the next level and create a lasting impact";

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleShadow);
    };
  }, []);

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setVisibleText(textToDisplay.substring(0, currentIndex + 1));

      currentIndex += 1;

      if (currentIndex === textToDisplay.length) {
        // If all letters are visible, hide the cursor
        setCursorVisible(false);
        clearInterval(intervalId);
      }
    }, 100); // Adjust the interval based on your preference

    return () => {
      clearInterval(intervalId);
    };
  }, [textToDisplay]);

  return (
    <div className="relative min-h-screen mt-0">
      <div className="absolute inset-0 transform -skew-y-12 origin-top-left z-10  mt-0">
        <div className="bg-cyan-100 grid grid-cols-10 grid-rows-6 min-h-screen bg-gradient-to-r from-cyan-400 to-cyan-200 transform">
          <div className="bg-cyan-200 opacity-50 row-start-3 col-span-2"></div>
          <div className="bg-cyan-100 opacity-50 row-start-5 col-start-9 col-span-2"></div>
        </div>
      </div>
      <div className="mx-[20%] relative z-20 ">
      <div className="font-bold text-[28px] md:text-[54px] lg:text-[62px] text-center absolute top-[200px] md:top-[180px] ">
        Unlock the Power of Presentation Excellence with PPT Perfectionist
        <p className="text-center font-medium text-[20px] mt-[10px] text-gray-700">
        {visibleText}
        {cursorVisible && <span className="animate-blink">|</span>}
      </p>
      </div>
      </div>
    </div>
  );
};

export default Slogan;
