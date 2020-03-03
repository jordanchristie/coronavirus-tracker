import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const Data = () => {
  const { data, total } = useContext(DataContext);

  return (
    <div>
      <h1 style={{ fontSize: "48px" }}>Coronavirus Tracker</h1>
      <h2>
        <span style={{ color: "red", fontSize: "32px" }}>{total}</span>{" "}
        Confirmed Cases
      </h2>
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
