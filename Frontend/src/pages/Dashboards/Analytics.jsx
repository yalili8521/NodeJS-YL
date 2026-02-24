import { Paper, Box } from '@mui/material';
import CongratulationsCard from '../../components/Cards/CongratulationsCard';
import SmallStatCard from '../../components/Cards/SmallStatCard';
import TotalRevenueChart from '../../components/Charts/TotalRevenueChart';
import OrderStatistics from '../../components/Charts/OrderStatistics';
import IncomeChart from '../../components/Charts/IncomeChart';
import ProfitReportChart from '../../components/Charts/ProfitReportChart';
import ActivityTimeline from '../../components/Lists/ActivityTimeline';
import TransactionsList from '../../components/Lists/TransactionsList';
import BrowserStatistics from '../../components/Tables/BrowserStatistics';

import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export default function Analytics() {
  return (
    <Box sx={{ maxWidth: 1440, mx: 'auto', width: '100%' }}>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: 3
      }}>
      {/* Row 1: Congratulations Card (8 cols) + 2 Small Stat Cards (Order and Sales) */}
      <Box sx={{ gridColumn: { xs: 'span 12', lg: 'span 8' } }}>
        <CongratulationsCard />
      </Box>
      <Box sx={{ gridColumn: { xs: 'span 12', lg: 'span 4' } }}>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 3
        }}>
          <Box>
            <Box sx={{ aspectRatio: '1/0.8' }}>
              <SmallStatCard
                title="Order"
                value="276k"
                change="+13.24%"
                icon={<ShoppingBagIcon sx={{ fontSize: 22 }} />}
                iconColor="#696CFF"
                iconBgColor="#696CFF15"
                chartData={true}
                chartColor="#56CA00"
              />
            </Box>
          </Box>
          <Box>
            <Box sx={{ aspectRatio: '1/0.8' }}>
              <SmallStatCard
                title="Sales"
                value="$4,679"
                change="+28.14%"
                icon={<TrendingUpIcon sx={{ fontSize: 22 }} />}
                iconColor="#00CFE8"
                iconBgColor="#00CFE815"
                chartData={true}
                chartColor="#00CFE8"
              />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Row 2: Total Revenue (8 cols) + Payments/Revenue/Profit (4 cols) */}
      <Box sx={{ gridColumn: { xs: 'span 12', lg: 'span 8' } }}>
        <Paper sx={{ p: 3 }}>
          <TotalRevenueChart />
        </Paper>
      </Box>
      <Box sx={{ gridColumn: { xs: 'span 12', lg: 'span 4' } }}>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 3
        }}>
          <Box>
            <Box sx={{ aspectRatio: '1/0.8' }}>
              <SmallStatCard
                title="Payments"
                value="$2,468"
                change="-14.82%"
                icon={<AccountBalanceWalletIcon sx={{ fontSize: 22 }} />}
                iconColor="#FF9F43"
                iconBgColor="#FF9F4315"
                chartData={true}
                chartColor="#696CFF"
              />
            </Box>
          </Box>
          <Box>
            <Box sx={{ aspectRatio: '1/0.8' }}>
              <SmallStatCard
                title="Revenue"
                value="425k"
                change="+5.7%"
                icon={<AttachMoneyIcon sx={{ fontSize: 22 }} />}
                iconColor="#FF4C51"
                iconBgColor="#FF4C5115"
                chartData={true}
                chartColor="#696CFF"
              />
            </Box>
          </Box>
          <Box sx={{ gridColumn: 'span 2' }}>
            <Box sx={{ aspectRatio: '1/0.4' }}>
              <Paper sx={{ p: 3, height: '100%' }}>
                <ProfitReportChart />
              </Paper>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Row 3: Order Statistics + Income + Transactions */}
      <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 6', lg: 'span 4' } }}>
        <Paper sx={{ p: 3, height: '100%' }}>
          <OrderStatistics />
        </Paper>
      </Box>
      <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 6', lg: 'span 4' } }}>
        <Paper sx={{ p: 3, height: '100%' }}>
          <IncomeChart />
        </Paper>
      </Box>
      <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 6', lg: 'span 4' } }}>
        <Paper sx={{ p: 3, height: '100%' }}>
          <TransactionsList />
        </Paper>
      </Box>

      {/* Row 4: Activity Timeline + Browser Statistics */}
      <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
        <Paper sx={{ p: 3, height: '100%' }}>
          <ActivityTimeline />
        </Paper>
      </Box>
      <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
        <Paper sx={{ p: 3, height: '100%' }}>
          <BrowserStatistics />
        </Paper>
      </Box>
    </Box>
    </Box>
  );
}
