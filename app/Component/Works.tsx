import Image from "next/image";
import Link from "next/link";
import React from "react";

const Works = () => {
  return (
    <div id="works" className="w-full text-center">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="title text-4xl lg:text-5xl font-bold tracking-widest uppercase ">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <h1> asfbghgfdsafgbhg</h1>
        </div>
      </div>
      <video width="640" height="360" controls>
        <source src="/portfolio1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video width="640" height="360" controls>
        <source src="/portfolio2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video width="640" height="360" controls>
        <source src="/portfolio3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video width="640" height="360" controls>
        <source src="/portfolio4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Works;
