import { useState, useMemo } from 'react';
import { Box, Typography, Paper, MenuItem, Select } from '@mui/material';

export default function SalesAnalyticsHeatmap() {
  const [year, setYear] = useState('2025');

  // Generate heatmap data - 7 rows (weeks) x 12 columns (months)
  // Memoize to prevent regeneration on every render
  const heatmapData = useMemo(() => {
    const data = [];
    for (let week = 0; week < 7; week++) {
      const weekData = [];
      for (let month = 0; month < 12; month++) {
        const intensity = Math.random();
        weekData.push(intensity);
      }
      data.push(weekData);
    }
    return data;
  }, [year]); // Regenerate only when year changes

  // Memoize months array to prevent recreation
  const months = useMemo(() => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'], []);

  // Memoize color calculation function
  const getColor = useMemo(() => (intensity) => {
    if (intensity < 0.2) return '#F0F0F0';
    if (intensity < 0.4) return '#C8C9FF';
    if (intensity < 0.6) return '#9FA1FF';
    if (intensity < 0.8) return '#7679FF';
    return '#696CFF';
  }, []);

  return (
    <Paper sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 0.5 }}>
        <Box>
          <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, fontSize: '0.75rem', mb: 0.25 }}>
            Sales Analytics
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
            <Box
              sx={{
                px: 0.75,
                py: 0.125,
                bgcolor: '#56CA0015',
                borderRadius: 0.75
              }}
            >
              <Typography variant="caption" sx={{ color: '#56CA00', fontWeight: 600, fontSize: '0.625rem' }}>
                +42.6%
              </Typography>
            </Box>
            <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.6875rem' }}>
              Than last year
            </Typography>
          </Box>
        </Box>
        <Select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          size="small"
          sx={{
            fontSize: '0.75rem',
            '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
            '& .MuiSelect-select': { py: 0.25, px: 0.75, pr: '20px !important' }
          }}
        >
          <MenuItem value="2025">2025</MenuItem>
          <MenuItem value="2024">2024</MenuItem>
          <MenuItem value="2023">2023</MenuItem>
        </Select>
      </Box>

      {/* Heatmap */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
        <Box sx={{ display: 'flex', gap: 0.5, mb: 0.5 }}>
          <Box sx={{ width: 20 }} />
          {months.map((month) => (
            <Box key={month} sx={{ flex: 1, textAlign: 'center' }}>
              <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.5625rem' }}>
                {month}
              </Typography>
            </Box>
          ))}
        </Box>

        {heatmapData.map((week, weekIndex) => (
          <Box key={weekIndex} sx={{ display: 'flex', gap: 0.5, mb: 0.5 }}>
            <Box sx={{ width: 20, display: 'flex', alignItems: 'center' }}>
              <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.5625rem' }}>
                {weekIndex + 1}x
              </Typography>
            </Box>
            {week.map((value, monthIndex) => (
              <Box
                key={monthIndex}
                sx={{
                  flex: 1,
                  aspectRatio: '1',
                  bgcolor: getColor(value),
                  borderRadius: 0.5
                }}
              />
            ))}
          </Box>
        ))}
      </Box>
    </Paper>
  );
}
