import { Container, Typography } from "@mui/material";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Typography variant="h3" gutterBottom>
          Welcome to the Home Page
        </Typography>
        <Typography variant="body1">
          This is the Home dashboard. You can navigate to different sections
          from the navigation bar above.
        </Typography>
      </Container>
    </>
  );
};

export default Home;
