import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import {
  FaGoogle,
  FaEnvelope,
  FaLock,
  FaGamepad,
  FaEye,
  FaEyeSlash,
  FaTrophy,
  FaStar,
  FaShieldAlt,
} from "react-icons/fa";
import Swal from "sweetalert2";
import loginArt from "../../assets/3.jpg";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginUser, googleProvider } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then(() => {
        setIsLoading(false);
        Swal.fire({
          title: "Welcome Back! 🎮",
          text: "Signed in successfully. Happy gaming!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Login error:", error);
        setErrorMessage(
          error.code === "auth/invalid-credential"
            ? "Invalid email or password. Please double check."
            : error.message || "Failed to sign in."
        );
      });
  };

  const handleGoogle = () => {
    setErrorMessage("");
    googleProvider()
      .then(() => {
        Swal.fire({
          title: "Welcome Gamer! 🚀",
          text: "Google sign-in successful.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.error("Google sign in error:", err);
        setErrorMessage(err.message || "Google sign in failed.");
      });
  };

  return (
    <div className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Sign In | Game Reviews</title>
      </Helmet>

      {/* Split Layout Container */}
      <div className="bg-base-100 border border-base-content/10 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12">
        {/* LEFT COLUMN: Gaming Artwork & Brand (5 cols on lg) */}
        <div className="lg:col-span-5 relative hidden lg:flex flex-col justify-between p-10 bg-slate-950 overflow-hidden text-white">
          <img
            src={loginArt}
            alt="Gaming Hero"
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

          {/* Center Text */}
          <div className="relative z-10 space-y-4 my-auto py-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/30 text-purple-300 border border-primary/40 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <FaStar className="text-amber-400" />
              Player Portal
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl leading-tight text-white">
              Welcome Back to the Arena
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Log in to manage your published game reviews, update your WatchList, and join discussions with 25,000+ passionate players.
            </p>
          </div>

          {/* Bottom Trust */}
          <div className="relative z-10 flex items-center gap-2 text-xs text-gray-400 pt-6 border-t border-white/10">
            <FaShieldAlt className="text-primary" />
            <span>Secure Firebase Authentication</span>
          </div>
        </div>

        {/* RIGHT COLUMN: Login Form (7 cols on lg) */}
        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6 bg-base-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-2">
              <FaLock />
              Gamer Login
            </div>
            <h1 className="font-display font-black text-3xl sm:text-4xl text-base-content tracking-tight">
              Sign In to Account
            </h1>
            <p className="text-sm text-base-content/70 mt-1">
              Enter your email and password to resume your gaming journey.
            </p>
          </div>

          {/* Error Alert */}
          {errorMessage && (
            <div className="alert alert-error text-xs py-2.5 rounded-xl text-white font-semibold shadow-sm">
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-base-content/80 uppercase tracking-wider block mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-3.5 text-base-content/40 text-sm" />
                <input
                  type="email"
                  name="email"
                  placeholder="gamer@domain.com"
                  required
                  className="w-full pl-11 pr-4 py-2.5 bg-base-200 border border-base-content/15 rounded-xl text-sm text-base-content focus:outline-none focus:border-primary font-medium"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-base-content/80 uppercase tracking-wider block mb-1.5">
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-4 top-3.5 text-base-content/40 text-sm" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
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
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary w-full text-white font-bold rounded-xl shadow-md hover:shadow-glow-primary transition-all py-3 mt-2"
            >
              {isLoading ? "Signing In..." : "Sign In to Game Reviews"}
            </button>
          </form>

          <div className="divider text-xs text-base-content/50 my-2">OR CONTINUE WITH</div>

          {/* Google Sign In */}
          <button
            type="button"
            onClick={handleGoogle}
            className="btn btn-outline w-full border-base-content/20 hover:bg-base-200 text-base-content font-semibold rounded-xl flex items-center justify-center gap-2"
          >
            <FaGoogle className="text-error" />
            <span>Sign In with Google</span>
          </button>

          {/* Footer Link */}
          <p className="text-center text-xs text-base-content/70 pt-2">
            Don't have an account yet?{" "}
            <Link to="/register" className="text-primary font-bold hover:underline">
              Register Free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
