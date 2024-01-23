"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import NavLogo from "../../public/assets/FATIMA-removebg-preview.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";

const Client = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
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
  }, []);

  return (
      <div className="text-center w-full">
      <div className="ml-0 mt-0">
        <svg
          className="text-gray-100 h-8 mx-auto"
          fill="currentColor"
          viewBox="0 0 150 29"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          {/* SVG Path Data */}
        </svg>
      </div>

      <div className="relative max-w-screen-xl mt-24 px-8 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 sm:rounded-lg shadow-sm">
        <div className="absolute right-0 bottom-0 hero-pattern w-64 h-56"></div>
        <div className="relative">
          <div>
            <h2 className="text-center text-gray-800 text-4xl lg:text-5xl font-bold leading-tight">Testimonials</h2>
            <div className="my-4 mx-auto w-12 h-2 border-4 border-indigo-500"></div>
            <div className="text-center text-gray-700 font-light">
              Here are what some of our amazing customers are saying...
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:mx-12">
            {/* Testimonial 1 */}
            <div className="relative mx-auto mt-8 rounded-lg shadow max-w-sm p-10 bg-gray-100 text-gray-700 leading-snug flex flex-col justify-between">
              <div className="-ml-4">
                <svg
                  className="w-8 opacity-25 text-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  shape-rendering="geometricPrecision"
                  text-rendering="geometricPrecision"
                  image-rendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  viewBox="0 0 640 640"
                  fill="currentColor"
                >
                </svg>
              </div>
              <div className="mt-2">
              PPT Perfectionist exceeded my expectations. Their personalized presentation helped
               me connect with my audience on a whole new level. Professionalism, creativity, and results - They deliver it all.
              </div>
              <div>
                <div className="mx-auto w-full border border-gray-300 my-8"></div>
                <div className="flex items-center">
                  <div>
                    <RxAvatar className="w-[32px] h-[32px]"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="font-bold">David H. Hansson</div>
                    <div className="text-sm text-gray-600 mt-1">
                      CTO, <a href="https://timerse.com/7-steps-to-boost-your-metabolism/">Boosting Metabolism</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="mx-auto mt-8 rounded-lg shadow max-w-sm p-10 bg-gray-100 text-gray-700 leading-snug flex flex-col justify-between">
              <div className="-ml-4">
                <svg
                  className="w-8 opacity-25 text-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  shape-rendering="geometricPrecision"
                  text-rendering="geometricPrecision"
                  image-rendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  viewBox="0 0 640 640"
                  fill="currentColor"
                >
                  {/* SVG Path Data */}
                </svg>
              </div>
              <div className="mt-2">
              Working with PPT Perfectionist was a game-changer for our sales pitches.
               Their personalized approach and attention to detail made a significant difference in our success
              </div>
              <div>
                <div className="mx-auto w-full border border-gray-300 my-8"></div>
                <div className="flex items-center">
                  <div>
                    <RxAvatar className="w-[32px] h-[32px]"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="font-bold">Dan Abramov</div>
                    <div className="text-sm text-gray-600 mt-1">Creator, <a href="https://swift.org/">Java</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Client;
