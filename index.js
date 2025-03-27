const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: ["testing-20250327"] }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ status: "success", message: "Ok." });
});

app.listen(8080, () => {
  console.log("listening...");
});
