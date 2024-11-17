import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search tasks"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
      />
    </div>
  );
};

export default SearchBar;
