import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from '@mui/material';

export default function EditStar({
  open,
  onClose,
  onSave,
  starName = 'Spencer X',
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: '600px',
          borderRadius: '8px',
          padding: '16px',
        },
      }}
    >
      <DialogTitle sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        Edit Star Profile
      </DialogTitle>
      <DialogContent sx={{ textAlign: 'center', mt: 2 }}>
        <Typography variant="body1">
          Edit details for <strong>{starName}</strong>
        </Typography>
        {/* Add your form fields for editing here */}
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', mt: 2 }}>
        <Button
          variant="outlined"
          onClick={onClose}
          sx={{
            mr: 2,
            color: '#FF7A00',
            borderColor: '#FF7A00',
            '&:hover': {
              backgroundColor: 'rgba(255, 122, 0, 0.08)',
            },
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={onSave}
          sx={{
            backgroundColor: '#FF7A00',
            '&:hover': {
              backgroundColor: '#e86d00',
            },
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
