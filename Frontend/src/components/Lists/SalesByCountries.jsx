import { Box, Typography, Paper, List, ListItem, ListItemText, LinearProgress, Avatar } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function SalesByCountries() {
  const countries = [
    { name: 'United States of America', sales: '$8,656k', percentage: 25.8, visits: '894k', flag: '🇺🇸', color: '#696CFF' },
    { name: 'Brazil', sales: '$2,415k', percentage: 6.2, visits: '645k', flag: '🇧🇷', color: '#56CA00' },
    { name: 'India', sales: '$865k', percentage: 12.4, visits: '148k', flag: '🇮🇳', color: '#FFB400' },
    { name: 'Australia', sales: '$745k', percentage: -11.9, visits: '86k', flag: '🇦🇺', color: '#00CFE8' },
    { name: 'Belgium', sales: '$45k', percentage: +16.2, visits: '42k', flag: '🇧🇪', color: '#FF9F43' },
    { name: 'China', sales: '$12k', percentage: +14.8, visits: '8k', flag: '🇨🇳', color: '#FF4C51' }
  ];

  return (
    <Paper sx={{ p: 2, height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>
          Sales by Countries
        </Typography>
        <MoreVertIcon sx={{ color: 'text.secondary', fontSize: 18, cursor: 'pointer' }} />
      </Box>

      <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.6875rem', display: 'block', mb: 1.5 }}>
        Monthly Sales Overview
      </Typography>

      <List sx={{ p: 0 }}>
        {countries.map((country, index) => (
          <ListItem
            key={index}
            sx={{
              px: 0,
              py: 1,
              borderBottom: index !== countries.length - 1 ? '1px solid #F0F0F0' : 'none',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 0.75
            }}
          >
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Avatar
                  sx={{
                    width: 24,
                    height: 24,
                    bgcolor: 'transparent',
                    fontSize: '1rem'
                  }}
                >
                  {country.flag}
                </Avatar>
                <Typography variant="body2" sx={{ fontWeight: 500, fontSize: '0.75rem' }}>
                  {country.name}
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>
                {country.sales}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', gap: 1.5 }}>
              <Box sx={{ flex: 1 }}>
                <LinearProgress
                  variant="determinate"
                  value={Math.abs(country.percentage) * 3}
                  sx={{
                    height: 4,
                    borderRadius: 0.75,
                    bgcolor: '#F0F0F0',
                    '& .MuiLinearProgress-bar': {
                      bgcolor: country.color,
                      borderRadius: 0.75
                    }
                  }}
                />
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.6875rem', minWidth: 32 }}>
                {country.visits}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
