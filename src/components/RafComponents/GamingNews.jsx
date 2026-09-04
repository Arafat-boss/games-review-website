import React, { useState, useContext, useEffect } from "react";
import {
  FaNewspaper,
  FaClock,
  FaComment,
  FaTimes,
  FaThumbsUp,
  FaShareAlt,
  FaUserCircle,
  FaPaperPlane,
  FaBookmark,
  FaGamepad,
  FaFire,
  FaHeart,
  FaCheckCircle,
} from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

import newsImg1 from "../../assets/1.jpg";
import newsImg2 from "../../assets/game1.jpg";
import newsImg3 from "../../assets/2.jpg";

const initialNewsArticles = [
  {
    id: 1,
    category: "Hardware & Tech",
    title: "Next-Gen Graphics & Ray-Tracing: What UE5.5 Means for Gamers",
    date: "Sep 2026",
    readTime: "4 min read",
    author: "Alex Mercer • Senior Engine Analyst",
    image: newsImg1,
    fallbackImage:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80",
    summary:
      "Unreal Engine 5.5 introduces revolutionary Nanite enhancements, dynamic multi-bounce illumination, and micro-polygon optimizations for PC and consoles.",
    fullContent: [
      "Epic Games has officially unveiled Unreal Engine 5.5, setting a monumental precedent for upcoming AAA titles slated for late 2026 and 2027. The centerpiece of this release is a complete architectural overhaul to Nanite foliage rendering and dynamic mesh deformation, eliminating geometric pop-in across sprawling open worlds.",
      "Hardware ray-tracing performance with Lumen has witnessed a 30% reduction in GPU execution cost on both NVIDIA RTX 40/50 series cards and modern consoles. Gamers can anticipate native 4K output at consistent 60 to 120 FPS targets without aggressive upscaling artifacts.",
      "Furthermore, newly calibrated animation de-biasing tools allow developers to craft lifelike cloth physics, realistic muscle contortions, and facial micro-expressions with a fraction of previous memory footprints.",
    ],
    tags: ["#UnrealEngine", "#RayTracing", "#NextGen", "#Graphics"],
    commentsList: [
      {
        id: 101,
        user: "VoxelMaster",
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
        time: "2 hours ago",
        badge: "Tech Enthusiast",
        likes: 24,
        isLiked: false,
        text: "The Nanite foliage rendering improvements are truly monumental. Finally open-world games won't suffer from foliage pop-in when driving fast!",
      },
      {
        id: 102,
        user: "CyberSamurai",
        avatar:
          "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80",
        time: "5 hours ago",
        badge: "PC Master Race",
        likes: 15,
        isLiked: false,
        text: "Can't wait to test this on my rig. If Lumen ray-tracing cost is truly reduced by 30%, native 4K 120FPS might finally become the new baseline standard.",
      },
      {
        id: 103,
        user: "LunaRider",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
        time: "Yesterday",
        badge: "Game Developer",
        likes: 9,
        isLiked: false,
        text: "As an indie developer, the animation de-biasing tool in 5.5 saves our studio weeks of rigging. Gamers are going to see massive quality jumps soon!",
      },
    ],
  },
  {
    id: 2,
    category: "Industry Insights",
    title: "Steam Sets New Peak Concurrent Record: 38 Million Gamers Online",
    date: "Aug 2026",
    readTime: "3 min read",
    author: "Sarah Jenkins • PC Market Specialist",
    image: newsImg2,
    fallbackImage:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80",
    summary:
      "Valve's digital storefront surpasses historical milestones driven by blockbuster action RPG hits and flourishing indie rogue-likes.",
    fullContent: [
      "Valve has recorded an unprecedented milestone as Steam surpassed 38,360,000 concurrent online users over the past weekend, marking the highest traffic volume in digital PC distribution history.",
      "The massive surge was propelled by record-breaking turnouts for Eastern mythology masterpieces like Black Myth: Wukong, continued multi-season momentum from Counter-Strike 2 and Dota 2, and viral sensation indie rogue-likes.",
      "Industry data also reveals Steam Deck adoption contributed to over 15% of active weekend sessions, proving handheld PC gaming has evolved from a niche novelty into a dominant gaming lifestyle.",
    ],
    tags: ["#Steam", "#Valve", "#PCGaming", "#SteamDeck", "#Milestone"],
    commentsList: [
      {
        id: 201,
        user: "GabeN_Faithful",
        avatar:
          "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&auto=format&fit=crop&q=80",
        time: "1 hour ago",
        badge: "Steam Deck Veteran",
        likes: 42,
        isLiked: false,
        text: "38 million concurrent is unbelievable! Steam Deck has made it so effortless to play my backlog from couch to commute. Long live PC gaming!",
      },
      {
        id: 202,
        user: "PixelSorceress",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
        time: "3 hours ago",
        badge: "Indie Curator",
        likes: 27,
        isLiked: false,
        text: "It is so inspiring to witness inventive indie games driving millions of these concurrent players right alongside titanic 100-million-dollar AAA releases.",
      },
      {
        id: 203,
        user: "TacticalSniper99",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
        time: "6 hours ago",
        badge: "Competitive Ranked",
        likes: 18,
        isLiked: false,
        text: "CS2 and Helldivers 2 servers were tested to their absolute limits this weekend. What an unforgettable era for multiplayer squads!",
      },
      {
        id: 204,
        user: "ApexPredator",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
        time: "Yesterday",
        badge: "Platform Veteran",
        likes: 11,
        isLiked: false,
        text: "40 million milestone is undoubtedly on the horizon before the upcoming winter holiday sales. Valve's dominance remains unchallenged.",
      },
    ],
  },
  {
    id: 3,
    category: "Major Update",
    title: "Elden Ring Patch Notes: Colosseum Balancing and Weapon Re-tuning",
    date: "Aug 2026",
    readTime: "5 min read",
    author: "Kenji Sato • Souls Specialist",
    image: newsImg3,
    fallbackImage:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=80",
    summary:
      "FromSoftware rolls out comprehensive balance adjustments targeting heavy weapon hyper-armor, poise health, and dual-wielding scaling.",
    fullContent: [
      "FromSoftware has released patch calibration v1.14 across all platforms, offering the most extensive balance adjustments since the arrival of Shadow of the Erdtree.",
      "The primary focal point of the update targets hyper-armor frames for Colossal Weapons and Greatswords. Heavy weapons now boast increased hyper-armor activation speed, preventing slow winding animations from being interrupted by fast thrusting rapiers in competitive Colosseum duels.",
      "In addition, spell recovery recovery timings for select Sorceries and Incantations were refined to promote tactical counter-play, while co-op summon sign connectivity was optimized across cross-region matchmaking.",
    ],
    tags: ["#EldenRing", "#FromSoftware", "#PatchNotes", "#PvP", "#SoulsLike"],
    commentsList: [
      {
        id: 301,
        user: "TarnishedLord",
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
        time: "45 mins ago",
        badge: "Elden Lord",
        likes: 35,
        isLiked: false,
        text: "Finally, Colossal weapon hyper-armor got the love it deserved! Now I can swing my Ruins Greatsword without getting poked out of animation by cleanrot rapier!",
      },
      {
        id: 302,
        user: "BladeOfMiquella",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
        time: "4 hours ago",
        badge: "No-Hit Champion",
        likes: 21,
        isLiked: false,
        text: "The light roll recovery frames were sensibly re-tuned as well. Colosseum duels are in the healthiest, most varied competitive state they've ever been.",
      },
      {
        id: 303,
        user: "IronFistAlexander",
        avatar:
          "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80",
        time: "8 hours ago",
        badge: "PvP Duelist",
        likes: 14,
        isLiked: false,
        text: "Spectacular work from FromSoft. If they add an official Boss Rush gauntlet mode next, this game will remain the greatest masterpiece forever.",
      },
    ],
  },
];

