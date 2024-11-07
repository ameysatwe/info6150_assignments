const {
  getAllUsers,
  createUser,
  editUser,
  deleteUser,
  uploadFile,
} = require("../user");
const upload = require("../utils/multer");
module.exports = async (app) => {
  app.get("/user/getAll", getAllUsers);

  app.post("/user/create/", createUser);

  app.put("/user/edit", editUser);

  app.delete("/user/delete", deleteUser);

  app.post("/user/uploadFile/", upload.single("file"), uploadFile);
};
