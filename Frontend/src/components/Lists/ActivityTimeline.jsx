import { Box, Typography, Stack } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';

export default function ActivityTimeline() {
  const activities = [
    {
      icon: <AttachMoneyIcon sx={{ fontSize: 20 }} />,
      color: '#696CFF',
      title: '12 Invoices have been paid',
      time: '12 min ago',
      description: 'Invoices have been paid to the company'
    },
    {
      icon: <PersonIcon sx={{ fontSize: 20 }} />,
      color: '#56CA00',
      title: 'Client Meeting',
      time: '45 min ago',
      description: 'Project meeting with john @10:15am'
    },
    {
      icon: <DescriptionIcon sx={{ fontSize: 20 }} />,
      color: '#FFB400',
      title: 'Create a new project for client',
      time: '2 day ago',
      description: '6 team members in a project'
    }
  ];

  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
        Activity Timeline
      </Typography>
      <Stack spacing={3}>
        {activities.map((activity, index) => (
          <Box key={index} sx={{ display: 'flex', gap: 2 }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '8px',
                bgcolor: `${activity.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                color: activity.color
              }}
            >
              {activity.icon}
            </Box>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 0.5 }}>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {activity.title}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {activity.time}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                {activity.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
