import React from 'react';
import { Helmet } from 'react-helmet';
import { FaRocket, FaUserCog, FaCreditCard, FaDesktop, FaShieldAlt, FaQuestionCircle, FaUsers, FaServer, FaEnvelope, FaPhone, FaTwitter,  } from 'react-icons/fa';

const Support = () => {
  return (
    <>
    <Helmet>
        <title>Support</title>
    </Helmet>
    <div className="min-h-screen p-6 px-16 text-[#25000d]">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Game Reviews Support</h1>
        <p className=" text-lg mb-6">How can we help you?</p>
        <div className="flex justify-center gap-2">
          <input
            type="text"
            placeholder="Search for help..."
            className="input input-bordered w-full max-w-md"
          />
          <button className="btn btn-primary">Try Your Luck</button>
        </div>
      </div>

      {/* Support Categories */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-center">Need help? We've got your back</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SupportCard
            icon={<FaRocket />}
            title="Getting Started"
            description="Learn the basics and get started."
          />
          <SupportCard
            icon={<FaUserCog />}
            title="Account Settings"
            description="Update your profile and preferences."
          />
          <SupportCard
            icon={<FaCreditCard />}
            title="Billing"
            description="Understand your charges and invoices."
          />
          <SupportCard
            icon={<FaDesktop />}
            title="Interface"
            description="Learn what each button does."
          />
          <SupportCard
            icon={<FaShieldAlt />}
            title="Trust & Safety"
            description="Stay safe and secure while using our platform."
          />
          <SupportCard
            icon={<FaQuestionCircle />}
            title="FAQ"
            description="Find answers to common questions."
          />
          <SupportCard
            icon={<FaUsers />}
            title="Community"
            description="Join discussions and connect with others."
          />
          <SupportCard
            icon={<FaServer />}
            title="Server Setup"
            description="Get help setting up servers and systems."
          />
        </div>
      </div>

      {/* Footer Section */}
      <div className="text-center mt-12">
        <p className="">Other ways to find help:</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="text-[#fe847d]">
            <FaEnvelope size={24} />
          </a>
          <a href="#" className="text-[#fe847d]">
            <FaPhone size={24} />
          </a>
          <a href="#" className="text-[#fe847d]">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

const SupportCard = ({ icon, title, description }) => (
  <div className="card bg-[#fee3e7] shadow-md text-center p-4">
    <div className="text-[#fe847d] text-3xl mb-4">{icon}</div>
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="">{description}</p>
  </div>
);

export default Support;
