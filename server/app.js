const dbPool = require("./db");
const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  const origin = req.get("origin");

  res.header("Access-Control-Allow-Origin", origin);
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma"
  );

  if (req.method === "OPTIONS") {
    res.sendStatus(204);
  } else {
    next();
  }
});

app.get("/", async (req, res) => {
  const rows = await dbPool.query("SELECT * FROM spaceData");
  res.status(200);
  res.send({
    result: JSON.stringify(rows),
  });
});

app.get("/capsules", async (req, res) => {
  https
    .get("https://api.spacexdata.com/v3/capsules", (resp) => {
      let data = "";

      // A chunk of data has been recieved.
      resp.on("data", (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on("end", () => {
        res.send(JSON.parse(data));
      });
    })
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });
});

app.listen("4000");
console.log(
  `Listening on port: 4000, wait for the development server to be up...`
);
