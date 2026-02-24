import { Box, Typography, Paper } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function EarningReportCard() {
  const earningData = [
    { label: 'Net Profit', value: '$1,619', change: '+18.6%', changeColor: '#56CA00', icon: '💰', iconBg: '#696CFF' },
    { label: 'Total Income', value: '$3,571', change: '+39.6%', changeColor: '#56CA00', icon: '💵', iconBg: '#56CA00' },
    { label: 'Total Expenses', value: '$430', change: '+52.8%', changeColor: '#56CA00', icon: '💳', iconBg: '#E0E0E0' }
  ];

  const weeklyData = [20, 35, 45, 30, 50, 75, 95];
  const maxValue = 100;

  return (
    <Paper sx={{ p: 2, height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>
          Earning Report
        </Typography>
        <MoreVertIcon sx={{ color: 'text.secondary', fontSize: 18, cursor: 'pointer' }} />
      </Box>

      <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.6875rem', display: 'block', mb: 1.5 }}>
        Weekly Earnings Overview
      </Typography>

      {earningData.map((item, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
          <Box
            sx={{
              width: 28,
              height: 28,
              borderRadius: 1,
              bgcolor: `${item.iconBg}15`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1rem'
            }}
          >
            {item.icon}
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.6875rem', mb: 0.125 }}>
              {item.label}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.75 }}>
              <Typography variant="body1" sx={{ fontWeight: 700, fontSize: '0.875rem' }}>
                {item.value}
              </Typography>
              <Typography variant="caption" sx={{ color: item.changeColor, fontWeight: 600, fontSize: '0.6875rem' }}>
                {item.change}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}

      {/* Weekly bar chart */}
      <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'flex-end', height: 40, mt: 1.5 }}>
        {weeklyData.map((value, i) => (
          <Box key={i} sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.25 }}>
            <Box
              sx={{
                width: '100%',
                height: `${(value / maxValue) * 100}%`,
                bgcolor: i === 6 ? '#696CFF' : '#E0E0E0',
                borderRadius: '4px 4px 0 0'
              }}
            />
            <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.5625rem' }}>
              {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'][i]}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
}
