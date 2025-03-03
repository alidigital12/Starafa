import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Avatar,
  Rating,
  Button
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import PlatformDetail from "./platformDetail"; // Existing platform detail dialog
import RemoveStar from "./removeStar";
import EditStar from "./editStar";

// 1) Header
function StarDetailsHeader() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 48,
        px: 2,
        backgroundColor: "#fff",
      }}
    >
      {/* Left side */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton
          size="small"
          aria-label="back"
          sx={{ p: 0, mr: 1 }}
          onClick={() => navigate(-1)}
        >
          <KeyboardBackspaceIcon sx={{ color: "#838383", fontSize: "20px" }} />
        </IconButton>
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "16px",
            color: "#838383",
          }}
        >
          Dashboard
        </Typography>
      </Box>
      {/* Right side */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <AddHomeWorkIcon sx={{ width: "18.39px", height: "22.13px", color: "#F9792D" }} />
        <Typography
          sx={{
            ml: 1,
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "16px",
            color: "#959595",
          }}
        >
          Star details
        </Typography>
      </Box>
    </Box>
  );
}

// 2) Profile Card
function ProfileCard() {
  const [openRemoveDialog, setOpenRemoveDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);

  const handleOpenRemoveDialog = () => setOpenRemoveDialog(true);
  const handleCloseRemoveDialog = () => setOpenRemoveDialog(false);
  const handleConfirmRemoveStar = () => {
    console.log("Star removed!");
    setOpenRemoveDialog(false);
  };

  const handleOpenEditDialog = () => setOpenEditDialog(true);
  const handleCloseEditDialog = () => setOpenEditDialog(false);
  const handleConfirmEditStar = () => {
    console.log("Star profile details edited!");
    setOpenEditDialog(false);
  };

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        padding: 2,
        justifyContent: "space-between",
        maxWidth: 600,
        margin: "0 auto",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <CardMedia
          component="img"
          image="./src/images/MianSunny.png"
          alt="Profile"
          sx={{
            width: 122,
            height: 122,
            borderRadius: "50%",
            objectFit: "cover",
            mr: 2,
          }}
        />
        <CardContent sx={{ p: 0 }}>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "20px",
              color: "#2168A8",
            }}
          >
            Spencer X
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "14px",
              color: "#00000063",
            }}
          >
            Talk Shows
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "4px", mt: 1 }}>
            <LocationOnIcon sx={{ color: "#F9792D", fontSize: "16px" }} />
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "14px",
              }}
            >
              Los Angeles, United States
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <Rating name="read-only" value={5} readOnly size="small" />
            <Typography variant="body2" sx={{ ml: 1 }}>
              (48)
            </Typography>
          </Box>
        </CardContent>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 1 }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton color="primary" onClick={handleOpenEditDialog}>
            <EditIcon />
          </IconButton>
          <IconButton color="error" onClick={handleOpenRemoveDialog}>
            <DeleteIcon />
          </IconButton>
        </Box>
        <Box sx={{ textAlign: "right" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 1,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "14px",
                color: "#00000063",
              }}
            >
              Total orders:
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "15px",
                color: "#000000",
              }}
            >
              1,380
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 1,
              mt: 0.5,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "14px",
                color: "#00000063",
              }}
            >
              Total Sales:
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "15px",
                color: "#F9792D",
              }}
            >
              $11,806
            </Typography>
          </Box>
        </Box>
      </Box>
      <RemoveStar
        open={openRemoveDialog}
        onClose={handleCloseRemoveDialog}
        onConfirm={handleConfirmRemoveStar}
        starName="Spencer X"
      />
      <EditStar open={openEditDialog} onClose={handleCloseEditDialog} onConfirm={handleConfirmEditStar} />
    </Card>
  );
}

