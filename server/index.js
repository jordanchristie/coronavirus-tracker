const express = require("express");
const app = express();
const cors = require("cors");
const csv = require("csvtojson");
const request = require("request");
const moment = require("moment");

app.use(cors());

const getDate = () => {
  const date = new Date();

  const formattedDate = moment(date)
    .subtract(1, "days")
    .format("M/D/YY");

  return `${formattedDate}`;
};

async function getData() {
  const res = await csv().fromStream(
    request.get(
      "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv"
    )
  );

  const data = await formatData(res);

  return Promise.resolve(data);
}

function formatData(data) {
  const currentCount = data.map(node => ({
    province: node["Province/State"],
    country: node["Country/Region"],
    lat: node.Lat,
    long: node.Long,
    total: node[getDate()]
  }));
  return currentCount;
}

getData();

app.get("/data", async (req, res) => {
  const data = await getData();
  console.log(data);
  res.send(data);
});

app.listen(5000, () => console.log("Blasting off on port 5000"));
