import {
  Box,
  Typography,
  Paper,
} from '@mui/material';

export default function AccessControlPage() {
  return (
    <Box sx={{ maxWidth: 1440, mx: 'auto', width: '100%' }}>
      <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
        Access Control
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Manage user roles and permissions
      </Typography>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: 3
      }}>
        {/* Common Card */}
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Common
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              No ability is required to view this card
            </Typography>
            <Typography variant="body2" sx={{ color: '#826AF9' }}>
              This card is visible to 'user' and 'admin' both
            </Typography>
          </Paper>
        </Box>

        {/* Analytics Card */}
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Analytics
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              User with 'Analytics' subject's 'Read' ability can view this card
            </Typography>
            <Typography variant="body2" sx={{ color: '#FF9F43' }}>
              This card is visible to 'admin' only
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
