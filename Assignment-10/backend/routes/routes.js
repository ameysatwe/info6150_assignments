import {
  getAllUsers,
  createUser,
  editUser,
  deleteUser,
  uploadFile,
  login,
  uploadImagesData,
  getAllImages,
} from "../controllers/user/index.js";

import upload from "../utils/multer.js";
import express from "express";
const userRouter = express.Router();

userRouter.get("/user/getAll", getAllUsers);

userRouter.post("/user/create/", createUser);

userRouter.put("/user/edit", editUser);

userRouter.delete("/user/delete", deleteUser);

userRouter.post("/user/uploadFile/", upload.single("file"), uploadFile);

userRouter.post("/user/login", login);

userRouter.post("/company/upload", uploadImagesData);

userRouter.get("/company/getAll", getAllImages);

export default userRouter;
