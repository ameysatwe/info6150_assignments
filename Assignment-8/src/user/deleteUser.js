const User = require("../model/user");
const { comparePassword } = require("../utils/bcryptutils");

const deleteUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(403).json({ error: "Invalid password" });
    }
    await user.deleteOne();
    return res.status(200).json({ user, message: "User deleted successfully" });
  } catch (err) {
    return res.status(500).json({ error: "Error deleting user" });
  }
};

module.exports = deleteUser;
