import React from "react";
import { FaGamepad } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="flex flex-col min-h-[60vh] justify-center items-center gap-4 bg-base-200 text-base-content">
      <div className="relative flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <FaGamepad className="text-xl text-primary absolute" />
      </div>
      <p className="text-xs font-bold uppercase tracking-widest text-base-content/60 animate-pulse">
        Syncing Game Data...
      </p>
    </div>
  );
};

export default Loading;