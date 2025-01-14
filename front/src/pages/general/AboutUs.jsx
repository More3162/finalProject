import { Typography, Box } from "@mui/material";

const AboutUs = ({ isDarkMode, toggleDarkMode, userType }) => {
  return (
    <Box sx={{ p: 4, maxWidth: "800px", margin: "auto", textAlign: "center" }}>
      <Typography variant="h3" sx={{ mb: 4 }}>
        About Us
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Welcome to our platform! Whether you're a restaurant owner or a food
        enthusiast, we are here to connect people with their favorite dining
        experiences in the easiest and most enjoyable way possible.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        For restaurant owners, we offer tools to manage your menu, track orders,
        and engage with your customers effortlessly. Our mission is to help
        businesses grow while providing exceptional service.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        For customers, we make it simple to discover great restaurants, place
        orders, and enjoy seamless, personalized dining experiences.
      </Typography>
      <Typography variant="body1">
        Join us in creating a community where great food meets great people.
        We're excited to serve you and help bring dining experiences to life!
      </Typography>
    </Box>
  );
};

export default AboutUs;
