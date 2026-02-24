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
  Chip
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function CustomerTable() {
  const customers = [
    {
      name: 'Henry Barnes',
      email: 'jok@puc.co.uk',
      avatar: '👨',
      avatarBg: '#696CFF',
      amount: '$459.65',
      status: 'PAID',
      statusColor: '#56CA00',
      payment: 'mastercard'
    },
    {
      name: 'Herman Holland',
      email: 'sam@efo.com',
      avatar: '👨',
      avatarBg: '#FF4C51',
      amount: '$93.81',
      status: 'PENDING',
      statusColor: '#FFB400',
      payment: 'visa'
    },
    {
      name: 'Hallie Warner',
      email: 'initus@edemi.com',
      avatar: '👩',
      avatarBg: '#00CFE8',
      amount: '$934.34',
      status: 'PENDING',
      statusColor: '#FFB400',
      payment: 'visa'
    },
    {
      name: 'John Davidson',
      email: 'tum@upkepja.gov',
      avatar: '👨',
      avatarBg: '#56CA00',
      amount: '$794.97',
      status: 'PAID',
      statusColor: '#56CA00',
      payment: 'paypal'
    },
    {
      name: 'Cora Schmidt',
      email: 'wipare@tin.com',
      avatar: '👤',
      avatarBg: '#8592A3',
      amount: '$19.49',
      status: 'PAID',
      statusColor: '#56CA00',
      payment: 'mastercard'
    },
    {
      name: 'Betty Ross',
      email: 'nur@koomor.edu',
      avatar: '👩',
      avatarBg: '#FF4C51',
      amount: '$636.27',
      status: 'FAILED',
      statusColor: '#FF4C51',
      payment: 'paypal'
    }
  ];

  const getPaymentIcon = (payment) => {
    if (payment === 'mastercard') return '💳';
    if (payment === 'visa') return 'VISA';
    if (payment === 'paypal') return 'PayPal';
    return payment;
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>
          Customer
        </Typography>
        <MoreVertIcon sx={{ color: 'text.secondary', fontSize: 18, cursor: 'pointer' }} />
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600, color: 'text.secondary', fontSize: '0.6875rem', textTransform: 'uppercase', border: 0, pb: 1 }}>
                CUSTOMER
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
            {customers.map((customer, index) => (
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
                        bgcolor: `${customer.avatarBg}20`,
                        fontSize: '1rem'
                      }}
                    >
                      {customer.avatar}
                    </Avatar>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.75rem', mb: 0.125 }}>
                        {customer.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.6875rem' }}>
                        {customer.email}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell sx={{ border: 0, py: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>
                    {customer.amount}
                  </Typography>
                </TableCell>
                <TableCell sx={{ border: 0, py: 1 }}>
                  <Chip
                    label={customer.status}
                    size="small"
                    sx={{
                      bgcolor: `${customer.statusColor}15`,
                      color: customer.statusColor,
                      fontWeight: 600,
                      fontSize: '0.625rem',
                      height: 20
                    }}
                  />
                </TableCell>
                <TableCell sx={{ border: 0, py: 1 }}>
                  <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>
                    {getPaymentIcon(customer.payment)}
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
