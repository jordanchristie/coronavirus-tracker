import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import styled from "styled-components";

const Data = () => {
  const { data, total } = useContext(DataContext);

  return (
    <div>
      <h1 style={{ fontSize: "48px" }}>Coronavirus Tracker</h1>
      <h2>
        <span style={{ color: "red", fontSize: "32px" }}>{total}</span>{" "}
        Confirmed Cases
      </h2>
      <DataWrapper>
        {data.map((place, id) => (
          <DataCard key={id}>
            <h1>
              {place.province ? `${place.province}, ` : ""} {place.country}
            </h1>
            <p>{place.total}</p>
          </DataCard>
        ))}
      </DataWrapper>
    </div>
  );
};

export default Data;

const DataWrapper = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 80%;
  margin: auto;
`;

const DataCard = styled.article`
  width: 30%;
  border: none;
  margin-bottom: 1rem;
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.2),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.1),
    0 16px 16px rgba(0, 0, 0, 0.05);
`;
