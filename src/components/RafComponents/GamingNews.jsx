import React from "react";
import { FaNewspaper, FaClock, FaComment } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const newsArticles = [
  {
    category: "Hardware & Tech",
    title: "Next-Gen Graphics & Ray-Tracing: What UE5.5 Means for Gamers",
    date: "Sep 2026",
    readTime: "4 min read",
    comments: 42,
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=600&auto=format&fit=crop&q=80",
    summary:
      "Unreal Engine 5.5 introduces revolutionary Nanite enhancements, dynamic multi-bounce illumination, and micro-polygon optimizations for PC and consoles.",
  },
  {
    category: "Industry Insights",
    title: "Steam Sets New Peak Concurrent Record: 38 Million Gamers Online",
    date: "Aug 2026",
    readTime: "3 min read",
    comments: 89,
    image: "https://images.unsplash.com/photo-1612287233215-6f9f3033878a?w=600&auto=format&fit=crop&q=80",
    summary:
      "Valve's digital storefront surpasses historical milestones driven by blockbuster action RPG hits and flourishing indie rogue-likes.",
  },
  {
    category: "Major Update",
    title: "Elden Ring Patch Notes: Colosseum Balancing and Weapon Re-tuning",
    date: "Aug 2026",
    readTime: "5 min read",
    comments: 115,
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=600&auto=format&fit=crop&q=80",
    summary:
      "FromSoftware rolls out comprehensive balance adjustments targeting heavy weapon hyper-armor, poise health, and dual-wielding scaling.",
  },
];

const GamingNews = () => {
  return (
    <section className="py-16 bg-base-100/40 border-y border-base-content/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Fade triggerOnce>
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-wider mb-2">
              <FaNewspaper />
              Industry Buzz
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-base-content tracking-tight">
              Latest Gaming News & Dispatches
            </h2>
            <p className="text-sm sm:text-base text-base-content/70 mt-2">
              Stay ahead with curated headlines, technical breakthroughs, and game ecosystem reports.
            </p>
          </div>

          {/* News 3-Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsArticles.map((article, idx) => (
              <article
                key={idx}
                className="group bg-base-100 border border-base-content/10 hover:border-primary/40 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Thumbnail with dark vignette */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-lg bg-black/70 text-white border border-white/20 text-xs font-bold backdrop-blur-md shadow-sm">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content with high contrast */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4 bg-base-100">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-base-content/70 mb-2 font-medium">
                      <span className="flex items-center gap-1">
                        <FaClock className="text-primary text-xs" />
                        {article.readTime}
                      </span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-base-content group-hover:text-primary transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-sm text-base-content/75 line-clamp-3 mt-2 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>

                  {/* Article Footer */}
                  <div className="pt-4 border-t border-base-content/10 flex items-center justify-between text-xs font-semibold text-base-content/70">
                    <span className="flex items-center gap-1.5">
                      <FaComment className="text-primary" />
                      {article.comments} Comments
                    </span>
                    <span className="text-primary font-bold group-hover:underline">
                      Read Article →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default GamingNews;
