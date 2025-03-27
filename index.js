require("dotenv").config();
const express = require("express");
const cors = require("./middleware/cors.middleware");
const json = require("./middleware/json.middleware");

const app = express();

app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  res.status(200).json({ status: "success", message: "Ok." });
});

app.listen(8080, () => {
  console.log("listening...");
});
