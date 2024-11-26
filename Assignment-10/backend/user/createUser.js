import { hashPassword } from "../utils/bcryptutils.js";
import User from "../model/user.js";
import { validatePassword, valdiateEmail } from "../utils/validationUtils.js";

const createUser = async (req, res) => {
  const { email, password, fullName } = req.body;
  const hashedPassword = await hashPassword(password);
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
    email,
    password: hashedPassword,
    fullName,
  });
  await user.save();
  res.status(201).json(user);
};

export default createUser;
