import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white min-h-screen flex flex-col items-center justify-center px-4 py-12 space-y-6">
      <h1 className="text-4xl md:text-5xl font-semibold text-center tracking-tight drop-shadow-lg animate-fade-in-up">
        GitHub User Search
      </h1>
      <p className="text-base md:text-lg text-gray-300 text-center max-w-xl animate-fade-in-up delay-100">
        Instantly search for any GitHub user and explore their profile,
        repositories, and more.
      </p>

      <div className="w-full max-w-md animate-fade-in-up delay-200">
        <SearchBar />
      </div>
    </section>
  );
}
