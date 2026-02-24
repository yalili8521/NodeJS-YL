import { Card, CardContent, Typography, Box } from '@mui/material';

export default function ChartCard({ title, children }) {
  return (
    <Card sx={{ height: '100%', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
          {title}
        </Typography>
        <Box>
          {children}
        </Box>
      </CardContent>
    </Card>
  );
}