// 3) Star Details Info (Table + About)
function StarDetailsInfo() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 600,
        margin: "auto",
        mt: 4,
        boxShadow: 3,
        borderRadius: 2,
        overflow: "hidden",
        backgroundColor: "#fff",
      }}
    >
      <Card sx={{ boxShadow: "none", borderRadius: 0 }}>
        <CardContent sx={{ padding: "24px" }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "20px",
              fontFamily: "Inter, sans-serif",
              color: "#000",
              marginBottom: "16px",
            }}
          >
            Star Details
          </Typography>
          <Table>
            <TableBody>
              {[
                ["User ID", "@spencerx"],
                ["Gender", "Male"],
                ["Age", "24 Year"],
                ["Language", "Urdu"],
                ["State", "California"],
                ["City", "Los Angeles"],
                ["Total Followers", "985.9 M"],
                ["Keyword", "Abc"],
              ].map(([label, value]) => (
                <TableRow key={label}>
                  <TableCell
                    sx={{
                      fontWeight: 500,
                      fontFamily: "Inter, sans-serif",
                      fontSize: "16px",
                      color: "#000",
                      borderBottom: "none",
                      padding: "8px 0",
                    }}
                  >
                    {label}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 500,
                      fontFamily: "Inter, sans-serif",
                      fontSize: "16px",
                      color: "#000",
                      borderBottom: "none",
                      padding: "8px 0",
                    }}
                  >
                    {value}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Typography
            sx={{
              fontWeight: 700,
              fontFamily: "Inter, sans-serif",
              fontSize: "20px",
              color: "#000",
              marginTop: "24px",
              marginBottom: "8px",
            }}
          >
            About
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              color: "#ABABAB",
              lineHeight: 1.6,
            }}
          >
            Spencer X, your favorite beatboxer, is here on Starafa to connect with YOU! Known
            for his jaw-dropping beats and fun, creative energy, Spencer loves sharing his
            talent with fans worldwide. Now, you can chat with him directly, get a personalized
            video message, or enjoy a one-of-a-kind beatbox performance made just for you!
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

// 4) Platforms Section (Updated Plus Icon Navigation)
function Platforms() {
  const navigate = useNavigate();

  // Example platform data (static for now)
  const platforms = [
    {
      name: "TikTok",
      icon: "./src/images/tiktok1.png",
      followers: "148.1 M",
      posts: "N/A",
      link: "https://www.tiktok.com/@example",
    },
    {
      name: "Instagram",
      icon: "./src/images/instagram1.png",
      followers: "3.3 M",
      posts: "3.4 K",
      link: "https://www.instagram.com/example",
    },
    {
      name: "Kwai",
      icon: "./src/images/snack1.png",
      followers: "8.3 M",
      posts: "2.1 K",
      link: "https://www.kwai.com/user/example",
    },
    {
      name: "YouTube",
      icon: "./src/images/youtube1.png",
      followers: "4.9 M",
      posts: "1.2 K",
      link: "https://www.youtube.com/c/example",
    },
  ];

  const [openPlatformDialog, setOpenPlatformDialog] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  const handleOpenPlatform = (platform) => {
    setSelectedPlatform(platform);
    setOpenPlatformDialog(true);
  };

  const handleClosePlatform = () => {
    setOpenPlatformDialog(false);
    setSelectedPlatform(null);
  };

  const handleEditPlatform = () => {
    alert(`Edit platform: ${selectedPlatform?.name}`);
    setOpenPlatformDialog(false);
  };

  const handleDeletePlatform = () => {
    alert(`Delete platform: ${selectedPlatform?.name}`);
    setOpenPlatformDialog(false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 600,
        margin: "auto",
        mt: 4,
        boxShadow: 3,
        borderRadius: 2,
        overflow: "hidden",
        backgroundColor: "#fff",
        p: 2,
      }}
    >
      <Typography variant="h6" fontWeight={600}>
        Platforms
      </Typography>
      <Box display="flex" alignItems="center" gap={4} mt={2}>
        {platforms.map((platform, index) => (
          <Box
            key={index}
            textAlign="center"
            onClick={() => handleOpenPlatform(platform)}
            sx={{ cursor: "pointer" }}
          >
            <Avatar
              src={platform.icon}
              alt={platform.name}
              sx={{ width: 56, height: 56, margin: "auto" }}
            />
            <Typography variant="body2" fontWeight={500} mt={1}>
              {platform.followers}
            </Typography>
          </Box>
        ))}

        {/* Plus Icon: On click, navigate to the SetPlatforms page */}
        <Box textAlign="center">
          <IconButton
            sx={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              border: "2px solid #FF6A00",
              backgroundColor: "#FFF",
              p: 0,
            }}
            onClick={() => navigate("/set-platforms")}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: "#FF6A00",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AddIcon sx={{ fontSize: 24, color: "#FFF" }} />
            </Box>
          </IconButton>
        </Box>
      </Box>
      <PlatformDetail
        open={openPlatformDialog}
        onClose={handleClosePlatform}
        onEdit={handleEditPlatform}
        onDelete={handleDeletePlatform}
        platform={selectedPlatform}
      />
    </Box>
  );
}

