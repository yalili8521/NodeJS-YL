import { Card, CardContent, Box, Typography, Avatar } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function SmallStatCard({ title, value, change, icon, iconColor, iconBgColor, chartData, chartColor }) {
  const isPositive = change?.startsWith('+');

  // Generate simple chart bars or line based on data
  const renderChart = () => {
    if (!chartData) return null;

    if (title === 'Order') {
      // Line chart for Order
      return (
        <svg width="100%" height="60" viewBox="0 0 100 60" preserveAspectRatio="none">
          <polyline
            points="0,45 20,30 40,35 60,20 80,25 100,15"
            fill="none"
            stroke={chartColor || '#56CA00'}
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
          <polyline
            points="0,45 20,30 40,35 60,20 80,25 100,15 100,60 0,60"
            fill={`${chartColor || '#56CA00'}20`}
          />
        </svg>
      );
    } else if (title === 'Sales') {
      // Bar chart for Sales (simplified cyan bars)
      return (
        <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'flex-end', height: 60 }}>
          {[30, 45, 25, 50, 35, 60, 40].map((height, i) => (
            <Box
              key={i}
              sx={{
                flex: 1,
                height: `${height}%`,
                bgcolor: i === 6 ? chartColor || '#00CFE8' : `${chartColor || '#00CFE8'}40`,
                borderRadius: '2px 2px 0 0'
              }}
            />
          ))}
        </Box>
      );
    } else if (title === 'Payments') {
      // Weekly bars for Payments
      return (
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-end', height: 60, justifyContent: 'space-around' }}>
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
            <Box key={i} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
              <Box
                sx={{
                  width: '100%',
                  height: [40, 50, 45, 55, 30, 35, 60][i] + '%',
                  bgcolor: i === 6 ? chartColor || '#696CFF' : `${chartColor || '#696CFF'}30`,
                  borderRadius: '4px',
                  mb: 0.5
                }}
              />
            </Box>
          ))}
        </Box>
      );
    } else if (title === 'Revenue') {
      // Weekly bars for Revenue
      return (
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-end', height: 60, justifyContent: 'space-around' }}>
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
            <Box key={i} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
              <Box
                sx={{
                  width: '100%',
                  height: [35, 45, 50, 60, 40, 55, 65][i] + '%',
                  bgcolor: i === 6 ? chartColor || '#696CFF' : `${chartColor || '#696CFF'}30`,
                  borderRadius: '4px',
                  mb: 0.5
                }}
              />
            </Box>
          ))}
        </Box>
      );
    }
  };

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 2.5, pb: '20px !important' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
          <Avatar
            sx={{
              bgcolor: iconBgColor || '#696CFF15',
              color: iconColor || '#696CFF',
              width: 38,
              height: 38
            }}
          >
            {icon}
          </Avatar>
          <MoreVertIcon sx={{ color: 'text.secondary', fontSize: 20, cursor: 'pointer' }} />
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5, fontSize: '0.875rem' }}>
          {title}
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5, fontSize: '1.5rem' }}>
          {value}
        </Typography>
        {change && (
          <Typography
            variant="body2"
            sx={{
              color: isPositive ? '#56CA00' : '#FF4C51',
              fontWeight: 600,
              fontSize: '0.875rem',
              mb: 1.5
            }}
          >
            {change}
          </Typography>
        )}
        {renderChart()}
      </CardContent>
    </Card>
  );
}
