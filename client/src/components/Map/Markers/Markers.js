import React from "react";
import { Marker } from "react-simple-maps";
import styled, { keyframes } from "styled-components";

const Markers = ({ data }) => (
  <>
    {data.map((place, id) => {
      return (
        <MapMarker coordinates={[place.long, place.lat]} index={id} key={id}>
          <circle
            r={4}
            fill="#F00"
            stroke="FFF"
            strokeWidth={2}
            cx={0}
            cy={0}
          />
        </MapMarker>
      );
    })}
  </>
);

export default Markers;

const pop = keyframes`
    0% {
      opacity: 0;
      transform: scale(0);
    }
    50% {
      opacity: 1;
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
`;

const MapMarker = styled(Marker)`
  animation: ${pop} 0.3s ease 5s;
  animation-delay: ${props => props.index * 100};
`;
