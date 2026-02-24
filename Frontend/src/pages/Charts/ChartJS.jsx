import { useState, useMemo } from 'react';
import {
  Box,
  Typography,
  Paper,
  TextField,
  InputAdornment,
  Button,
  ButtonGroup,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { Radar } from 'react-chartjs-2';
import { PolarArea } from 'react-chartjs-2';
import { Scatter } from 'react-chartjs-2';

// Register Chart.js components
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function ChartJSPage() {
  const [search, setSearch] = useState('');
  const [timeRange, setTimeRange] = useState('daily');

  // New Technologies Data (Multi-line chart)
  const newTechData = {
    labels: ['0', '10', '20', '30', '40', '50', '60', '70', '80'],
    datasets: [
      {
        label: 'Asia',
        data: [0, 20, 40, 30, 50, 40, 60, 55, 75],
        borderColor: '#826AF9',
        backgroundColor: 'rgba(130, 106, 249, 0.1)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Europe',
        data: [0, 15, 35, 25, 45, 35, 55, 50, 70],
        borderColor: '#FFB400',
        backgroundColor: 'rgba(255, 180, 0, 0.1)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Africa',
        data: [0, 10, 30, 20, 40, 30, 50, 45, 65],
        borderColor: '#00CFE8',
        backgroundColor: 'rgba(0, 207, 232, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  // Radar Chart Data
  const radarData = {
    labels: ['STA', 'STR', 'AGI', 'VIT', 'CHA', 'INT'],
    datasets: [
      {
        label: 'Donté Panlin',
        data: [25, 59, 90, 81, 60, 82],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
      },
      {
        label: 'Mireska Sunbreeze',
        data: [40, 100, 40, 90, 40, 90],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
      },
    ],
  };

  // Average Skills Pie Chart
  const averageSkillsData = {
    labels: ['Donté Panlin', 'Mireska Sunbreeze', 'Fiona', 'Karl', 'Mirana'],
    datasets: [
      {
        data: [30, 25, 20, 15, 10],
        backgroundColor: ['#826AF9', '#FFB400', '#00CFE8', '#FF6384', '#4BC0C0'],
      },
    ],
  };

  // Bubble Chart Data
  const bubbleData = useMemo(() => ({
    datasets: [
      {
        label: 'Dataset 1',
        data: Array.from({ length: 20 }, () => ({
          x: Math.random() * 100,
          y: Math.random() * 100,
          r: Math.random() * 20 + 5,
        })),
        backgroundColor: 'rgba(130, 106, 249, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: Array.from({ length: 20 }, () => ({
          x: Math.random() * 100,
          y: Math.random() * 100,
          r: Math.random() * 20 + 5,
        })),
        backgroundColor: 'rgba(255, 180, 0, 0.5)',
      },
    ],
  }), []);

  // New Product Data Scatter Chart
  const scatterData = useMemo(() => ({
    datasets: [
      {
        label: 'iPhone',
        data: Array.from({ length: 30 }, () => ({
          x: Math.random() * 100,
          y: Math.random() * 100,
        })),
        backgroundColor: '#FFB400',
        pointRadius: 4,
      },
      {
        label: 'Samsung',
        data: Array.from({ length: 30 }, () => ({
          x: Math.random() * 100,
          y: Math.random() * 100,
        })),
        backgroundColor: '#00CFE8',
        pointRadius: 4,
      },
      {
        label: 'OnePlus',
        data: Array.from({ length: 30 }, () => ({
          x: Math.random() * 100,
          y: Math.random() * 100,
        })),
        backgroundColor: '#28C76F',
        pointRadius: 4,
      },
    ],
  }), []);

  // Data Science Area Chart
  const dataScienceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
      {
        label: 'Layer 1',
        data: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65],
        backgroundColor: 'rgba(0, 207, 232, 0.8)',
        borderColor: 'rgba(0, 207, 232, 1)',
        fill: true,
      },
      {
        label: 'Layer 2',
        data: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        fill: true,
      },
      {
        label: 'Layer 3',
        data: [40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
        backgroundColor: 'rgba(130, 106, 249, 0.4)',
        borderColor: 'rgba(130, 106, 249, 1)',
        fill: true,
      },
    ],
  };

  // Latest Statistics Bar Chart
  const latestStatsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Statistics',
        data: [10, 25, 15, 40, 30, 50, 35, 55, 45, 60, 50, 70],
        backgroundColor: '#FFB400',
        borderRadius: 4,
        barThickness: 12,
      },
    ],
  };

  // Balance Horizontal Bar Chart
  const balanceData = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E', 'Product F', 'Product G'],
    datasets: [
      {
        label: 'Sales',
        data: [30, 45, 35, 55, 40, 60, 50],
        backgroundColor: '#00CFE8',
        borderRadius: 4,
        barThickness: 8,
      },
      {
        label: 'Visits',
        data: [25, 40, 30, 50, 35, 55, 45],
        backgroundColor: '#FFB400',
        borderRadius: 4,
        barThickness: 8,
      },
      {
        label: 'Views',
        data: [20, 35, 25, 45, 30, 50, 40],
        backgroundColor: '#826AF9',
        borderRadius: 4,
        barThickness: 8,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
      },
    },
  };

  return (
    <Box sx={{ maxWidth: 1440, mx: 'auto', width: '100%' }}>
      <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
        Chart.js
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Simple yet flexible JavaScript charting for designers & developers
      </Typography>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: 3
      }}>
        {/* New Technologies Data */}
        <Box sx={{ gridColumn: { xs: 'span 12' } }}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                New Technologies Data
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <ButtonGroup size="small">
                  <Button
                    variant={timeRange === 'daily' ? 'contained' : 'outlined'}
                    onClick={() => setTimeRange('daily')}
                    sx={{
                      backgroundColor: timeRange === 'daily' ? '#696CFF' : 'transparent',
                      borderColor: '#696CFF',
                      color: timeRange === 'daily' ? 'white' : '#696CFF',
                    }}
                  >
                    Daily
                  </Button>
                  <Button
                    variant={timeRange === 'monthly' ? 'contained' : 'outlined'}
                    onClick={() => setTimeRange('monthly')}
                    sx={{
                      backgroundColor: timeRange === 'monthly' ? '#696CFF' : 'transparent',
                      borderColor: '#696CFF',
                      color: timeRange === 'monthly' ? 'white' : '#696CFF',
                    }}
                  >
                    Monthly
                  </Button>
                  <Button
                    variant={timeRange === 'yearly' ? 'contained' : 'outlined'}
                    onClick={() => setTimeRange('yearly')}
                    sx={{
                      backgroundColor: timeRange === 'yearly' ? '#696CFF' : 'transparent',
                      borderColor: '#696CFF',
                      color: timeRange === 'yearly' ? 'white' : '#696CFF',
                    }}
                  >
                    Yearly
                  </Button>
                </ButtonGroup>
              </Box>
            </Box>
            <Box sx={{ height: 300 }}>
              <Line data={newTechData} options={chartOptions} />
            </Box>
          </Paper>
        </Box>

        {/* Radar Chart */}
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Radar Chart
            </Typography>
            <Box sx={{ height: 300 }}>
              <Radar
                data={radarData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'bottom',
                    },
                  },
                }}
              />
            </Box>
          </Paper>
        </Box>

        {/* Average Skills */}
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Average Skills
            </Typography>
            <Box sx={{ height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box sx={{ width: '80%', height: '100%' }}>
                <Pie
                  data={averageSkillsData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'right',
                      },
                    },
                  }}
                />
              </Box>
            </Box>
          </Paper>
        </Box>

        {/* Bubble Chart */}
        <Box sx={{ gridColumn: { xs: 'span 12' } }}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Bubble Chart
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 600, color: '#28C76F' }}>
                $394,937
              </Typography>
            </Box>
            <Box sx={{ height: 300 }}>
              <Scatter
                data={bubbleData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    x: {
                      grid: {
                        color: 'rgba(0, 0, 0, 0.05)',
                      },
                    },
                    y: {
                      grid: {
                        color: 'rgba(0, 0, 0, 0.05)',
                      },
                    },
                  },
                }}
              />
            </Box>
          </Paper>
        </Box>

        {/* New Product Data */}
        <Box sx={{ gridColumn: { xs: 'span 12' } }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              New Product Data
            </Typography>
            <Box sx={{ height: 300 }}>
              <Scatter
                data={scatterData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'bottom',
                    },
                  },
                  scales: {
                    x: {
                      grid: {
                        color: 'rgba(0, 0, 0, 0.05)',
                      },
                    },
                    y: {
                      grid: {
                        color: 'rgba(0, 0, 0, 0.05)',
                      },
                    },
                  },
                }}
              />
            </Box>
          </Paper>
        </Box>

        {/* Data Science */}
        <Box sx={{ gridColumn: { xs: 'span 12' } }}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Data Science
              </Typography>
              <TextField
                size="small"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ fontSize: 20, color: 'text.secondary' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{ width: 200 }}
              />
            </Box>
            <Box sx={{ height: 350 }}>
              <Line
                data={dataScienceData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'bottom',
                    },
                  },
                  scales: {
                    x: {
                      grid: {
                        display: false,
                      },
                    },
                    y: {
                      grid: {
                        color: 'rgba(0, 0, 0, 0.05)',
                      },
                      stacked: true,
                    },
                  },
                  elements: {
                    line: {
                      tension: 0,
                    },
                  },
                }}
              />
            </Box>
          </Paper>
        </Box>

        {/* Latest Statistics */}
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Latest Statistics
              </Typography>
              <TextField
                size="small"
                placeholder="Search..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ fontSize: 20, color: 'text.secondary' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{ width: 200 }}
              />
            </Box>
            <Box sx={{ height: 300 }}>
              <Bar
                data={latestStatsData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    x: {
                      grid: {
                        display: false,
                      },
                    },
                    y: {
                      grid: {
                        color: 'rgba(0, 0, 0, 0.05)',
                      },
                    },
                  },
                }}
              />
            </Box>
          </Paper>
        </Box>

        {/* Balance */}
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Balance
            </Typography>
            <Box sx={{ height: 300 }}>
              <Bar
                data={balanceData}
                options={{
                  indexAxis: 'y',
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'bottom',
                    },
                  },
                  scales: {
                    x: {
                      grid: {
                        color: 'rgba(0, 0, 0, 0.05)',
                      },
                    },
                    y: {
                      grid: {
                        display: false,
                      },
                    },
                  },
                }}
              />
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
