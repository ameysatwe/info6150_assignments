import Jobs from "../../model/Jobs.model.js";

const createJobs = async (req, res) => {
  try {
    const { title, description, location, company, salary, skills } = req.body;
    if (!title || !description || !location || !company || !salary) {
      return res
        .status(400)
        .json({ message: "All fields except skills are required" });
    }
    const jobs = await Jobs.create({
      title,
      description,
      location,
      company,
      salary,
      skills,
    });
    res.json({
      message: "Job created successfully",
      jobs,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default createJobs;
