// Import Necessary Libraries
import React from 'react';
import { Helmet } from 'react-helmet';
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';

const ContactUs = () => {
  return (
    <>
    <Helmet>
        <title>Contact Us</title>
    </Helmet>
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="card w-full max-w-4xl shadow-xl bg-white">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center text-primary">Contact Us</h2>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="flex flex-col items-center">
              <AiFillPhone className="text-4xl text-primary" />
              <p className="font-semibold mt-2">Phone</p>
              <p className="text-sm text-gray-600">+123 456 7890</p>
            </div>

            <div className="flex flex-col items-center">
              <AiOutlineMail className="text-4xl text-primary" />
              <p className="font-semibold mt-2">Email</p>
              <p className="text-sm text-gray-600">info@example.com</p>
            </div>

            <div className="flex flex-col items-center">
              <AiFillEnvironment className="text-4xl text-primary" />
              <p className="font-semibold mt-2">Location</p>
              <p className="text-sm text-gray-600">123 Main Street, City, Country</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Your Message</span>
              </label>
              <textarea
                placeholder="Type your message here"
                className="textarea textarea-bordered h-24"
              ></textarea>
            </div>

            <div className="form-control mt-4">
              <button className="btn btn-primary">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactUs;
