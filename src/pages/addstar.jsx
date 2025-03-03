import React, { useState, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  MenuItem,
  InputAdornment,
  Button,
  Select,
  IconButton
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";

/** Top Header Component (White Bar) */
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
        backgroundColor: "#FFFFFF"
      }}
    >
      {/* Left side: Back arrow + "Dashboard" */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton
          size="small"
          aria-label="back"
          sx={{ p: 0, mr: 1 }}
          onClick={() => navigate(-1)}
        >
          <KeyboardBackspaceIcon
            sx={{
              color: "#838383",
              fontSize: "20px"
            }}
          />
        </IconButton>
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "16px",
            color: "#838383"
          }}
        >
          Dashboard
        </Typography>
      </Box>

      {/* Right side: Home icon -> arrow -> "Set New Star Profile" */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <HomeIcon
          sx={{
            color: "#F9792D",
            fontSize: "20px",
            mr: 0.5
          }}
        />
        <KeyboardArrowRightIcon
          sx={{
            color: "#959595",
            fontSize: "20px",
            mx: 0.5
          }}
        />
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "16px",
            color: "#959595"
          }}
        >
          Set New Star Profile
        </Typography>
      </Box>
    </Box>
  );
}

/** Main Component: Includes the new top header + "Set New Star Profile" form */
export default function SetNewStarProfile() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [phoneCountryCode, setPhoneCountryCode] = useState("+1");
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = function (e) {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePhoneCountryCodeChange = (event) => {
    setPhoneCountryCode(event.target.value);
  };

  return (
    <Box sx={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      {/* 1. White header at the top */}
      <StarDetailsHeader />

      {/* 2. Orange header: "Set New Star Profile" */}
      <Box
        sx={{
          backgroundColor: "#FF7F2A",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 1
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            color: "#FFFFFF"
          }}
        >
          Set New Star Profile
        </Typography>
      </Box>

      {/* 3. Profile Image Placeholder */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Box sx={{ position: "relative" }}>
          {/* Outer circle with orange border */}
          <Box
            sx={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              border: "2px solid #FF7F2A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FFFFFF"
            }}
          >
            {/* Inner circle with light-blue background */}
            <Box
              sx={{
                width: 100,
                height: 100,
                borderRadius: "50%",
                backgroundColor: "#D0E8FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Box
                component="img"
                src={
                  selectedImage
                    ? selectedImage
                    : "https://cdn-icons-png.flaticon.com/512/145/145843.png"
                }
                alt="Profile silhouette"
                sx={{
                  width: "60%",
                  height: "60%",
                  objectFit: "contain"
                }}
              />
            </Box>
          </Box>

          {/* Small orange plus icon in bottom-right corner */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(25%, 25%)",
              width: 24,
              height: 24,
              borderRadius: "50%",
              backgroundColor: "#FF7F2A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer"
            }}
            onClick={handleIconClick}
          >
            <AddIcon sx={{ color: "#FFFFFF", fontSize: 16 }} />
          </Box>
          {/* Hidden file input */}
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        </Box>
      </Box>

      {/* 4. Label below profile image */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            color: "#000000"
          }}
        >
          Add Profile Image
        </Typography>
      </Box>

      {/* 5. Main Form Section */}
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Box component="form" noValidate autoComplete="off">
          <Grid container spacing={2}>
            {/* Star Name */}
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  mb: 1
                }}
              >
                Star Name
              </Typography>
              <TextField placeholder="Star full name" variant="outlined" fullWidth />
            </Grid>

            {/* User ID */}
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  mb: 1
                }}
              >
                User ID
              </Typography>
              <TextField placeholder="eg @spencerx" variant="outlined" fullWidth />
            </Grid>

            {/* Email */}
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  mb: 1
                }}
              >
                Email
              </Typography>
              <TextField
                placeholder="Enter email"
                variant="outlined"
                fullWidth
                type="email"
              />
            </Grid>

            {/* Phone Number */}
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  mb: 1
                }}
              >
                Phone number
              </Typography>
              <TextField
                placeholder="123456789"
                variant="outlined"
                fullWidth
                type="tel"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Select
                        value={phoneCountryCode}
                        onChange={handlePhoneCountryCodeChange}
                        variant="standard"
                        disableUnderline
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mr: 1
                        }}
                      >
                        <MenuItem value="+1">
                          <img
                            src="https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
                            alt="US Flag"
                            style={{ width: 20, height: 20, marginRight: 8 }}
                          />
                          +1
                        </MenuItem>
                        <MenuItem value="+92">
                          <img
                            src="https://purecatamphetamine.github.io/country-flag-icons/3x2/PK.svg"
                            alt="Pakistan Flag"
                            style={{ width: 20, height: 20, marginRight: 8 }}
                          />
                          +92
                        </MenuItem>
                        <MenuItem value="+44">
                          <img
                            src="https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"
                            alt="UK Flag"
                            style={{ width: 20, height: 20, marginRight: 8 }}
                          />
                          +44
                        </MenuItem>
                      </Select>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>

            {/* Age */}
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  mb: 1
                }}
              >
                Age
              </Typography>
              <TextField placeholder="24 year" variant="outlined" fullWidth />
            </Grid>

            {/* Gender */}
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  mb: 1
                }}
              >
                Select Gender
              </Typography>
              <TextField select variant="outlined" fullWidth defaultValue="">
                <MenuItem value="" disabled>
                  Select Gender
                </MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>
            </Grid>

            {/* Major Category */}
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  mb: 1
                }}
              >
                Select Major Category
              </Typography>
              <TextField select variant="outlined" fullWidth defaultValue="Islamic">
                <MenuItem value="Islamic">Islamic</MenuItem>
                <MenuItem value="Category2">Category2</MenuItem>
                <MenuItem value="Category3">Category3</MenuItem>
              </TextField>
            </Grid>

            {/* Other Categories (Optional) */}
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  mb: 1
                }}
              >
                Other Categories (Optional)
              </Typography>
              <TextField select variant="outlined" fullWidth defaultValue="">
                <MenuItem value="" disabled>
                  Select categories
                </MenuItem>
                <MenuItem value="Option1">Option1</MenuItem>
                <MenuItem value="Option2">Option2</MenuItem>
              </TextField>
            </Grid>

            {/* Password */}
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  mb: 1
                }}
              >
                Password
              </Typography>
              <TextField
                placeholder="eg - 12345678"
                variant="outlined"
                fullWidth
                type="password"
              />
            </Grid>

            {/* Confirm Password */}
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  mb: 1
                }}
              >
                Confirm Password
              </Typography>
              <TextField
                placeholder="eg - 12345678"
                variant="outlined"
                fullWidth
                type="password"
              />
            </Grid>

            {/* Language */}
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  mb: 1
                }}
              >
                Language
              </Typography>
              <TextField select variant="outlined" fullWidth defaultValue="Urdu">
                <MenuItem value="Urdu">Urdu</MenuItem>
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="French">French</MenuItem>
              </TextField>
            </Grid>

            {/* Country */}
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  mb: 1
                }}
              >
                Country
              </Typography>
              <TextField select variant="outlined" fullWidth defaultValue="Pakistan">
                <MenuItem value="Pakistan">Pakistan</MenuItem>
                <MenuItem value="USA">USA</MenuItem>
                <MenuItem value="UK">UK</MenuItem>
              </TextField>
            </Grid>

            {/* State (Optional) */}
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  mb: 1
                }}
              >
                State (Optional)
              </Typography>
              <TextField select variant="outlined" fullWidth defaultValue="Punjab">
                <MenuItem value="Punjab">Punjab</MenuItem>
                <MenuItem value="Sindh">Sindh</MenuItem>
                <MenuItem value="KPK">KPK</MenuItem>
                <MenuItem value="Balochistan">Balochistan</MenuItem>
              </TextField>
            </Grid>

            {/* City (Optional) */}
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  mb: 1
                }}
              >
                City (Optional)
              </Typography>
              <TextField select variant="outlined" fullWidth defaultValue="Lahore">
                <MenuItem value="Lahore">Lahore</MenuItem>
                <MenuItem value="Karachi">Karachi</MenuItem>
                <MenuItem value="Islamabad">Islamabad</MenuItem>
              </TextField>
            </Grid>

            {/* Address (Optional) */}
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  mb: 1
                }}
              >
                Address (Optional)
              </Typography>
              <TextField
                placeholder="House #123, Block B"
                variant="outlined"
                fullWidth
              />
            </Grid>

            {/* About (Optional) */}
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  mb: 1
                }}
              >
                About (Optional)
              </Typography>
              <TextField
                placeholder="Write about star"
                variant="outlined"
                fullWidth
                multiline
                minRows={3}
              />
            </Grid>

            {/* Keywords (Optional) */}
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  mb: 1
                }}
              >
                Keywords (Optional)
              </Typography>
              <TextField placeholder="Add keywords" variant="outlined" fullWidth />
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* 6. Add Price Plans (Optional) */}
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            mb: 2
          }}
        >
          Add Price Plans (Optional)
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              {/* Audio Call */}
              <Grid item xs={12}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    mb: 1
                  }}
                >
                  Audio Call
                </Typography>
                <TextField placeholder="eg - $35/min" variant="outlined" fullWidth />
              </Grid>

              {/* Recorded video */}
              <Grid item xs={12}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    mb: 1
                  }}
                >
                  Recorded video
                </Typography>
                <TextField placeholder="eg - $35/min" variant="outlined" fullWidth />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              {/* Video Call */}
              <Grid item xs={12}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    mb: 1
                  }}
                >
                  Video Call
                </Typography>
                <TextField placeholder="eg - $35/min" variant="outlined" fullWidth />
              </Grid>

              {/* Recorded audio */}
              <Grid item xs={12}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    mb: 1
                  }}
                >
                  Recorded audio
                </Typography>
                <TextField placeholder="eg - $35/min" variant="outlined" fullWidth />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* 7. Action Buttons */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
          <Button
            variant="outlined"
            onClick={() => navigate(-1)}
            sx={{
              mr: 2,
              color: "#FF7F2A",
              borderColor: "#FF7F2A",
              textTransform: "none",
              width: "167px",
              height: "50px",
              borderRadius: "8px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              "&:hover": {
                borderColor: "#FF7F2A"
              }
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF7F2A",
              color: "#FFFFFF",
              textTransform: "none",
              width: "167px",
              height: "50px",
              borderRadius: "8px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              "&:hover": {
                backgroundColor: "#FF7F2A"
              }
            }}
          >
            Save & No
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
