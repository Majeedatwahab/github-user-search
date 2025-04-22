"use client";
import { AlertTriangle } from "lucide-react";

export default function ErrorMessage({ error }: { error: string }) {
  if (!error) return null;

  return (
    <div className="mt-6 flex items-center justify-center">
      <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 py-4 rounded-xl shadow-lg animate-fade-in max-w-md w-full">
        <AlertTriangle className="w-6 h-6 text-red-500" />
        <p className="text-sm font-medium">{error}</p>
      </div>
    </div>
  );
}
