import { Box, Typography, Paper } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function SessionsCard() {
  return (
    <Paper sx={{ p: 1.5, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: 1,
            bgcolor: '#696CFF15',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Typography sx={{ fontSize: '1.125rem' }}>📊</Typography>
        </Box>
        <MoreVertIcon sx={{ color: 'text.secondary', fontSize: 18, cursor: 'pointer' }} />
      </Box>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 0.25, fontSize: '0.75rem' }}>
        Sessions
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.25, fontSize: '1.25rem' }}>
        2845
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
        <TrendingUpIcon sx={{ fontSize: 14, color: '#FF4C51' }} />
        <Typography variant="body2" sx={{ color: '#FF4C51', fontWeight: 600, fontSize: '0.75rem' }}>
          13.24%
        </Typography>
      </Box>

      {/* Line chart */}
      <Box sx={{ flex: 1, position: 'relative' }}>
        <svg width="100%" height="30" viewBox="0 0 100 30" preserveAspectRatio="none">
          <polyline
            points="0,20 15,18 30,21 45,15 60,19 75,13 90,10 100,8"
            fill="none"
            stroke="#FFB400"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
          <polyline
            points="0,20 15,18 30,21 45,15 60,19 75,13 90,10 100,8 100,30 0,30"
            fill="url(#sessionsGradient)"
          />
          <defs>
            <linearGradient id="sessionsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFB400" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FFB400" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </Box>
    </Paper>
  );
}
