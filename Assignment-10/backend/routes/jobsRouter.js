import express from "express";

const router = express.Router();
import { createJobs } from "../controllers/jobs/index.js";
import { getAllJobs } from "../controllers/jobs/index.js";

router.post("/jobs", createJobs);
router.get("/jobs", getAllJobs);

export default router;
