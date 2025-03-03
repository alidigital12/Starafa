import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  TextField,
  Button,
  InputAdornment,
  Box,
  Typography,
  Select,
  MenuItem as SelectMenuItem,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { createTheme, ThemeProvider } from "@mui/material/styles";

// Import dialogs using the new file names
import AddCategory from "./addCategory";
import DeleteCategory from "./deleteCategory";

// Custom theme for Pagination
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
          "&:hover": { backgroundColor: "#E0E0E0" },
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

// Mock data for categories
const categoriesData = [
  {
    name: "Technology & Gadgets",
    date: "15 Jan, 2025",
    image: "./src/images/Technology&Gadgets.png",
  },
  {
    name: "Talk Shows",
    date: "15 Jan, 2025",
    image: "./src/images/TalkShows.png",
  },
  {
    name: "Health & Fitness",
    date: "15 Jan, 2025",
    image: "./src/images/Health&Fitness.png",
  },
  {
    name: "Entertainment",
    date: "15 Jan, 2025",
    image: "./src/images/Entertainment.png",
  },
  {
    name: "Gaming",
    date: "15 Jan, 2025",
    image: "./src/images/Gaming.png",
  },
  {
    name: "History & Facts",
    date: "15 Jan, 2025",
    image: "./src/images/History&Facts.png",
  },
  {
    name: "Motivation & Inspiration",
    date: "15 Jan, 2025",
    image: "./src/images/Motivation &Inspiration.png",
  },
  {
    name: "Reviews & Reactions",
    date: "15 Jan, 2025",
    image: "./src/images/Reviews&Reactions.png",
  },
];

const iconStyle = { width: "15px", height: "15px", color: "#F9792D" };

const headerCellStyle = {
  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "19.36px",
  textAlign: "left",
  color: "#868585",
};

const bodyCellStyle = {
  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "19.36px",
  textAlign: "center",
  color: "#000000",
};

export default function Categories() {
  // Table menu state
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  // Pagination & search state
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(75);
  const [searchTerm, setSearchTerm] = useState("");

  // Dialog states
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteDialogCategoryName, setDeleteDialogCategoryName] = useState("");

  // Menu handlers
  const handleMenuOpen = (event, row) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedRow(null);
  };

  // When user clicks "Delete Category"
  const handleDeleteCategory = (category) => {
    setDeleteDialogCategoryName(category.name);
    setDeleteDialogOpen(true);
    handleMenuClose();
  };

  // Search & filter
  const filteredCategories = categoriesData.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalRows = filteredCategories.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  const paginatedData = filteredCategories.slice(
    (page - 1) * rowsPerPage,
    (page - 1) * rowsPerPage + rowsPerPage
  );

  return (
    <>
      {/* Top bar: Search & Add New Category */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
        <TextField
          variant="outlined"
          placeholder="Search"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" color="warning" onClick={() => setAddDialogOpen(true)}>
          Add new Category +
        </Button>
      </Box>

      {/* Categories Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={headerCellStyle}>
                Category Image <ImportExportIcon style={iconStyle} />
              </TableCell>
              <TableCell sx={headerCellStyle}>
                Category Name <ImportExportIcon style={iconStyle} />
              </TableCell>
              <TableCell sx={headerCellStyle}>
                Creation Date <ImportExportIcon style={iconStyle} />
              </TableCell>
              <TableCell sx={headerCellStyle}>
                Action <ImportExportIcon style={iconStyle} />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((category, index) => (
              <TableRow key={index}>
                <TableCell sx={bodyCellStyle}>
                  <Avatar src={category.image} alt={category.name} sx={{ width: 58, height: 58 }} />
                </TableCell>
                <TableCell sx={bodyCellStyle}>{category.name}</TableCell>
                <TableCell sx={bodyCellStyle}>{category.date}</TableCell>
                <TableCell sx={bodyCellStyle}>
                  <IconButton onClick={(event) => handleMenuOpen(event, category)}>
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl) && selectedRow === category}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={handleMenuClose}>Edit Category</MenuItem>
                    <MenuItem onClick={() => handleDeleteCategory(category)} sx={{ color: "#f97316" }}>
                      Delete Category
                    </MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination Controls */}
      <ThemeProvider theme={customTheme}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            mt: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="body2" sx={{ mr: 1, color: "#000" }}>
              Rows per page
            </Typography>
            <Select
              value={rowsPerPage}
              onChange={handleChangeRowsPerPage}
              variant="standard"
              disableUnderline
              IconComponent={ExpandMoreIcon}
              sx={{ fontWeight: "bold", color: "#F9792D", "& .MuiSelect-icon": { color: "#F9792D" } }}
            >
              {[5, 25, 50, 75, 100].map((option) => (
                <SelectMenuItem key={option} value={option}>
                  {option}
                </SelectMenuItem>
              ))}
            </Select>
            <Typography variant="body2" sx={{ ml: 1, color: "#000" }}>
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
                      item.type === "previous" || item.type === "next"
                        ? "#F9792D"
                        : "transparent",
                    color: item.selected ? "#F9792D" : "#AFAFAF",
                    fontWeight: item.selected ? "bold" : "normal",
                    "&:hover": {
                      backgroundColor:
                        item.type === "previous" || item.type === "next"
                          ? "#F9792D"
                          : "#E0E0E0",
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
      </ThemeProvider>

      {/* Dialogs */}
      <AddCategory open={addDialogOpen} onClose={() => setAddDialogOpen(false)} />
      <DeleteCategory
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        categoryName={deleteDialogCategoryName}
      />
    </>
  );
}
