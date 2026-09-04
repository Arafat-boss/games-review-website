import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";
import { FaPaperPlane, FaHeadset, FaGamepad } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactUs = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm("service_1q0vj4n", "template_kbiyyk3", form.current, {
        publicKey: "qM1EblryNt7WmYTyA",
      })
      .then(
        () => {
          setIsSending(false);
          Swal.fire({
            title: "Message Dispatched! 🚀",
            text: "Thanks for reaching out! Our gaming support team will reply shortly.",
            icon: "success",
            confirmButtonColor: "#8b5cf6",
          });
          form.current.reset();
        },
        (error) => {
          setIsSending(false);
          console.error("Email send failed:", error);
          Swal.fire({
            title: "Transmission Failed",
            text: "Could not send message. Please try again or email us directly.",
            icon: "error",
          });
        }
      );
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <Helmet>
        <title>Contact Us | Game Reviews Support</title>
      </Helmet>

      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-2">
          <FaHeadset />
          Direct Line
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-base-content tracking-tight">
          Get in Touch
        </h1>
        <p className="text-sm sm:text-base text-base-content/70 mt-2">
          Have feedback on a review, found a bug, or want to collaborate? Send us a message!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info Cards */}
        <div className="space-y-4">
          <div className="bg-base-100 border border-base-content/10 rounded-2xl p-6 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-2xl shrink-0">
              <AiOutlineMail />
            </div>
            <div>
              <span className="text-xs font-bold text-base-content/60 uppercase tracking-wider block">
                Email Editorial
              </span>
              <span className="text-sm font-semibold text-base-content">
                reviews@gamereviews.com
              </span>
            </div>
          </div>

          <div className="bg-base-100 border border-base-content/10 rounded-2xl p-6 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary text-2xl shrink-0">
              <AiFillPhone />
            </div>
            <div>
              <span className="text-xs font-bold text-base-content/60 uppercase tracking-wider block">
                Direct Hotline
              </span>
              <span className="text-sm font-semibold text-base-content">
                +1 (800) 426-3738
              </span>
            </div>
          </div>

          <div className="bg-base-100 border border-base-content/10 rounded-2xl p-6 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-2xl shrink-0">
              <AiFillEnvironment />
            </div>
            <div>
              <span className="text-xs font-bold text-base-content/60 uppercase tracking-wider block">
                Gaming Studio
              </span>
              <span className="text-sm font-semibold text-base-content">
                100 Cyberpunk Way, Suite 404
              </span>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="lg:col-span-2 bg-base-100 border border-base-content/10 rounded-3xl p-6 sm:p-10 shadow-xl">
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-bold text-base-content/80 uppercase tracking-wider block mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="e.g. MasterChief"
                  required
                  className="w-full bg-base-200 border border-base-content/15 rounded-xl px-4 py-2.5 text-sm text-base-content focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-base-content/80 uppercase tracking-wider block mb-1.5">
                  Your Email *
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="gamer@domain.com"
                  required
                  className="w-full bg-base-200 border border-base-content/15 rounded-xl px-4 py-2.5 text-sm text-base-content focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-base-content/80 uppercase tracking-wider block mb-1.5">
                Message & Feedback *
              </label>
              <textarea
                name="message"
                placeholder="What would you like to discuss with our gaming team?"
                required
                rows={5}
                className="w-full bg-base-200 border border-base-content/15 rounded-2xl p-4 text-sm text-base-content focus:outline-none focus:border-primary leading-relaxed"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="btn btn-primary w-full text-white font-bold rounded-xl shadow-md hover:shadow-glow-primary transition-all flex items-center justify-center gap-2"
            >
              <FaPaperPlane />
              <span>{isSending ? "Sending Transmission..." : "Send Message"}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
