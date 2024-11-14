// const express = require("express");

// const mongoose = require("mongoose");
// require("dotenv").config();
import express from "express";

const app = express();
import mongoose from "mongoose";
import routes from "./routes/routes.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

mongoose.connect(process.env.mongo_uri);

mongoose.connection
  .once("open", () => console.log("Connected"))
  .on("error", (error) => {
    console.log("MongoDB Error: " + error);
  });

app.use(express.json());
app.use(cors());
app.use("/images", express.static("images"));
routes(app);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started on port 3000");
});
