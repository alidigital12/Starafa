import React from "react";
import {
  TextField,
  Button,
  Box,
  Grid,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <Grid
      container
      sx={{
        minHeight: "100vh",
        flexDirection: { xs: "column", md: "row" },
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          minHeight: "50vh",
          padding: { xs: 2, md: 4 },
          width: "100%",
        }}
      >
        <img
          src="./src/images/Login-Logo.png"
          alt="Login Illustration"
          style={{
            width: "95%",
            maxWidth: "400px",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F6F6F6",
          minHeight: "50vh",
          padding: { xs: 3, md: 5 },
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "500px", // Increased width
            textAlign: "left",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 750, mb: 1, color:"#000719", fontfamily: "Inter", fontSize:"1.8rem"  }}>
            Login
          </Typography>
          <Typography
            variant="body2"
            sx={{ marginBottom: 3, color: "#6B7283", fontSize:"500", fontfamily: "Inter", fontWeight: 600 }}
          >
            Please fill out the login form with accurate information to get
            access to your account successfully.
          </Typography>
          <Typography sx={{ fontWeight: 400, mb: 1 }}>User ID</Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter your User ID"
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": { borderRadius: "6px" },
              width: "100%",
            }} // Adjusted width
          />
          <Typography sx={{ fontWeight: 100, mb: 1 }}>Password</Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter your Password"
            type={showPassword ? "text" : "password"}
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": { borderRadius: "6px" },
              width: "100%",
            }} // Adjusted width
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              height: 50,
              fontSize: "1rem",
              fontWeight: 400,
              backgroundColor: "#F9792D",
              color: "#FFF",
              "&:hover": { backgroundColor: "#E66A00" },
              width: "100%", // Adjusted width
            }}
          >
            Login
          </Button>

          <Typography
            variant="body2"
            sx={{ mt: 3, textAlign: "center", color: "#969BA7" }}
          >
            By logging in, I agree to the{" "}
            <a href="#" style={{ color: "#007bff", textDecoration: "none" }}>
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" style={{ color: "#007bff", textDecoration: "none" }}>
              Privacy Policy
            </a>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
