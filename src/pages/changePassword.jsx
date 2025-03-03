import React, { useState } from "react";
import {
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState({
    old: false,
    new: false,
    confirm: false,
  });

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        height: "500px",
        background: "#FFFFFF",
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        mx: "auto",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          background: "#F9792D",
          
          height: "64px",
          display: "flex",
          alignItems: "center",
          paddingLeft: "20px",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      >
        <Typography sx={{ fontSize: "18px", fontWeight: "bold", color: "#fff"  }}>
          Change Password
        </Typography>
      </Box>

      {/* Form Fields */}
      <Box sx={{ padding: "20px" }}>
        <Grid container spacing={3}>
          {/* Old Password */}
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontSize: "14px", fontWeight: "bold", marginBottom: "10px" }}>
              Old Password
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="eg - 12345678"
              type={showPassword.old ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => togglePasswordVisibility("old")}>
                      {showPassword.old ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          {/* New Password */}
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontSize: "14px", fontWeight: "bold", marginBottom: "10px" }}>
              New Password
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="eg - 12345678"
              type={showPassword.new ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => togglePasswordVisibility("new")}>
                      {showPassword.new ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          {/* Confirm Password */}
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontSize: "14px", fontWeight: "bold", marginBottom: "10px" }}>
              Confirm New Password
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="eg - 12345678"
              type={showPassword.confirm ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => togglePasswordVisibility("confirm")}>
                      {showPassword.confirm ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>

        {/* Buttons */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 3 }}>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#FF7300",
              color: "#FF7300",
              width: "160px",
              height: "50px",
              fontWeight: "520",
              whiteSpace: "nowrap",
              "&:hover": { backgroundColor: "#FFF2E0" },
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{
              background: "#F9792D",
              color: "#FFFFFF",
              width: "169px",
              height: "50px",
              fontWeight: "520",
              whiteSpace: "nowrap",
              "&:hover": { backgroundColor: "#E66300" },
            }}
          >
            Change Password
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ChangePassword;
