import { Card, CardContent, Box, Typography } from '@mui/material';

export default function StatCard({ title, value, change, icon, color }) {
  return (
    <Card sx={{ height: '100%', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: 1,
              backgroundColor: `${color}15`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: color,
            }}
          >
            {icon}
          </Box>
        </Box>

        <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
          {value}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: change.startsWith('+') ? '#56CA00' : '#FF4C51',
              fontWeight: 600,
            }}
          >
            {change}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
