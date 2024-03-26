import React, { useState } from "react";

const SearchBar = (props) => {
    const [searchInput, setSearchInput] = useState("");

    const handleSearch = (event) => {
        event.preventDefault();
        props.onSearch(searchInput);
    }
    return (
        <form onSubmit={handleSearch}>
            <input type="text" value={searchInput} onChange={(event) => setSearchInput(event.target.value)} className="search-input"/>
            <button type="submit" className="search-btn">Search</button>
        </form>
    );
}

export default SearchBar;