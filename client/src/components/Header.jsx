import { Typography, Box, useTheme } from "@mui/material";
import React from "react";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        variant="h2"
        color={theme.palette.secondary[100]}
        fontWeight="bold"
        sx={{
          mb: 1,
          lineHeight: 1.2,
          [theme.breakpoints.down("sm")]: {
            fontSize: "1.75rem",
          },
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        color={theme.palette.secondary[300]}
        sx={{
          lineHeight: 1.5,
          [theme.breakpoints.down("sm")]: {
            fontSize: "1.25rem",
          },
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
