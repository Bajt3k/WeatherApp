function Search({ city, setCity, handleSearch }) {
  return (
    <div className="flex w-full gap-3">
      <form onSubmit={(e) => {handleSearch(e)}} className="flex w-full gap-3">
        <input
          className="flex-1 px-4 py-3 rounded-xl bg-white/90 text-slate-900 outline-none focus:ring-4 focus:ring-blue-400 transition"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search for a city..."
        />

        <button
          className="px-5 py-3 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 active:scale-95 transition shadow-lg"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
