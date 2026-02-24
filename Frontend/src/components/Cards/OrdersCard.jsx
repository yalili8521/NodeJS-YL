import { Box, Typography, Paper } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

export default function OrdersCard() {
  return (
    <Paper sx={{ p: 1.5, height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: 1,
            bgcolor: '#00CFE815',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Typography sx={{ fontSize: '1.125rem' }}>🛒</Typography>
        </Box>
        <MoreVertIcon sx={{ color: 'text.secondary', fontSize: 18, cursor: 'pointer' }} />
      </Box>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 0.25, fontSize: '0.75rem' }}>
        Order
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.25, fontSize: '1.25rem' }}>
        3,286
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <TrendingDownIcon sx={{ fontSize: 14, color: '#FF4C51' }} />
        <Typography variant="body2" sx={{ color: '#FF4C51', fontWeight: 600, fontSize: '0.75rem' }}>
          13.24%
        </Typography>
      </Box>
    </Paper>
  );
}
