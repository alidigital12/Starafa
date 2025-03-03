import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

function RemoveCategoryDialog({ open, onClose, categoryName = "" }) {
  const handleNo = () => {
    onClose();
  };

  const handleYes = () => {
    // TODO: Add your removal logic here (e.g., deleting the category)
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
        <Box
          sx={{
            mx: "auto",
            mb: 1,
            width: 60,
            height: 60,
            backgroundColor: "#F7F7F7",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FF7A00",
          }}
        >
          <DeleteOutlineOutlinedIcon fontSize="large" />
        </Box>
        Remove Category
      </DialogTitle>

      <DialogContent sx={{ textAlign: "center" }}>
        <Typography variant="body1" sx={{ mt: 1 }}>
          Are you sure you want to remove{" "}
          <strong>{categoryName}</strong> from your categories list?
        </Typography>
      </DialogContent>

      <DialogActions
        sx={{
          justifyContent: "center",
          mt: 2,
          pb: 2,
          gap: 2,
        }}
      >
        <Button
          variant="outlined"
          onClick={handleNo}
          sx={{
            textTransform: "none",
            borderColor: "#000",
            color: "#000",
            "&:hover": { borderColor: "#000", backgroundColor: "#f5f5f5" },
            borderRadius: 2,
            px: 3,
          }}
        >
          No
        </Button>

        <Button
          variant="contained"
          onClick={handleYes}
          sx={{
            textTransform: "none",
            backgroundColor: "#FF7A00",
            "&:hover": { backgroundColor: "#FF7A00" },
            borderRadius: 2,
            px: 3,
          }}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default RemoveCategoryDialog;
