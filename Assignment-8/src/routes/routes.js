const User = require("../model/user");
const { hashPassword, comparePassword } = require("../utils/bcryptutils");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + "." + file.mimetype.split("/")[1]
    );
  },
});
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      const err = new Error("Only .png, .jpg and .jpeg format allowed!");
      err.status = 400;
      return cb(err);
    }
  },
  preservePath: true,
});

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

  app.post("/user/uploadFile", upload.single("file"), async (req, res) => {
    res.status(200).json(req.file);
  });
};
