import User from "../../model/user.js";
import { comparePassword } from "../../utils/bcryptutils.js";

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  const isPasswordValid = await comparePassword(password, user.password);
  if (isPasswordValid && user) {
    let responseUser = await User.findOne({ email }, { password: 0 });
    return res.status(200).json({ responseUser, message: "Login successful" });
  } else {
    return res.status(403).json({ error: "Invalid password" });
  }
};

export default login;