const GamingNews = () => {
  const { user } = useContext(AuthContext);

  const [articles, setArticles] = useState(initialNewsArticles);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [newCommentText, setNewCommentText] = useState("");

  // Lock background body scroll when modal is open
  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedArticle]);

  // Open modal with article details
  const handleOpenArticle = (article) => {
    setSelectedArticle(article);
    setNewCommentText("");
  };

  // Close modal
  const handleCloseModal = () => {
    setSelectedArticle(null);
    setNewCommentText("");
  };

  // Toggle like on a comment
  const handleToggleLike = (commentId) => {
    if (!selectedArticle) return;

    const updatedComments = selectedArticle.commentsList.map((c) => {
      if (c.id === commentId) {
        const isLiked = !c.isLiked;
        return {
          ...c,
          isLiked,
          likes: isLiked ? c.likes + 1 : c.likes - 1,
        };
      }
      return c;
    });

    const updatedArticle = {
      ...selectedArticle,
      commentsList: updatedComments,
    };

    setSelectedArticle(updatedArticle);

    // Sync with main articles list
    setArticles((prev) =>
      prev.map((a) => (a.id === selectedArticle.id ? updatedArticle : a))
    );
  };

  // Submit a new comment
  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const newCommentObj = {
      id: Date.now(),
      user: user?.displayName || "Passionate Gamer",
      avatar:
        user?.photoURL ||
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&auto=format&fit=crop&q=80",
      time: "Just now",
      badge: user ? "Verified Member" : "Guest Player",
      likes: 0,
      isLiked: false,
      text: newCommentText.trim(),
    };

    const updatedComments = [newCommentObj, ...selectedArticle.commentsList];
    const updatedArticle = {
      ...selectedArticle,
      commentsList: updatedComments,
    };

    setSelectedArticle(updatedArticle);

    // Sync with main articles list
    setArticles((prev) =>
      prev.map((a) => (a.id === selectedArticle.id ? updatedArticle : a))
    );

    setNewCommentText("");

    Swal.fire({
      title: "Comment Posted! 🎮",
      text: "Your thoughts have been added to this gaming dispatch.",
      icon: "success",
      timer: 1800,
      showConfirmButton: false,
      toast: true,
      position: "top-end",
    });
  };

  // Share article action
  const handleShareArticle = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
    }
    Swal.fire({
      title: "Link Copied! 🚀",
      text: "Article link copied to clipboard. Share with your gaming squad!",
      icon: "success",
      confirmButtonColor: "#8b5cf6",
      timer: 2000,
    });
  };

  return (
    <section className="py-16 bg-base-100/40 border-y border-base-content/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Fade triggerOnce>
          {/* Section Header */}
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
            {articles.map((article) => (
              <article
                key={article.id}
                className="group bg-base-100 border border-base-content/10 hover:border-primary/40 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Thumbnail with dark vignette */}
                <div
                  onClick={() => handleOpenArticle(article)}
                  className="relative h-52 w-full overflow-hidden bg-slate-900 cursor-pointer"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        article.fallbackImage ||
                        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80";
                    }}
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

                    <h3
                      onClick={() => handleOpenArticle(article)}
                      className="font-display font-bold text-xl text-base-content group-hover:text-primary transition-colors leading-snug line-clamp-2 cursor-pointer"
                    >
                      {article.title}
                    </h3>

                    <p className="text-sm text-base-content/75 line-clamp-3 mt-2 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>

                  {/* Article Footer */}
                  <div className="pt-4 border-t border-base-content/10 flex items-center justify-between text-xs font-semibold text-base-content/70">
                    <button
                      onClick={() => handleOpenArticle(article)}
                      className="flex items-center gap-1.5 hover:text-primary transition-colors"
                      title="View comments"
                    >
                      <FaComment className="text-primary" />
                      <span>{article.commentsList?.length || 0} Comments</span>
                    </button>

                    <button
                      onClick={() => handleOpenArticle(article)}
                      className="btn btn-primary btn-xs sm:btn-sm text-white font-bold rounded-xl shadow-md hover:shadow-glow-primary transition-all flex items-center gap-1.5"
                    >
                      <span>Read Article</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Fade>
      </div>

      {/* ========================================================================= */}
      {/* ARTICLE DETAILS & COMMENTS POPUP MODAL                                     */}
      {/* ========================================================================= */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto no-scrollbar animate-in fade-in duration-200"
          onClick={handleCloseModal}
        >
          {/* Modal Container */}
          <div
            className="relative w-full max-w-3xl max-h-[90vh] bg-base-100 border border-base-content/15 rounded-3xl shadow-2xl overflow-y-auto no-scrollbar flex flex-col my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Category & Close Button */}
            <div className="bg-base-100 px-6 py-4 border-b border-base-content/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                  {selectedArticle.category}
                </span>
                <span className="text-xs text-base-content/60 font-medium hidden sm:inline">
                  {selectedArticle.readTime} • {selectedArticle.date}
                </span>
              </div>

              <button
                onClick={handleCloseModal}
                className="btn btn-ghost btn-circle btn-sm text-base-content/70 hover:text-error hover:bg-error/10 transition-colors"
                title="Close dispatch"
                aria-label="Close modal"
              >
                <FaTimes className="text-base" />
              </button>
            </div>

            {/* Article Visual Banner */}
            <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-950 shrink-0">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    selectedArticle.fallbackImage ||
                    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10"></div>

              {/* Overlay Author Tag */}
              <div className="absolute bottom-4 left-4 sm:left-6 flex items-center gap-2 text-white text-xs font-semibold bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
                <FaUserCircle className="text-primary text-sm" />
                <span>{selectedArticle.author}</span>
              </div>
            </div>

            {/* Modal Body & Article Details */}
            <div className="p-6 sm:p-8 space-y-6 flex-grow">
              {/* Title */}
              <h2 className="font-display font-black text-2xl sm:text-3xl text-base-content tracking-tight leading-snug">
                {selectedArticle.title}
              </h2>

              {/* Full Article Content */}
              <div className="space-y-4 text-sm sm:text-base text-base-content/85 leading-relaxed font-normal">
                {selectedArticle.fullContent.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              {/* Tags Row */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {selectedArticle.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg bg-base-200 border border-base-content/15 text-xs font-semibold text-base-content/75"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="divider my-4"></div>

              {/* ============================================================= */}
              {/* COMMUNITY COMMENTS SECTION                                     */}
              {/* ============================================================= */}
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FaComment className="text-primary text-lg" />
                    <h3 className="font-display font-bold text-xl text-base-content">
                      Community Discussion ({selectedArticle.commentsList?.length || 0})
                    </h3>
                  </div>

                  <button
                    onClick={handleShareArticle}
                    className="btn btn-ghost btn-xs text-primary font-bold hover:bg-primary/10 flex items-center gap-1.5"
                  >
                    <FaShareAlt />
                    <span>Share</span>
                  </button>
                </div>

                {/* Add a Comment Input Form */}
                <form
                  onSubmit={handleAddComment}
                  className="bg-base-200/70 border border-base-content/10 rounded-2xl p-4 space-y-3"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-base-content/70">
                    <FaGamepad className="text-primary" />
                    <span>Leave a Comment as: {user?.displayName || "Guest Gamer"}</span>
                  </div>

                  <textarea
                    rows={2}
                    value={newCommentText}
                    onChange={(e) => setNewCommentText(e.target.value)}
                    placeholder="Share your perspective on this dispatch with fellow players..."
                    className="w-full bg-base-100 border border-base-content/15 rounded-xl p-3 text-sm text-base-content focus:outline-none focus:border-primary resize-none"
                    required
                  />

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={!newCommentText.trim()}
                      className="btn btn-primary btn-sm text-white font-bold rounded-xl shadow-md flex items-center gap-2 disabled:opacity-50"
                    >
                      <FaPaperPlane className="text-xs" />
                      <span>Post Comment</span>
                    </button>
                  </div>
                </form>

                {/* Comments List */}
                <div className="space-y-3 pt-2">
                  {selectedArticle.commentsList &&
                  selectedArticle.commentsList.length > 0 ? (
                    selectedArticle.commentsList.map((comment) => (
                      <div
                        key={comment.id}
                        className="bg-base-100 border border-base-content/10 rounded-2xl p-4 shadow-sm space-y-2 hover:border-primary/30 transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <img
                              src={comment.avatar}
                              alt={comment.user}
                              className="w-9 h-9 rounded-full object-cover ring-2 ring-primary/30"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src =
                                  "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&auto=format&fit=crop&q=80";
                              }}
                            />
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-sm text-base-content">
                                  {comment.user}
                                </span>
                                <span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary font-bold text-[10px] uppercase">
                                  {comment.badge}
                                </span>
                              </div>
                              <span className="text-[11px] text-base-content/50">
                                {comment.time}
                              </span>
                            </div>
                          </div>

                          {/* Like Button */}
                          <button
                            onClick={() => handleToggleLike(comment.id)}
                            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                              comment.isLiked
                                ? "bg-rose-500/15 text-rose-500 border border-rose-500/30"
                                : "bg-base-200 hover:bg-base-300 text-base-content/70"
                            }`}
                            title="Helpful comment"
                          >
                            <FaHeart
                              className={
                                comment.isLiked ? "text-rose-500" : "text-base-content/40"
                              }
                            />
                            <span>{comment.likes}</span>
                          </button>
                        </div>

                        <p className="text-xs sm:text-sm text-base-content/85 leading-relaxed pl-12">
                          {comment.text}
                        </p>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-6 text-xs text-base-content/50">
                      No comments yet. Be the first to share your verdict!
                    </div>
                  )}
                </div>
              </div>

              {/* Inline Bottom Footer (No sticky bar) */}
              <div className="pt-6 mt-6 border-t border-base-content/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-base-content/60">
                <span>Published by Game Reviews Editorial • Official Dispatch</span>
                <button
                  onClick={handleCloseModal}
                  className="btn btn-outline btn-sm rounded-xl px-6"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GamingNews;
