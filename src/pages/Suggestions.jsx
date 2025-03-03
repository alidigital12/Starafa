import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Badge,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  MenuItem,
  Select,
  Typography,
  Stack
} from "@mui/material";
import {
  Search,
  CheckCircle,
  HighlightOff,
  Pending,
  Create
} from "@mui/icons-material";
import ImportExportIcon from '@mui/icons-material/ImportExport';
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// ---- Custom theme for Pagination ----
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

// ---- Dummy table data ----
const data = [
  {
    name: "Mian Sunny",
    platform: "YouTube",
    followers: "72.4 M",
    date: "05 Jan, 2025",
    phone: "(704) 555-0127",
    img: "./src/images/MianSunny.png"
  },
  {
    name: "Adeel Murtaza",
    platform: "TikTok",
    followers: "16.6 M",
    date: "05 Jan, 2025",
    phone: "+7 (903) 880-91-85",
    img: "./src/images/AdeelMurtaza.png"
  },
  {
    name: "Musa Hussain",
    platform: "Facebook",
    followers: "12.2M",
    date: "05 Jan, 2025",
    phone: "+61 2 6798 6035",
    img: "./src/images/MusaHussain.png"
  },
  {
    name: "Ali Fayyaz",
    platform: "Instagram",
    followers: "31.4 M",
    date: "05 Jan, 2025",
    phone: "+84 753 234 734",
    img: "./src/images/AliFayyaz.png"
  },
  {
    name: "Hussain Tareen",
    platform: "YouTube",
    followers: "6.8 M",
    date: "05 Jan, 2025",
    phone: "921409198-87905",
    img: "./src/images/HussainTareen.png"
  },
  // ... add more rows as needed
];

// ---- Status button data ----
const statuses = [
  { label: "Pending", icon: <Pending />, color: "#F0B501", count: 12 },
  { label: "Accepted", icon: <CheckCircle />, color: "#1D9AD2", count: 16 },
  { label: "Created", icon: <Create />, color: "#31AA52", count: 18 },
  { label: "Declined", icon: <HighlightOff />, color: "#F20000", count: 18 },
];

// Reusable style for table body cells
const bodyCellStyle = {
  fontFamily: "Inter",
  fontWeight: 500,
  fontSize: "16px",
  color: "#000000",
};

const ResponsiveTable = () => {
  // States for status, pagination, etc.
  const [selectedStatus, setSelectedStatus] = useState("Pending");
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(75);

  // Total rows & pages (adjust as needed or use data.length)
  const totalRows = 150;
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Box p={2} sx={{ width: "100%" }}>
        {/* Status Filters & Search Bar */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          alignItems="center"
          justifyContent="space-between"
          gap={2}
          mb={2}
        >
          <Box display="flex" flexWrap="wrap" gap={3}>
            {statuses.map(({ label, icon, color, count }) => {
              const isSelected = selectedStatus === label;
              return (
                <Badge
                  key={label}
                  badgeContent={count}
                  sx={{
                    "& .MuiBadge-badge": {
                      backgroundColor: isSelected ? color : "#EBEEF5",
                      color: isSelected ? "#fff" : "#000",
                    },
                  }}
                >
                  <Button
                    variant="contained"
                    startIcon={icon}
                    onClick={() => setSelectedStatus(label)}
                    sx={{
                      textTransform: "uppercase",
                      backgroundColor: isSelected ? color : "#fff",
                      color: isSelected ? "#fff" : "#000",
                      border: `1px solid ${isSelected ? color : "#EBEEF5"}`,
                      borderRadius: "8px",
                      minWidth: 146,
                      height: 53,
                    }}
                  >
                    {label}
                  </Button>
                </Badge>
              );
            })}
          </Box>
          <TextField
            variant="outlined"
            placeholder="Search"
            InputProps={{ startAdornment: <Search sx={{ mr: 1 }} /> }}
            sx={{
              width: { xs: "100%", sm: 279 },
              height: 53,
              borderRadius: "8px"
            }}
          />
        </Box>

        {/* Table Container */}
        <TableContainer component={Paper} sx={{ width: "100%", overflowX: "auto" }}>
          <Table>
            <TableHead>
              <TableRow>
                {["Star details", "Platform", "Followers", "Date", "Phone", "Action"].map((head) => (
                  <TableCell
                    key={head}
                    sx={{
                      width: { xs: "auto", md: "87px" },
                      height: "19px",
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: { xs: "14px", md: "16px" },
                      color: "#868585",
                      borderBottom: "1px solid #E6E6E6",
                    }}
                  >
                    <Box display="flex" alignItems="center" gap={0.5}>
                      {head}
                      <ImportExportIcon sx={{ width: 20, height: 20, color: "#F9792D" }} />
                    </Box>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {data.map(({ name, platform, followers, date, phone, img }) => (
                <TableRow key={name}>
                  <TableCell sx={{ ...bodyCellStyle }}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Avatar
                        src={img}
                        sx={{
                          width: 65,
                          height: 68,
                          mt: { xs: "5px", md: "10px" },
                          ml: { xs: "5px", md: "10px" },
                          borderRadius: "5px"
                        }}
                      />
                      <Box>
                        <Typography
                          sx={{
                            fontFamily: "Inter",
                            fontWeight: 600,
                            fontSize: "17px",
                            color: "#1D72B8",
                            cursor: "pointer",
                          }}
                        >
                          {name}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            color: "gray",
                            margin: 0,
                            lineHeight: 1.2,
                          }}
                        >
                          Official ID: #123456
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ ...bodyCellStyle }}>{platform}</TableCell>
                  <TableCell sx={{ ...bodyCellStyle }}>{followers}</TableCell>
                  <TableCell sx={{ ...bodyCellStyle }}>{date}</TableCell>
                  <TableCell sx={{ ...bodyCellStyle }}>{phone}</TableCell>
                  <TableCell sx={{ ...bodyCellStyle }}>
                    <Button variant="outlined" size="small">View</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination & Rows Per Page */}
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            alignItems="center"
            justifyContent="space-between"
            px={2}
            py={2}
          >
            <Box display="flex" alignItems="center" mb={{ xs: 2, sm: 0 }}>
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
                  "& .MuiSelect-icon": { color: "#F9792D" },
                }}
              >
                {[25, 50, 75, 100].map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
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
        </TableContainer>
      </Box>
    </ThemeProvider>
  );
};

export default ResponsiveTable;
