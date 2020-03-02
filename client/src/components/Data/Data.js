import React from "react";

const Data = ({ data }) => {
  return (
    <div>
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
