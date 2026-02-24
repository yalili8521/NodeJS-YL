import { Box, Typography } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ProfitReportChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: '2024',
        data: [0, 20, 10, 30, 15, 35, 20],
        borderColor: '#696CFF',
        backgroundColor: '#696CFF',
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: '#696CFF',
        pointHoverBorderColor: '#fff',
        pointHoverBorderWidth: 2
      },
      {
        label: '2023',
        data: [0, 10, 5, 18, 8, 20, 12],
        borderColor: '#E7E7FF',
        backgroundColor: '#E7E7FF',
        borderWidth: 3,
        borderDash: [5, 5],
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: '#E7E7FF',
        pointHoverBorderColor: '#fff',
        pointHoverBorderWidth: 2
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
          padding: 8,
          font: {
            size: 11
          },
          boxWidth: 6,
          boxHeight: 6
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        cornerRadius: 8,
        displayColors: true,
        callbacks: {
          label: function(context) {
            return context.dataset.label + ': $' + context.parsed.y + 'k';
          }
        }
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
            size: 10
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
          stepSize: 10,
          callback: function(value) {
            return '$' + value + 'k';
          },
          color: '#A8AAAE',
          font: {
            size: 10
          }
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    }
  };

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, fontSize: '0.875rem' }}>
        Profit Report
      </Typography>
      <Box sx={{ flex: 1, minHeight: 0 }}>
        <Line data={data} options={options} />
      </Box>
    </Box>
  );
}
