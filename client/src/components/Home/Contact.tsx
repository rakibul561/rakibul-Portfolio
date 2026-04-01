"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { Send } from "lucide-react";

const personalInfo = [
  {
    id: 1,
    type: "phone",
    label: "WhatsApp",
    value: "+880 1943399738",
    icon: <FaWhatsapp size={24} className="text-[#03e9f4]" />,
  },
  {
    id: 2,
    type: "home",
    label: "Location",
    value: "Mymensingh, Bangladesh",
    icon: <FaMapMarkerAlt size={24} className="text-[#03e9f4]" />,
  },
  {
    id: 3,
    type: "email",
    label: "Email",
    value: "rakibulhasan3929@gmail.com",
    icon: <FaEnvelope size={24} className="text-[#03e9f4]" />,
  },
];

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 800,
      offset: 100,
      easing: "ease-out-cubic",
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
    <section id="contact" className="py-20 md:py-32 relative font-sans z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Title */}
        <div className="text-center mb-16 md:mb-24" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's <span className="text-[#03e9f4] drop-shadow-[0_0_10px_rgba(3,233,244,0.3)]">Connect</span>
          </h1>
          <p className="text-slate-400 mt-4 md:mt-6 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to chat? Feel free to drop a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Left Side: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-5" data-aos="fade-right">
            {personalInfo.map((info) => (
              <div 
                key={info.id} 
                className="group p-6 md:p-7 rounded-2xl bg-[#0f172a]/60 border border-slate-800 hover:border-[#03e9f4]/40 transition-all duration-300 flex items-center gap-6 shadow-lg"
              >
                <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-700/50 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(3,233,244,0.3)] transition-all">
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-xs md:text-sm text-slate-500 font-bold tracking-widest uppercase mb-1">{info.label}</h3>
                  <p className="text-white font-medium text-base md:text-lg">{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Sleek Contact Form */}
          <div className="lg:col-span-7" data-aos="fade-left" data-aos-delay="100">
            <div className="p-8 md:p-12 rounded-3xl bg-[#0f172a]/40 border border-slate-800 backdrop-blur-md shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8 md:mb-10">
                Send a <span className="text-[#03e9f4]">Message</span>
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                
                {/* Floating Label Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-slate-600 py-2.5 text-white placeholder-transparent focus:border-[#03e9f4] focus:outline-none transition-colors peer text-lg"
                      placeholder="Your Name"
                      id="name"
                      {...register("name")}
                      required
                    />
                    <label 
                      htmlFor="name" 
                      className="absolute left-0 -top-4 text-slate-400 text-sm md:text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#03e9f4] cursor-text"
                    >
                      Your Name
                    </label>
                  </div>
                  
                  <div className="relative">
                    <input
                      type="email"
                      className="w-full bg-transparent border-b border-slate-600 py-2.5 text-white placeholder-transparent focus:border-[#03e9f4] focus:outline-none transition-colors peer text-lg"
                      placeholder="Your Email"
                      id="email"
                      {...register("email")}
                      required
                    />
                    <label 
                      htmlFor="email" 
                      className="absolute left-0 -top-4 text-slate-400 text-sm md:text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#03e9f4] cursor-text"
                    >
                      Your Email
                    </label>
                  </div>
                </div>

                {/* Floating Label Row 2 */}
                <div className="relative">
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-slate-600 py-2.5 text-white placeholder-transparent focus:border-[#03e9f4] focus:outline-none transition-colors peer text-lg"
                    placeholder="Phone Number"
                    id="number"
                    {...register("number")}
                    required
                  />
                  <label 
                    htmlFor="number" 
                    className="absolute left-0 -top-4 text-slate-400 text-sm md:text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#03e9f4] cursor-text"
                  >
                    Phone Number
                  </label>
                </div>

                {/* Floating Label Textarea */}
                <div className="relative pt-2">
                  <textarea
                    className="w-full bg-transparent border-b border-slate-600 py-2.5 text-white placeholder-transparent focus:border-[#03e9f4] focus:outline-none transition-colors peer resize-none text-lg"
                    placeholder="Your Message..."
                    id="message"
                    rows={4}
                    {...register("message")}
                    required
                  ></textarea>
                  <label 
                    htmlFor="message" 
                    className="absolute left-0 top-0 text-slate-400 text-sm md:text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#03e9f4] cursor-text"
                  >
                    Your Message...
                  </label>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#03e9f4]/10 text-[#03e9f4] font-bold tracking-widest text-sm rounded-lg border border-[#03e9f4]/30 hover:bg-[#03e9f4] hover:text-[#0a0a0a] transition-all duration-300 shadow-[0_0_15px_rgba(3,233,244,0.1)] hover:shadow-[0_0_20px_rgba(3,233,244,0.4)] overflow-hidden w-full md:w-auto disabled:opacity-50 uppercase"
                  >
                    {loading ? (
                      <span className="loading loading-spinner loading-md"></span>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <Send size={18} className="group-hover:translate-x-1 flex-shrink-0 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
