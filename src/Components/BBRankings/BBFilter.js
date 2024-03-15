import React, { useState } from 'react';
import '../../Styles/BBRankings/BBFilter.css'; // Make sure to adjust the path based on your project structure


const BBFilter = ({ data, onFilterChange }) => {
  const [nameFilter, setNameFilter] = useState('');
  const [positionFilter, setPositionFilter] = useState('');

  const handleNameFilterChange = (e) => {
    setNameFilter(e.target.value);
    onFilterChange({ name: e.target.value, position: positionFilter });
  };

  const handlePositionFilterChange = (e) => {
    setPositionFilter(e.target.value);
    onFilterChange({ name: nameFilter, position: e.target.value });
  };

  return (
    <div className="filters">
      <label>
        Player Name:
        <input type="text" placeholder= "Enter Player Name" value={nameFilter} onChange={handleNameFilterChange} />
      </label>
      <label>
        Position: 
        <input type="text" placeholder="Enter Pos Abbreviation" value={positionFilter} onChange={handlePositionFilterChange} />
      </label>
    </div>
  );
};

export default BBFilter;
