import Navbar from "../Navbar/Navbar.js";
import { Container, Typography } from "@mui/material";
const JobsComponent = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Typography variant="h3" gutterBottom>
          Welcome to the jobs Page
        </Typography>
        <Typography variant="body1">This is the jobs dashboard.</Typography>
      </Container>
    </>
  );
};

export default JobsComponent;
