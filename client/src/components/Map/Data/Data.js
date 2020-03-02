import React from "react";

const Data = data => {
  return (
    <div>
      {data.map(place => (
        <>
          <h1>
            {place.province ? place.province : ""}, {place.country}
          </h1>
        </>
      ))}
    </div>
  );
};

export default Data;
