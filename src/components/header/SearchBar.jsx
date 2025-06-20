import React, { useRef, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ autoFocusBar }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  // Autofocus input
  useEffect(() => {
    if (autoFocusBar && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocusBar]);

  return (
    <div className="w-full max-w-sm mx-auto relative z-50">
      {/* Search input */}
      <div className="flex border border-gray-300  overflow-hidden h-12 bg-white shadow focus-within:ring-1 focus-within:ring-[#535255] transition-all duration-200">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search for products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none bg-white"
        />
        <button
          className="bg-[#A23CFE] w-12 flex items-center justify-center hover:bg-[#8e2de2] transition-colors duration-200"
          tabIndex={-1}
        >
          <FaSearch className="text-white text-lg" />
        </button>
      </div>
    </div>
  );
}
