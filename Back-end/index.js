const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.listen(4000, () => {
  console.log("Server started on PORT 4000");
});

mongoose
  .connect("mongodb://localhost:27017/jwt", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection sucessfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());