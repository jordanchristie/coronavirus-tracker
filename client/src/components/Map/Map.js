import React, { useContext } from "react";
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
    <ComposableMap
      style={{ transform: "translateY(-200px) scale(0.7)" }}
      projectionConfig={{
        scale: 190
      }}
    >
      <Graticule stroke="#F53" />
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
