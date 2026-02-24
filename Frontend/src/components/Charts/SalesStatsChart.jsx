import { Box, Typography, Paper, CircularProgress } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function SalesStatsChart() {
  return (
    <Paper sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 0.5 }}>
        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>
          Sales Stats
        </Typography>
        <MoreVertIcon sx={{ color: 'text.secondary', fontSize: 18, cursor: 'pointer' }} />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', flex: 1, alignItems: 'center' }}>
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
          <CircularProgress
            variant="determinate"
            value={75}
            size={120}
            thickness={8}
            sx={{
              color: '#56CA00',
              '& .MuiCircularProgress-circle': {
                strokeLinecap: 'round'
              }
            }}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column'
            }}
          >
            <TrendingUpIcon sx={{ fontSize: 26, color: '#56CA00', mb: 0.5 }} />
            <Typography variant="h4" sx={{ fontWeight: 700, fontSize: '1.75rem', color: '#56CA00' }}>
              75%
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.6875rem' }}>
              Sales
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-around', pt: 0.75, borderTop: '1px solid #F0F0F0' }}>
        <Box sx={{ textAlign: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25, justifyContent: 'center' }}>
            <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: '#56CA00' }} />
            <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.625rem' }}>
              Conversion Ratio
            </Typography>
          </Box>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25, justifyContent: 'center' }}>
            <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: '#E0E0E0' }} />
            <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.625rem' }}>
              Total requirements
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
