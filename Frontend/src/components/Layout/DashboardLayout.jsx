import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const DashboardLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box
        sx={{
          flexGrow: 1,
          ml: '280px',
          minHeight: '100vh',
          bgcolor: 'background.default',
        }}
      >
        <Navbar />
        <Box
          component="main"
          sx={{
            p: 3,
            mt: '64px', // AppBar height
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
