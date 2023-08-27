import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import '../../Styles/FFRankings/QB_Rankings.css';
import csvFile from '../../Files/QB_ranking.csv';
import FilterBar from './DataFilter'; // Import the FilterBar component

function QB_Rankings() {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({ Player: '' }); // Used to set the filters in the table

  // uses papaparse to read in CSV file
  useEffect(() => {
    Papa.parse(csvFile, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        setData(results.data);
      },
      error: function (error) {
        console.error('Error parsing CSV:', error);
      },
    });
  }, []);

  // Update the filters
  const handleFilterChange = (column, value) => {
    setFilters({ ...filters, [column]: value });
  };

  // Filter data based on text box input
  const filterData = () => {
    return data.filter((row) => {
      // Checks if each column contains the filter value (case insensitive).
      for (const key in filters) {
        if (filters[key] && !row[key].toLowerCase().includes(filters[key].toLowerCase())) {
          return false;
        }
      }
      return true;
    });
  };

  const filteredData = filterData();

  return (
    <div className="filtered">
      <h1>QB Rankings</h1>
      <p>Rankings were originally taken from rotoballer, but have been changed and updated, with new stats added</p>

      {/* Render the FilterBar component and pass the handleFilterChange function */}
      <FilterBar onFilterChange={handleFilterChange} />

      <table className="table">
        <thead className="head">
          <tr>
            {data.length > 0 &&
              Object.keys(data[0]).map((header) => (
                <th key={header}>{header}</th>
              ))}
          </tr>
        </thead>

        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index}>
              {Object.keys(row).map((key) => (
                <td key={key} className={key === 'Tier' ? `tier${row[key]}` : ''}>
                  {key === 'Link' ? (
                    <a href={row[key]} target="_blank" rel="noopener noreferrer">
                      Player Page
                    </a>
                  ) : (
                    row[key]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default QB_Rankings;
