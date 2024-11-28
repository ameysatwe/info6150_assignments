import mongoose from "mongoose";

const Jobs = mongoose.model(
  "Jobs",
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    skills: {
      type: [String],
    },
  })
);
export default Jobs;
