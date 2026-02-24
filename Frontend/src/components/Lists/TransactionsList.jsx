import { Box, Typography, Stack, Avatar } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PaymentsIcon from '@mui/icons-material/Payments';

export default function TransactionsList() {
  const transactions = [
    {
      icon: <PaymentsIcon sx={{ fontSize: 20 }} />,
      iconColor: '#696CFF',
      iconBg: '#696CFF15',
      title: 'Paypal',
      subtitle: 'Send money',
      amount: '+$82.6',
      isPositive: true
    },
    {
      icon: <AccountBalanceWalletIcon sx={{ fontSize: 20 }} />,
      iconColor: '#56CA00',
      iconBg: '#56CA0015',
      title: 'Wallet',
      subtitle: 'Mac\'D',
      amount: '-$270.69',
      isPositive: false
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 20 }} />,
      iconColor: '#FFB400',
      iconBg: '#FFB40015',
      title: 'Transfer',
      subtitle: 'Refund',
      amount: '+$637.91',
      isPositive: true
    },
    {
      icon: <CreditCardIcon sx={{ fontSize: 20 }} />,
      iconColor: '#FF4C51',
      iconBg: '#FF4C5115',
      title: 'Credit Card',
      subtitle: 'Ordered Food',
      amount: '-$838.71',
      isPositive: false
    },
    {
      icon: <AccountBalanceWalletIcon sx={{ fontSize: 20 }} />,
      iconColor: '#696CFF',
      iconBg: '#696CFF15',
      title: 'Wallet',
      subtitle: 'Starbucks',
      amount: '-$203.33',
      isPositive: false
    }
  ];

  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
        Transactions
      </Typography>
      <Stack spacing={2.5}>
        {transactions.map((transaction, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar
                sx={{
                  bgcolor: transaction.iconBg,
                  color: transaction.iconColor,
                  width: 40,
                  height: 40
                }}
              >
                {transaction.icon}
              </Avatar>
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.25 }}>
                  {transaction.title}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {transaction.subtitle}
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                color: transaction.isPositive ? '#56CA00' : '#FF4C51'
              }}
            >
              {transaction.amount}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
