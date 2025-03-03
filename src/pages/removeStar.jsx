import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  IconButton,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function RemoveStar({
  open,
  onClose,
  onConfirm,
  starName = 'Spencer X',
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: '540px',
          height: '310px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '16px',
        },
      }}
    >
      {/* Trash icon at the top (optional) */}
      <IconButton disableRipple disableFocusRipple sx={{ mb: 1 }}>
        <DeleteOutlineIcon fontSize="large" sx={{ color: '#000' }} />
      </IconButton>

      <DialogTitle
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          padding: 0,
          marginBottom: 2,
        }}
      >
        Remove Star
      </DialogTitle>

      <DialogContent sx={{ textAlign: 'center', padding: 0, marginBottom: 3 }}>
        <Typography variant="body1">
          Are you sure you want to remove <strong>{starName}</strong> from your stars list?
        </Typography>
      </DialogContent>

      <DialogActions sx={{ justifyContent: 'center' }}>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{
            color: '#FF7A00',
            borderColor: '#FF7A00',
            mr: 2,
            '&:hover': {
              borderColor: '#FF7A00',
              backgroundColor: 'rgba(255, 122, 0, 0.08)',
            },
          }}
        >
          No
        </Button>

        <Button
          onClick={onConfirm}
          variant="contained"
          sx={{
            backgroundColor: '#FF7A00',
            '&:hover': {
              backgroundColor: '#e86d00',
            },
          }}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
