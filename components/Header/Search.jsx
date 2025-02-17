// Search.js
import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const searchStyles = {
    container:
      "flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-5 py-2 w-[500px]",
    input: "bg-[#1f1f1f] text-[#f5f5f5] outline-none",
  };

  return (
    <div className={searchStyles.container}>
      <FaSearch className="text-[#f5f5f5]" />
      <input type="text" placeholder="Search" className={searchStyles.input} />
    </div>
  );
};

export default Search;
