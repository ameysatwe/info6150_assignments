// import User from "../models/user.js";
import User from "../model/user.js";

const getAllUsers = async (req, res) => {
  const users = await User.find({}).select("email fullName profilePic");
  res.status(200).json(users);
};

export default getAllUsers;
