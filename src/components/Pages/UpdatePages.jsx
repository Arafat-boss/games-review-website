import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  FaEdit,
  FaStar,
  FaArrowLeft,
  FaGamepad,
  FaCloudUploadAlt,
  FaSpinner,
  FaCheckCircle,
  FaLink,
  FaCalendarAlt,
  FaUserEdit,
} from "react-icons/fa";
import { uploadImageToImgBB } from "../../utils/imageUpload";

const genresList = [
  "Action",
  "RPG",
  "Adventure",
  "Shooter",
  "Strategy",
  "Sports",
  "Horror",
  "Simulation",
  "Open World",
];

const UpdatePages = () => {
  const navigate = useNavigate();
  const review = useLoaderData();

  const {
    _id,
    email,
    name,
    title: initialTitle,
    photo: initialPhoto,
    rating: initialRating,
    date: initialDate,
    description: initialDesc,
    genres: initialGenre,
  } = review || {};

  // Form State
  const [title, setTitle] = useState(initialTitle || "");
  const [genres, setGenres] = useState(initialGenre || "Action");
  const [date, setDate] = useState(initialDate || "2024");
  const [rating, setRating] = useState(initialRating || "9");
  const [description, setDescription] = useState(initialDesc || "");
  const [photoUrl, setPhotoUrl] = useState(initialPhoto || "");

  // Upload state
  const [uploadMode, setUploadMode] = useState("file");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  // Handle direct file upload to ImgBB
  const handleFileUpload = async (e) => {
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
        title: "Cover uploaded to ImgBB! 🚀",
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

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!photoUrl) {
      Swal.fire({
        title: "Cover Image Required",
        text: "Please upload an image via ImgBB or enter a cover image URL.",
        icon: "warning",
      });
      return;
    }

    setIsUpdating(true);

    const updatedData = {
      email,
      name,
      title,
      photo: photoUrl,
      rating,
      date,
      description,
      genres,
    };

    fetch(`https://game-review-server.vercel.app/reviews/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsUpdating(false);
        if (data.modifiedCount > 0 || data.matchedCount > 0) {
          Swal.fire({
            title: "Review Updated! ✨",
            text: "Your review changes have been saved successfully.",
            icon: "success",
            confirmButtonColor: "#8b5cf6",
          });
          navigate("/myreviews");
        }
      })
      .catch((err) => {
        setIsUpdating(false);
        console.error("Failed to update review:", err);
        Swal.fire({
          title: "Error",
          text: "Failed to save review changes. Please try again.",
          icon: "error",
        });
      });
  };

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Update Review | Game Reviews</title>
      </Helmet>

      {/* Back Button */}
      <div className="mb-6">
        <Link
          to="/myreviews"
          className="inline-flex items-center gap-2 text-sm font-semibold text-base-content/70 hover:text-primary transition-colors"
        >
          <FaArrowLeft />
          <span>Back to My Reviews</span>
        </Link>
      </div>

      {/* Main Split Layout */}
      <div className="bg-base-100 border border-base-content/10 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12">
        {/* LEFT COLUMN: Live Review Card Preview */}
        <div className="lg:col-span-5 bg-base-200/70 border-b lg:border-b-0 lg:border-r border-base-content/10 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <FaEdit />
              Live Preview
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-base-content tracking-tight">
              Updated Preview
            </h2>
            <p className="text-xs sm:text-sm text-base-content/70 mt-1">
              Changes reflect live on the card as you edit the fields.
            </p>
          </div>

          {/* Interactive Card Preview */}
          <div className="group relative bg-base-100 border border-base-content/15 rounded-2xl overflow-hidden shadow-lg transition-all">
            <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900">
              <img
                src={
                  photoUrl ||
                  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80"
                }
                alt={title || "Preview"}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>

              {/* Rating Badge */}
              <div className="absolute top-3 right-3">
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-emerald-500 text-white font-extrabold text-xs shadow-md">
                  <FaStar className="text-amber-300 text-xs" />
                  <span>{rating}</span>
                  <span className="text-[10px] opacity-90">/10</span>
                </div>
              </div>

              {/* Genre Badge */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-lg bg-black/70 border border-white/20 text-white text-xs font-bold">
                  {genres || "Action"}
                </span>
              </div>

              {/* Release Date */}
              <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/15 text-white text-[11px] font-semibold">
                <FaCalendarAlt className="text-primary text-[10px]" />
                <span>{date || "2024"}</span>
              </div>
            </div>

            <div className="p-4 space-y-2 bg-base-100">
              <h3 className="font-display font-bold text-lg text-base-content line-clamp-1">
                {title || "Game Title"}
              </h3>
              <p className="text-xs text-base-content/70 line-clamp-2 leading-relaxed">
                {description || "Review description..."}
              </p>
              <div className="pt-2 border-t border-base-content/10 flex items-center justify-between text-xs text-base-content/60">
                <div className="flex items-center gap-1.5 font-medium">
                  <FaUserEdit className="text-primary" />
                  <span>{name || "Reviewer"}</span>
                </div>
                <span className="text-primary font-bold">Editing Mode</span>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/15 rounded-2xl p-4 text-xs text-base-content/80">
            <span className="font-bold text-primary block mb-1">
              Author Verification
            </span>
            <p>
              Logged in as <strong className="text-base-content">{email}</strong>. Only you can modify this review.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: The Form */}
        <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6 bg-base-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-2">
              <FaEdit />
              Edit Critique
            </div>
            <h1 className="font-display font-black text-3xl sm:text-4xl text-base-content tracking-tight">
              Update Review
            </h1>
            <p className="text-sm text-base-content/70 mt-1">
              Modify the details below and save your changes.
            </p>
          </div>

          <form onSubmit={handleUpdate} className="space-y-6">
            {/* 1. Author Info (Read-only) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-base-200/60 p-3.5 rounded-2xl border border-base-content/10">
              <div>
                <label className="text-[11px] font-bold text-base-content/60 uppercase tracking-wider block mb-1">
                  Author Email
                </label>
                <input
                  type="email"
                  value={email || ""}
                  readOnly
                  className="w-full bg-base-100 border border-base-content/15 rounded-xl px-3 py-1.5 text-xs text-base-content font-medium opacity-80 cursor-not-allowed"
                />
              </div>
              <div>
                <label className="text-[11px] font-bold text-base-content/60 uppercase tracking-wider block mb-1">
                  Author Name
                </label>
                <input
                  type="text"
                  value={name || ""}
                  readOnly
                  className="w-full bg-base-100 border border-base-content/15 rounded-xl px-3 py-1.5 text-xs text-base-content font-medium opacity-80 cursor-not-allowed"
                />
              </div>
            </div>

            {/* 2. Game Title */}
            <div>
              <label
                htmlFor="update-title"
                className="text-xs font-bold text-base-content/80 uppercase tracking-wider block mb-1.5"
              >
                Game Title *
              </label>
              <input
                type="text"
                id="update-title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full bg-base-200 border border-base-content/15 rounded-xl px-4 py-2.5 text-sm text-base-content focus:outline-none focus:border-primary font-medium"
              />
            </div>

            {/* 3. Genre, Release Year & Rating Slider */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="update-genres"
                  className="text-xs font-bold text-base-content/80 uppercase tracking-wider block mb-1.5"
                >
                  Genre *
                </label>
                <select
                  id="update-genres"
                  name="genres"
                  value={genres}
                  onChange={(e) => setGenres(e.target.value)}
                  className="select select-bordered w-full bg-base-200 border-base-content/15 rounded-xl text-sm text-base-content focus:border-primary"
                >
                  {genresList.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="update-date"
                  className="text-xs font-bold text-base-content/80 uppercase tracking-wider block mb-1.5"
                >
                  Release Year *
                </label>
                <input
                  type="text"
                  id="update-date"
                  name="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full bg-base-200 border border-base-content/15 rounded-xl px-3.5 py-2.5 text-sm text-base-content focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label
                    htmlFor="update-rating"
                    className="text-xs font-bold text-base-content/80 uppercase tracking-wider"
                  >
                    Score (1-10) *
                  </label>
                  <span className="font-extrabold text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-md flex items-center gap-1">
                    <FaStar className="text-amber-400 text-xs" /> {rating}/10
                  </span>
                </div>
                <input
                  type="range"
                  id="update-rating"
                  name="rating"
                  min="1"
                  max="10"
                  step="0.5"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  className="range range-primary range-sm mt-1"
                />
              </div>
            </div>

            {/* 4. Description */}
            <div>
              <label
                htmlFor="update-description"
                className="text-xs font-bold text-base-content/80 uppercase tracking-wider block mb-1.5"
              >
                Review Critique & Verdict *
              </label>
              <textarea
                id="update-description"
                name="description"
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="w-full bg-base-200 border border-base-content/15 rounded-2xl p-4 text-sm text-base-content focus:outline-none focus:border-primary leading-relaxed"
              ></textarea>
            </div>

            {/* 5. IMAGE UPLOAD SECTION (KEPT AT THE END AS REQUESTED) */}
            <div className="bg-base-200/60 p-5 rounded-2xl border border-base-content/10 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-base-content uppercase tracking-wider block">
                    Game Cover Image (ImgBB Upload) *
                  </span>
                  <span className="text-[11px] text-base-content/60">
                    Upload new image via ImgBB or keep/edit existing URL
                  </span>
                </div>

                {/* Upload Mode Switcher */}
                <div className="flex items-center gap-1 bg-base-300 p-1 rounded-xl text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => setUploadMode("file")}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      uploadMode === "file"
                        ? "bg-primary text-white shadow-sm"
                        : "text-base-content/70 hover:text-base-content"
                    }`}
                  >
                    Upload File
                  </button>
                  <button
                    type="button"
                    onClick={() => setUploadMode("url")}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      uploadMode === "url"
                        ? "bg-primary text-white shadow-sm"
                        : "text-base-content/70 hover:text-base-content"
                    }`}
                  >
                    Paste URL
                  </button>
                </div>
              </div>

              {/* Mode 1: File Upload to ImgBB */}
              {uploadMode === "file" ? (
                <div className="space-y-3">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-primary/40 hover:border-primary rounded-2xl cursor-pointer bg-base-100 hover:bg-base-200/50 transition-all p-4 text-center group">
                    <div className="flex flex-col items-center justify-center space-y-2">
                      {isUploading ? (
                        <div className="flex flex-col items-center gap-2 text-primary">
                          <FaSpinner className="animate-spin text-2xl" />
                          <span className="text-xs font-bold">
                            Uploading image to ImgBB...
                          </span>
                        </div>
                      ) : uploadSuccess ? (
                        <div className="flex flex-col items-center gap-1.5 text-success">
                          <FaCheckCircle className="text-3xl" />
                          <span className="text-xs font-bold">
                            New image uploaded successfully!
                          </span>
                        </div>
                      ) : (
                        <>
                          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                            <FaCloudUploadAlt className="text-2xl" />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-base-content block">
                              Click to upload new cover from device
                            </span>
                            <span className="text-[10px] text-base-content/60">
                              Uploads directly to ImgBB API
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      disabled={isUploading}
                      className="hidden"
                    />
                  </label>

                  {photoUrl && (
                    <div className="flex items-center gap-3 bg-base-100 p-2 rounded-xl border border-base-content/10 text-xs">
                      <img
                        src={photoUrl}
                        alt="Preview"
                        className="w-10 h-10 object-cover rounded-lg shrink-0"
                      />
                      <span className="text-base-content/70 truncate flex-1 font-mono text-[11px]">
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
                <div className="space-y-2">
                  <div className="relative">
                    <FaLink className="absolute left-3.5 top-3.5 text-base-content/40 text-sm" />
                    <input
                      type="url"
                      value={photoUrl}
                      onChange={(e) => setPhotoUrl(e.target.value)}
                      placeholder="https://images.unsplash.com/..."
                      className="w-full pl-10 pr-4 py-2.5 bg-base-100 border border-base-content/15 rounded-xl text-sm text-base-content focus:outline-none focus:border-primary font-mono text-xs"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isUpdating || isUploading}
                className="btn btn-primary w-full text-white font-bold text-base rounded-2xl shadow-lg hover:shadow-glow-primary transition-all py-3 flex items-center justify-center gap-2"
              >
                <FaGamepad className="text-xl" />
                <span>
                  {isUpdating ? "Saving Changes..." : "Save Review Changes"}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePages;
