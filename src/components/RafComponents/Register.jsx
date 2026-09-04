import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaGamepad,
  FaEye,
  FaEyeSlash,
  FaCloudUploadAlt,
  FaSpinner,
  FaCheckCircle,
  FaShieldAlt,
  FaTrophy,
  FaStar,
} from "react-icons/fa";
import Swal from "sweetalert2";
import { uploadImageToImgBB } from "../../utils/imageUpload";
import registerArt from "../../assets/2.jpg";

const Register = () => {
  const navigate = useNavigate();
  const { registerUser, userUpdateProfile } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Upload state
  const [uploadMode, setUploadMode] = useState("file"); // "file" or "url"
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle direct avatar upload to ImgBB
  const handleAvatarUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    setUploadSuccess(false);

    try {
      const hostedUrl = await uploadImageToImgBB(file);
      setPhotoUrl(hostedUrl);
      setUploadSuccess(true);
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Avatar uploaded to ImgBB! 🚀",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      console.error("ImgBB upload error:", error);
      Swal.fire({
        title: "Upload Failed",
        text: "Could not upload image to ImgBB. Please try again or paste image URL directly.",
        icon: "error",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setErrorMessage("");

    // Password validation: minimum 6 chars, 1 uppercase, 1 lowercase
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setErrorMessage("Password must contain at least one uppercase letter (A-Z).");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setErrorMessage("Password must contain at least one lowercase letter (a-z).");
      return;
    }

    const finalPhoto =
      photoUrl ||
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&auto=format&fit=crop&q=80";

    setIsLoading(true);

    registerUser(email, password)
      .then(() => {
        userUpdateProfile({ displayName: name, photoURL: finalPhoto })
          .then(() => {
            setIsLoading(false);
            Swal.fire({
              title: "Account Created! 🎮",
              text: `Welcome to Game Reviews, ${name}!`,
              icon: "success",
              confirmButtonColor: "#8b5cf6",
            });
            navigate("/");
          })
          .catch((err) => {
            setIsLoading(false);
            console.error("Profile update error:", err);
            navigate("/");
          });
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Registration error:", error);
        setErrorMessage(
          error.code === "auth/email-already-in-use"
            ? "This email is already registered. Please login instead."
            : error.message || "Failed to create account."
        );
      });
  };

  return (
    <div className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Create Gamer Account | Game Reviews</title>
      </Helmet>

      {/* Split Layout Container */}
      <div className="bg-base-100 border border-base-content/10 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12">
        {/* LEFT COLUMN: Gaming Artwork & Brand Community Showcase (5 cols on lg) */}
        <div className="lg:col-span-5 relative hidden lg:flex flex-col justify-between p-10 bg-slate-950 overflow-hidden text-white">
          {/* Background image with cinematic dark scrim */}
          <img
            src={registerArt}
            alt="Gaming Showcase"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30"></div>

          {/* Top Brand Tag */}
          <div className="relative z-10">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-accent p-0.5 shadow-lg">
                <div className="w-full h-full bg-base-100 rounded-[10px] flex items-center justify-center">
                  <FaGamepad className="text-xl text-primary" />
                </div>
              </div>
              <span className="font-display font-black text-2xl tracking-tight text-white">
                GAME<span className="text-primary">REVIEWS</span>
              </span>
            </Link>
          </div>

          {/* Center Showcase Text */}
          <div className="relative z-10 space-y-4 my-auto py-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/30 text-purple-300 border border-primary/40 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <FaTrophy className="text-amber-400" />
              Join 25,000+ Gamers
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl leading-tight text-white">
              Level Up Your Voice in Gaming
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Create your profile to rate AAA and indie titles, build your personal WatchList, and publish critiques read by players worldwide.
            </p>

            <div className="space-y-2.5 pt-4">
              <div className="flex items-center gap-2 text-xs text-gray-200">
                <FaCheckCircle className="text-emerald-400 text-sm" />
                <span>Publish unlimited 1-10 scores and reviews</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-200">
                <FaCheckCircle className="text-emerald-400 text-sm" />
                <span>Save games to your private cloud WatchList</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-200">
                <FaCheckCircle className="text-emerald-400 text-sm" />
                <span>Direct ImgBB avatar and cover upload support</span>
              </div>
            </div>
          </div>

          {/* Bottom Trust Badge */}
          <div className="relative z-10 flex items-center gap-2 text-xs text-gray-400 pt-6 border-t border-white/10">
            <FaShieldAlt className="text-primary" />
            <span>100% Unbiased & Spam-Protected Gaming Network</span>
          </div>
        </div>

        {/* RIGHT COLUMN: The Registration Form (7 cols on lg) */}
        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6 bg-base-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-2">
              <FaUser />
              Player Registration
            </div>
            <h1 className="font-display font-black text-3xl sm:text-4xl text-base-content tracking-tight">
              Create Your Account
            </h1>
            <p className="text-sm text-base-content/70 mt-1">
              Join Game Reviews in seconds. All gaming reviews start here.
            </p>
          </div>

          {/* Error Alert */}
          {errorMessage && (
            <div className="alert alert-error text-xs py-2.5 rounded-xl text-white font-semibold shadow-sm">
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleRegister} className="space-y-4">
            {/* 1. Name */}
            <div>
              <label className="text-xs font-bold text-base-content/80 uppercase tracking-wider block mb-1.5">
                Gamer Handle / Full Name *
              </label>
              <div className="relative">
                <FaUser className="absolute left-4 top-3.5 text-base-content/40 text-sm" />
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. GeraltOfRivia"
                  required
                  className="w-full pl-11 pr-4 py-2.5 bg-base-200 border border-base-content/15 rounded-xl text-sm text-base-content focus:outline-none focus:border-primary font-medium"
                />
              </div>
            </div>

            {/* 2. Email */}
            <div>
              <label className="text-xs font-bold text-base-content/80 uppercase tracking-wider block mb-1.5">
                Email Address *
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-3.5 text-base-content/40 text-sm" />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="gamer@domain.com"
                  required
                  className="w-full pl-11 pr-4 py-2.5 bg-base-200 border border-base-content/15 rounded-xl text-sm text-base-content focus:outline-none focus:border-primary font-medium"
                />
              </div>
            </div>

            {/* 3. Password */}
            <div>
              <label className="text-xs font-bold text-base-content/80 uppercase tracking-wider block mb-1.5">
                Password *
              </label>
              <div className="relative">
                <FaLock className="absolute left-4 top-3.5 text-base-content/40 text-sm" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min 6 chars with uppercase & lowercase"
                  required
                  className="w-full pl-11 pr-11 py-2.5 bg-base-200 border border-base-content/15 rounded-xl text-sm text-base-content focus:outline-none focus:border-primary"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3.5 text-base-content/40 hover:text-base-content text-sm"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <span className="text-[11px] text-base-content/50 mt-1 block">
                Must contain 6+ characters, 1 uppercase & 1 lowercase letter.
              </span>
            </div>

            {/* 4. AVATAR UPLOAD VIA IMGBB (KEPT AT THE END OF INPUTS) */}
            <div className="bg-base-200/60 p-4 rounded-2xl border border-base-content/10 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-base-content uppercase tracking-wider block">
                    Gamer Avatar (ImgBB Upload)
                  </span>
                  <span className="text-[10px] text-base-content/60">
                    Upload image file from device or paste image URL
                  </span>
                </div>

                {/* Upload Mode Switcher */}
                <div className="flex items-center gap-1 bg-base-300 p-1 rounded-xl text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => setUploadMode("file")}
                    className={`px-2.5 py-1 rounded-lg text-[11px] transition-all ${
                      uploadMode === "file"
                        ? "bg-primary text-white shadow-sm"
                        : "text-base-content/70 hover:text-base-content"
                    }`}
                  >
                    File
                  </button>
                  <button
                    type="button"
                    onClick={() => setUploadMode("url")}
                    className={`px-2.5 py-1 rounded-lg text-[11px] transition-all ${
                      uploadMode === "url"
                        ? "bg-primary text-white shadow-sm"
                        : "text-base-content/70 hover:text-base-content"
                    }`}
                  >
                    URL
                  </button>
                </div>
              </div>

              {/* Mode 1: File Upload to ImgBB */}
              {uploadMode === "file" ? (
                <div className="space-y-2">
                  <label className="flex items-center justify-between w-full p-3 border-2 border-dashed border-primary/40 hover:border-primary rounded-xl cursor-pointer bg-base-100 hover:bg-base-200/50 transition-all text-xs group">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <FaCloudUploadAlt className="text-xl" />
                      </div>
                      <div className="text-left">
                        <span className="font-bold text-base-content block">
                          {isUploading
                            ? "Uploading to ImgBB..."
                            : uploadSuccess
                            ? "Avatar uploaded! Click to change"
                            : "Choose avatar photo from device"}
                        </span>
                        <span className="text-[10px] text-base-content/60">
                          Instant ImgBB hosting
                        </span>
                      </div>
                    </div>
                    {isUploading && (
                      <FaSpinner className="animate-spin text-primary text-lg mr-2" />
                    )}
                    {uploadSuccess && (
                      <FaCheckCircle className="text-success text-lg mr-2" />
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarUpload}
                      disabled={isUploading}
                      className="hidden"
                    />
                  </label>

                  {/* Avatar Circle Preview */}
                  {photoUrl && (
                    <div className="flex items-center gap-3 bg-base-100 p-2 rounded-xl border border-base-content/10">
                      <div className="avatar">
                        <div className="w-10 h-10 rounded-full ring-2 ring-primary">
                          <img src={photoUrl} alt="Avatar preview" />
                        </div>
                      </div>
                      <span className="text-xs text-base-content/70 truncate flex-1 font-mono text-[11px]">
                        {photoUrl}
                      </span>
                      <span className="badge badge-success badge-sm text-white font-bold">
                        Attached
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                /* Mode 2: Direct URL Input */
                <div>
                  <input
                    type="url"
                    value={photoUrl}
                    onChange={(e) => setPhotoUrl(e.target.value)}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full px-3.5 py-2 bg-base-100 border border-base-content/15 rounded-xl text-xs text-base-content focus:outline-none focus:border-primary font-mono"
                  />
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || isUploading}
              className="btn btn-primary w-full text-white font-bold rounded-xl shadow-md hover:shadow-glow-primary transition-all py-3 mt-2"
            >
              {isLoading ? "Creating Account..." : "Create Free Account"}
            </button>
          </form>

          {/* Footer Link */}
          <p className="text-center text-xs text-base-content/70 pt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-bold hover:underline">
              Sign In Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
