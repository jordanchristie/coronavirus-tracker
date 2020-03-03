import React, { useContext } from "react";
import Map from "./components/Map/Map";
import Data from "./components/Data/Data";
import "./App.css";
import { DataContextProvider, DataContext } from "./context/DataContext";

function App() {
  const { data } = useContext(DataContext);
  return (
    <DataContextProvider>
      <div className="App">
        {data ? (
          <main>
            <Map />
            <Data />
          </main>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </DataContextProvider>
  );
}

export default App;
