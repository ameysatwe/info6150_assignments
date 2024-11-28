import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllJobs } from "../../redux/jobsSlice";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Navbar from "../Navbar/Navbar";

export default function JobsComponent() {
  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(getAllJobs());
  }, [dispatch]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <CircularProgress />
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div style={{ textAlign: "center", marginTop: "20px", color: "red" }}>
          <Typography variant="h6">Error: {error}</Typography>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <List sx={{ padding: 4 }}>
        {jobs.map((job) => (
          <React.Fragment key={job._id}>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginBottom: 2,
              }}
            >
              <Card
                sx={{
                  width: "100%",
                  padding: 2,
                  backgroundColor: "#f9f9f9",
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="div">
                    {job.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {job.description}
                  </Typography>
                  <Typography
                    variant="caption"
                    display="block"
                    sx={{ color: "text.secondary", marginTop: 1 }}
                  >
                    Location: {job.location}
                  </Typography>
                  <Typography
                    variant="caption"
                    display="block"
                    sx={{ color: "text.secondary" }}
                  >
                    Salary: {job.salary}
                  </Typography>

                  {job.skills && job.skills.length > 0 && (
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ marginTop: 2, flexWrap: "wrap" }}
                    >
                      {job.skills.map((skill, index) => (
                        <Chip
                          key={index}
                          label={skill}
                          variant="filled"
                          color="primary"
                        />
                      ))}
                    </Stack>
                  )}
                </CardContent>

                <Button size="small" sx={{ marginTop: 1 }}>
                  Apply
                </Button>
              </Card>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </>
  );
}
