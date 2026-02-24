import { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  InputAdornment,
  Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Chart from 'react-apexcharts';

export default function ApexPage() {
  const [timeRange, setTimeRange] = useState('weekly');

  // Line Chart Options
  const lineChartOptions = {
    chart: {
      type: 'area',
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 0 },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.3,
        stops: [0, 90, 100]
      }
    },
    colors: ['#836AF9', '#9E86FF', '#D1C4FF'],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      labels: { style: { colors: '#a8aaae', fontSize: '13px' } }
    },
    yaxis: { labels: { style: { colors: '#a8aaae', fontSize: '13px' } } },
    grid: { borderColor: '#f1f1f1' },
    legend: { show: true, position: 'top', horizontalAlign: 'left' }
  };

  const lineChartSeries = [
    { name: 'Visits', data: [100, 120, 90, 170, 130, 160, 140, 240, 220] },
    { name: 'Clicks', data: [60, 80, 70, 110, 80, 100, 90, 180, 160] },
    { name: 'Sales', data: [20, 40, 30, 70, 40, 60, 50, 140, 120] },
  ];

  // Column Chart Options
  const columnChartOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '30%',
        borderRadius: 4,
      }
    },
    dataLabels: { enabled: false },
    stroke: { show: true, width: 6, colors: ['transparent'] },
    colors: ['#836AF9', '#D4BFFF'],
    xaxis: {
      categories: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12'],
      labels: { style: { colors: '#a8aaae', fontSize: '13px' } }
    },
    yaxis: { labels: { style: { colors: '#a8aaae', fontSize: '13px' } } },
    grid: { borderColor: '#f1f1f1' },
    legend: { show: true, position: 'top', horizontalAlign: 'left' }
  };

  const columnChartSeries = [
    { name: 'Apple', data: [90, 120, 55, 100, 80, 125, 175, 70, 88] },
    { name: 'Samsung', data: [85, 100, 30, 40, 95, 90, 30, 110, 62] },
  ];

  // Scatter Chart Options
  const scatterChartOptions = {
    chart: {
      type: 'scatter',
      toolbar: { show: false },
      zoom: { enabled: true, type: 'xy' }
    },
    colors: ['#FF9F43', '#00CFE8', '#28C76F'],
    xaxis: {
      tickAmount: 10,
      labels: { style: { colors: '#a8aaae', fontSize: '13px' } }
    },
    yaxis: { tickAmount: 7, labels: { style: { colors: '#a8aaae', fontSize: '13px' } } },
    grid: { borderColor: '#f1f1f1' },
    legend: { show: true, position: 'top', horizontalAlign: 'left' }
  };

  const scatterChartSeries = [
    {
      name: 'Angular',
      data: [[5, 12], [8, 15], [12, 25], [15, 18], [20, 32], [25, 28], [28, 35], [32, 42], [35, 38]]
    },
    {
      name: 'Vue',
      data: [[7, 20], [10, 8], [13, 22], [18, 12], [22, 30], [27, 15], [30, 28], [34, 25], [38, 35]]
    },
    {
      name: 'React',
      data: [[10, 5], [15, 18], [18, 10], [22, 25], [28, 15], [30, 32], [33, 20], [37, 28], [40, 22]]
    },
  ];

  // Line Chart with Data Labels Options
  const lineDataLabelOptions = {
    chart: {
      type: 'line',
      toolbar: { show: false },
    },
    stroke: { curve: 'straight', width: 2 },
    colors: ['#FF9F43'],
    dataLabels: { enabled: false },
    markers: { size: 0 },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: { style: { colors: '#a8aaae', fontSize: '13px' } }
    },
    yaxis: {
      labels: {
        style: { colors: '#a8aaae', fontSize: '13px' },
        formatter: (value) => `$${value}`
      }
    },
    grid: { borderColor: '#f1f1f1' },
    tooltip: {
      y: { formatter: (value) => `$${value}k` }
    }
  };

  const lineDataLabelSeries = [{
    name: 'Sales',
    data: [280, 200, 220, 180, 270, 250, 70, 90, 200, 150, 160, 100]
  }];

  // Horizontal Bar Chart Options
  const horizontalBarOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '70%',
        borderRadius: 4,
      }
    },
    dataLabels: { enabled: false },
    colors: ['#00CFE8'],
    xaxis: {
      categories: ['MON, 11', 'THU, 14', 'FRI, 15', 'MON, 18', 'WED, 20', 'FRI, 21', 'MON, 23'],
      labels: { style: { colors: '#a8aaae', fontSize: '13px' } }
    },
    yaxis: { labels: { style: { colors: '#a8aaae', fontSize: '13px' } } },
    grid: { borderColor: '#f1f1f1' },
  };

  const horizontalBarSeries = [{
    data: [700, 350, 480, 600, 210, 550, 150]
  }];

  // Candlestick Chart Options
  const candlestickOptions = {
    chart: {
      type: 'candlestick',
      toolbar: { show: false },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#28C76F',
          downward: '#EA5455'
        }
      }
    },
    xaxis: {
      type: 'category',
      labels: { style: { colors: '#a8aaae', fontSize: '13px' } }
    },
    yaxis: {
      tooltip: { enabled: true },
      labels: { style: { colors: '#a8aaae', fontSize: '13px' } }
    },
    grid: { borderColor: '#f1f1f1' },
  };

  const candlestickSeries = [{
    data: [
      { x: 'Jan', y: [6629.81, 6650.5, 6623.04, 6633.33] },
      { x: 'Feb', y: [6632.01, 6643.59, 6620, 6630.11] },
      { x: 'Mar', y: [6630.71, 6648.95, 6623.34, 6635.65] },
      { x: 'Apr', y: [6635.65, 6651, 6629.67, 6638.24] },
      { x: 'May', y: [6638.24, 6640, 6620, 6624.47] },
      { x: 'Jun', y: [6624.53, 6636.03, 6621.68, 6624.31] },
      { x: 'Jul', y: [6624.61, 6632.2, 6617, 6626.02] },
      { x: 'Aug', y: [6627, 6627.62, 6584.22, 6603.02] },
      { x: 'Sep', y: [6605, 6608.03, 6598.95, 6604.01] },
    ]
  }];

  // Heatmap Chart Options
  const heatmapOptions = {
    chart: {
      type: 'heatmap',
      toolbar: { show: false },
    },
    dataLabels: { enabled: false },
    colors: ['#836AF9'],
    xaxis: {
      labels: { style: { colors: '#a8aaae', fontSize: '13px' } }
    },
    yaxis: { labels: { style: { colors: '#a8aaae', fontSize: '13px' } } },
    grid: { borderColor: '#f1f1f1' },
  };

  const heatmapSeries = [
    { name: 'SUN', data: Array.from({length: 52}, () => Math.floor(Math.random() * 90) + 10) },
    { name: 'MON', data: Array.from({length: 52}, () => Math.floor(Math.random() * 90) + 10) },
    { name: 'TUE', data: Array.from({length: 52}, () => Math.floor(Math.random() * 90) + 10) },
    { name: 'WED', data: Array.from({length: 52}, () => Math.floor(Math.random() * 90) + 10) },
    { name: 'THU', data: Array.from({length: 52}, () => Math.floor(Math.random() * 90) + 10) },
    { name: 'FRI', data: Array.from({length: 52}, () => Math.floor(Math.random() * 90) + 10) },
    { name: 'SAT', data: Array.from({length: 52}, () => Math.floor(Math.random() * 90) + 10) },
  ];

  // Radial Bar Chart Options
  const radialBarOptions = {
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: '30%',
          background: 'transparent',
        },
        dataLabels: {
          name: { show: false },
          value: { show: false }
        }
      }
    },
    colors: ['#00CFE8', '#FF9F43', '#836AF9'],
    labels: ['Comments', 'Replies', 'Shares'],
    legend: {
      show: true,
      floating: true,
      position: 'left',
      offsetX: 0,
      offsetY: 10,
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          show: false
        }
      }
    }]
  };

  const radialBarSeries = [80, 50, 35];

  // Pie Chart (Mobile Comparison) Options
  const pieOptions = {
    chart: {
      type: 'pie',
    },
    labels: ['Apple', 'Samsung', 'Huawei', 'Oppo', 'Vivo', 'Xiaomi'],
    colors: ['#836AF9', '#FF9F43', '#00CFE8', '#28C76F', '#EA5455', '#FF6384'],
    legend: {
      show: true,
      position: 'bottom',
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => `${val.toFixed(0)}%`
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 300
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  const pieSeries = [30, 25, 20, 12, 8, 5];

  // Donut Chart (Expense Ratio) Options
  const donutOptions = {
    chart: {
      type: 'donut',
    },
    labels: ['Operational', 'Networking', 'Hiring', 'R&D'],
    colors: ['#00CFE8', '#FF9F43', '#836AF9', '#28C76F'],
    legend: {
      show: true,
      position: 'bottom',
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => `${val.toFixed(0)}%`
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
          labels: {
            show: true,
            name: { show: true },
            value: { show: true },
            total: {
              show: true,
              label: 'Total',
              formatter: () => '$84,686'
            }
          }
        }
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 300
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  const donutSeries = [45, 30, 15, 10];

  return (
    <Box sx={{ maxWidth: 1440, mx: 'auto', width: '100%' }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
        Apex Charts
      </Typography>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: 3
      }}>
        {/* Line Chart */}
        <Box sx={{ gridColumn: { xs: 'span 12' } }}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Line Chart
              </Typography>
              <TextField
                size="small"
                placeholder="Search here"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
                sx={{ width: 200 }}
              />
            </Box>
            <Chart options={lineChartOptions} series={lineChartSeries} type="area" height={350} />
          </Paper>
        </Box>

        {/* Data Science */}
        <Box sx={{ gridColumn: { xs: 'span 12' } }}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Data Science
              </Typography>
              <TextField
                size="small"
                placeholder="Search here"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
                sx={{ width: 200 }}
              />
            </Box>
            <Chart options={columnChartOptions} series={columnChartSeries} type="bar" height={350} />
          </Paper>
        </Box>

        {/* New Technologies Data */}
        <Box sx={{ gridColumn: { xs: 'span 12' } }}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                New Technologies Data
              </Typography>
              <Box>
                <Button size="small" sx={{ mr: 1 }}>Daily</Button>
                <Button size="small" sx={{ mr: 1 }}>Weekly</Button>
                <Button size="small" sx={{ mr: 1 }}>Monthly</Button>
                <Button size="small">Yearly</Button>
              </Box>
            </Box>
            <Chart options={scatterChartOptions} series={scatterChartSeries} type="scatter" height={350} />
          </Paper>
        </Box>

        {/* Balance */}
        <Box sx={{ gridColumn: { xs: 'span 12' } }}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Balance
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 600, color: '#28C76F' }}>
                  $74,382
                </Typography>
              </Box>
            </Box>
            <Chart options={lineDataLabelOptions} series={lineDataLabelSeries} type="line" height={300} />
          </Paper>
        </Box>

        {/* Data Science (Bar) and Simple Donut */}
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Data Science
              </Typography>
              <TextField
                size="small"
                placeholder="Last 7 Days"
                sx={{ width: 150 }}
              />
            </Box>
            <Chart options={horizontalBarOptions} series={horizontalBarSeries} type="bar" height={300} />
          </Paper>
        </Box>

        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Simple Donut
              </Typography>
              <TextField
                size="small"
                placeholder="Search here"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
                sx={{ width: 150 }}
              />
            </Box>
            <Chart options={pieOptions} series={pieSeries} type="pie" height={300} />
          </Paper>
        </Box>

        {/* Daily Sales States and Statistics */}
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Daily Sales States
            </Typography>
            <Chart options={heatmapOptions} series={heatmapSeries} type="heatmap" height={300} />
          </Paper>
        </Box>

        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Statistics
            </Typography>
            <Chart options={radialBarOptions} series={radialBarSeries} type="radialBar" height={300} />
          </Paper>
        </Box>

        {/* Mobile Comparison and Expense Ratio */}
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Mobile Comparison
            </Typography>
            <Chart options={pieOptions} series={pieSeries} type="pie" height={300} />
          </Paper>
        </Box>

        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Expense Ratio
            </Typography>
            <Chart options={donutOptions} series={donutSeries} type="donut" height={300} />
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
