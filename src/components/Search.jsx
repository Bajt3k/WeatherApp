function Search({ city, setCity,handleSearch }) {
  return (
    <div className="flex gap-3">
      <input
        className="px-4 py-2 rounded-lg outline-none"
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search for a city..."
      /> 

      <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
export default Search;
