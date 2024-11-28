import { Box, Card, CardContent, Typography } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import { TypeAnimation } from "react-type-animation";

export default function AboutComponent() {
  return (
    <>
      <Navbar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Card sx={{ maxWidth: 600, padding: 3 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              <TypeAnimation
                sequence={["About Us", 1000, "NUWorks", 1000]}
                speed={50}
                repeat={Infinity}
              />
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
