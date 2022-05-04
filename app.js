const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const ApiModel = require("./database");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/test-round-two", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(bodyParser.urlencoded({ extends: false }));
app.use(bodyParser.json());

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "*");
//   if (res.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "*");
//     return res.status(200).json();
//   }
//   next();
// });

app.get("/", (req, res, next) => {
  res.status(200).send("Server is Working Successfully.");
});

app.post("/save-api-in-database", (req, res, next) => {
  const apimodel = new ApiModel({
    api: req.body.api,
    description: req.body.description,
    link: req.body.link,
    category: req.body.category,
  });
  apimodel
    .save()
    .then(() => {
      return res.status(200).json({
        message: "API Data Saved Successfully.",
      });
    })
    .catch((err) => {
      return res.status(500).json({
        Error: err,
      });
    });
});

app.use((req, res, next) => {
  res.status(404).send("Not Found!");
});

app.listen(4000);
