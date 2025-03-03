import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
  TextField,
  MenuItem,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import HomeIcon from "@mui/icons-material/Home";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useNavigate } from "react-router-dom";

// Header for the SetPlatforms page
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
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton size="small" aria-label="back" sx={{ p: 0, mr: 1 }} onClick={() => navigate(-1)}>
          <KeyboardBackspaceIcon sx={{ color: "#838383", fontSize: "20px" }} />
        </IconButton>
        <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "16px", color: "#838383" }}>
          Dashboard
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <HomeIcon sx={{ color: "#F9792D", fontSize: "20px", mr: 0.5 }} />
        <KeyboardArrowRightIcon sx={{ color: "#838383", fontSize: "20px", mx: 0.5 }} />
        <Typography sx={{ color: "#838383", fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "16px" }}>
          Add new star
        </Typography>
        <KeyboardArrowRightIcon sx={{ color: "#838383", fontSize: "20px", mx: 0.5 }} />
        <Typography sx={{ color: "#838383", fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "16px" }}>
          Add Platforms
        </Typography>
      </Box>
    </Box>
  );
}

// Platform Form Component
function PlatformForm() {
  const [platforms, setPlatforms] = React.useState([
    { id: 1, platform: "YouTube", posts: "", followers: "", link: "" },
  ]);

  const platformsList = [
    "YouTube",
    "Facebook",
    "Instagram",
    "Twitter",
    "TikTok",
    "Snack Video",
    "Twitch",
    "SnapChat",
  ];

  const addPlatform = () => {
    setPlatforms((prev) => [
      ...prev,
      { id: Date.now(), platform: "", posts: "", followers: "", link: "" },
    ]);
  };

  const removePlatform = (id) => {
    setPlatforms((prev) => prev.filter((p) => p.id !== id));
  };

  const handleChange = (id, field, value) => {
    setPlatforms((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  };

  return (
    <Container sx={{ maxWidth: "1089px", p: 3, width: "100%", overflowX: "auto" }}>
      <Box sx={{ backgroundColor: "#F9792D", p: 2, borderRadius: "5px" }}>
        <Typography variant="h6" color="white">
          Set Platforms
        </Typography>
      </Box>
      {platforms.map((p, index) => (
        <Card key={p.id} sx={{ my: 2, p: 2, width: "100%" }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              {`Platform ${index + 1}`}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="Select Platform"
                  fullWidth
                  value={p.platform}
                  onChange={(e) => handleChange(p.id, "platform", e.target.value)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      height: "52px",
                      borderRadius: "8px",
                    },
                  }}
                >
                  {platformsList.map((option) => (
                    <MenuItem key={option} value={option} sx={{ "&:hover": { backgroundColor: "#FFECE0" } }}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Total Followers"
                  placeholder="eg - 77.4 M"
                  fullWidth
                  value={p.followers}
                  onChange={(e) => handleChange(p.id, "followers", e.target.value)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      height: "52px",
                      borderRadius: "8px",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Total Posts"
                  placeholder="eg - 4.5 K"
                  fullWidth
                  value={p.posts}
                  onChange={(e) => handleChange(p.id, "posts", e.target.value)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      height: "52px",
                      borderRadius: "8px",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Account Link"
                  placeholder="Paste account link"
                  fullWidth
                  value={p.link}
                  onChange={(e) => handleChange(p.id, "link", e.target.value)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      height: "52px",
                      borderRadius: "8px",
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton sx={{ color: "#F9792D" }}>
                          <ContentCopyIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            {platforms.length > 1 && index > 0 && (
              <IconButton color="error" onClick={() => removePlatform(p.id)} sx={{ mt: 2 }}>
                <DeleteIcon />
              </IconButton>
            )}
          </CardContent>
        </Card>
      ))}
      <Typography
        sx={{ color: "#F9792D", cursor: "pointer", mt: 2, textAlign: "right" }}
        onClick={addPlatform}
      >
        Add New Platform?
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 3 }}>
        <Button variant="outlined" sx={{ color: "#F9792D", borderColor: "#F9792D", width: "167px", height: "50px" }}>
          Cancel
        </Button>
        <Button variant="contained" sx={{ backgroundColor: "#F9792D", width: "167px", height: "50px" }}>
          Setup Profile
        </Button>
      </Box>
    </Container>
  );
}

export default function SetPlatforms() {
  return (
    <Box sx={{ p: 2 }}>
      <StarDetailsHeader />
      <Box sx={{ mt: 3 }}>
        <PlatformForm />
      </Box>
    </Box>
  );
}
