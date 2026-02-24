import { Box, Typography, Paper } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function OverviewSalesChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Sales',
        data: [60, 80, 50, 70, 60, 80, 50],
        backgroundColor: '#FF4C51',
        borderRadius: 4,
        barThickness: 12
      },
      {
        label: 'Overview',
        data: [50, 60, 40, 60, 50, 70, 40],
        backgroundColor: '#E0E0E0',
        borderRadius: 4,
        barThickness: 12
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
        cornerRadius: 8,
        displayColors: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        border: {
          display: false
        },
        ticks: {
          color: '#A8AAAE',
          font: {
            size: 11
          }
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          color: '#F0F0F0',
          drawBorder: false
        },
        border: {
          display: false
        },
        ticks: {
          stepSize: 20,
          color: '#A8AAAE',
          font: {
            size: 11
          }
        }
      }
    }
  };

  return (
    <Paper sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 0.5 }}>
        <Box>
          <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>
            Overview & Sales Activity
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.6875rem' }}>
            Check out each column for more details
          </Typography>
        </Box>
        <MoreVertIcon sx={{ color: 'text.secondary', fontSize: 18, cursor: 'pointer' }} />
      </Box>

      <Box sx={{ flex: 1, minHeight: 0, mt: 0.5 }}>
        <Bar data={data} options={options} />
      </Box>
    </Paper>
  );
}
