const User = require("../model/user");
const { hashPassword, comparePassword } = require("../utils/bcryptutils");
const upload = require("../utils/multer");

module.exports = async (app) => {
  app.get("/user/getAll", async (req, res) => {
    const users = await User.find({}).select("email fullName profilePic");
    res.status(200).json(users);
  });

  app.post("/user/create/", async (req, res) => {
    const { email, password, fullName } = req.body;
    let hashedPassword = await hashPassword(password);
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(409).json({ error: "User already exists" });
    }

    if (!/^[a-zA-Z0-9 ]*$/.test(fullName)) {
      return res.status(400).json({ error: "Invalid name" });
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    if (password.length < 8) {
      return res.status(400).json({
        error: "Password must be at least 8 characters long",
      });
    }

    if (!/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-])/.test(password)) {
      return res.status(400).json({
        error:
          "Password must contain atleast 1 uppercase, 1 lowercase, a digit and a special character.",
      });
    }

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
    if (!user) {
      res.status(404).json({ error: "User not found" });
    }
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      res.status(403).json({ error: "Invalid password" });
    }
    await user.deleteOne();
    res.status(200).json(user);
  });

  app.post("/user/uploadFile/", upload.single("file"), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      user.profilePic = req.file.path;
      await user.save();
      return res.status(200).json({ message: "File uploaded successfully" });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: "Error uploading file" });
    }
  });
};
