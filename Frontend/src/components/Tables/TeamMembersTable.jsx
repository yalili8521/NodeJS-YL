import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  LinearProgress,
  Chip
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function TeamMembersTable() {
  const members = [
    {
      name: 'Nathan Wagner',
      email: 'testmail@gmail.com',
      avatar: '👨',
      project: 'ZIPCAR',
      projectColor: '#696CFF',
      tasks: '871/25',
      progress: 78,
      amount: '$452.85',
      status: 'PAID',
      statusColor: '#56CA00',
      payment: '💳'
    },
    {
      name: 'Emma Bowen',
      email: 'testmail@gmail.com',
      avatar: '👩',
      project: 'BITBANK',
      projectColor: '#FF4C51',
      tasks: '340/420',
      progress: 62,
      amount: '$93.81',
      status: 'PENDING',
      statusColor: '#FFB400',
      payment: 'VISA'
    },
    {
      name: 'Hallie Warner',
      email: 'testmail@gmail.com',
      avatar: '👩',
      project: 'AVIATO',
      projectColor: '#FFB400',
      tasks: '50/82',
      progress: 46,
      amount: '$934.34',
      status: 'PENDING',
      statusColor: '#FFB400',
      payment: 'VISA'
    },
    {
      name: 'John Davidson',
      email: 'testmail@gmail.com',
      avatar: '👨',
      project: 'BIFFCO',
      projectColor: '#56CA00',
      tasks: '98/260',
      progress: 30,
      amount: '$784.97',
      status: 'PAID',
      statusColor: '#56CA00',
      payment: 'PayPal'
    },
    {
      name: 'Alma Gonzalez',
      email: 'testmail@gmail.com',
      avatar: '👩',
      project: 'BRAINST',
      projectColor: '#00CFE8',
      tasks: '98/260',
      progress: 70,
      amount: '$18.48',
      status: 'PAID',
      statusColor: '#56CA00',
      payment: '💳'
    }
  ];

  return (
    <Paper sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>
          Team Members
        </Typography>
        <MoreVertIcon sx={{ color: 'text.secondary', fontSize: 18, cursor: 'pointer' }} />
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600, color: 'text.secondary', fontSize: '0.6875rem', textTransform: 'uppercase', border: 0, pb: 1 }}>
                NAME
              </TableCell>
              <TableCell sx={{ fontWeight: 600, color: 'text.secondary', fontSize: '0.6875rem', textTransform: 'uppercase', border: 0, pb: 1 }}>
                PROJECT
              </TableCell>
              <TableCell sx={{ fontWeight: 600, color: 'text.secondary', fontSize: '0.6875rem', textTransform: 'uppercase', border: 0, pb: 1 }}>
                TASKS
              </TableCell>
              <TableCell sx={{ fontWeight: 600, color: 'text.secondary', fontSize: '0.6875rem', textTransform: 'uppercase', border: 0, pb: 1 }}>
                PROGRESS
              </TableCell>
              <TableCell sx={{ fontWeight: 600, color: 'text.secondary', fontSize: '0.6875rem', textTransform: 'uppercase', border: 0, pb: 1 }}>
                AMOUNT
              </TableCell>
              <TableCell sx={{ fontWeight: 600, color: 'text.secondary', fontSize: '0.6875rem', textTransform: 'uppercase', border: 0, pb: 1 }}>
                STATUS
              </TableCell>
              <TableCell sx={{ fontWeight: 600, color: 'text.secondary', fontSize: '0.6875rem', textTransform: 'uppercase', border: 0, pb: 1 }}>
                PAID BY
              </TableCell>
              <TableCell sx={{ fontWeight: 600, color: 'text.secondary', fontSize: '0.6875rem', textTransform: 'uppercase', border: 0, pb: 1 }}>
                ACTIONS
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {members.map((member, index) => (
              <TableRow
                key={index}
                sx={{
                  '&:last-child td': { border: 0 }
                }}
              >
                <TableCell sx={{ border: 0, py: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Avatar
                      sx={{
                        width: 28,
                        height: 28,
                        bgcolor: 'transparent',
                        fontSize: '1rem'
                      }}
                    >
                      {member.avatar}
                    </Avatar>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.75rem', mb: 0.125 }}>
                        {member.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.6875rem' }}>
                        {member.email}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell sx={{ border: 0, py: 1 }}>
                  <Chip
                    label={member.project}
                    size="small"
                    sx={{
                      bgcolor: `${member.projectColor}15`,
                      color: member.projectColor,
                      fontWeight: 600,
                      fontSize: '0.625rem',
                      height: 20
                    }}
                  />
                </TableCell>
                <TableCell sx={{ border: 0, py: 1 }}>
                  <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>
                    {member.tasks}
                  </Typography>
                </TableCell>
                <TableCell sx={{ border: 0, py: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 100 }}>
                    <LinearProgress
                      variant="determinate"
                      value={member.progress}
                      sx={{
                        flex: 1,
                        height: 4,
                        borderRadius: 0.75,
                        bgcolor: '#F0F0F0',
                        '& .MuiLinearProgress-bar': {
                          bgcolor: member.projectColor,
                          borderRadius: 0.75
                        }
                      }}
                    />
                    <Typography variant="body2" sx={{ fontSize: '0.6875rem', fontWeight: 600, minWidth: 28 }}>
                      {member.progress}%
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ border: 0, py: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>
                    {member.amount}
                  </Typography>
                </TableCell>
                <TableCell sx={{ border: 0, py: 1 }}>
                  <Chip
                    label={member.status}
                    size="small"
                    sx={{
                      bgcolor: `${member.statusColor}15`,
                      color: member.statusColor,
                      fontWeight: 600,
                      fontSize: '0.625rem',
                      height: 20
                    }}
                  />
                </TableCell>
                <TableCell sx={{ border: 0, py: 1 }}>
                  <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>
                    {member.payment}
                  </Typography>
                </TableCell>
                <TableCell sx={{ border: 0, py: 1 }}>
                  <MoreVertIcon sx={{ color: 'text.secondary', fontSize: 18, cursor: 'pointer' }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
