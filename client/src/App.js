import React, { useState, useEffect } from "react";
import axios from "axios";
import Map from "./components/Map/Map";
import Data from "./components/Data/Data";
import "./App.css";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function getData() {
      const api = await axios.get("http://localhost:5000/data");

      const res = await api.data;
      console.log(res);
      setData(res);
    }

    getData();
  }, []);

  return (
    <div className="App">
      {data.length ? (
        <main>
          <Map data={data} />
          <Data data={data} />
        </main>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default App;
