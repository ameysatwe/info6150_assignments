// Company:
// Id: ObjetID,
// name: String,
// users: [User],
// address: String,
// email: String,
// profilePic: String
// accessStatus: [“APPROVED”, “REJECTED”, “PENDING”]
import mongoose from "mongoose";

const Company = mongoose.model("Company", {
  name: {
    type: String,
    required: true,
  },
  users: {
    type: Array,
    required: false,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    required: true,
  },
  accessStatus: {
    type: String,
    enum: ["APPROVED", "REJECTED", "PENDING"],
    default: "PENDING",
  },
});
