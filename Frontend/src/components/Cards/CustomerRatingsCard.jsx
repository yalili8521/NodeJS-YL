import { Box, Typography, Paper } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function CustomerRatingsCard() {
  const data = [
    { month: 'Jan', value: 3.5 },
    { month: 'Feb', value: 2.8 },
    { month: 'Mar', value: 3.2 },
    { month: 'Apr', value: 3.8 },
    { month: 'May', value: 3.0 },
    { month: 'Jun', value: 3.5 },
    { month: 'Jul', value: 4.2 }
  ];

  const maxValue = 5;
  const minValue = 0;

  return (
    <Paper sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 0.5 }}>
        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>
          Customer Ratings
        </Typography>
        <MoreVertIcon sx={{ color: 'text.secondary', fontSize: 18, cursor: 'pointer' }} />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: 0.75 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, fontSize: '1.5rem' }}>
          4.0
        </Typography>
        <Box sx={{ display: 'flex', gap: 0.25 }}>
          {[1, 2, 3, 4].map((star) => (
            <StarIcon key={star} sx={{ fontSize: 14, color: '#FFB400' }} />
          ))}
          <StarBorderIcon sx={{ fontSize: 14, color: '#FFB400' }} />
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
        <Box
          sx={{
            px: 0.75,
            py: 0.125,
            bgcolor: '#696CFF15',
            borderRadius: 0.75,
            display: 'inline-flex',
            alignItems: 'center'
          }}
        >
          <Typography variant="caption" sx={{ color: '#696CFF', fontWeight: 600, fontSize: '0.6875rem' }}>
            +5.0
          </Typography>
        </Box>
        <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.6875rem' }}>
          Points from last month
        </Typography>
      </Box>

      {/* Line Chart */}
      <Box sx={{ position: 'relative', flex: 1, minHeight: 0, mb: 0.5 }}>
        <svg width="100%" height="100%" viewBox="0 0 280 80" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
          {/* Grid lines */}
          <line x1="0" y1="0" x2="280" y2="0" stroke="#E0E0E0" strokeWidth="0.5" />
          <line x1="0" y1="40" x2="280" y2="40" stroke="#E0E0E0" strokeWidth="0.5" />
          <line x1="0" y1="80" x2="280" y2="80" stroke="#E0E0E0" strokeWidth="0.5" />

          {/* Line chart */}
          <polyline
            points={data.map((item, i) => {
              const x = (i / (data.length - 1)) * 280;
              const y = 80 - ((item.value - minValue) / (maxValue - minValue)) * 80;
              return `${x},${y}`;
            }).join(' ')}
            fill="none"
            stroke="#696CFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Points */}
          {data.map((item, i) => {
            const x = (i / (data.length - 1)) * 280;
            const y = 80 - ((item.value - minValue) / (maxValue - minValue)) * 80;
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="3"
                fill="#696CFF"
                stroke="#fff"
                strokeWidth="1.5"
              />
            );
          })}
        </svg>
      </Box>

      {/* X-axis labels */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 0.25 }}>
        {data.map((item) => (
          <Typography key={item.month} variant="caption" color="text.secondary" sx={{ fontSize: '0.625rem' }}>
            {item.month}
          </Typography>
        ))}
      </Box>
    </Paper>
  );
}
