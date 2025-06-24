"use client";
import UserProfile from "./UserProfile";
import FancyLoader from "./FancyLoader";
import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";

export default function SearchBar() {
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setSearch(e.target.value);

  const fetchUser = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${search}`);
      if (!response.ok) throw new Error("User not found");

      setUser(await response.json());
      setSearch("");
    } catch (err) {
      console.error(err); // Log the error for debugging
      setError("User not found. Please try again.");
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search.trim()) return;

    setUser(null);
    setError(null);
    fetchUser();
  };

  return (
    <>
      <form
        onSubmit={handleSearchSubmit}
        className="flex flex-col sm:flex-row w-full max-w-md mx-auto mt-4 rounded-lg overflow-hidden shadow-lg bg-white/5 backdrop-blur-sm ring-1 ring-white/10 focus-within:ring-2 focus-within:ring-blue-500 transition duration-300"
      >
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Enter GitHub username..."
          className="w-full sm:flex-1 px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full sm:w-auto px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-300"
        >
          Search
        </button>
      </form>

      {error && (
        <div className="mt-4 text-red-500 text-center">
          <ErrorMessage error={error} />
        </div>
      )}

      {isLoading && (
        <div className="mt-6 flex justify-center">
          <FancyLoader />
        </div>
      )}

      {user && <UserProfile user={user} />}
    </>
  );
}
