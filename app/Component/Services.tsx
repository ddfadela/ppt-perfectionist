import Image from "next/image";
import Link from "next/link";
import React from "react";

import { GoCommentDiscussion } from "react-icons/go";
import { SiGoogleanalytics } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { PiStrategy } from "react-icons/pi";

const Works = () => {
  return (
    <div id="services" className="w-full text-center  ">
      <h1 className="title text-2xl lg:text-5xl font-bold text-center mb-[30px] ">
        {" "}
        Services
      </h1>
      <div className="mx-[20px] md:mx-[220px] lg:mx-[300px] mb-[20px] ">
        <p className="section-subheading text-muted pt-[20px]">
          At PPT Perfectionist, we understand that every presentation is unique,
          just like our clients. Our "Personalized PowerPoint Presentation"
          service is designed to create engaging and impactful presentations
          tailored specifically to your interests audience and content.
        </p>
      </div>
      <div className=" mx-[20px] md:mx-[70px]">
        <h1 className="font-bold text-xl mb-[30px] ">How It Works:</h1>
        <div className="flex flex-col md:flex-row gap-8  items-center">
          <div className="card basis-1/4 shadow-lg rounded-lg p-[15px]">
            <p className="flex flex-col items-center text-gray-500">
              <GoCommentDiscussion
                className="w-[32px] h-[32px]"
                style={{ color: "red" }}
              />
              <span className="font-bold text-[18px] text-gray-700 pb-[10px]">
                Consultation
              </span>
              We begin with a detailed consultation to understand your
              objectives, audience demographics, and your personal style. Your
              input is inualuable in shaping the presentation.
            </p>
          </div>
          <div className="card basis-1/4 shadow-lg rounded-lg p-[15px]">
            <p className="flex flex-col items-center text-gray-500">
              <SiGoogleanalytics
                className="w-[32px] h-[32px]"
                style={{ color: "#00ccff" }}
              />
              <span className="font-bold text-[18px] text-gray-700 pb-[10px]">
                Content Analysis
              </span>
              We thoroughly analyze your content, ensuring it's not only
              accurate but also structured for maximum impact.
            </p>
          </div>

          <div className="card basis-1/4 shadow-lg rounded-lg p-[15px]">
            <p className="flex flex-col items-center text-gray-500">
              <MdDesignServices
                className="w-[32px] h-[32px]"
                style={{ color: "#9933ff" }}
              />
              <span className="font-bold text-[18px] text-gray-700 pb-[10px]">
                Custom Design
              </span>
              Our team of expert designers will craft a visually stunning
              presentation that aligns with your branding and resonates with
              your audience.
            </p>
          </div>

          <div className="card basis-1/4 shadow-lg rounded-lg p-[15px]">
            <p className="flex flex-col items-center text-gray-500">
              <PiStrategy
                className="w-[32px] h-[32px]"
                style={{ color: "#00cc00" }}
              />
              <span className="font-bold text-[18px] text-gray-700 pb-[10px]">
                Engagement Strategies
              </span>
              We integrate proven engagement strategies, ensuring your message
              is delivered effectively, whether it's for a corporate boardroom
              or an educational seminar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
