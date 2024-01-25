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
  const sliderRef = useRef(null); 
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
    const slider = sliderRef.current; // Correct reference
    if (slider) {
      slider.slickGoTo(0);
    }
  }, [settings]);
  const handleVideoLoaded = (index, blockType) => {
    const videoId = `${blockType}-video-${index + 1}`;
    const videoElement = document.getElementById(videoId) as HTMLMediaElement;
  
    if (videoElement) {
      videoElement.playbackRate = 3; // Set playback rate to 3
    }
  };
  
  useEffect(() => {
    const handleAllVideosLoaded = (blockType) => {
      // Set playback rate for each video after the component mounts
      videos.forEach((_, index) => {
        handleVideoLoaded(index, blockType);
      });
    };
  
    // Check if all videos in the Slider block are loaded
    const allSliderVideosLoaded = videos.every((_, index) => {
      const videoElement = document.getElementById(`slider-video-${index + 1}`) as HTMLMediaElement;
      return videoElement && videoElement.readyState >= 2;
    });
  
    // Check if all videos in the mobile block are loaded
    const allMobileVideosLoaded = videos.every((_, index) => {
      const videoElement = document.getElementById(`mobile-video-${index + 1}`) as HTMLMediaElement;
      return videoElement && videoElement.readyState >= 2;
    });
  
    if (allSliderVideosLoaded) {
      // If all Slider videos are already loaded, set playback rate immediately
      handleAllVideosLoaded('slider');
    } else {
      // If not all Slider videos are loaded, wait for them to load and then set playback rate
      const checkSliderLoadedInterval = setInterval(() => {
        const allSliderVideosLoadedNow = videos.every((_, index) => {
          const videoElement = document.getElementById(`slider-video-${index + 1}`) as HTMLMediaElement;
          return videoElement && videoElement.readyState >= 2;
        });
  
        if (allSliderVideosLoadedNow) {
          clearInterval(checkSliderLoadedInterval);
          handleAllVideosLoaded('slider');
        }
      }, 100); // Check every 100 milliseconds
    }
  
    if (allMobileVideosLoaded) {
      // If all mobile videos are already loaded, set playback rate immediately
      handleAllVideosLoaded('mobile');
    } else {
      // If not all mobile videos are loaded, wait for them to load and then set playback rate
      const checkMobileLoadedInterval = setInterval(() => {
        const allMobileVideosLoadedNow = videos.every((_, index) => {
          const videoElement = document.getElementById(`mobile-video-${index + 1}`) as HTMLMediaElement;
          return videoElement && videoElement.readyState >= 2;
        });
  
        if (allMobileVideosLoadedNow) {
          clearInterval(checkMobileLoadedInterval);
          handleAllVideosLoaded('mobile');
        }
      }, 100); // Check every 100 milliseconds
    }
  }, [videos]);
  

  
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
        id={`slider-video-${index + 1}`}
        controls
                  poster={video.poster}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    width: "100%", // Set width to 100%
                    height: videoHeight, // Allow height to adjust automatically
                  }}
                  className=" md:w-[100%]"
                  onLoadedData={() => handleVideoLoaded(index, 'slider')}
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
              height: "auto",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "black",
            }}
            className="m-[2%] "
          >
            <video
      id={`mobile-video-${index + 1}`}
      controls
              poster={video.poster}
              className="md:h-[100%] md:w-[100%]"
              onLoadedData={() => handleVideoLoaded(index, 'mobile')}
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