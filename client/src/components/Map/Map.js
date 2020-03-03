import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import Markers from "./Markers/Markers";

const Map = ({ data }) => {
  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
  return (
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => (
            <Geography key={geo.rsmKey} geography={geo} stroke="#D6D6DA" />
          ))
        }
      </Geographies>
      {data && <Markers data={data} />}
    </ComposableMap>
  );
};

export default Map;
