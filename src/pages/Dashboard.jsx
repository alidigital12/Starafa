import React, { useState } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Select,
  MenuItem as MuiMenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import StarIcon from "@mui/icons-material/Star";
import SearchIcon from "@mui/icons-material/Search";

// --- Import for custom pagination ---
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Import dialogs
import EditStar from "./EditStar";
import RemoveStar from "./RemoveStar";

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

// Sample data (7 rows here, but can be more in the future)
const starData = [
  {
    name: "Mian Sunny",
    category: "Talk Shows",
    followers: "72.4 M",
    orders: "1,380",
    sales: "$11,806",
    date: "05 Jan, 2025",
    avatar: "./src/images/MianSunny.png",
  },
  {
    name: "Adeel Murtaza",
    category: "Health & Fitness",
    followers: "72.4 M",
    orders: "1,380",
    sales: "$11,801",
    date: "05 Jan, 2025",
    avatar: "./src/images/AdeelMurtaza.png",
  },
  {
    name: "Musa Hussain",
    category: "Gaming",
    followers: "72.4 M",
    orders: "1,380",
    sales: "$11,806",
    date: "05 Jan, 2025",
    avatar: "./src/images/MusaHussain.png",
  },
  {
    name: "Ali Fayyaz Butt",
    category: "Food",
    followers: "72.4 M",
    orders: "1,380",
    sales: "$11,806",
    date: "05 Jan, 2025",
    avatar: "./src/images/AliFayyaz.png",
  },
  {
    name: "Hussain Tareen",
    category: "Comedy",
    followers: "72.4 M",
    orders: "1,380",
    sales: "$11,806",
    date: "05 Jan, 2025",
    avatar: "./src/images/HussainTareen.png",
  },
  {
    name: "Ali Riaz",
    category: "Arts",
    followers: "72.4 M",
    orders: "1,380",
    sales: "$11,806",
    date: "05 Jan, 2025",
    avatar: "./src/images/AliRiaz.png",
  },
  {
    name: "Molvi Usman",
    category: "Talk Shows",
    followers: "72.4 M",
    orders: "1,380",
    sales: "$11,806",
    date: "05 Jan, 2025",
    avatar: "./src/images/MolviUsman.png",
  },
];

