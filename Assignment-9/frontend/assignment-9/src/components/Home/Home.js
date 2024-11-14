import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Stack,
} from "@mui/material";
import Navbar from "../Navbar/Navbar"; // Assuming your Navbar component is ready

const Home = () => {
  // Replace the photo URL with the actual path to the image from your server
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  // const avatarUrl =
  //   "http://localhost:3000/file-b@b.com-1731618105748-553309673.jpeg";
  const userName = user?.fullName; // Replace with the actual user's name
  const avatarUrl = `http://localhost:3000/${user.profilePic}/`;
  console.log(avatarUrl);
  return (
    <>
      <Navbar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Card sx={{ maxWidth: 600, padding: 4 }}>
          <CardContent>
            <Stack direction="column" spacing={2} alignItems="center">
              <Avatar
                alt={userName}
                src={avatarUrl}
                sx={{ width: 120, height: 120 }}
              />
              <Typography variant="h4" gutterBottom>
                Welcome, {userName}!
              </Typography>
              <Typography variant="body1" color="text.secondary" align="center">
                This is your personalized home page. We’re excited to have you
                here. Explore more about your work and profile below.
              </Typography>
            </Stack>
            <Box mt={4}>
              <Typography variant="h5" gutterBottom>
                About Me
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Home;
