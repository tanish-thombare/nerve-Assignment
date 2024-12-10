import React from "react";

function Cards({ strategies }) {
  const strategyCounts = strategies.reduce((acc, strategy) => {
    acc[strategy] = (acc[strategy] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="cards">
      {Object.entries(strategyCounts).map(([name, count]) => (
        <div className="card" key={name}>
          <h2>{name}</h2>
          <p>
            {count} {count === 1 ? "Strategy" : "Strategies"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
