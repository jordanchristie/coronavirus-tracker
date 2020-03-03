import React, { useState, useEffect } from "react";

const Data = ({ data }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totalConfirmed = 0;
    data.forEach(el => (totalConfirmed += parseInt(el.total)));

    setTotal(totalConfirmed);
  }, []);

  return (
    <div>
      <h1>Coronavirus Tracker</h1>
      <h2>{total} Confirmed Cases</h2>
      {data.map((place, id) => (
        <article key={id}>
          <h1>
            {place.province ? `${place.province}, ` : ""} {place.country}
          </h1>
          <p>{place.total}</p>
        </article>
      ))}
    </div>
  );
};

export default Data;
