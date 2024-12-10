import React from "react";

function EmptyState({ date }) {
  return (
    <div className="empty-state">
      <p>No strategies available for {date}</p>
    </div>
  );
}

export default EmptyState;
