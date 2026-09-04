import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  FaRocket,
  FaUserCog,
  FaShieldAlt,
  FaQuestionCircle,
  FaDiscord,
  FaEnvelope,
  FaSearch,
  FaGamepad,
} from "react-icons/fa";

const faqs = [
  {
    q: "How does the Game Reviews 1-10 scoring system work?",
    a: "Our community reviews use an authentic 1 to 10 scale evaluating narrative depth, graphics fidelity, gameplay mechanics, audio design, and replay value. A 9.0+ denotes an essential Masterpiece.",
  },
  {
    q: "How do I add games to my personal WatchList?",
    a: "When signed into your account, visit any game's review page and click the 'Add to WatchList' button. You can view, manage, and filter all saved games anytime from the 'WatchList' tab in the navbar.",
  },
  {
    q: "Can I edit or delete my published game review?",
    a: "Yes! Navigate to 'My Reviews' from the navbar or user avatar dropdown. You will find intuitive 'Edit' and 'Delete' buttons for every review you've authored.",
  },
  {
    q: "Are the community reviews verified?",
    a: "Every review is published with the authenticated author's name, email, and timestamp. We actively monitor for spam and toxic behavior to ensure genuine gaming discourse.",
  },
  {
    q: "How can I join the Game Reviews Discord community?",
    a: "Click on our Discord link in the footer or support hub to join thousands of fellow gamers discussing new releases, sharing builds, and teaming up for multiplayer lobbies.",
  },
];

const Support = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <Helmet>
        <title>Support Hub & FAQs | Game Reviews</title>
      </Helmet>

      {/* Hero Header */}
      <div className="text-center max-w-xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-2">
          <FaQuestionCircle />
          Knowledge Base
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-base-content tracking-tight">
          Help & Support Hub
        </h1>
        <p className="text-sm sm:text-base text-base-content/70 mt-2">
          Find instant answers to common questions, platform guides, and gaming resources.
        </p>

        {/* Search Bar */}
        <div className="relative mt-6 max-w-md mx-auto">
          <FaSearch className="absolute left-4 top-3.5 text-base-content/40" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs (e.g. watchlist, score, edit)..."
            className="w-full pl-11 pr-4 py-2.5 bg-base-100 border border-base-content/15 rounded-2xl text-sm text-base-content focus:outline-none focus:border-primary shadow-sm"
          />
        </div>
      </div>

      {/* 4 Category Support Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-base-100 border border-base-content/10 hover:border-primary/40 rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-xl mx-auto mb-3">
            <FaRocket />
          </div>
          <h3 className="font-display font-bold text-base text-base-content mb-1">
            Getting Started
          </h3>
          <p className="text-xs text-base-content/70">
            Learn how to register, browse critiques, and build your gaming profile.
          </p>
        </div>

        <div className="bg-base-100 border border-base-content/10 hover:border-primary/40 rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center text-xl mx-auto mb-3">
            <FaUserCog />
          </div>
          <h3 className="font-display font-bold text-base text-base-content mb-1">
            Review Guidelines
          </h3>
          <p className="text-xs text-base-content/70">
            Discover best practices for writing constructive, insightful game evaluations.
          </p>
        </div>

        <div className="bg-base-100 border border-base-content/10 hover:border-primary/40 rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center text-xl mx-auto mb-3">
            <FaShieldAlt />
          </div>
          <h3 className="font-display font-bold text-base text-base-content mb-1">
            Community Rules
          </h3>
          <p className="text-xs text-base-content/70">
            Review our code of conduct, anti-harassment policy, and fair review rules.
          </p>
        </div>

        <div className="bg-base-100 border border-base-content/10 hover:border-primary/40 rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition-all">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xl mx-auto mb-3">
            <FaDiscord />
          </div>
          <h3 className="font-display font-bold text-base text-base-content mb-1">
            Discord Squad
          </h3>
          <p className="text-xs text-base-content/70">
            Connect directly with moderators, editors, and fellow gamer squads.
          </p>
        </div>
      </div>

      {/* Interactive FAQ Accordion */}
      <div className="space-y-4">
        <h2 className="font-display font-bold text-2xl text-base-content text-center mb-6">
          Frequently Asked Questions
        </h2>

        {filteredFaqs.length > 0 ? (
          <div className="space-y-3">
            {filteredFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="collapse collapse-arrow bg-base-100 border border-base-content/10 rounded-2xl shadow-sm"
              >
                <input type="radio" name="faq-accordion" defaultChecked={idx === 0} />
                <div className="collapse-title text-base font-bold text-base-content">
                  {faq.q}
                </div>
                <div className="collapse-content text-sm text-base-content/75 leading-relaxed">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 text-sm text-base-content/60">
            No FAQs found matching "{searchQuery}".
          </div>
        )}
      </div>
    </div>
  );
};

export default Support;
