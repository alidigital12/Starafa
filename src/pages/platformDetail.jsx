import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Button,
  Box,
  Avatar,
  Tooltip,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

/**
 * Props:
 * - open (boolean): whether dialog is open
 * - onClose (function): called when user closes the dialog
 * - onEdit (function): called when "Edit Platform" is clicked
 * - onDelete (function): called when "Delete Platform" is clicked
 * - platform (object): data about the selected platform
 *    e.g. { name: 'Instagram', icon: 'url', followers: '70.4 Million', posts: '3.4K', link: '...' }
 */
export default function PlatformDetail({
  open,
  onClose,
  onEdit,
  onDelete,
  platform,
}) {
  if (!platform) {
    // If there's no platform data yet, return null or a minimal placeholder
    return null;
  }

  const { name, icon, followers, posts, link } = platform;

  // Copy-to-clipboard handler
  const handleCopy = () => {
    if (link) {
      navigator.clipboard.writeText(link);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: '540px',
          height: '528px',
          borderRadius: '8px',
          p: 2,
          position: 'relative',
          overflow: 'visible',
        },
      }}
    >
      {/* Close Icon (top-right) */}
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
        }}
      >
        <CloseIcon />
      </IconButton>

      {/* Top Circle with platform icon */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 3,
          mb: 2,
        }}
      >
        <Avatar
          src={icon}
          alt={name}
          sx={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            boxShadow: 3,
          }}
        />
      </Box>

      {/* Title */}
      <DialogTitle
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          p: 0,
          mb: 2,
        }}
      >
        {name}
      </DialogTitle>

      <DialogContent sx={{ textAlign: 'center' }}>
        {/* Platform Name */}
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="body2"
            sx={{ color: '#6b6b6b', fontWeight: 500 }}
          >
            Platform Name
          </Typography>
          <Typography sx={{ fontWeight: 600 }}>{name}</Typography>
        </Box>

        {/* Total Followers */}
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="body2"
            sx={{ color: '#6b6b6b', fontWeight: 500 }}
          >
            Total Followers
          </Typography>
          <Typography sx={{ fontWeight: 600 }}>{followers}</Typography>
        </Box>

        {/* Total Posts */}
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="body2"
            sx={{ color: '#6b6b6b', fontWeight: 500 }}
          >
            Total Posts
          </Typography>
          <Typography sx={{ fontWeight: 600 }}>{posts}</Typography>
        </Box>

        {/* Account Link + Copy button */}
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="body2"
            sx={{ color: '#6b6b6b', fontWeight: 500, mb: 0.5 }}
          >
            Account Link
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Typography
              variant="body2"
              sx={{ wordBreak: 'break-all', maxWidth: '80%' }}
            >
              {link}
            </Typography>
            {link && (
              <Tooltip title="Copy to clipboard">
                <IconButton
                  onClick={handleCopy}
                  size="small"
                  sx={{
                    color: '#FF7A00',
                    border: '1px solid #FF7A00',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 122, 0, 0.1)',
                    },
                  }}
                >
                  <ContentCopyIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            )}
          </Box>
        </Box>
      </DialogContent>

      {/* Bottom Buttons */}
      <DialogActions sx={{ justifyContent: 'center', mb: 2 }}>
        <Button
          variant="outlined"
          onClick={onEdit}
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
          Edit Platform
        </Button>
        <Button
          variant="contained"
          onClick={onDelete}
          sx={{
            backgroundColor: '#FF7A00',
            '&:hover': {
              backgroundColor: '#e86d00',
            },
          }}
        >
          Delete Platform
        </Button>
      </DialogActions>
    </Dialog>
  );
}
