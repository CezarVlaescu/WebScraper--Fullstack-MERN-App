import React, { useState } from 'react';
import SearchBar from './components/searchbar/searchBarComponent';
import Results from './components/results/resultsComponent';
import ExportButton from './components/exportdata/exportDataComponent';
import './App.css';
import SearchBySentiment from './components/searchBySentiment/searchBySentimentComponents';

function App() {
  const [data, setData] = useState(null);

  return (
    <div className="container">
      <div className="header">WSA Web Scraper</div>
      <SearchBar onSearch={setData} />
      <div className="actions-container">
        <SearchBySentiment data={data} updateData={setData} />
        <ExportButton data={data} />
      </div>
      <div className="results">Results</div>
      <Results data={data} />
    </div>
  );
}

export default App;

