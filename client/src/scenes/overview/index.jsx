import React, { useState } from "react";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Header from "components/Header";
import OverviewChart from "components/OverviewChart";

const Overview = () => {
  const [view, setView] = useState("units");

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="OVERVIEW" subtitle="Analyze revenue and profit trends" />
      <Box height="70vh" display="flex" flexDirection="column">
        <FormControl
          sx={{
            mt: "1rem",
            mb: "1rem",
            width: "90px",
            "& .MuiInputBase-root": {
              minWidth: "90px",
            },
            "& .MuiSelect-select": {
              padding: "8px 14px 8px 8px",
            },
          }}
          size="small"
        >
          <InputLabel>View</InputLabel>
          <Select
            value={view}
            label="View"
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>

        <Box flex="1" maxHeight="calc(100% - 3rem)" mb="1rem" overflow="hidden">
          <OverviewChart view={view} />
        </Box>
      </Box>
    </Box>
  );
};

export default Overview;
