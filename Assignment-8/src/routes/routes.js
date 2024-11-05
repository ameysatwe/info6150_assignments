const User = require("../model/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = async (app) => {
  app.get("/user/getAll", async (req, res) => {
    const users = await User.find({});
    res.status(200).json(users);
  });

  app.post("/user/create/", async (req, res) => {
    const { email, password } = req.body;
    let hashedPassword;
    bcrypt.hash(password, saltRounds, function (err, hash) {
      hashedPassword = hash;
    });
    const user = new User({ email: email, password: `${hashedPassword}` });
    await user.save();
    res.status(200).json(user);
  });

  app.put("/user/edit", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    user.password = password;
    await user.save();
    res.status(200).json(user);
  });

  app.delete("/user/delete", async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    await user.deleteOne();
    res.status(200).json(user);
  });
};
