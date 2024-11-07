const { hashPassword, comparePassword } = require("../utils/bcryptutils");
const User = require("../model/user");
const { validatePassword, valdiateEmail } = require("../utils/validationUtils");

const editUser = async (req, res) => {
  const { email, password, fullName, updatedPassword } = req.body;
  const user = await User.findOne({ email });
  const isPasswordValid = await comparePassword(password, user.password);
  if (isPasswordValid && user) {
    user.fullName = fullName;

    const error = validatePassword(updatedPassword);
    if (error) {
      return res.status(400).json({ error });
    }

    user.password = await hashPassword(updatedPassword);
    await user.save();
  } else {
    return res.status(403).json({ error: "Invalid password" });
  }
  return res.status(200).json({ user, message: "User updated successfully" });
};

module.exports = editUser;
