import User from "../model/user.js";

const uploadFile = async (req, res) => {
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
    return res
      .status(200)
      .json({ message: "File uploaded successfully", path: req.file.path });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "Error uploading file" });
  }
};

export default uploadFile;
