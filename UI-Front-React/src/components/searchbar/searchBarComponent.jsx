import './searchBarComponentStyling.css';
import React from 'react';
import scrapeWebsite from '../../services/scraperService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchBar({ onSearch }) {

  const handleSearch = async () => {
    try {
      const result = await scrapeWebsite();
      onSearch(result);
    } catch (err) {
      console.error('Error fetching data:', err);
      onSearch(null);
    }
  };

  return (
    <div className="search-bar">
      <button onClick={handleSearch}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
      <input 
      type="text" readOnly
      placeholder="https://wsa-test.vercel.app" 
      className="search-input" />
    </div>
  );
}

export default SearchBar;
