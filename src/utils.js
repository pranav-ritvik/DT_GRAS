// src/utils.js
import { timetable } from "./data"; // Import timetable from data.js

export function getAvailableRooms(floor, timeSlot, isAC) {
  const rooms = timetable[floor][timeSlot] || [];

  // Filter rooms based on AC or Non-AC
  return rooms.filter((room) => {
    if (isAC === "AC") {
      return room >= floor * 100 + 1 && room <= floor * 100 + 27; // AC rooms (e.g., 101-127)
    } else if (isAC === "Non-AC") {
      return room >= floor * 100 + 28 && room <= floor * 100 + 37; // Non-AC rooms (e.g., 128-137)
    }
    return false;
  });
}
