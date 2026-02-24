import { Box, Typography, Grid, Button } from '@mui/material';
import { Icon } from '@iconify/react';

export default function IconsPage() {
  const icons = [
    'mdi:bed-outline',
    'mdi:bike',
    'mdi:image-outline',
    'mdi:moon-waning-crescent',
    'mdi:alarm',
    'mdi:emoticon-happy-outline',
    'mdi:alarm-check',
    'mdi:eye-off-outline',
    'mdi:emoticon-cool-outline',
    'mdi:emoticon-sad-outline',
    'mdi:bell-outline',
    'mdi:basketball',
    'mdi:file-document-outline',
    'mdi:image-plus-outline',
    'mdi:checkbox-blank-outline',
    'mdi:arrow-left',
    'mdi:arrow-up',
    'mdi:arrow-right',
    'mdi:arrow-left-bold',
    'mdi:arrow-down-bold',
    'mdi:arrow-down',
    'mdi:logout',
    'mdi:arrow-up-bold',
    'mdi:at',
    'mdi:close-circle-outline',
    'mdi:help-circle-outline',
    'mdi:link-variant',
    'mdi:link-variant-off',
    'mdi:pencil-outline',
    'mdi:chart-bar',
    'mdi:chart-line',
    'mdi:chart-pie',
    'mdi:table-large',
    'mdi:android-messages',
    'mdi:clock-outline',
    'mdi:basket-outline',
  ];

  return (
    <Box sx={{ p: 3, maxWidth: 1440, mx: 'auto', width: '100%' }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            color: '#696CFF',
            mb: 1
          }}
        >
          Iconify Design
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Modern unified SVG framework
        </Typography>
      </Box>

      {/* Icons Grid */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {icons.map((iconName, index) => (
          <Grid item xs={4} sm={3} md={2} lg={1.5} xl={1} key={index}>
            <Box
              sx={{
                p: 2,
                bgcolor: '#fff',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 80,
                transition: 'all 0.2s',
                cursor: 'pointer',
                '&:hover': {
                  bgcolor: '#f5f5f9',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <Icon
                icon={iconName}
                width="28"
                height="28"
                style={{ color: '#4B465C' }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* View All Button */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#696CFF',
            textTransform: 'uppercase',
            px: 4,
            py: 1.5,
            '&:hover': { backgroundColor: '#5f5ee0' }
          }}
          href="https://icon-sets.iconify.design/"
          target="_blank"
        >
          VIEW ALL ICONS
        </Button>
      </Box>
    </Box>
  );
}