const StarTable = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  // Dialog states
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  // Pagination states
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Search state
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  // Menu handlers
  const handleClick = (event, row) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  // Search handler
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Pagination handlers
  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  // Filter data by search term
  const filteredData = starData.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalRows = filteredData.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  const currentData = filteredData.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  // Handlers for Edit and Delete dialogs
  const handleEditProfile = () => {
    handleCloseMenu();
    setOpenEditDialog(true);
  };

  const handleDeleteProfile = () => {
    handleCloseMenu();
    setOpenDeleteDialog(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  const handleSaveEdit = () => {
    // Implement save logic here
    setOpenEditDialog(false);
  };

  const handleConfirmDelete = () => {
    // Implement deletion logic here
    setOpenDeleteDialog(false);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ p: 3, width: "100%", overflowX: "auto" }}>
        {/* Top Bar: Search + Add Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 2,
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search"
            onChange={handleSearchChange}
            sx={{
              width: { xs: "100%", sm: "330px" },
              height: "50px",
              "& input": { fontSize: "14px", color: "#6B7280" },
              borderRadius: "8px",
              "& .MuiOutlinedInput-root": { height: "100%" },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#6B7280" }} />
                </InputAdornment>
              ),
            }}
          />

          <Button
            variant="contained"
            onClick={() => navigate("add-star")}
            sx={{
              backgroundColor: "#F9792D",
              color: "#FFFFFF",
              borderRadius: "4px",
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "18px",
              textTransform: "none",
              width: { xs: "100%", sm: "185px" },
              height: { xs: "40px", sm: "46px" },
              "&:hover": { backgroundColor: "#F9792D" },
            }}
          >
            Add new star +
          </Button>
        </Box>

        {/* Table */}
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
            border: "1px solid #E5E7EB",
            borderRadius: "8px",
            maxHeight: "calc(100vh - 200px)",
            overflow: "auto",
          }}
        >
          <Table sx={{ minWidth: 600 }}>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#F9FAFB" }}>
                {[
                  "Star details",
                  "Category",
                  "Followers",
                  "Total orders",
                  "Total sales",
                  "Action",
                ].map((header) => (
                  <TableCell
                    key={header}
                    sx={{
                      fontWeight: 500,
                      fontSize: "14px",
                      fontFamily: "Inter",
                      color: "#6B7280",
                      py: 2,
                      borderBottom: "1px solid #E5E7EB",
                    }}
                  >
                    {header}
                    <ImportExportIcon
                      sx={{
                        color: "#F9792D",
                        fontSize: "16px",
                        ml: 1,
                        verticalAlign: "middle",
                      }}
                    />
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {currentData.map((row, index) => (
                <TableRow
                  key={index}
                  hover
                  sx={{ "&:last-child td": { borderBottom: 0 } }}
                >
                  {/* Star Details */}
                  <TableCell sx={{ py: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar
                        src={row.avatar}
                        sx={{ width: 65, height: 68, borderRadius: "5px" }}
                      />
                      <Box sx={{ ml: 2 }}>
                        <Typography
                          sx={{
                            fontWeight: 600,
                            fontSize: "17px",
                            lineHeight: "20.57px",
                            fontFamily: "Inter",
                            color: "#2168A8",
                          }}
                        >
                          {row.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#F9792D",
                            fontSize: "14px",
                            display: "flex",
                            alignItems: "center",
                            mt: 0.5,
                          }}
                        >
                          <StarIcon
                            sx={{ color: "#F9792D", fontSize: "16px", mr: 0.5 }}
                          />
                          5.0
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: "#6B7280",
                            fontSize: "14px",
                            display: "block",
                            mt: 0.5,
                          }}
                        >
                          {row.date}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>

                  {/* Category */}
                  <TableCell
                    sx={{
                      fontSize: "16px",
                      color: "#000000",
                      fontFamily: "Inter",
                      fontWeight: 500,
                    }}
                  >
                    {row.category}
                  </TableCell>

                  {/* Followers */}
                  <TableCell
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "16px",
                      color: "#000000",
                    }}
                  >
                    {row.followers}
                  </TableCell>

                  {/* Total orders */}
                  <TableCell
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "16px",
                      color: "#000000",
                    }}
                  >
                    {row.orders}
                  </TableCell>

                  {/* Total sales */}
                  <TableCell
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "16px",
                      color: "#F9792D",
                    }}
                  >
                    {row.sales}
                  </TableCell>

                  {/* Action menu */}
                  <TableCell>
                    <IconButton
                      onClick={(e) => handleClick(e, row)}
                      sx={{ color: "#6B7280" }}
                    >
                      <MoreHorizIcon />
                    </IconButton>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl && selectedRow === row)}
                      onClose={handleCloseMenu}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                    >
                      {/* "View Profile" navigates to star detail */}
                      <MenuItem
                        onClick={() => {
                          handleCloseMenu();
                          navigate("star-detail");
                        }}
                        sx={{ fontSize: "14px" }}
                      >
                        View Profile
                      </MenuItem>
                      {/* "Edit Profile" opens edit dialog */}
                      <MenuItem onClick={handleEditProfile} sx={{ fontSize: "14px" }}>
                        Edit Profile
                      </MenuItem>
                      {/* "Delete Profile" opens delete dialog */}
                      <MenuItem
                        onClick={handleDeleteProfile}
                        sx={{ fontSize: "14px", color: "red" }}
                      >
                        Delete Profile
                      </MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Footer: Rows Per Page + Pagination */}
        <Box display="flex" alignItems="center" justifyContent="space-between" sx={{ mt: 2 }}>
          <Box display="flex" alignItems="center">
            <Typography variant="body2" sx={{ color: "#000", mr: 1 }}>
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
                "& .MuiSelect-icon": {
                  color: "#F9792D",
                },
              }}
            >
              {[5, 10, 15, 20].map((option) => (
                <MuiMenuItem key={option} value={option}>
                  {option}
                </MuiMenuItem>
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
                    backgroundColor: item.type === "previous" || item.type === "next" ? "#F9792D" : "transparent",
                    color: item.selected ? "#F9792D" : "#AFAFAF",
                    fontWeight: item.selected ? "bold" : "normal",
                    "&:hover": {
                      backgroundColor: item.type === "previous" || item.type === "next" ? "#F9792D" : "#E0E0E0",
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
      </Box>

      {/* Edit Star Dialog */}
      <EditStar
        open={openEditDialog}
        onClose={handleCloseEditDialog}
        onSave={handleSaveEdit}
        starName={selectedRow ? selectedRow.name : ''}
      />

      {/* Remove Star Dialog */}
      <RemoveStar
        open={openDeleteDialog}
        onClose={handleCloseDeleteDialog}
        onConfirm={handleConfirmDelete}
        starName={selectedRow ? selectedRow.name : ''}
      />
    </ThemeProvider>
  );
};

export default StarTable;
