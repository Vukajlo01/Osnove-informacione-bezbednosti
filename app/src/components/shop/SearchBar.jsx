import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };


  return (
    <div className="flex items-center justify-center mb-8">
      <div className="max-w-3xl w-full">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full p-2 bg-white border-primary-800 dark:bg-slate-700 text-black dark:text-white rounded-lg shadow-xl focus:outline-none"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>      
    </div>
  );
};

export default SearchBar;