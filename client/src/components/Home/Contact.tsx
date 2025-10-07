"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import phonePng from "../../assets/icons/phone.png";
import homePng from "../../assets/icons/home.png";
import EmailPng from "../../assets/icons/email.png";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const personalInfo = [
  {
    id: 1,
    type: "phone",
    label: "WhatsApp",
    value: "+880 1943399738",
    icon: phonePng,
  },
  {
    id: 2,
    type: "home",
    label: "Home",
    value: "Mymensingh, Bangladesh",
    icon: homePng,
  },
  {
    id: 3,
    type: "email",
    label: "Email",
    value: "devrakib2@gmail.com",
    icon: EmailPng,
  },
];

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 500,
      offset: 200,
    });
  }, []);

  const onSubmit = async (data: any) => {
    if (isNaN(data?.number)) {
      return toast.error("Please provide a valid number 😒!");
    }

    setLoading(true);
    try {
      console.log("Form submitted:", data);
      toast.success("Message captured locally (no email sent) ✅");
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Something went wrong 🥲!");
    } finally {
      setLoading(false);
    }
  };

  return (
   <div>
    <h1 className="text-center items-center text-3xl font-bold text-[#0592E0] mb-20"> Contact <span className="text-white">Me</span></h1>
     <div
      className="max-w-7xl mx-auto rounded-lg mb-20  shadow-lg p-10"
      style={{
        background: `
          linear-gradient(
            to bottom left,
            #05163b,
            #092152,
            #010610,
            #010610,
            #092152,
            #010610
          )
        `,
      }}
    >
  
      <div
        data-aos="zoom-in"
        className="grid md:grid-cols-3 gap-10 mx-3 experience-style p-10 rounded-md shadow-md bg-opacity-60"
      >
        {personalInfo.map((info) => (
          <div key={info.id} className="text-center space-y-1">
            <div className="w-10 mx-auto">
              <Image
                data-aos="zoom-in"
                data-aos-duration="2000"
                src={info.icon}
                alt={info.label}
                className="mx-auto"
                width={40}
                height={40}
              />
            </div>
            <h2
              data-aos="fade-up"
              data-aos-duration="2000"
              className="text-xl font-medium text-[#03e9f4] font-Georgian"
            >
              {info.label}
            </h2>
            <p
              data-aos="fade-down"
              data-aos-duration="2000"
              className="text-gray-400 font-medium font-Georgian"
            >
              <small>{info.value}</small>
            </p>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div data-aos="fade-up" data-aos-duration="2000" className="mt-10 rounded-3xl ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-xl text-center md:text-start font-medium mb-5 text-slate-400 font-Georgian">
            Have any <span className="text-[#03e9f4]">Question</span>?
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 space-y-6">
              <input
                className="bg-transparent border-2 border-slate-500 focus:border-[#03e9f4] outline-none px-5 w-[350px] md:w-full py-2 rounded placeholder:text-slate-400 text-slate-400 focus:bg-slate-800"
                type="text"
                placeholder="Your Name"
                {...register("name")}
                required
              />
              <input
                className="bg-transparent border-2 border-slate-500 focus:border-[#03e9f4] outline-none px-5 py-2 rounded w-[350px] md:w-full placeholder:text-slate-400 text-slate-400 focus:bg-slate-800"
                type="email"
                placeholder="Your Email"
                {...register("email")}
                required
              />
              <input
                className="bg-transparent border-2 border-slate-500 focus:border-[#03e9f4] outline-none px-5 py-2 rounded w-[350px] md:w-full placeholder:text-slate-400 text-slate-400 focus:bg-slate-800"
                type="text"
                placeholder="Your Phone Number"
                {...register("number")}
                required
              />
            </div>

            <div className="flex-1">
              <textarea
                className="bg-transparent border-2 border-slate-500 focus:border-[#03e9f4] outline-none px-5 py-2 rounded w-[350px] md:w-full placeholder:text-slate-400 text-slate-400 focus:bg-slate-800"
                {...register("message")}
                placeholder="Your Message..."
                required
                rows={7}
              ></textarea>
            </div>
          </div>

          <div className="flex justify-center mt-5">
            {loading ? (
              <button className="btn btn-disabled text-xl">
                Loading{" "}
                <span className="loading loading-spinner text-white"></span>
              </button>
            ) : (
              <button
                type="submit"
                className="relative inline-flex bg-transparent items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold text-slate-400 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 border border-slate-400 group"
              >
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    className="w-5 h-5 text-[#03e9f4]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>

                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    className="w-5 h-5 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>

                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-[#03e9f4]">
                  SEND MESSAGE
                </span>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
   </div>
  );
};

export default Contact;
