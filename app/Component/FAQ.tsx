"use client"
import React from 'react';
import { useState } from "react";
import { MdOutlineExpandMore } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
const items = [
	{
	id: 1,
	question: "What types of presentations do you create?",
	response: "We specialize in creating a wide range of presentations, including business pitches, educational lectures, product launches, and more. Our goal is to tailor each presentation to suit your unique needs.",
	},
	{
	id: 2,
	question: "How do I get started with your services? ",
	response: "Getting started is easy! Simply reach out to us through our contact page, and we'll schedule an initial consultation to discuss your project in detail.",
	},
	{
	id: 3,
	question: "What information do you need from me to create a personalized presentation?",
	response: "We'll need your content, objectives, target audience details, and any specific preferences or branding guidelines you have. The more information you provide, the better we can tailor the presentation to your needs.",
	},
	{
	id: 4,
	question: "How long does it take to complete a presentation project?",
	response: "The timeline varies depending on the complexity and scope of your project. We'll provide you with an estimated timeframe during our initial consultation. Rest assured, we work efficiently to meet your deadlines.",
	},
	{
	id: 5,
	question: "Do you offer revisions? ",
	response: "Yes, we do! We understand that revisions may be necessary to fine-tune your presentation. We'll work closely with you to make sure you're completely satisfied with the final result.",
	},
	{
	id: 6,
	question: "What is your pricing structure? ",
	response: "Pricing varies based on the scope and complexity of the project. We offer competitive rates and can provide a detailed quote after our initial consultation.",
	},
];

	// const [active, setActive] = useState(null);
const [active, setActive] = useState<number | null>(null);

	return (
		<section id='faq'  className="  px-10 md:px-24 lg:px-32  mb-10 flex justify-center items-center flex-col pt-[50px]">
			<h1 className="title text-4xl lg:text-5xl font-bold ">FAQ</h1>

			{items.map((item) => (
				<div key={item.id} className=" last:mb-0 w-full">
					<button
						className={
							"w-full text-left  text-base md:text-xl focus:outline-none py-5 border-b border-shades-dark  flex justify-between items-start gap-1 "
						}
						onClick={() =>
							setActive(active === item.id ? null : item.id)
						}
					>
						{item.question}

						<div
							className={`w-[26px] h-[26px]  rounded-full flex items-center justify-center border transition-all ease-in-out ${
								active === item.id
									? "bg-[#4F46E5] border-[#4F46E5] text-white rotate-180"
									: "bg-white  border-black text-black rotate-0"
							}`}
						>
							<MdOutlineExpandMore size={24} />
						</div>
					</button>
					<AnimatePresence>
						{active == item.id && (
							<motion.div
								initial={{ opacity: 0, height: 0 }}
								animate={{ opacity: 1, height: "auto" }}
								exit={{ opacity: 0, height: 0 }}
								className="mt-2 text-text  text-base"
							>
								{item.response}
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			))}
		</section>
	);
};


export default FAQ;
