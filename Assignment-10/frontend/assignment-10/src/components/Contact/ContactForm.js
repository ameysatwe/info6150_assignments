import Navbar from "../Navbar/Navbar";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
} from "@mui/material/";

import "./ContactForm.css";

const ContactForm = () => {
  return (
    <>
      <Navbar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Card sx={{ maxWidth: 450, padding: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Fill up the form and our team will get back to you within 24
              hours.
            </Typography>

            <form>
              <Stack spacing={2}>
                <TextField
                  placeholder="Enter first name"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  required
                />
                <TextField
                  placeholder="Enter last name"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  required
                />
                <TextField
                  type="email"
                  placeholder="Enter email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                />
                <TextField
                  type="number"
                  placeholder="Enter phone number"
                  label="Phone"
                  variant="outlined"
                  fullWidth
                  required
                />
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  placeholder="Type your message here"
                  variant="outlined"
                  fullWidth
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </Stack>
            </form>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default ContactForm;
