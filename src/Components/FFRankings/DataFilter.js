// DataFilter.js
import React, { useState } from 'react';
import '../../Styles/FFRankings/DataFilter.css'

function DataFilter({ onFilterChange }) {
  const [playerFilter, setPlayerFilter] = useState(''); // Used to set the filter for the "Player" column

  // Update the player filter and call the onFilterChange function
  const handlePlayerFilterChange = (value) => {
    setPlayerFilter(value);
    onFilterChange('Player', value); // Call the onFilterChange function with column and value
  };

  return (
    <div className="filter-fields">
      {/* Input Box */}
      <input 
        className="input"
        type="text"
        placeholder="Search Player"
        value={playerFilter}
        onChange={(e) => handlePlayerFilterChange(e.target.value)}
      />
    </div>
  );
}

export default DataFilter;
