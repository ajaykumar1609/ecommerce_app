import React, { useState } from 'react';
import './Search.css'
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Search term: ${searchTerm}`);
  };

  return (
    <form  className='form' onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit"><SearchIcon className='searchicon'/></button>
    </form>
  );
};

export default SearchBar;
