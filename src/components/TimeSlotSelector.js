// src/components/TimeSlotSelector.js
import React from "react";

const TimeSlotSelector = ({ timeSlot, setTimeSlot }) => {
  return (
    <div>
      <label htmlFor="timeSlot">Choose a time slot:</label>
      <select
        id="timeSlot"
        value={timeSlot}
        onChange={(e) => setTimeSlot(e.target.value)}
      >
        <option value="">Select Time Slot</option>
        {[
          "8am - 9am",
          "9am - 10am",
          "10am - 11am",
          "11am - 12pm",
          "12pm - 1pm",
          "1pm - 2pm",
          "2pm - 3pm",
          "3pm - 4pm",
        ].map((slot, index) => (
          <option key={index} value={slot}>
            {slot}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimeSlotSelector;
