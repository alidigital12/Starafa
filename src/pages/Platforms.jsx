import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  TextField,
  Button,
  Box,
  Select,
  InputAdornment,
  Stack,
  Pagination,
  PaginationItem,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ImportExportIcon from "@mui/icons-material/ImportExport";

import AddPlatform from "./addPlatform";
import DeletePlatform from "./deletePlatform";

// ------------------ Custom Theme for Pagination ------------------
const customTheme = createTheme({
  components: {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          borderRadius: "50%",
          backgroundColor: "transparent",
          color: "#AFAFAF",
          minWidth: "32px",
          height: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          "&:hover": {
            backgroundColor: "#E0E0E0",
          },
        },
        outlined: {
          border: "none",
          "&.Mui-selected": {
            color: "#F9792D !important",
            fontWeight: "bold",
          },
        },
      },
    },
  },
});

// ------------------ Example Platforms Data ------------------
const initialPlatforms = [
  { name: "Instagram", logo: "./src/images/instagram.png", date: "15 Jan, 2025" },
  { name: "YouTube", logo: "./src/images/YouTube.png", date: "15 Jan, 2025" },
  { name: "Facebook", logo: "./src/images/Facebook.png", date: "15 Jan, 2025" },
  { name: "Twitch", logo: "./src/images/Twitch.png", date: "15 Jan, 2025" },
  { name: "TikTok", logo: "./src/images/TikTok.png", date: "15 Jan, 2025" },
  { name: "Snack Video", logo: "./src/images/SnackVideo.png", date: "15 Jan, 2025" },
  { name: "Twitters (X)", logo: "./src/images/Twitters.png", date: "15 Jan, 2025" },
  { name: "SnapChat", logo: "./src/images/SnapChat.png", date: "15 Jan, 2025" },
];

// ------------------ Styled Table Header ------------------
const StyledTableHeaderCell = styled(TableCell)(() => ({
  fontFamily: "Inter",
  fontWeight: 500,
  fontSize: "16px",
  color: "#868585",
  textAlign: "left",
  borderBottom: "1px solid #E0E0E0",
}));

// ------------------ Dropdown Menu for Actions ------------------
const DropdownMenu = ({ onEdit, onDelete }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            handleClose();
            onEdit();
          }}
        >
          Edit Platform
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            onDelete();
          }}
        >
          Delete Platform
        </MenuItem>
      </Menu>
    </>
  );
};

