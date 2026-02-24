import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Paper,
  TextField,
  InputAdornment,
  CircularProgress,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  ScatterChart,
  Scatter,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { fetchChartData } from '../../utils/api';

export default function RechartsPage() {
  const [balanceSearch, setBalanceSearch] = useState('');
  const [websiteSearch, setWebsiteSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState({
    balance: [],
    websiteData: [],
    socialRevenue: [],
    mobileComparison: [],
    expenseRatio: [],
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchChartData();
        setChartData({
          balance: data.balance || [],
          websiteData: data.websiteData || [],
          socialRevenue: data.socialRevenue || [],
          mobileComparison: data.mobileComparison || [],
          expenseRatio: data.expenseRatio || [],
        });
      } catch (error) {
        console.error('Failed to load chart data:', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // Framework Usage Data (Scatter) - keeping static for demo purposes
  const frameworkData01 = [
    { x: 5, y: 12 }, { x: 8, y: 15 }, { x: 12, y: 25 },
    { x: 15, y: 18 }, { x: 20, y: 32 }, { x: 25, y: 28 },
    { x: 28, y: 35 }, { x: 32, y: 42 }, { x: 35, y: 38 },
  ];

  const frameworkData02 = [
    { x: 7, y: 20 }, { x: 10, y: 8 }, { x: 13, y: 22 },
    { x: 18, y: 12 }, { x: 22, y: 30 }, { x: 27, y: 15 },
    { x: 30, y: 28 }, { x: 34, y: 25 }, { x: 38, y: 35 },
  ];

  const frameworkData03 = [
    { x: 10, y: 5 }, { x: 15, y: 18 }, { x: 18, y: 10 },
    { x: 22, y: 25 }, { x: 28, y: 15 }, { x: 30, y: 32 },
    { x: 33, y: 20 }, { x: 37, y: 28 }, { x: 40, y: 22 },
  ];

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 1440, mx: 'auto', width: '100%' }}>
      <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
        Recharts
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Recharts - Re-designed charting library built with React and D3
      </Typography>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: 3
      }}>
        {/* Balance Chart */}
        <Box sx={{ gridColumn: { xs: 'span 12' } }}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Balance
              </Typography>
              <TextField
                size="small"
                placeholder="Search"
                value={balanceSearch}
                onChange={(e) => setBalanceSearch(e.target.value)}
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
            <Typography variant="h4" sx={{ mb: 1, fontWeight: 600, color: '#28C76F' }}>
              $231,267
            </Typography>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={chartData.balance}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  style={{ fontSize: '12px', fill: '#666' }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  style={{ fontSize: '12px', fill: '#666' }}
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="balance"
                  stroke="#FF9F43"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Box>

        {/* Website Data Chart */}
        <Box sx={{ gridColumn: { xs: 'span 12' } }}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Website Data
              </Typography>
              <TextField
                size="small"
                placeholder="Search"
                value={websiteSearch}
                onChange={(e) => setWebsiteSearch(e.target.value)}
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
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={chartData.websiteData}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#836AF9" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#836AF9" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#9E86FF" stopOpacity={0.6}/>
                    <stop offset="95%" stopColor="#9E86FF" stopOpacity={0.05}/>
                  </linearGradient>
                  <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D1C4FF" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#D1C4FF" stopOpacity={0.02}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  style={{ fontSize: '12px', fill: '#666' }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  style={{ fontSize: '12px', fill: '#666' }}
                />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="sales"
                  stroke="#836AF9"
                  strokeWidth={0}
                  fill="url(#colorSales)"
                />
                <Area
                  type="monotone"
                  dataKey="clicks"
                  stroke="#9E86FF"
                  strokeWidth={0}
                  fill="url(#colorClicks)"
                />
                <Area
                  type="monotone"
                  dataKey="visits"
                  stroke="#D1C4FF"
                  strokeWidth={0}
                  fill="url(#colorVisits)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Paper>
        </Box>

        {/* Framework Usage Chart */}
        <Box sx={{ gridColumn: { xs: 'span 12' } }}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Framework Usage
              </Typography>
              <TextField
                size="small"
                placeholder="Search"
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
            <ResponsiveContainer width="100%" height={250}>
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  type="number"
                  dataKey="x"
                  axisLine={false}
                  tickLine={false}
                  style={{ fontSize: '12px', fill: '#666' }}
                />
                <YAxis
                  type="number"
                  dataKey="y"
                  axisLine={false}
                  tickLine={false}
                  style={{ fontSize: '12px', fill: '#666' }}
                />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Legend />
                <Scatter
                  name="React"
                  data={frameworkData01}
                  fill="#FF9F43"
                />
                <Scatter
                  name="Vue"
                  data={frameworkData02}
                  fill="#28C76F"
                />
                <Scatter
                  name="Angular"
                  data={frameworkData03}
                  fill="#00CFE8"
                />
              </ScatterChart>
            </ResponsiveContainer>
          </Paper>
        </Box>

        {/* Social Revenue Chart */}
        <Box sx={{ gridColumn: { xs: 'span 12' } }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Social Revenue
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData.socialRevenue}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  style={{ fontSize: '12px', fill: '#666' }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  style={{ fontSize: '12px', fill: '#666' }}
                />
                <Tooltip />
                <Bar
                  dataKey="revenue"
                  fill="#826AF9"
                  radius={[4, 4, 0, 0]}
                  barSize={25}
                />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Box>

        {/* Mobile Comparison Chart */}
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Mobile Comparison
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={chartData.mobileComparison}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {chartData.mobileComparison.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend
                    verticalAlign="bottom"
                    align="center"
                    iconType="circle"
                  />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Box>

        {/* Expense Ratio Chart */}
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Expense Ratio
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={chartData.expenseRatio}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {chartData.expenseRatio.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend
                    verticalAlign="bottom"
                    align="center"
                    iconType="circle"
                  />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
