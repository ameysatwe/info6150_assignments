const { hashPassword } = require("../utils/bcryptutils");
const User = require("../model/user");
const { validatePassword, valdiateEmail } = require("../utils/validationUtils");

const createUser = async (req, res) => {
  const { email, password, fullName } = req.body;
  let hashedPassword = await hashPassword(password);
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(409).json({ error: "User already exists" });
  }

  if (!/^[a-zA-Z0-9 ]*$/.test(fullName)) {
    return res.status(400).json({ error: "Invalid name" });
  }

  let error = valdiateEmail(email);
  if (error) {
    return res.status(400).json({ error });
  }

  error = validatePassword(password);
  if (error) {
    return res.status(400).json({ error });
  }

  const user = new User({
    email: email,
    password: hashedPassword,
    fullName: fullName,
  });
  await user.save();
  res.status(201).json(user);
};

module.exports = createUser;
