import { Box, Typography, Paper, Button } from '@mui/material';
import { useSelector } from 'react-redux';

export default function CongratulationsKatieCard() {
  const { user } = useSelector((state) => state.auth);
  const userName = user?.name?.split(' ')[0] || 'Katie';

  return (
    <Paper sx={{ p: 2, height: '100%', background: 'white', color: 'black', position: 'relative', overflow: 'hidden' }}>
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="body2" sx={{ mb: 0.5, fontSize: '0.75rem', opacity: 0.9 }}>
          Congratulations {userName}!
        </Typography>
        <Typography variant="caption" sx={{ fontSize: '0.6875rem', opacity: 0.8, display: 'block', mb: 2 }}>
          Best seller of the month
        </Typography>

        <Typography variant="h4" sx={{ fontWeight: 700, fontSize: '1.75rem', mb: 0.5, color: '#6C63FF' }}>
          $48.9k
        </Typography>

        <Typography variant="caption" sx={{ fontSize: '0.6875rem', opacity: 0.8, display: 'block', mb: 2 }}>
          78% of target 🎯
        </Typography>

        <Button
          variant="contained"
          size="small"
          sx={{
            bgcolor: '#6c63ff',
            color: 'white',
            fontSize: '0.625rem',
            textTransform: 'uppercase',
            fontWeight: 600,
            px: 2,
            py: 0.5,
            '&:hover': {
              transform: 'translateY(-1px)'
            }
          }}
        >
          VIEW SALES
        </Button>
      </Box>

      {/* Trophy illustration */}
      <Box
        sx={{
          position: 'absolute',
          right: 20,
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: '4rem',
          opacity: 0.9
        }}
      >
        🏆
      </Box>
    </Paper>
  );
}
