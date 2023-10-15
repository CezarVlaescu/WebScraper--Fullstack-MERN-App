import './resultsComponentStyling.css';
import React from 'react';

function Results({ data }) {
  return (
    <div className="results-container">
      {data && (
        <div className="data-display">
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Results;

