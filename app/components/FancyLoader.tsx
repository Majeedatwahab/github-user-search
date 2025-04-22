import React from "react";

export default function FancyLoader() {
  return (
    <div className="relative w-10 h-10">
      <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 blur-xl animate-ping" />

      <div className="w-full h-full border-4 border-t-transparent border-blue-500 rounded-full animate-spin shadow-lg shadow-blue-400 backdrop-blur-sm bg-white/10" />
    </div>
  );
}
