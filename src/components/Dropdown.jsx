import React from "react";

function Dropdown({ dates, selectedDate, onDateChange }) {
  return (
    <select value={selectedDate} onChange={(e) => onDateChange(e.target.value)}>
      {dates.map((date) => (
        <option key={date} value={date}>
          {date}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
