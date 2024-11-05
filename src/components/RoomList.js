// src/components/RoomList.js
import React from "react";

const RoomList = ({ availableRooms }) => {
  return (
    <div>
      <h3>Available Classrooms</h3>
      {availableRooms.length > 0 ? (
        <ul>
          {availableRooms.map((room, index) => (
            <li key={index}>{room}</li>
          ))}
        </ul>
      ) : (
        <p>No classrooms available for the selected time.</p>
      )}
    </div>
  );
};

export default RoomList;
