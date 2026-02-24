import { Box, Typography, Button, Card, CardContent } from '@mui/material';
import { useSelector } from 'react-redux';

export default function CongratulationsCard() {
  const { user } = useSelector((state) => state.auth);
  const userName = user?.name?.split(' ')[0] || 'User';

  return (
    <Card
      sx={{
        background: 'white',
        color: '#696CFF',
        height: '100%',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <CardContent sx={{ p: 3, pb: '24px !important', position: 'relative', zIndex: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
          Congratulations {userName}! 🎉
        </Typography>
        <Typography variant="body2" sx={{ mb: 3, opacity: 0.9, maxWidth: '200px', lineHeight: 1.6, color: 'black' }}>
          You have done 72% more sales today. Check your new badge in your profile.
        </Typography>
        <Button
          variant="contained"
          sx={{
            border: '1px solid #696CFF',
            bgcolor: 'white',
            color: '#696CFF',
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: '0.75rem',
            px: 2,
            py: 1,
            boxShadow: 'none',
            '&:hover': {
              bgcolor: 'grey.100',
              boxShadow: 'none',
              transform: 'translateY(-0.5px)'
            }
          }}
        >
          VIEW BADGES
        </Button>
      </CardContent>
      <Box
        sx={{
          position: 'absolute',
          right: -10,
          bottom: 0,
          width: 160,
          height: 160,
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 200\'%3E%3Cg fill=\'%23ffffff\' opacity=\'0.15\'%3E%3Ccircle cx=\'100\' cy=\'100\' r=\'80\'/%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            fontSize: '80px',
            filter: 'grayscale(0)',
            opacity: 0.9,
            transform: 'translate(10px, 20px)'
          }}
        >
          🧑‍💻
        </Box>
      </Box>
    </Card>
  );
}
