import {
  getAllUsers,
  createUser,
  editUser,
  deleteUser,
  uploadFile,
  login,
  uploadImagesData,
  getAllImages,
} from "../user/index.js";

import upload from "../utils/multer.js";
export default async (app) => {
  app.get("/user/getAll", getAllUsers);

  app.post("/user/create/", createUser);

  app.put("/user/edit", editUser);

  app.delete("/user/delete", deleteUser);

  app.post("/user/uploadFile/", upload.single("file"), uploadFile);

  app.post("/user/login", login);

  app.post("/company/upload", uploadImagesData);

  app.get("/company/getAll", getAllImages);
};
