import React, { useRef, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  Typography,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";

function AddCategory({ open, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  // When the image placeholder is clicked, trigger the hidden file input
  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // When a file is selected, store its preview URL in state
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      // Optionally, you can also store the file itself for uploading later
    }
  };

  const handleAddCategory = () => {
    // TODO: Add your logic here (e.g., saving the new category along with the selected image)
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{ sx: { borderRadius: 2, overflow: "visible", p: 2 } }}
    >
      <DialogTitle
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.25rem",
          pb: 1,
        }}
      >
        Add New Category
      </DialogTitle>

      <DialogContent sx={{ textAlign: "center" }}>
        {/* Clickable image placeholder */}
        <Box
          sx={{
            mx: "auto",
            mt: 1,
            mb: 2,
            width: 80,
            height: 80,
            border: "2px dashed #ccc",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#999",
            cursor: "pointer",
            overflow: "hidden",
          }}
          onClick={handleImageClick}
        >
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Selected"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <ImageIcon fontSize="large" />
          )}
        </Box>

        {/* Hidden file input */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />

        <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
          Add Category Name
        </Typography>

        <TextField
          fullWidth
          placeholder="eg-Entertainment"
          variant="outlined"
          InputProps={{ style: { borderRadius: 8 } }}
        />
      </DialogContent>

      <DialogActions
        sx={{
          justifyContent: "center",
          mt: 1,
          pb: 2,
          gap: 2,
        }}
      >
        <Button
          variant="outlined"
          onClick={onClose}
          sx={{
            textTransform: "none",
            borderColor: "#000",
            color: "#000",
            "&:hover": { borderColor: "#000", backgroundColor: "#f5f5f5" },
            borderRadius: 2,
            px: 3,
          }}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleAddCategory}
          sx={{
            textTransform: "none",
            backgroundColor: "#FF7A00",
            "&:hover": { backgroundColor: "#FF7A00" },
            borderRadius: 2,
            px: 3,
          }}
        >
          Add Category
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddCategory;
