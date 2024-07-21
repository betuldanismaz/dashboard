import React from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  PeopleAltOutlined,
  AttachMoneyOutlined,
  LocationOnOutlined,
  AssessmentOutlined,
  EventAvailableOutlined,
  EventNoteOutlined,
  DonutSmallOutlined,
  SupervisorAccountOutlined,
  BarChartOutlined,
  LocalMallOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import profileImage from "assets/pp.png";

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Business Insights", //title for the subsection
    icon: null,
  },
  {
    text: "Products",
    icon: <LocalMallOutlined />,
  },
  {
    text: "Customers",
    icon: <PeopleAltOutlined />,
  },
  {
    text: "Transactions",
    icon: <AttachMoneyOutlined />,
  },
  {
    text: "Geography",
    icon: <LocationOnOutlined />,
  },
  {
    text: "Sales Insights", //title for the subsection
    icon: null,
  },
  {
    text: "Overview",
    icon: <AssessmentOutlined />,
  },
  {
    text: "Daily",
    icon: <EventAvailableOutlined />,
  },
  {
    text: "Monthly",
    icon: <EventNoteOutlined />,
  },
  {
    text: "Breakdown",
    icon: <DonutSmallOutlined />,
  },
  {
    text: "Operations",
    icon: null,
  },
  {
    text: "Admin",
    icon: <SupervisorAccountOutlined />,
  },
  {
    text: "Performance",
    icon: <BarChartOutlined />,
  },
];

const Sidebar = ({
  user,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistant"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSizing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5 rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap="0.5rem"
                  width="100%"
                >
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    sx={{
                      textShadow: "3px 3px 6px rgba(0,0,0,0.4)",
                      letterSpacing: "0.06em",
                      color: theme.palette.secondary[300],
                    }}
                  >
                    DATA NEXUS
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography
                      key={text}
                      sx={{
                        m: "2.25rem 0 1 rem 3 rem",
                        textAlign: "center",
                        px: 6,
                        backgroundColor:
                          theme.palette.mode === "dark" ? "#170132" : "#d4ccdd",
                      }}
                    >
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLowerCase();

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? theme.palette.primary[300]
                            : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                        borderRadius: "4px",
                        padding: "8px 16px",
                        transition: "background-color 0.3s, color 0.3s",
                        "&:hover": {
                          backgroundColor: theme.palette.primary[200],
                          color: theme.palette.primary[800],
                        },
                        "&.Mui-focusVisible": {
                          outline: `3px solid ${theme.palette.primary[500]}`,
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined
                          sx={{ ml: "auto" }}
                        ></ChevronRightOutlined>
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>

          <Box position="absolute" bottom="2rem">
            <Divider />
            <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
              <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="40px"
                width="40px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.name}
                </Typography>
                <Typography
                  fontSize="0.8rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.occupation}
                </Typography>
              </Box>
              <SettingsOutlined
                sx={{ color: theme.palette.secondary[200], fontSize: "25px" }}
              />
            </FlexBetween>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
