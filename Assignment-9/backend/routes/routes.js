import {
  getAllUsers,
  createUser,
  editUser,
  deleteUser,
  uploadFile,
  login,
} from "../user/index.js";

import upload from "../utils/multer.js";
export default async (app) => {
  app.get("/user/getAll", getAllUsers);

  app.post("/user/create/", createUser);

  app.put("/user/edit", editUser);

  app.delete("/user/delete", deleteUser);

  app.post("/user/uploadFile/", upload.single("file"), uploadFile);

  app.post("/user/login", login);
};
