import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule
} from "react-simple-maps";
import Markers from "./Markers/Markers";
import { DataContext } from "../../context/DataContext";

const Map = () => {
  const { data } = useContext(DataContext);
  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
  return (
    <WorldMap
      projectionConfig={{
        scale: 190
      }}
    >
      <MapGraticule stroke="#F53" />
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => (
            <Geography key={geo.rsmKey} geography={geo} stroke="#D6D6DA" />
          ))
        }
      </Geographies>
      {data && <Markers data={data} />}
    </WorldMap>
  );
};

export default Map;

const fade = keyframes`
  from {
    opacity: 0
  }
  to: {
    opacity: 1
  }
`;

const WorldMap = styled(ComposableMap)`
  animation: ${fade} 5s ease-in-out;
`;

const MapGraticule = styled(Graticule)`
  animation: ${fade} 2s ease-in-out;
`;
