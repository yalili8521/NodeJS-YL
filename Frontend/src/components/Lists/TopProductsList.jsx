import { Box, Typography, Paper, List, ListItem, ListItemIcon, ListItemText, Avatar } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function TopProductsList({ type = 'sales' }) {
  const salesProducts = [
    { name: 'Oneplus Nord', company: 'Oneplus', value: '$98,348', color: '#FF9F43', icon: '📱' },
    { name: 'Smart Band 4', company: 'Xiaomi', value: '$15,459', color: '#696CFF', icon: '⌚' },
    { name: 'Surface Pro X', company: 'Microsoft', value: '$4,589', color: '#00CFE8', icon: '💻' },
    { name: 'iPhone 13', company: 'Apple', value: '$84,345', color: '#56CA00', icon: '📱' },
    { name: 'Bluetooth Earphone', company: 'Beats', value: '$10,3748', color: '#A8AAAE', icon: '🎧' }
  ];

  const volumeProducts = [
    { name: 'ENVY Laptop', company: 'HP', value: '12.4k', change: '+42.8%', changeColor: '#56CA00', color: '#E0E0E0', icon: '💻' },
    { name: 'Apple', company: 'iMac Pro', value: '74.9k', change: '-8.5%', changeColor: '#FF4C51', color: '#FFB400', icon: '🖥' },
    { name: 'Smart Watch', company: 'Fitbit', value: '4.4k', change: '+17.6%', changeColor: '#56CA00', color: '#FF4C51', icon: '⌚' },
    { name: 'Oneplus Nord', company: 'Oneplus', value: '12.3 4k', change: '+14.87%', changeColor: '#56CA00', color: '#56CA00', icon: '📱' },
    { name: 'Pixel 4a', company: 'Google', value: '8.65k', change: '-11.2%', changeColor: '#FF4C51', color: '#696CFF', icon: '📱' }
  ];

  const products = type === 'sales' ? salesProducts : volumeProducts;
  const title = type === 'sales' ? 'Top Products by Sales' : 'Top Products by Volume';

  return (
    <Paper sx={{ p: 2, height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>
          {title}
        </Typography>
        <MoreVertIcon sx={{ color: 'text.secondary', fontSize: 18, cursor: 'pointer' }} />
      </Box>

      <List sx={{ p: 0 }}>
        {products.map((product, index) => (
          <ListItem
            key={index}
            sx={{
              px: 0,
              py: 1,
              borderBottom: index !== products.length - 1 ? '1px solid #F0F0F0' : 'none'
            }}
          >
            <ListItemIcon sx={{ minWidth: 36 }}>
              <Avatar
                sx={{
                  width: 28,
                  height: 28,
                  bgcolor: `${product.color}20`,
                  fontSize: '1rem'
                }}
              >
                {product.icon}
              </Avatar>
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.75rem', mb: 0.125 }}>
                  {product.name}
                </Typography>
              }
              secondary={
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.6875rem' }}>
                  {product.company}
                </Typography>
              }
            />
            <Box sx={{ textAlign: 'right' }}>
              <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.75rem', mb: 0.125 }}>
                {product.value}
              </Typography>
              {type === 'volume' && product.change && (
                <Box
                  sx={{
                    px: 0.75,
                    py: 0.125,
                    bgcolor: `${product.changeColor}15`,
                    borderRadius: 0.75,
                    display: 'inline-block'
                  }}
                >
                  <Typography variant="caption" sx={{ color: product.changeColor, fontWeight: 600, fontSize: '0.625rem' }}>
                    {product.change}
                  </Typography>
                </Box>
              )}
            </Box>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
