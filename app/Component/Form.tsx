"use client";
import React from "react";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { AiOutlineSend } from "react-icons/ai";
import { sendContactForm } from "../_lib/api";
import { toast } from "react-toastify";
import styles from "../_styles/spinner.module.css";
interface YourFormValuesType {
name1: string;
email: string;
name2: string;
message: string;
// Add other fields if necessary
}

const ContactFormSchema = Yup.object().shape({
name1: Yup.string()
	.matches(/^[A-Za-z ]+$/, "Name must contain only letters.")
	.required("Name is required"),
email: Yup.string()
	.required("Email address is required.")
	.matches(
	/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
	"Invalid email address."
	),
name2: Yup.string()
.matches(/^[A-Za-z ]+$/, "Country must contain only letters.")
.required("Country required"),
message: Yup.string().required("Message is required"),
});

const Formulaire = () => {
const handleSubmit = async (
	values: YourFormValuesType,
	{ setSubmitting, setErrors, resetForm }: FormikHelpers<YourFormValuesType>
) => {
	try {
	const res = await sendContactForm(values);

	if (res.status === 200) {
		resetForm();
		toast.success("Envoie du mail avec succès");
	} else {
		toast.error("Erreur lors de l'envoi du mail");
	}
	} catch (error: any) {
	// Explicitly cast 'error' to 'Error' type
	const castedError = error as Error;

	setErrors({ email: castedError.message });
	toast.error(castedError.message);
	}
	setSubmitting(false);
};

return (
	<div className="max-w-[1920px]  bg-[#FFFBFE]  ">
	<div  id='contact'  className="pb-[75px]  text-text px-[20px]  lg:px-[90px]  lg:mx-[200px] text-center ">
		<p className="title text-4xl lg:text-5xl font-bold text-center pb-[20px]">Contact</p>
	<div className="flex flex-col md:flex-row justify-center">
		<div className="w-full  ">
		<div style={{
        boxShadow: '0px 0px 20px 0px rgba(223, 225, 226, 0.5)',
      }} className="h-[100%] bg-white shadow-xl py-8 rounded-xl">
			<Formik
			initialValues={{
				name1: "",
				name2: "",
				email: "",
				message: "",
			}}
			validationSchema={ContactFormSchema}
			onSubmit={handleSubmit}
			>
			{({ isSubmitting }) => (
				<Form className="px-[25px] text-left">
				<div className="w-[100%] md:w-full lg:w-full md:px-[10px] xl:w-full ">
					<div className="flex flex-col md:flex-row">
					<div className="flex flex-col w-full md:w-1/2 md:mr-2 rounded-[4px]">
						<div className="form-group ">
						<label
							htmlFor="name1"
							className="text-shades-dark  text-[14px] mb-2 "
						>
							First Name
						</label>
						<Field
							type="text"
							name="name1"
							id="name1"
							className="w-full py-3 border bg-background  rounded-[4px]  px-3 focus:outline-none focus:bg-[#0055A41A] focus:text-text focus:font-medium focus:border-[2px] focus:border-blue-main placeholder-shades-light"
							placeholder="First Name"
						/>
						<ErrorMessage
							name="name1"
							component="div"
							className="text-red-500 text-[12px]"
						/>
						</div>
					</div>
					<div className="flex flex-col w-full md:w-1/2 md:mr-2 rounded-[4px]">
						<div className="form-group">
						<label
							htmlFor="name2"
							className="text-shades-dark mb-2 text-[14px]"
						>
							Country
						</label>
						<Field
							type="name2"
							name="name2"
							id="name2"
							className="w-full py-3 border bg-background  rounded-[4px]  px-3 focus:outline-none focus:bg-[#0055A41A] focus:text-text focus:font-medium focus:border-[2px] focus:border-blue-main placeholder-shades-light"
							placeholder="Country name"
						/>
						<ErrorMessage
							name="name2"
							component="div"
							className="text-red-500 text-[12px]"
						/>
						</div>
					</div>
					</div>
					<div className="flex flex-col pt-[8px]">
					<div className="form-group">
						<label
						htmlFor="email"
						className="text-shades-dark text-[14px] mb-2"
						>
						Email
						</label>
						<Field
						type="text"
						name="email"
						id="email"
						className="w-full py-3 border bg-background  rounded-[4px]  px-3 focus:outline-none focus:bg-[#0055A41A] focus:text-text focus:font-medium focus:border-[2px] focus:border-blue-main placeholder-shades-light"
						placeholder="Your email please"
						/>
						<ErrorMessage
						name="subject"
						component="div"
						className="text-red-500 text-[12px]"
						/>
					</div>
					</div>
					<div className="flex flex-col pt-[8px]">
					<div className="form-group">
						<label
						htmlFor="message"
						className="text-shades-dark font-bold text-[14px] mb-2"
						>
						Message
						</label>
						<Field
						as="textarea"
						type="text"
						name="message"
						id="message"
						rows={5}
						className="w-full py-3 border bg-background  rounded-[4px]  px-3 focus:outline-none focus:bg-[#0055A41A] focus:text-text focus:font-medium focus:border-[2px] focus:border-blue-main placeholder-shades-light"
						// placeholder="Détaillez votre demande"
						/>
						<ErrorMessage
						name="message"
						component="div"
						className="text-red-500 text-[12px]"
						/>
					</div>
					</div>
				</div>

				<div className="flex items-center justify-center">
					<button
					type="submit"
					className={
						"w-[190px] border-[1px] font-normal text-[18px] mt-5 rounded-md py-2 px-4  text-black transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-light  flex items-center justify-center " +
						(isSubmitting
						? "bg-blue-light cursor-wait"
						: "bg-blue-main cursor-pointer")
					}
					// disabled={isSubmitting}
					>
					<p>Envoyer</p>

					{isSubmitting ? (
						<div
						className={
							styles.spinner +
							" opacity-30 ml-2"
						}
						></div>
					) : (
						<AiOutlineSend className="ml-2" />
					)}
					</button>
				</div>
				</Form>
			)}
			</Formik>
		</div>
		</div>
	</div>
	</div>
	</div>
);
          }
export default Formulaire;
