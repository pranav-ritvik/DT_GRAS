// src/components/FloorSelector.js
import React from "react";

const FloorSelector = ({ floor, setFloor, acFilter, setAcFilter }) => {
  return (
    <div>
      <label htmlFor="floor">Choose a floor:</label>
      <select
        id="floor"
        value={floor}
        onChange={(e) => setFloor(e.target.value)}
      >
        <option value="">Select Floor</option>
        {[1, 2, 3, 4, 5, 6].map((floor) => (
          <option key={floor} value={floor}>
            Floor {floor}
          </option>
        ))}
      </select>
      <br />
      <label htmlFor="ac">AC/Non-AC:</label>
      <select
        id="ac"
        value={acFilter}
        onChange={(e) => setAcFilter(e.target.value)}
      >
        <option value="">Select AC/Non-AC</option>
        <option value="AC">AC</option>
        <option value="Non-AC">Non-AC</option>
      </select>
    </div>
  );
};

export default FloorSelector;
