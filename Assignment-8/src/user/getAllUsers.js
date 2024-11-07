const User = require("../model/user");
const getAllUsers = async (req, res) => {
  const users = await User.find({}).select("email fullName profilePic");
  res.status(200).json(users);
};

module.exports = getAllUsers;
