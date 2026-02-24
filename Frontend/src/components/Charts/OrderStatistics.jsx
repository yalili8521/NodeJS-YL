import { Box, Typography, Stack } from '@mui/material';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function OrderStatistics() {
  const data = {
    labels: ['Electronic', 'Fashion', 'Decor', 'Sports'],
    datasets: [
      {
        data: [85, 15, 50, 35],
        backgroundColor: ['#696CFF', '#56CA00', '#FFB400', '#FF4C51'],
        borderWidth: 0,
        cutout: '70%'
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        cornerRadius: 8
      }
    }
  };

  const stats = [
    { label: 'Electronic', value: '82.5k', color: '#696CFF' },
    { label: 'Fashion', value: '23.8k', color: '#56CA00' },
    { label: 'Decor', value: '849k', color: '#FFB400' },
    { label: 'Sports', value: '99k', color: '#FF4C51' }
  ];

  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
        Order Statistics
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        42.82k Total Sales
      </Typography>

      <Box sx={{ height: 200, mb: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ position: 'relative', width: 200, height: 200 }}>
          <Doughnut data={data} options={options} />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center'
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700, color: '#696CFF' }}>
              38%
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Weekly
            </Typography>
          </Box>
        </Box>
      </Box>

      <Stack spacing={2}>
        {stats.map((stat, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  bgcolor: stat.color
                }}
              />
              <Typography variant="body2">{stat.label}</Typography>
            </Box>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              {stat.value}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
