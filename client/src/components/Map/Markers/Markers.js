import React from "react";
import { Marker } from "react-simple-maps";

const Markers = ({ data }) => {
  console.log(data);
  return (
    <>
      {data.map((place, id) => {
        return (
          <Marker coordinates={[place.long, place.lat]} key={id}>
            <circle
              r={8}
              fill="#F00"
              stroke="FFF"
              strokeWidth={2}
              cx={0}
              cy={0}
            />
          </Marker>
        );
      })}
    </>
  );
};

export default Markers;
