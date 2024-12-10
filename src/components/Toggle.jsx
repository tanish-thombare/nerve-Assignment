import React from "react";

function Toggle({ views, onToggle }) {
  return (
    <div className="toggle">
      {views.map((view) => (
        <button key={view} onClick={() => onToggle(view)}>
          {view}
        </button>
      ))}
    </div>
  );
}

export default Toggle;
