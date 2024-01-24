"use client";
import { FaGithub, FaLinkedinIn, FaInstagram ,FaTiktok} from "react-icons/fa";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
const Footer = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:ppt.perfectionist@gmail.com";
  };

  return (
    <section className={`max-w-[calc(min(1920px,100vw))]  flex-col bg-white justify-around pt-10 border-t`}>
      <div
        className={`flex justify-center items-start flex-row  mb-2 w-full `}
      >
        <a
          href="https://www.tiktok.com/@ppt_perfectionist?_t=8jH7ls9478A&_r=1&fbclid=IwAR3HRo8YfQKgpEhqC1kHUBaXJPrmqf8LkBzaDDh14OjxRefcyXBPs8Q7qj8"
          target="_blank"
          rel="noreferrer"
        >
          <div className="rounded-full shadow-lg shadow-gray-200 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <FaTiktok />
          </div>
        </a>
        <a href="https://www.instagram.com/ppt_perfectionist?igsh=NTc4MTIwNjQ2YQ%3D%3D&fbclid=IwAR1KI2ywd3n47KJUKX_kU-pA6bOPlc02n3zt-jpkTQtYwBVQnEBI45vAX00" target="_blank" rel="noreferrer">
          <div className="rounded-full shadow-lg shadow-gray-200 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <FaInstagram />
          </div>
        </a>

        <div
          className="rounded-full shadow-lg shadow-gray-200 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
          onClick={handleEmailClick}
        >
          <AiOutlineMail />
        </div>
       
      </div>
      {/* <div className="w-full flex justify-center items-center py-2     border-t-[1px] border-t-[#3F3E45]">
        <p className=" font-normal text-center text-[18px] leading-[27px] text-purple">
          Copyright Ⓒ 2023 . All Rights Reserved.
        </p>
      </div> */}
    </section>
  );
};

export default Footer;
