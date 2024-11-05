import React, { useState } from "react";
import { timetable } from "./data";
import gitamLogo from "./GITAM-logo.jpg";
import "./App.css"; // Import the CSS file for styling

const App = () => {
  const [floor, setFloor] = useState("1");
  const [timeSlot, setTimeSlot] = useState("8am - 9am");
  const [acOption, setAcOption] = useState("AC");
  const [availableRooms, setAvailableRooms] = useState([]);
  const [comments, setComments] = useState({});
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [currentComment, setCurrentComment] = useState("");

  // Fetch available rooms based on filter options
  const handleSearch = () => {
    const rooms = timetable[floor][timeSlot] || [];
    const filteredRooms = rooms.filter((room) => {
      const isACRoom = room <= parseInt(floor + "27");
      return acOption === "AC" ? isACRoom : !isACRoom;
    });
    setAvailableRooms(filteredRooms);
  };

  // Open the comment box for a selected room
  const handleRoomClick = (room) => {
    setSelectedRoom(room);
    setCurrentComment(comments[room] || "");
  };

  // Handle comment input change
  const handleCommentChange = (e) => {
    setCurrentComment(e.target.value);
  };

  // Save the comment for the selected room
  const handleSaveComment = () => {
    setComments((prevComments) => ({
      ...prevComments,
      [selectedRoom]: currentComment,
    }));
    setSelectedRoom(null); // Close the comment box
  };

  return (
    <div className="App">
      <header className="header">
        <img src={gitamLogo} alt="GITAM Logo" className="logo" />
        <h1>Classroom Availability</h1>
      </header>

      <div className="container">
        <div className="form-group">
          <label htmlFor="floor">Select Floor:</label>
          <select
            id="floor"
            value={floor}
            onChange={(e) => setFloor(e.target.value)}
          >
            <option value="1">Floor 1</option>
            <option value="2">Floor 2</option>
            <option value="3">Floor 3</option>
            <option value="4">Floor 4</option>
            <option value="5">Floor 5</option>
            <option value="6">Floor 6</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="timeSlot">Select Time Slot:</label>
          <select
            id="timeSlot"
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
          >
            <option value="8am - 9am">8am - 9am</option>
            <option value="9am - 10am">9am - 10am</option>
            <option value="10am - 11am">10am - 11am</option>
            <option value="11am - 12pm">11am - 12pm</option>
            <option value="12pm - 1pm">12pm - 1pm</option>
            <option value="1pm - 2pm">1pm - 2pm</option>
            <option value="2pm - 3pm">2pm - 3pm</option>
            <option value="3pm - 4pm">3pm - 4pm</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="acOption">AC/Non-AC:</label>
          <select
            id="acOption"
            value={acOption}
            onChange={(e) => setAcOption(e.target.value)}
          >
            <option value="AC">AC</option>
            <option value="Non-AC">Non-AC</option>
          </select>
        </div>

        <button className="search-btn" onClick={handleSearch}>
          Search for Empty Classrooms
        </button>

        <div className="result">
          <h2>Available Classrooms:</h2>
          {availableRooms.length > 0 ? (
            <ul>
              {availableRooms.map((room) => (
                <li key={room}>
                  <button onClick={() => handleRoomClick(room)}>
                    Room {room}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No rooms available</p>
          )}
        </div>

        {selectedRoom && (
          <div className="comment-box">
            <h3>Comment for Room {selectedRoom}</h3>
            <textarea
              value={currentComment}
              onChange={handleCommentChange}
              placeholder="Enter your comment here"
            />
            <button onClick={handleSaveComment} className="save-btn">
              Save Comment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
