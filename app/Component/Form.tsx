"use client";
import React from "react";

const Formulaire = () => {
	const handleOrderNow = () => {
		// Redirect to Google.com when the "ORDER NOW" button is clicked
		window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdV9DjfRdGjHDnNksHkStZZQvUeNQaCDsOuYkvsFT-g_Y_oZQ/viewform?fbclid=IwAR1PigYfVk6e7s1ey3P9yXJ-7J1esAMvxPxPGyOoj8c8wcWW2nFFeST_2BQ";
	  };
	
  return (
    <div className="max-w-[1920px]  bg-[#FFFBFE]  ">
      <div
        id="contact"
        className="pb-[75px]  text-text px-[20px]  lg:px-[90px]  lg:mx-[200px] text-center "
      >
        <p className="title text-4xl lg:text-5xl font-bold text-center pb-[20px]">
          Contact
        </p>
        <div className="flex flex-col md:flex-row justify-center">
          <div className="w-full  ">
            <div
              style={{
                boxShadow: "0px 0px 20px 0px rgba(223, 225, 226, 0.5)",
              }}
              className="h-[100%] bg-white shadow-xl p-8 rounded-xl"
            >
              Feel free to reach out and connect! Whether you have inquiries,
              want to discuss a potential project, or simply share your
              thoughts, I'm here. Drop me an email, or connect through Instagram
              and TikTok . Your ideas and questions are valuable, and I look
              forward to the opportunity to collaborate or assist you in any
              way. Let's bring your vision to life!
			  <br/>
			  <button
      className="order-button hover:bg-blue-700 text-white py-2 px-4  no-border bg-[#4F46E5] bg- border-100px no-shadow rounded-3xl mt-[2%]"
          onClick={handleOrderNow}
        >
          ORDER NOW
        </button>
            </div>
			
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulaire;
