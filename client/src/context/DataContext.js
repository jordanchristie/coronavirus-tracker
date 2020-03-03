import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const initialContext = { data: {}, total: {} };

export const DataContext = createContext(initialContext);

export const DataContextProvider = props => {
  const [data, setData] = useState([]);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function getData() {
      const api = await axios.get("http://localhost:5000/data");
      const res = await api.data;
      setData(res);
    }

    getData();
  }, []);

  useEffect(() => {
    let totalConfirmed = 0;
    data.forEach(el => (totalConfirmed += parseInt(el.total)));

    setTotal(totalConfirmed);
  }, [data]);

  return (
    <DataContext.Provider value={{ data, total }}>
      {props.children}
    </DataContext.Provider>
  );
};
