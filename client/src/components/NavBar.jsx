import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
  Input,
  Settings,
} from "@mui/icons-material";

import FlexBetween from "components/FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import profileImage from "assets/pp.png";
import {
  AppBar,
  Button,
  Box,
  Typography,
  Icon,
  IconButton,
  InputBase,
  InputLabel,
  Toolbar,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";

const NavBar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar
      sx={{
        position: "relative",
        background:
          theme.palette.mode === "light"
            ? "linear-gradient(to right, #a99abb, #f7f7f7)"
            : "linear-gradient(to right, #523576, #270254)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        padding: "0.75px",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
          transform: "translateY(-2px)",
        },
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/*left*/}
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            backgroundImage="linear-gradient(to right, rgba(255,255,255,0.05), rgba(255,255,255,0.1))"
            borderRadius="12px"
            boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
            gap="2rem"
            p="0.75rem 1.5rem"
            margin="1rem 0"
            transition="all 0.3s ease"
            sx={{
              "&:hover": {
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
                transform: "translateY(-2px)",
              },
            }}
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        {/* right side*/}
        <FlexBetween gap="0.4rem ">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "22px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "22px" }} />
            )}
          </IconButton>

          <IconButton>
            <SettingsOutlined sx={{ fontSize: "22px" }} />
          </IconButton>

          <FlexBetween>
            <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
            >
              <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="40px"
                width="40px"
                borderRadius="50%"
                sx={{
                  objectFit: "cover",
                  border: "2px solid",
                  borderColor: theme.palette.primary.main,
                  boxShadow: "0 0 0 2px rgba(255, 255, 255, 0.2)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                    boxShadow: `0 0 0 4px ${theme.palette.primary.light}`,
                  },
                }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.85rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.name}
                </Typography>
                <Typography
                  fontSize="0.75rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.occupation}
                </Typography>
              </Box>
              <ArrowDropDownOutlined
                sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
              />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <MenuItem onClick={handleClose}>Log Out</MenuItem>
            </Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
