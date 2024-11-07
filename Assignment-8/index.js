const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.mongo_uri);

mongoose.connection
  .once("open", () => console.log("Connected"))
  .on("error", (error) => {
    console.log("MongoDB Error: " + error);
  });

app.use(express.json());

const routes = require("./src/routes/routes");

routes(app);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started on port 3000");
});
