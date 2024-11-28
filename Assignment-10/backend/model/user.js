import mongoose from "mongoose";

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
    },
    type: {
      type: String,
      enum: ["employee", "admin"],
    },
  })
);
export default User;
