import Jobs from "../../model/Jobs.model.js";

const getAllJobs = async (req, res) => {
  try {
    const jobs = await Jobs.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default getAllJobs;
