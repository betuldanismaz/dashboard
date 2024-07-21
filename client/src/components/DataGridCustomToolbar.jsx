import React from "react";
import { Search } from "@mui/icons-material";
import { IconButton, TextField, InputAdornment } from "@mui/material";
import {
  GridToolbarDensitySelector,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarColumnsButton,
} from "@mui/x-data-grid";
import FlexBetween from "./FlexBetween";

const DataGridCustomToolbar = ({ searchInput, setSearchInput, setSearch }) => {
  return (
    <GridToolbarContainer>
      <FlexBetween width="100%">
        <FlexBetween>
          <GridToolbarColumnsButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport />
        </FlexBetween>
        <TextField
          label="Search..."
          sx={{
            mb: "0.5rem",
            width: { xs: "100%", sm: "17rem" },
            "& .MuiOutlinedInput-root": {
              borderRadius: "4px",
            },
            "& .MuiInputLabel-root": {
              color: (theme) => theme.palette.text.primary,
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: (theme) => theme.palette.divider,
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: (theme) => theme.palette.primary.main,
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: (theme) => theme.palette.primary.dark,
            },
          }}
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setSearch(searchInput);
                    setSearchInput("");
                  }}
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    "&:hover": {
                      backgroundColor: (theme) => theme.palette.action.hover,
                    },
                  }}
                  aria-label="search"
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FlexBetween>
    </GridToolbarContainer>
  );
};

export default DataGridCustomToolbar;
