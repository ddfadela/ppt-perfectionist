"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowBackIos,MdArrowForwardIos  } from "react-icons/md";

const Works = () => {
  const placeholderDuration = 10; // Set your desired placeholder duration in seconds
  const videoHeight = "500px"; // Set your desired height for the videos

  const videos = [
      { src: "/portfolio1.mp4", poster: "/portfolio1.jpg" },
      { src: "/portfolio2.mp4", poster: "/portfolio2.jpg" },
      { src: "/portfolio3.mp4", poster: "/portfolio3.jpg" },
      { src: "/portfolio4.mp4", poster: "/portfolio4.jpg" },
      { src: "/portfolio5.mp4", poster: "/portfolio5.jpg" },
      { src: "/portfolio6.mp4", poster: "/portfolio6.jpg" },
  ];

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow custom-prev " onClick={onClick} >
        <MdArrowForwardIos className="arrow-icon rotate-180 " size={30}/>
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow custom-next" onClick={onClick}>
        <MdArrowForwardIos className="arrow-icon" size={30}/>
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: false, // Add lazyLoad property
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  
  useEffect(() => {
    // Reinitialize the Slider after the page has loaded
    const slider = Slider && Slider.current;
    if (slider) {
      slider.slickGoTo(0); // Go to the first slide
      // slider.slickSetOption(settings, true); // Set the updated settings
    }
  }, [settings]);
  const handleVideoLoaded = (index) => {
    const videoElement = document.getElementById(`video-${index + 1}`) as HTMLMediaElement;
    if (videoElement) {
      videoElement.playbackRate = 3; // Set playback rate to 3
    }
  };
  useEffect(() => {
    // Set playback rate for each video after the component mounts
    videos.forEach((_, index) => {
      handleVideoLoaded(index);
    });
  }, []);
  return (
    <div id="works" className=" works-container overflow-hidden relative max-w-[1920px]  w-full text-center ">
      <div className="max-w-[920px] mx-auto  py-16">
        <div className=" md:grid-cols-1 gap-8  hidden md:block lg:block">
          <Slider {...settings} ref={(slider) => (Slider.current = slider)}>
            {videos.map((video, index) => (
              <div
                key={index}
                style={{
                  height: videoHeight,
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "black",
                }}
              >
                <video
                  id={`video-${index + 1}`}
                  controls
                  poster={video.poster}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    width: "100%", // Set width to 100%
                    height: videoHeight, // Allow height to adjust automatically
                  }}
                  className=" md:w-[100%]"
                  onLoadedData={() => handleVideoLoaded(index)}
                  
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      
      <div className="block md:hidden   ">
      {videos.map((video, index) => (
              <div
                key={index}
                style={{
                  height: videoHeight,
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "black",
                }}
                className="m-[2%] " 
              >
                <video
                  id={`video-${index + 1}`}
                  controls
                  poster={video.poster}
                  className="md:h-[100%] md:w-[100%]"
                  onLoadedData={() => handleVideoLoaded(index)}
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
        </div>
    </div>
  );
};

export default Works;