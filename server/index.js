const fs = require("fs");
const express = require("express");
const app = express();
const csv = require("csvtojson");
const request = require("request");
const moment = require("moment");

const getDate = () => {
  const date = new Date();

  const formattedDate = moment(date)
    .subtract(1, "days")
    .format("M/D/YY");

  return `${formattedDate}`;
};

async function getData() {
  csv()
    .fromStream(
      request.get(
        "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv"
      )
    )
    .then(json => formatData(json))
    .then(data => console.log(data));
}

function formatData(data) {
  const today = data.map(node => ({
    country: node["Country/Region"],
    lat: node.Lat,
    long: node.Long,
    total: node[getDate()]
  }));
  return today[0];
}

getData();

app.get("/", (req, res) => {});

app.listen(3000, () => console.log("Blasting off on port 3000"));
