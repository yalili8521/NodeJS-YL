import { useState } from 'react';
import { Box, Typography, Tabs, Tab, Avatar, CircularProgress } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function IncomeChart() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const tabsData = [
    {
      label: 'INCOME',
      value: '$459.1k',
      change: '+42.9%',
      isPositive: true,
      subtitle: 'Total Income',
      data: [0, 30, 25, 45, 35, 55, 40, 60],
      weekValue: '6.5k',
      weekComparison: '$39k less than last week'
    },
    {
      label: 'EXPENSES',
      value: '$287.5k',
      change: '-18.2%',
      isPositive: false,
      subtitle: 'Total Expenses',
      data: [0, 40, 30, 50, 25, 45, 30, 55],
      weekValue: '4.2k',
      weekComparison: '$15k more than last week'
    },
    {
      label: 'PROFIT',
      value: '$171.6k',
      change: '+24.6%',
      isPositive: true,
      subtitle: 'Total Profit',
      data: [0, 20, 15, 35, 25, 40, 28, 48],
      weekValue: '2.3k',
      weekComparison: '$12k more than last week'
    }
  ];

  const currentData = tabsData[activeTab];

  const data = {
    labels: ['', 'Apr', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: currentData.label,
        data: currentData.data,
        fill: true,
        backgroundColor: 'rgba(105, 108, 255, 0.12)',
        borderColor: '#696CFF',
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: '#696CFF',
        pointHoverBorderColor: '#fff',
        pointHoverBorderWidth: 3
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
        enabled: true,
        mode: 'index',
        intersect: false,
        backgroundColor: '#696CFF',
        padding: 12,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          title: () => '',
          label: function(context) {
            return 'series-1: ' + context.parsed.y;
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
            size: 11
          }
        }
      },
      y: {
        display: false,
        beginAtZero: true
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    }
  };

  return (
    <Box>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        sx={{
          mb: 3,
          minHeight: 'auto',
          '& .MuiTabs-indicator': {
            backgroundColor: '#696CFF',
            height: 3
          },
          '& .MuiTab-root': {
            minHeight: 'auto',
            minWidth: 'auto',
            py: 1,
            px: 2,
            fontSize: '0.75rem',
            fontWeight: 600,
            color: 'text.secondary',
            '&.Mui-selected': {
              color: '#696CFF'
            }
          }
        }}
      >
        <Tab label="INCOME" />
        <Tab label="EXPENSES" />
        <Tab label="PROFIT" />
      </Tabs>

      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
        <Avatar
          sx={{
            bgcolor: '#696CFF15',
            color: '#696CFF',
            width: 48,
            height: 48
          }}
        >
          <TrendingUpIcon />
        </Avatar>
        <Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
            {currentData.subtitle}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              {currentData.value}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: currentData.isPositive ? '#56CA00' : '#FF4C51',
                fontWeight: 600
              }}
            >
              {currentData.change}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ height: 180, position: 'relative', mb: 2 }}>
        <Line data={data} options={options} />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
          <CircularProgress
            variant="determinate"
            value={65}
            size={60}
            thickness={6}
            sx={{
              color: '#696CFF',
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
              justifyContent: 'center'
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 700, color: '#696CFF' }}>
              {currentData.weekValue}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
            Income this week
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {currentData.weekComparison}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
