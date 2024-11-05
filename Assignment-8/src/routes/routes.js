const User = require("../model/user");
const { hashPassword, comparePassword } = require("../utils/bcryptutils");

module.exports = async (app) => {
  app.get("/user/getAll", async (req, res) => {
    const users = await User.find({}).select("email fullName");
    res.status(200).json(users);
  });

  app.post("/user/create/", async (req, res) => {
    const { email, password, fullName } = req.body;
    let hashedPassword = await hashPassword(password);
    const user = new User({
      email: email,
      password: hashedPassword,
      fullName: fullName,
    });
    await user.save();
    res.status(201).json(user);
  });

  app.put("/user/edit", async (req, res) => {
    const { email, password, fullName, updatedPassword } = req.body;
    const user = await User.findOne({ email });
    const isPasswordValid = await comparePassword(password, user.password);
    if (isPasswordValid && user) {
      user.fullName = fullName;
      user.password = await hashPassword(updatedPassword);
      await user.save();
    } else {
      res.status(403).json({ error: "Invalid password" });
    }
    res.status(200).json(user);
  });

  app.delete("/user/delete", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      res.status(403).json({ error: "Invalid password" });
    }
    await user.deleteOne();
    res.status(200).json(user);
  });
};
