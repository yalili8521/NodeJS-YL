import { useState } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  LinearProgress,
  Avatar,
  Tabs,
  Tab
} from '@mui/material';

export default function BrowserStatistics() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const tabsData = [
    {
      label: 'BROWSER',
      data: [
        {
          name: 'Chrome',
          visits: '8.92k',
          percentage: 64.91,
          color: '#56CA00',
          icon: '🌐'
        },
        {
          name: 'Safari',
          visits: '1.29k',
          percentage: 19.03,
          color: '#696CFF',
          icon: '🧭'
        },
        {
          name: 'Firefox',
          visits: '328',
          percentage: 3.26,
          color: '#00CFE8',
          icon: '🦊'
        },
        {
          name: 'Edge',
          visits: '142',
          percentage: 3.99,
          color: '#FFB400',
          icon: '🌊'
        },
        {
          name: 'Opera',
          visits: '85',
          percentage: 2.12,
          color: '#FF4C51',
          icon: '🎭'
        },
        {
          name: 'Brave',
          visits: '36',
          percentage: 1.06,
          color: '#00CFE8',
          icon: '🦁'
        }
      ]
    },
    {
      label: 'OPERATING SYSTEM',
      data: [
        {
          name: 'Windows',
          visits: '12.5k',
          percentage: 72.5,
          color: '#00CFE8',
          icon: '🪟'
        },
        {
          name: 'macOS',
          visits: '3.2k',
          percentage: 18.6,
          color: '#696CFF',
          icon: '🍎'
        },
        {
          name: 'Linux',
          visits: '890',
          percentage: 5.2,
          color: '#FFB400',
          icon: '🐧'
        },
        {
          name: 'Android',
          visits: '456',
          percentage: 2.7,
          color: '#56CA00',
          icon: '🤖'
        },
        {
          name: 'iOS',
          visits: '178',
          percentage: 1.0,
          color: '#FF4C51',
          icon: '📱'
        }
      ]
    },
    {
      label: 'COUNTRY',
      data: [
        {
          name: 'United States',
          visits: '9.8k',
          percentage: 56.8,
          color: '#696CFF',
          icon: '🇺🇸'
        },
        {
          name: 'United Kingdom',
          visits: '2.5k',
          percentage: 14.5,
          color: '#56CA00',
          icon: '🇬🇧'
        },
        {
          name: 'Canada',
          visits: '1.8k',
          percentage: 10.4,
          color: '#FF4C51',
          icon: '🇨🇦'
        },
        {
          name: 'Germany',
          visits: '1.2k',
          percentage: 7.0,
          color: '#FFB400',
          icon: '🇩🇪'
        },
        {
          name: 'Australia',
          visits: '890',
          percentage: 5.2,
          color: '#00CFE8',
          icon: '🇦🇺'
        },
        {
          name: 'France',
          visits: '645',
          percentage: 3.7,
          color: '#696CFF',
          icon: '🇫🇷'
        }
      ]
    }
  ];

  const currentData = tabsData[activeTab];

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
        <Tab label="BROWSER" />
        <Tab label="OPERATING SYSTEM" />
        <Tab label="COUNTRY" />
      </Tabs>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600, color: 'text.secondary', fontSize: '0.75rem', textTransform: 'uppercase', border: 0, pb: 2, pl: 0 }}>
                NO.
              </TableCell>
              <TableCell sx={{ fontWeight: 600, color: 'text.secondary', fontSize: '0.75rem', textTransform: 'uppercase', border: 0, pb: 2 }}>
                {currentData.label}
              </TableCell>
              <TableCell sx={{ fontWeight: 600, color: 'text.secondary', fontSize: '0.75rem', textTransform: 'uppercase', border: 0, pb: 2 }}>
                VISITS
              </TableCell>
              <TableCell sx={{ fontWeight: 600, color: 'text.secondary', fontSize: '0.75rem', textTransform: 'uppercase', border: 0, pb: 2 }}>
                DATA IN PERCENTAGE
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentData.data.map((item, index) => (
              <TableRow
                key={index}
                sx={{
                  '&:last-child td': { border: 0 }
                }}
              >
                <TableCell sx={{ border: 0, py: 2, pl: 0 }}>
                  <Typography variant="body2" color="text.secondary">
                    {index + 1}
                  </Typography>
                </TableCell>
                <TableCell sx={{ border: 0, py: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Avatar
                      sx={{
                        width: 32,
                        height: 32,
                        bgcolor: 'transparent',
                        fontSize: '1.2rem'
                      }}
                    >
                      {item.icon}
                    </Avatar>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {item.name}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ border: 0, py: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    {item.visits}
                  </Typography>
                </TableCell>
                <TableCell sx={{ border: 0, py: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ flex: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={item.percentage}
                        sx={{
                          height: 6,
                          borderRadius: 1,
                          bgcolor: '#F0F0F0',
                          '& .MuiLinearProgress-bar': {
                            bgcolor: item.color,
                            borderRadius: 1
                          }
                        }}
                      />
                    </Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, minWidth: 50, textAlign: 'right' }}>
                      {item.percentage}%
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
