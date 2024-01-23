"use client";
import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
const Footer = () => {
  return (
    <section className={` flex-col bg-white justify-around pt-10 border-t`}>
      <div
        className={`flex justify-center items-start flex-row  mb-2 w-full `}
      >
        <a
          href="https://www.linkedin.com/in/clint-briley-50056920a/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="rounded-full shadow-lg shadow-gray-200 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <FaLinkedinIn />
          </div>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <div className="rounded-full shadow-lg shadow-gray-200 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <FaInstagram />
          </div>
        </a>

        <div className="rounded-full shadow-lg shadow-gray-200 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
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
