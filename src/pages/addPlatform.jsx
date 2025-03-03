import React from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const AddPlatform = ({ open, onClose, onAdd }) => {
  const [platformName, setPlatformName] = React.useState('');

  const handleAddPlatform = () => {
    if (platformName.trim()) {
      onAdd(platformName.trim());
      setPlatformName('');
      onClose();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      // Remove fullWidth and maxWidth to allow custom sizing
      PaperProps={{
        sx: {
          width: '598px',
          height: '483px',
        },
      }}
    >
      <DialogTitle sx={{ textAlign: 'center' }}>Add New Platform</DialogTitle>
      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: 2,
        }}
      >
        {/* Circular icon logo */}
        <Box
          sx={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            backgroundColor: '#f5f5f5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 3,
          }}
        >
          <IconButton disabled sx={{ color: '#9e9e9e' }}>
            <AddPhotoAlternateIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Box>
        {/* Styled TextField */}
        <TextField
          label="Add Platform Name"
          placeholder="eg-YouTube"
          variant="outlined"
          fullWidth
          value={platformName}
          onChange={(e) => setPlatformName(e.target.value)}
          sx={{
            // Label style
            '& .MuiInputLabel-root': {
              color: '#1A1A1A',
              fontWeight: 500,
            },
            // Ensure label stays dark on focus
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#1A1A1A',
            },
            // Outlined input styles
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              '& fieldset': {
                borderColor: '#C4C4C4',
              },
              '&:hover fieldset': {
                borderColor: '#A6A6A6',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#FF6600',
              },
            },
            // Placeholder style
            '& input::placeholder': {
              color: '#9e9e9e',
              opacity: 1,
            },
          }}
        />
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
        {/* Cancel button with orange outline and fixed width/height */}
        <Button
          variant="outlined"
          onClick={onClose}
          sx={{
            mr: 1,
            width: '148px',
            height: '52px',
            color: '#FF6600',
            borderColor: '#FF6600',
            '&:hover': {
              borderColor: '#FF6600',
              backgroundColor: 'rgba(255, 102, 0, 0.08)',
            },
          }}
        >
          Cancel
        </Button>
        {/* Add Platform button with fixed width/height, orange background, and white text */}
        <Button
          variant="contained"
          onClick={handleAddPlatform}
          sx={{
            width: '148px',
            height: '52px',
            backgroundColor: '#FF6600',
            color: '#FFFFFF',
            '&:hover': {
              backgroundColor: '#FF6600',
              opacity: 0.9,
            },
          }}
        >
          Add Platform
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddPlatform;
