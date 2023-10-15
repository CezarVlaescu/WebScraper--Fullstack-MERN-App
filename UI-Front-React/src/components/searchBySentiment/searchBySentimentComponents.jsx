import React, { useState } from "react";
import './searchBySentimentComponentStyle.css';

function SearchBySentiment({data, updateData}){
    const [selectedSentiment, setSelectedSentiment] = useState("");

    const handleSearchClick = async () => {
        try {
            let filteredData;
            if(selectedSentiment){
                filteredData = data.filter(article => article.sentiment === selectedSentiment)
            } else {
                filteredData = data;
            }
            updateData(filteredData);
        } catch(error) {
            console.error('Failed to fetch');
        }
    }

    return (
        <div className="sentiment-container">
            <select 
            className="sentiment-dropdown" 
            value={selectedSentiment} 
            onChange={e => setSelectedSentiment(e.target.value)}
            disabled={!data || data.length === 0}>
                <option value="">All</option>
                <option value="positive">Positive</option>
                <option value="neutral">Neutral</option>
                <option value="negative">Negative</option>
            </select>
            <button 
            className="sentiment-search-button" 
            onClick={handleSearchClick}
            disabled={!data || data.length === 0}>Search
            </button>
        </div>
    );
}

export default SearchBySentiment;