// ------------------ Main Platforms Component ------------------
const Platforms = () => {
  const [platforms, setPlatforms] = useState(initialPlatforms);

  // Dialog states for Add & Delete
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  // Pagination states
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(25);

  // Calculate total pages
  const totalRows = platforms.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  // Slice the data based on current page & rowsPerPage
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedPlatforms = platforms.slice(startIndex, endIndex);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  // Add new platform handler
  const handleAddPlatform = (name) => {
    const newPlatform = {
      name,
      logo: "./src/images/placeholder.png", // default image path
      date: new Date().toLocaleDateString(),
    };
    setPlatforms((prev) => [newPlatform, ...prev]);
  };

  // Open delete dialog handler
  const handleOpenDeleteDialog = (platform) => {
    setSelectedPlatform(platform);
    setOpenDeleteDialog(true);
  };

  // Confirm deletion handler
  const handleConfirmDelete = () => {
    if (selectedPlatform) {
      setPlatforms((prev) =>
        prev.filter((p) => p.name !== selectedPlatform.name)
      );
    }
    setOpenDeleteDialog(false);
  };

  // (Optional) Search handler
  const handleSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    if (!searchText) {
      setPlatforms(initialPlatforms);
      setPage(1);
      return;
    }
    const filtered = initialPlatforms.filter((p) =>
      p.name.toLowerCase().includes(searchText)
    );
    setPlatforms(filtered);
    setPage(1);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Paper sx={{ padding: 2, width: "100%" }}>
        {/* Top Bar: Search + Add New Platform */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          mb={2}
          sx={{ gap: 2 }}
        >
          <TextField
            placeholder="Search"
            variant="outlined"
            size="medium"
            onChange={handleSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              flex: "1 1 auto",
              maxWidth: "300px",
              minWidth: "200px",
              height: "40px",
              ".MuiOutlinedInput-root": { height: "40px" },
            }}
          />
          <Button
            variant="contained"
            color="warning"
            startIcon={<AddIcon />}
            sx={{ flex: "0 1 auto", whiteSpace: "nowrap" }}
            onClick={() => setOpenAddDialog(true)}
          >
            Add new Platform
          </Button>
        </Box>

        {/* Table Section */}
        <Box sx={{ maxHeight: "500px", overflowY: "auto" }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableHeaderCell>
                    Platform Logo
                    <ImportExportIcon sx={{ fontSize: "16px", color: "#F9792D", ml: 1 }} />
                  </StyledTableHeaderCell>
                  <StyledTableHeaderCell>
                    Platform Name
                    <ImportExportIcon sx={{ fontSize: "16px", color: "#F9792D", ml: 1 }} />
                  </StyledTableHeaderCell>
                  <StyledTableHeaderCell>
                    Creation Date
                    <ImportExportIcon sx={{ fontSize: "16px", color: "#F9792D", ml: 1 }} />
                  </StyledTableHeaderCell>
                  <StyledTableHeaderCell>Action</StyledTableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {displayedPlatforms.map((platform, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Avatar
                        src={platform.logo}
                        alt={platform.name}
                        sx={{ width: 58, height: 58 }}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography fontWeight="bold">{platform.name}</Typography>
                    </TableCell>
                    <TableCell>{platform.date}</TableCell>
                    <TableCell>
                      <DropdownMenu
                        onEdit={() => alert(`Editing ${platform.name}`)}
                        onDelete={() => handleOpenDeleteDialog(platform)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* Pagination Section */}
        <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
          <Box display="flex" alignItems="center" width="194px" height="24px">
            <Typography variant="body2" sx={{ color: "#000", marginRight: 1 }}>
              Rows per page
            </Typography>
            <Select
              value={rowsPerPage}
              onChange={handleChangeRowsPerPage}
              displayEmpty
              variant="standard"
              disableUnderline
              IconComponent={ExpandMoreIcon}
              sx={{
                fontWeight: "bold",
                color: "#F9792D",
                "& .MuiSelect-icon": { color: "#F9792D" },
              }}
            >
              {[25, 50, 75, 100].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
            <Typography variant="body2" sx={{ marginLeft: 1, color: "#000" }}>
              {page} of {totalPages}
            </Typography>
          </Box>
          <Stack spacing={2} direction="row" alignItems="center">
            <Pagination
              count={totalPages}
              page={page}
              onChange={handleChangePage}
              shape="rounded"
              renderItem={(item) => (
                <PaginationItem
                  {...item}
                  sx={{
                    borderRadius: "50%",
                    minWidth: "32px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor:
                      item.type === "previous" || item.type === "next" ? "#F9792D" : "transparent",
                    color: item.selected ? "#F9792D" : "#AFAFAF",
                    fontWeight: item.selected ? "bold" : "normal",
                    "&:hover": {
                      backgroundColor:
                        item.type === "previous" || item.type === "next" ? "#F9792D" : "#E0E0E0",
                    },
                  }}
                  icon={
                    item.type === "previous" ? (
                      <ArrowBackIcon sx={{ color: "white" }} />
                    ) : item.type === "next" ? (
                      <ArrowForwardIcon sx={{ color: "white" }} />
                    ) : undefined
                  }
                />
              )}
            />
          </Stack>
        </Box>
      </Paper>

      {/* Dialogs */}
      <AddPlatform
        open={openAddDialog}
        onClose={() => setOpenAddDialog(false)}
        onAdd={handleAddPlatform}
      />
      <DeletePlatform
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
        onConfirm={handleConfirmDelete}
        platformName={selectedPlatform?.name || ""}
      />
    </ThemeProvider>
  );
};

export default Platforms;
