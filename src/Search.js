import React from 'react';
import SearchIcon from "@mui/icons-material/Search";
import './Header.css'
function Search() {
  return (
    <div className="header_search">
        <input className="header_searching_input" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
  )
}

export default Search