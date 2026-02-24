import CustomerRatingsCard from '../../components/Cards/CustomerRatingsCard';
import SessionsCard from '../../components/Cards/SessionsCard';
import OrdersCard from '../../components/Cards/OrdersCard';
import GeneratedLeadsCard from '../../components/Cards/GeneratedLeadsCard';
import TopProductsList from '../../components/Lists/TopProductsList';
import EarningReportCard from '../../components/Cards/EarningReportCard';
import SalesByCountries from '../../components/Lists/SalesByCountries';
import TeamMembersTable from '../../components/Tables/TeamMembersTable';
import CustomerTable from '../../components/Tables/CustomerTable';
import OverviewSalesChart from '../../components/Charts/OverviewSalesChart';
import SalesAnalyticsHeatmap from '../../components/Charts/SalesAnalyticsHeatmap';
import SalesStatsChart from '../../components/Charts/SalesStatsChart';
import { Box } from '@mui/material';

export default function CRMPage() {
  return (
    <Box sx={{ maxWidth: 1440, mx: 'auto', width: '100%' }}>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: 3
      }}>
        {/* Row 1: Customer Ratings (4 cols) + Overview & Sales (4 cols) + (Sessions & Orders top half, Generated Leads bottom half) (4 cols) */}
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 4' } }}>
          <CustomerRatingsCard sx={{ height: '100%' }} />
        </Box>
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 4' } }}>
          <OverviewSalesChart sx={{ height: '100%' }} />
        </Box>
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 4' } }}>
          <Box sx={{
            display: 'grid',
            gridTemplateRows: 'auto 1fr',
            gap: 3,
            height: '100%'
          }}>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 3
            }}>
              <Box>
                <SessionsCard sx={{ height: '100%' }} />
              </Box>
              <Box>
                <OrdersCard sx={{ height: '100%' }} />
              </Box>
            </Box>
            <Box>
              <GeneratedLeadsCard sx={{ height: '100%' }} />
            </Box>
          </Box>
        </Box>

        {/* Row 2: Top Products by Sales (4 cols) + Top Products by Volume (4 cols) + Earning Report (4 cols) */}
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 4' } }}>
          <TopProductsList type="sales" sx={{ height: '100%' }} />
        </Box>
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 4' } }}>
          <TopProductsList type="volume" sx={{ height: '100%' }} />
        </Box>
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 4' } }}>
          <EarningReportCard sx={{ height: '100%' }} />
        </Box>

        {/* Row 3: Sales Analytics (4 cols) + Sales by Countries (4 cols) + Sales Stats (4 cols) */}
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 4' } }}>
          <SalesAnalyticsHeatmap sx={{ height: '100%' }} />
        </Box>
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 4' } }}>
          <SalesByCountries sx={{ height: '100%' }} />
        </Box>
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 4' } }}>
          <SalesStatsChart sx={{ height: '100%' }} />
        </Box>

        {/* Row 4: Team Members Table (4 cols) + Customer (8 cols) */}
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 4' } }}>
          <TeamMembersTable sx={{ height: '100%' }} />
        </Box>
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 8' } }}>
          <CustomerTable sx={{ height: '100%' }} />
        </Box>
      </Box>
    </Box>
  );
}
