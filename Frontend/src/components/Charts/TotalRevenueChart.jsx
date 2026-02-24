import { Box, Typography } from '@mui/material';
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

export default function TotalRevenueChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: '2024',
        data: [18, 22, 30, 25, 32, 28, 35, 40, 38, 42, 45, 48],
        backgroundColor: '#696CFF',
        borderRadius: 8,
        barThickness: 12
      },
      {
        label: '2023',
        data: [12, 18, 20, 15, 22, 20, 25, 28, 26, 30, 32, 35],
        backgroundColor: '#E7E7FF',
        borderRadius: 8,
        barThickness: 12
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        align: 'end',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 15,
          font: {
            size: 13
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        cornerRadius: 8
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        border: {
          display: false
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
          stepSize: 10,
          callback: function(value) {
            return '$' + value + 'k';
          }
        }
      }
    }
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
        Total Revenue
      </Typography>
      <Box sx={{ height: 300, mt: 2 }}>
        <Bar data={data} options={options} />
      </Box>
    </Box>
  );
}
