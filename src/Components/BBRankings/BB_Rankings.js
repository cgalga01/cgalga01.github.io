import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import '../../Styles/BBRankings/BB_Rankings.css';
import csvFile from '../../Files/BB_Rankings_2024.csv';
import BBFilter from './BBFilter'; // Import the BBFilter component

function BB_Rankings() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]); // Store player objects directly
    const [meanColumns, setMeanColumns] = useState([
      'Z_R', 'Z_HR', 'Z_RBI', 'Z_SB', 'Z_BB', 'Z_AVG', 'Z_SLG', 'Z_K', 'Z_QS',
      'Z_W', 'Z_SV', 'Z_HLD', 'Z_ERA', 'Z_WHIP'
    ]);
    const [meanValues, setMeanValues] = useState([]);
    const [myTeam, setMyTeam] = useState([]);
  
    useEffect(() => {
      Papa.parse(csvFile, {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          setData(results.data);
          setFilteredData(results.data);
        },
        error: function (error) {
          console.error('Error parsing CSV:', error);
        },
      });
    }, []);
  
    const addToMyTeam = (player) => {
      setMyTeam((prevTeam) => [...prevTeam, player]);
    };
  
    const removeFromMyTeam = (index) => {
      const updatedMyTeam = [...myTeam];
      updatedMyTeam.splice(index, 1);
      setMyTeam(updatedMyTeam);
    };
  
    const calculateMean = (selectedPlayers, columns) => {
      const meanData = {};
    
      if (selectedPlayers.length > 0) {
        columns.forEach((column) => {
          const values = selectedPlayers
            .filter((player) => parseFloat(player[column]) || 0 !== 0) // Filter out empty values
            .map((player) => parseFloat(player[column]) || 0);
    
          const meanValue =
            values.reduce((sum, value) => sum + value, 0) / values.length;
          meanData[column] = meanValue.toFixed(2);
        });
      }
    
      return meanData;
    };
    
  
    const handleFilterChange = (filters) => {
      const filtered = data.filter((row) => {
        const nameMatch = filters.name ? row.Name.toLowerCase().includes(filters.name.toLowerCase()) : true;
        const positionMatch = filters.position ? row.POS.toLowerCase().includes(filters.position.toLowerCase()) : true;
        return nameMatch && positionMatch;
      });
  
      setFilteredData(filtered);
    };
  
    //checkbox, changes the selected players
    const handleCheckboxChange = (rowIndex) => {
        const selectedPlayer = filteredData[rowIndex];
      
        setSelectedPlayers((prevPlayers) => {
          if (prevPlayers.some((player) => player.Name === selectedPlayer.Name)) {
            // Player already selected, remove from My Team
            removeFromMyTeam(prevPlayers.findIndex((player) => player.Name === selectedPlayer.Name));
            return prevPlayers.filter((player) => player.Name !== selectedPlayer.Name);
          } else {
            // Player not selected, add to My Team
            addToMyTeam(selectedPlayer);
            return [...prevPlayers, selectedPlayer];
          }
        });
      };
      
      useEffect(() => {
        // Calculate mean when selectedPlayers state changes
        const meanData = calculateMean(selectedPlayers, meanColumns);
        setMeanValues(meanData);
      }, [selectedPlayers, meanColumns]);
      
      //Backgorund color based on value
      const getColorClassForColumnValue = (column, value) => {
        if (meanColumns.includes(column)) {
          if (value === '') {
            return 'white-bg';
          } else if (value < -3) {
            return 'bright-red-bg';
          } else if (value >= -3 && value < -1) {
            return 'mild-red-bg';
          } else if (value >= -1 && value < 1) {
            return 'white-bg';
          } else if (value >= 1 && value < 3) {
            return 'dark-green-bg';
          } else if (value >= 3) {
            return 'light-green-bg';
          }
        }
      
        // Default background color class
        return 'white-bg';
      };
      

      
    return (
      <div className="filtered">
        <h1>Fantasy Baseball Rankings</h1>
        <p>Projections from Steamer</p>
  
        {/* My Team Table */}
        <table className="table">
          <thead>
            <tr>
              <th>My Team</th>
              {meanColumns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {myTeam.map((player, index) => (
              <tr key={index}>
                <td>{player.Name}</td>
                {meanColumns.map((column) => (
                  <td
                    key={column}
                    className={getColorClassForColumnValue(column, player[column])}
                  >
                    {player[column]}
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <td>Mean</td>
              {meanColumns.map((column) => (
                <td key={column} className={getColorClassForColumnValue(column, meanValues[column])}>
                  {meanValues[column]}
                </td>
              ))}
            </tr>
          </tbody>

        </table>
  
        {/* Main Table */}
        <BBFilter data={data} onFilterChange={handleFilterChange} />
  
        <table className="table">
          <thead className="head">
            <tr>
              <th>Selected</th>
              {data.length > 0 &&
                Object.keys(data[0]).map((header) => (
                  <th key={header}>{header}</th>
                ))}
            </tr>
          </thead>
          
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedPlayers.some(player => player.Name === row.Name)}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </td>
                {Object.keys(row).map((key) => (
                  <td
                    key={key}
                    className={getColorClassForColumnValue(key, row[key])}
                  >
                    {row[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default BB_Rankings;
  