import mongoose from "mongoose";

const CompanyImages = mongoose.model(
  "CompanyImages",
  new mongoose.Schema({
    company: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    featured: {
      type: Boolean,
    },
  })
);
export default CompanyImages;
