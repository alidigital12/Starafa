import React from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const DeletePlatform = ({ open, onClose, onConfirm, platformName = 'YouTube' }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ textAlign: 'center', fontWeight: 'medium' }}>
        Remove Platform
      </DialogTitle>
      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: 2,
        }}
      >
        <Box
          sx={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            backgroundColor: '#f5f5f5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2,
          }}
        >
          <IconButton disabled>
            <DeleteOutlineIcon fontSize="large" />
          </IconButton>
        </Box>
        <Typography variant="body1" align="center">
          Are you sure you want to remove <strong>{platformName}</strong> from your platform list?
        </Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
        <Button
          variant="outlined"
          onClick={onClose}
          sx={{
            mr: 1,
            textTransform: 'none',
            borderColor: '#FF7A00',
            color: '#FF7A00',
            '&:hover': {
              borderColor: '#FF7A00',
              backgroundColor: 'rgba(255, 122, 0, 0.04)',
            },
          }}
        >
          No
        </Button>
        <Button
          variant="contained"
          onClick={onConfirm}
          sx={{
            textTransform: 'none',
            backgroundColor: '#FF7A00',
            '&:hover': {
              backgroundColor: '#e56e00',
            },
          }}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeletePlatform;
