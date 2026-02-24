import { Box, Typography, Paper, CircularProgress } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function GeneratedLeadsCard() {
  return (
    <Paper sx={{ p: 1.5, height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>
          Generated Leads
        </Typography>
        <MoreVertIcon sx={{ color: 'text.secondary', fontSize: 18, cursor: 'pointer' }} />
      </Box>

      <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.6875rem', display: 'block', mb: 1.5 }}>
        Monthly Report
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
          <CircularProgress
            variant="determinate"
            value={25}
            size={60}
            thickness={6}
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
            <Typography variant="body1" sx={{ fontWeight: 700, color: '#56CA00', fontSize: '0.875rem' }}>
              25%
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.5625rem' }}>
              Increase
            </Typography>
          </Box>
        </Box>
      </Box>

      <Typography variant="h6" sx={{ fontWeight: 700, textAlign: 'center', mb: 0.25, fontSize: '1rem' }}>
        4,234
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
        <Typography variant="body2" sx={{ color: '#56CA00', fontWeight: 600, fontSize: '0.75rem' }}>
          ↑ 12.8%
        </Typography>
      </Box>
    </Paper>
  );
}
