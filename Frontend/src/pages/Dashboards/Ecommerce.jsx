import CongratulationsKatieCard from '../../components/Cards/CongratulationsKatieCard';
import { Box, Paper, Typography, LinearProgress, Button, CircularProgress } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

export default function EcommercePage() {
  // Small stat card component
  const SmallStatCard = ({ title, value, change, icon, color, isNegative }) => (
    <Paper sx={{ p: 1.5, height: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
        <Box sx={{width: 24, height: 24, borderRadius: 0.75, bgcolor: `${color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem'}}>
          {icon}
        </Box>
        <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.6875rem' }}>
          {title}
        </Typography>
      </Box>
      <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.125rem', mb: 0.5 }}>
        {value}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        {isNegative ? (
          <TrendingDownIcon sx={{ fontSize: 14, color: '#FF4C51' }} />
        ) : (
          <TrendingUpIcon sx={{ fontSize: 14, color: '#56CA00' }} />
        )}
        <Typography variant="caption" sx={{ color: isNegative ? '#FF4C51' : '#56CA00', fontWeight: 600, fontSize: '0.6875rem' }}>
          {change}
        </Typography>
      </Box>
    </Paper>
  );

  return (
    <Box sx={{ maxWidth: 1440, mx: 'auto', width: '100%' }}>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: 2
      }}>
        {/* Row 1: Congratulations Katie + New Visitors + Activity */}
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 4' } }}>
          <CongratulationsKatieCard />
        </Box>
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 4' } }}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>
                New Visitors
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.6875rem' }}>
                Last Week
              </Typography>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 700, fontSize: '1.75rem', mb: 0.5 }}>
              23%
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 2 }}>
              <TrendingDownIcon sx={{ fontSize: 14, color: '#FF4C51' }} />
              <Typography variant="caption" sx={{ color: '#FF4C51', fontWeight: 600, fontSize: '0.6875rem' }}>
                -8.75%
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-end', height: 60 }}>
              {[30, 50, 40, 60, 50, 70, 90].map((height, i) => (
                <Box key={i} sx={{ flex: 1, height: `${height}%`, bgcolor: i === 6 ? '#696CFF' : '#E0E0E0', borderRadius: '4px 4px 0 0' }} />
              ))}
            </Box>
          </Paper>
        </Box>
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 4' } }}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>
                Activity
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.6875rem' }}>
                Last Week
              </Typography>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 700, fontSize: '1.75rem', mb: 0.5 }}>
              82%
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 2 }}>
              <TrendingUpIcon sx={{ fontSize: 14, color: '#56CA00' }} />
              <Typography variant="caption" sx={{ color: '#56CA00', fontWeight: 600, fontSize: '0.6875rem' }}>
                +15.8%
              </Typography>
            </Box>
            <Box sx={{ height: 60, position: 'relative' }}>
              <svg width="100%" height="100%" viewBox="0 0 100 60" preserveAspectRatio="none">
                <polyline
                  points="0,40 15,35 30,45 45,20 60,30 75,15 90,10 100,5"
                  fill="none"
                  stroke="#56CA00"
                  strokeWidth="2"
                />
                <polyline
                  points="0,40 15,35 30,45 45,20 60,30 75,15 90,10 100,5 100,60 0,60"
                  fill="url(#activityGradient)"
                />
                <defs>
                  <linearGradient id="activityGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#56CA00" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#56CA00" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </Box>
          </Paper>
        </Box>

        {/* Row 2: Left 2x2 Grid + Middle Total Income + Right Report */}
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 3' } }}>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 3
          }}>
            <Box>
              <Paper sx={{ aspectRatio: '1', p: 2, display: 'flex', flexDirection: 'column', boxSizing: 'border-box', overflow: 'hidden' }}>
                <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.75rem', mb: 1 }}>
                  Sales
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.5rem', mb: 0.5 }}>
                  $4,679
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 2 }}>
                  <TrendingUpIcon sx={{ fontSize: 14, color: '#56CA00' }} />
                  <Typography variant="caption" sx={{ color: '#56CA00', fontWeight: 600, fontSize: '0.6875rem' }}>
                    +28.14%
                  </Typography>
                </Box>
                <Box sx={{ mt: 'auto' }}>
                  <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'flex-end', height: 40 }}>
                    {[60, 80, 70, 90, 60, 70].map((height, i) => (
                      <Box key={i} sx={{ flex: 1, height: `${height}%`, bgcolor: i === 5 ? '#00CFE8' : '#E0E0E0', borderRadius: '2px 2px 0 0' }} />
                    ))}
                  </Box>
                </Box>
              </Paper>
            </Box>
            <Box>
              <Paper sx={{ aspectRatio: '1', p: 2, display: 'flex', flexDirection: 'column', boxSizing: 'border-box', overflow: 'hidden' }}>
                <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.75rem', mb: 1 }}>
                  Profit
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.5rem', mb: 0.5 }}>
                  $1,956
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 2 }}>
                  <TrendingUpIcon sx={{ fontSize: 14, color: '#56CA00' }} />
                  <Typography variant="caption" sx={{ color: '#56CA00', fontWeight: 600, fontSize: '0.6875rem' }}>
                    +18.2%
                  </Typography>
                </Box>
                <Box sx={{ mt: 'auto', height: 40, position: 'relative' }}>
                  <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
                    <polyline
                      points="0,30 20,25 40,28 60,15 80,20 100,10"
                      fill="none"
                      stroke="#696CFF"
                      strokeWidth="2"
                    />
                  </svg>
                </Box>
              </Paper>
            </Box>
            <Box>
              <Paper sx={{ aspectRatio: '1', p: 2, display: 'flex', flexDirection: 'column', boxSizing: 'border-box', overflow: 'hidden' }}>
                <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.75rem', mb: 1 }}>
                  Expenses
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.5rem', mb: 0.5 }}>
                  $2,341
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 2 }}>
                  <TrendingDownIcon sx={{ fontSize: 14, color: '#FF4C51' }} />
                  <Typography variant="caption" sx={{ color: '#FF4C51', fontWeight: 600, fontSize: '0.6875rem' }}>
                    -12.6%
                  </Typography>
                </Box>
                <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <CircularProgress
                    variant="determinate"
                    value={72}
                    size={50}
                    thickness={6}
                    sx={{
                      color: '#FF4C51',
                      '& .MuiCircularProgress-circle': {
                        strokeLinecap: 'round'
                      }
                    }}
                  />
                </Box>
              </Paper>
            </Box>
            <Box>
              <Paper sx={{ aspectRatio: '1', p: 2, display: 'flex', flexDirection: 'column', boxSizing: 'border-box', overflow: 'hidden' }}>
                <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.75rem', mb: 1 }}>
                  Transactions
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.5rem', mb: 0.5 }}>
                  $14.8k
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 2 }}>
                  <TrendingUpIcon sx={{ fontSize: 14, color: '#56CA00' }} />
                  <Typography variant="caption" sx={{ color: '#56CA00', fontWeight: 600, fontSize: '0.6875rem' }}>
                    +42.6%
                  </Typography>
                </Box>
                <Box sx={{ mt: 'auto' }}>
                  <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'flex-end', height: 40 }}>
                    {[70, 50, 80, 60, 90, 70].map((height, i) => (
                      <Box key={i} sx={{ flex: 1, height: `${height}%`, bgcolor: i % 2 === 0 ? '#696CFF' : '#FFB400', borderRadius: '2px 2px 0 0' }} />
                    ))}
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Box>
        </Box>

        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <Box sx={{ aspectRatio: '2.15' }}>
            <Paper sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.75rem', mb: 2 }}>
                Total Income
              </Typography>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: 1 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, fontSize: '1.75rem' }}>
                  $459.1k
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.6875rem' }}>
                  Yearly Report
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 2 }}>
                <TrendingUpIcon sx={{ fontSize: 14, color: '#56CA00' }} />
                <Typography variant="caption" sx={{ color: '#56CA00', fontWeight: 600, fontSize: '0.6875rem' }}>
                  +42.6%
                </Typography>
              </Box>
              <Box sx={{ flex: 1, minHeight: 0 }}>
                <Box sx={{ height: '70%', position: 'relative' }}>
                  <svg width="100%" height="70%" viewBox="0 0 400 200" preserveAspectRatio="none">
                    <polyline
                      points="0,120 50,110 100,130 150,80 200,100 250,60 300,70 350,40 400,50"
                      fill="none"
                      stroke="#696CFF"
                      strokeWidth="3"
                    />
                    <polyline
                      points="0,120 50,110 100,130 150,80 200,100 250,60 300,70 350,40 400,50 400,200 0,200"
                      fill="url(#incomeGradient)"
                    />
                    <defs>
                      <linearGradient id="incomeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#696CFF" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#696CFF" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </Box>
              </Box>
            </Box>
          </Paper>
          </Box>
        </Box>

        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 3' } }}>
          <Box sx={{ aspectRatio: '1' }}>
            <Paper sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.75rem', mb: 2 }}>
                Report
              </Typography>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Box>
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.6875rem', display: 'block', mb: 0.5 }}>
                  Year 2024
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 700, fontSize: '1.75rem', mb: 2 }}>
                  $84.7k
                </Typography>
              </Box>
              <Box>
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#696CFF' }} />
                      <Typography variant="caption" sx={{ fontSize: '0.6875rem' }}>
                        Income
                      </Typography>
                    </Box>
                    <Typography variant="caption" sx={{ fontSize: '0.6875rem', fontWeight: 600 }}>
                      $42.5k
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={65}
                    sx={{
                      height: 6,
                      borderRadius: 1,
                      bgcolor: '#E0E0E0',
                      '& .MuiLinearProgress-bar': {
                        bgcolor: '#696CFF',
                        borderRadius: 1
                      }
                    }}
                  />
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#00CFE8' }} />
                      <Typography variant="caption" sx={{ fontSize: '0.6875rem' }}>
                        Expenses
                      </Typography>
                    </Box>
                    <Typography variant="caption" sx={{ fontSize: '0.6875rem', fontWeight: 600 }}>
                      $26.4k
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={45}
                    sx={{
                      height: 6,
                      borderRadius: 1,
                      bgcolor: '#E0E0E0',
                      '& .MuiLinearProgress-bar': {
                        bgcolor: '#00CFE8',
                        borderRadius: 1
                      }
                    }}
                  />
                </Box>

                <Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#56CA00' }} />
                      <Typography variant="caption" sx={{ fontSize: '0.6875rem' }}>
                        Profit
                      </Typography>
                    </Box>
                    <Typography variant="caption" sx={{ fontSize: '0.6875rem', fontWeight: 600 }}>
                      $15.8k
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={30}
                    sx={{
                      height: 6,
                      borderRadius: 1,
                      bgcolor: '#E0E0E0',
                      '& .MuiLinearProgress-bar': {
                        bgcolor: '#56CA00',
                        borderRadius: 1
                      }
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Paper>
          </Box>
        </Box>

        {/* Row 3: Performance + Conversion Rate + Right section with nested grid */}
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 4' } }}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.75rem', mb: 2 }}>
              Performance
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.625rem' }}>
                Earning: $846.17
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.625rem' }}>
                Sales: 25.7M
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1, position: 'relative' }}>
              <svg width="120" height="120" viewBox="0 0 120 120">
                <polygon
                  points="60,10 100,35 100,85 60,110 20,85 20,35"
                  fill="#696CFF20"
                  stroke="#696CFF"
                  strokeWidth="2"
                />
                <polygon
                  points="60,30 85,45 85,75 60,90 35,75 35,45"
                  fill="#00CFE820"
                  stroke="#00CFE8"
                  strokeWidth="2"
                />
                <text x="60" y="55" textAnchor="middle" fill="#696CFF" fontSize="12" fontWeight="600">Jan</text>
              </svg>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <Box sx={{ textAlign: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, justifyContent: 'center' }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#696CFF' }} />
                  <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.5625rem' }}>
                    Income
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, justifyContent: 'center' }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#00CFE8' }} />
                  <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.5625rem' }}>
                    Earning
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>

        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 4' } }}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.75rem', mb: 1 }}>
              Conversion Rate
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.6875rem', display: 'block', mb: 1 }}>
              Compared to last month
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: 2 }}>
              <Typography variant="h4" sx={{ fontWeight: 700, fontSize: '1.75rem' }}>
                8.72%
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <TrendingUpIcon sx={{ fontSize: 16, color: '#56CA00' }} />
                <Typography variant="caption" sx={{ color: '#56CA00', fontWeight: 600, fontSize: '0.6875rem' }}>
                  +4.8%
                </Typography>
              </Box>
            </Box>

            <Box sx={{ height: 40, mb: 2 }}>
              <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
                <polyline
                  points="0,25 20,22 40,28 60,18 80,20 100,15"
                  fill="none"
                  stroke="#696CFF"
                  strokeWidth="2"
                />
              </svg>
            </Box>

            <Box sx={{ mb: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.625rem' }}>
                  Impressions
                </Typography>
                <Typography variant="caption" sx={{ fontSize: '0.625rem', color: '#56CA00', fontWeight: 600 }}>
                  +12.8%
                </Typography>
              </Box>
            </Box>

            <Box sx={{ mb: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.625rem' }}>
                  Added To Cart
                </Typography>
                <Typography variant="caption" sx={{ fontSize: '0.625rem', color: '#FF4C51', fontWeight: 600 }}>
                  -8.3%
                </Typography>
              </Box>
            </Box>

            <Box sx={{ mb: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.625rem' }}>
                  Checkout
                </Typography>
                <Typography variant="caption" sx={{ fontSize: '0.625rem', color: '#56CA00', fontWeight: 600 }}>
                  +9.12%
                </Typography>
              </Box>
            </Box>

            <Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.625rem' }}>
                  Purchased
                </Typography>
                <Typography variant="caption" sx={{ fontSize: '0.625rem', color: '#56CA00', fontWeight: 600 }}>
                  +2.24%
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>

        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 4' } }}>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 3
          }}>
            <Box>
              <Paper sx={{ p: 2, height: '100%' }}>
                <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.75rem', mb: 1 }}>
                  Revenue
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 700, fontSize: '1.75rem', mb: 0.5 }}>
                  $42,389
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <TrendingUpIcon sx={{ fontSize: 14, color: '#56CA00' }} />
                  <Typography variant="caption" sx={{ color: '#56CA00', fontWeight: 600, fontSize: '0.6875rem' }}>
                    +52.76%
                  </Typography>
                </Box>
              </Paper>
            </Box>

            <Box>
              <Paper sx={{ p: 2, height: '100%' }}>
                <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.75rem', mb: 1 }}>
                  Sales
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 700, fontSize: '1.75rem', mb: 0.5 }}>
                  482k
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <TrendingUpIcon sx={{ fontSize: 14, color: '#56CA00' }} />
                  <Typography variant="caption" sx={{ color: '#56CA00', fontWeight: 600, fontSize: '0.6875rem' }}>
                    +34%
                  </Typography>
                </Box>
              </Paper>
            </Box>

            <Box sx={{ gridColumn: 'span 2' }}>
              <Box sx={{ aspectRatio: '2' }}>
                <Paper sx={{ p: 2, height: '100%' }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.75rem', mb: 2 }}>
                    Expenses
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 700, fontSize: '1.75rem', mb: 0.5 }}>
                    $84.7k
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 2 }}>
                    <TrendingDownIcon sx={{ fontSize: 14, color: '#FF4C51' }} />
                    <Typography variant="caption" sx={{ color: '#FF4C51', fontWeight: 600, fontSize: '0.6875rem' }}>
                      -8.2%
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'flex-end', height: 80 }}>
                    {[70, 50, 60, 80, 50, 90, 70, 60, 85, 70, 90, 80].map((height, i) => (
                      <Box
                        key={i}
                        sx={{
                          flex: 1,
                          height: `${height}%`,
                          bgcolor: i % 2 === 0 ? '#696CFF' : '#FFB400',
                          borderRadius: '4px 4px 0 0'
                        }}
                      />
                    ))}
                  </Box>
                  <Button
                    size="small"
                    sx={{
                      mt: 1,
                      fontSize: '0.625rem',
                      textTransform: 'uppercase',
                      bgcolor: '#696CFF15',
                      color: '#696CFF',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 1,
                      fontWeight: 600
                    }}
                  >
                    JULY 2025
                  </Button>
                </Paper>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Row 4: Products Table + Total Balance */}
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 8' } }}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.75rem', mb: 2 }}>
              Products
            </Typography>
            <Box sx={{ overflow: 'auto' }}>
              <Box sx={{ display: 'flex', borderBottom: '1px solid #F0F0F0', pb: 1, mb: 1, gap: 2 }}>
                <Typography variant="caption" sx={{ fontWeight: 600, fontSize: '0.625rem', textTransform: 'uppercase', color: 'text.secondary', flex: 1 }}>
                  PRODUCT
                </Typography>
                <Typography variant="caption" sx={{ fontWeight: 600, fontSize: '0.625rem', textTransform: 'uppercase', color: 'text.secondary', width: 100, textAlign: 'center' }}>
                  CATEGORY
                </Typography>
                <Typography variant="caption" sx={{ fontWeight: 600, fontSize: '0.625rem', textTransform: 'uppercase', color: 'text.secondary', width: 80, textAlign: 'right' }}>
                  PAYMENT
                </Typography>
                <Typography variant="caption" sx={{ fontWeight: 600, fontSize: '0.625rem', textTransform: 'uppercase', color: 'text.secondary', width: 100, textAlign: 'center' }}>
                  ORDER STATUS
                </Typography>
                <Typography variant="caption" sx={{ fontWeight: 600, fontSize: '0.625rem', textTransform: 'uppercase', color: 'text.secondary', width: 60, textAlign: 'center' }}>
                  ACTIONS
                </Typography>
              </Box>
              {[
                { name: 'OnePlus 7Pro', category: 'Smart Phone', price: '$120', status: 'CONFIRMED', statusColor: '#696CFF' },
                { name: 'Magic Mouse', category: 'Mouse', price: '$149', status: 'COMPLETED', statusColor: '#56CA00' },
                { name: 'iMac Pro', category: 'Computer', price: '$899', status: 'CANCELLED', statusColor: '#FF4C51' },
                { name: 'Note 10', category: 'Smart Phone', price: '$169', status: 'COMPLETED', statusColor: '#56CA00' },
                { name: 'iPhone 11 Pro', category: 'Smart Phone', price: '$399', status: 'CONFIRMED', statusColor: '#696CFF' }
              ].map((product, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', py: 1, borderBottom: index !== 4 ? '1px solid #F5F5F5' : 'none', gap: 2 }}>
                  <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ fontSize: '1.5rem' }}>📱</Box>
                    <Box>
                      <Typography variant="body2" sx={{ fontSize: '0.75rem', fontWeight: 600 }}>
                        {product.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.625rem' }}>
                        {product.category}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ width: 100, textAlign: 'center' }}>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, px: 1, py: 0.25, bgcolor: '#F5F5F5', borderRadius: 0.75 }}>
                      <Box sx={{ fontSize: '0.875rem' }}>📱</Box>
                      <Typography variant="caption" sx={{ fontSize: '0.625rem' }}>
                        {product.category.split(' ')[0]}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.75rem', width: 80, textAlign: 'right' }}>
                    {product.price}
                  </Typography>
                  <Box sx={{ width: 100, textAlign: 'center' }}>
                    <Box
                      sx={{
                        display: 'inline-block',
                        px: 1,
                        py: 0.25,
                        bgcolor: `${product.statusColor}15`,
                        color: product.statusColor,
                        borderRadius: 0.75,
                        fontSize: '0.625rem',
                        fontWeight: 600
                      }}
                    >
                      {product.status}
                    </Box>
                  </Box>
                  <Box sx={{ width: 60, textAlign: 'center' }}>
                    <Typography sx={{ cursor: 'pointer', fontSize: '1.125rem' }}>⋮</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Paper>
        </Box>

        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 4' } }}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.75rem', mb: 2 }}>
              Total Balance
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, mb: 2 }}>
              <Box>
                <Box sx={{ fontSize: '2rem', mb: 0.5 }}>💳</Box>
                <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.125rem' }}>
                  $2.54k
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.625rem' }}>
                  Wallet
                </Typography>
              </Box>
              <Box>
                <Box sx={{ fontSize: '2rem', mb: 0.5 }}>💰</Box>
                <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.125rem' }}>
                  $4.21k
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.625rem' }}>
                  Paypal
                </Typography>
              </Box>
            </Box>

            <Box sx={{ height: 120, position: 'relative', mt: 3 }}>
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polyline
                  points="0,80 10,75 20,70 30,60 40,65 50,55 60,50 70,45 80,35 90,30 100,20"
                  fill="none"
                  stroke="#FFB400"
                  strokeWidth="3"
                />
              </svg>
            </Box>

            <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.625rem', display: 'block', mt: 2 }}>
              You have done 57.6% more sales. Check your new badge in your profile.
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
