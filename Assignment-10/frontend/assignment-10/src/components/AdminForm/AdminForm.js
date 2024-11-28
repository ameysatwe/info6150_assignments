import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Chip,
  InputAdornment,
} from "@mui/material";
import Navbar from "../Navbar/Navbar";
import axios from "axios";

const AddJobForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    company: "",
    salary: "",
    skills: "",
  });

  const [skillsList, setSkillsList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddSkill = () => {
    if (formData.skills.trim()) {
      setSkillsList([...skillsList, formData.skills.trim()]);
      setFormData((prev) => ({ ...prev, skills: "" })); // Clear input
    }
  };

  const handleRemoveSkill = (index) => {
    setSkillsList(skillsList.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jobData = { ...formData, skills: skillsList };

    try {
      await axios.post("http://localhost:3000/jobs", jobData);
      alert("Job added successfully!");
      setFormData({
        title: "",
        description: "",
        location: "",
        company: "",
        salary: "",
        skills: "",
      });
      setSkillsList([]);
    } catch (error) {
      console.error("Error adding job:", error);
      alert("Failed to add job");
    }
  };

  return (
    <>
      <Navbar pages={["Dashboard", "Add Job"]} />
      <Box
        sx={{
          maxWidth: "600px",
          margin: "auto",
          padding: "20px",
          backgroundColor: "white",
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Add New Job
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Job Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Job Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            multiline
            rows={4}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Company Name"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
          <Box sx={{ display: "flex", gap: 2, alignItems: "center", mt: 2 }}>
            <TextField
              label="Skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="Enter a skill and press Add"
            />
            <Button
              variant="contained"
              onClick={handleAddSkill}
              disabled={!formData.skills.trim()}
            >
              Add
            </Button>
          </Box>
          <Box sx={{ mt: 2, mb: 2, display: "flex", gap: 1, flexWrap: "wrap" }}>
            {skillsList.map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                onDelete={() => handleRemoveSkill(index)}
              />
            ))}
          </Box>
          <Button type="submit" variant="contained" fullWidth color="dark">
            Submit Job
          </Button>
        </form>
      </Box>
    </>
  );
};

export default AddJobForm;
