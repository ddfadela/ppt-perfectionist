import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    // <div id='about' className='w-full md:h-screen p-2 flex items-center py-16 '>
    //   <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
    //     <div className='col-span-2 text-center'>
    //       <p className='title text-4xl lg:text-5xl font-bold uppercase text-xl tracking-widest text-center'>
    //         About
    //       </p>
    //       <h2 className='py-4'>Who I Am</h2>
    //       <p className='py-2 text-gray-600'>
    //         I specialize in building mobile responsive front-end UI applications
    //         that connect with API’s and other backend technologies. I’m
    //         passionate about learning new technologies and understand there is
    //         more than one way to accomplish a task. Though I am most proficient
    //         in building front-end applications using HTML, CSS, Javascript, and
    //         React, I am a quick learner and can pick up new tech stacks as
    //         needed. I believe that being a great developer is not using one
    //         specific language, but choosing the best tool for the job.
    //       </p>
    //       <p className='py-2 text-gray-600'>
    //         I started web developement in 2013 managing multiple e-commerce
    //         websites on CMS platforms such as WordPress, BigCommerce, and
    //         Shopify. I have experience working directly with clients and taking
    //         mock wireframes all the way to deployed applications. In my spare
    //         time I run Code Commerce, a Youtube channel where I teach web
    //         developement and various front-end technologies.
    //       </p>
    //       <Link href='/#projects'>
    //         <p className='py-2 text-gray-600 underline cursor-pointer'>
    //           Check out some of my latest projects.
    //         </p>
    //       </Link>
    //     </div>

    //   </div>
    // </div>
    <section className="page-section max-w-[1920px] " id="about">
      <div className="container">
        <div className="text-center">
          <h2 className="  section-heading text-uppercase text-gray-700 font-bold text-[16px] md:text-[45px]">About</h2>
          <h3 className="section-subheading text-muted px-[20px] lg:px-[300px] pt-[20px]">
            Welcome to PPT Perfectionist, where every slide tells a story of
            excellence and impact. I'm Eline, the founderand creative force
            behind this venture. Let me share a bit of my journey and what
            makesPPT Perfectionist your ultimate destination for presentation
            excellence.{" "}
          </h3>
        </div>
        <ul className="timeline">
          <li>
            <div className="timeline-image font-extrabold text-[30px] md:text-[40px]">1</div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="subheading">Your Presentation Ally</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  At PPT Perfectionist, we understand that presentations are
                  more than just slides, they're your voice, your message, and
                  your opportunity to shine. What sets us apart is our
                  unwavering commitment to detail, creativity, and most
                  importantly, our valued clients
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image font-extrabold text-[30px] md:text-[40px]">2</div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="subheading">Our Mission</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  Our mission is simple yet profound to empoxer individuals and
                  organizations to communicate their ideas with precision,
                  persuasion, and flait. We beleive that every presentation, big
                  or small, deserves to be a work of art.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-image font-extrabold text-[30px] md:text-[40px]">3</div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="subheading ">Why Choose Us</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  When you choose PPT Perfectionist, you're choosing a partner
                  who listens to your needs, crafts presentations that resonate,
                  and ensures your message lands with impact. we're not just
                  Perfectionists we're passionate about transforming your
                  content into compelling stories.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