// 5) Price Plans & Reviews
function PricePlansAndReviews() {
  const pricePlans = [
    { name: "Audio Call", price: 180 },
    { name: "Video Call", price: 215 },
    { name: "Recorded Voice", price: 195 },
    { name: "Recorded Video", price: 270 },
  ];

  const reviews = [
    { name: "Alex Jack", rating: 5.0, date: "21 March, 2024" },
    { name: "John Doe", rating: 4.7, date: "21 March, 2024" },
    { name: "Devon Lane", rating: 4.8, date: "21 March, 2024" },
    { name: "Colin Miller", rating: 4.9, date: "21 March, 2024" },
    { name: "Brian Bargeman", rating: 4.7, date: "21 March, 2024" },
    { name: "Colin Miller", rating: 4.7, date: "21 March, 2024" },
    { name: "Devon Lane", rating: 4.8, date: "21 March, 2024" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        mt: { xs: 4, md: 0 },
        boxShadow: 3,
        borderRadius: 2,
        overflow: "hidden",
        backgroundColor: "#fff",
        p: 2,
        fontFamily: "Arial",
      }}
    >
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Price Plans
      </Typography>
      <Box component="ul" sx={{ p: 0, m: 0, listStyle: "none" }}>
        {pricePlans.map((plan) => (
          <Box
            component="li"
            key={plan.name}
            sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
          >
            <Typography>{plan.name}</Typography>
            <Typography sx={{ color: "#FF6F00", fontWeight: "bold" }}>
              ${plan.price}/min
            </Typography>
          </Box>
        ))}
      </Box>
      <Box sx={{ my: 2, borderBottom: "1px solid #ccc" }} />
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        All Reviews
      </Typography>
      <Box component="ul" sx={{ p: 0, m: 0, listStyle: "none" }}>
        {reviews.map((review, index) => (
          <Box key={index} sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
            <Avatar sx={{ mr: 2 }}>{review.name[0]}</Avatar>
            <Box sx={{ flex: 1 }}>
              <Typography fontWeight="bold">{review.name}</Typography>
              <Typography variant="caption" color="textSecondary">
                {review.date}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Review text popular belief, Lorem Ipsum is simply dummy text.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", ml: "auto" }}>
              <Typography fontWeight="bold">{review.rating}</Typography>
              <StarIcon sx={{ color: "#FFB400", ml: 0.5 }} />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

// Main Export: Combined Layout
export default function StarDetail() {
  return (
    <Box sx={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      <StarDetailsHeader />
      <Box sx={{ p: 2 }}>
        {/* New Star Button */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          <Button
            variant="contained"
            sx={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
          >
            Add New Star
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            alignItems: "flex-start",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <ProfileCard />
            <Box sx={{ mt: 4 }}>
              <StarDetailsInfo />
            </Box>
            <Box sx={{ mt: 4 }}>
              <Platforms />
            </Box>
          </Box>
          <Box sx={{ flex: 1 }}>
            <PricePlansAndReviews />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
