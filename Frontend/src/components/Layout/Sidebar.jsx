import { useState, useEffect, memo, useCallback, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import PeopleIcon from '@mui/icons-material/People';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleIcon from '@mui/icons-material/Article';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import SecurityIcon from '@mui/icons-material/Security';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  const sidebarRef = useRef(null);
  const scrollPositionRef = useRef(0);

  const [openDashboards, setOpenDashboards] = useState(true);
  const [openFormElements, setOpenFormElements] = useState(pathname.startsWith('/ui/form-elements'));
  const [openCharts, setOpenCharts] = useState(pathname.startsWith('/charts'));

  // Keep Form Elements menu open when on any form element page and restore scroll position
  useEffect(() => {
    if (pathname.startsWith('/ui/form-elements')) {
      setOpenFormElements(true);
    }
    if (pathname.startsWith('/charts')) {
      setOpenCharts(true);
    }

    // Restore scroll position after collapse animations complete
    const timer = setTimeout(() => {
      if (sidebarRef.current && scrollPositionRef.current !== 0) {
        sidebarRef.current.scrollTop = scrollPositionRef.current;
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [pathname]);

  const handleNavigation = useCallback(
    (path) => {
      // Save current scroll position before navigation
      if (sidebarRef.current) {
        scrollPositionRef.current = sidebarRef.current.scrollTop;
      }
      navigate(path);
    },
    [navigate]
  );

  const dashboardItems = [
    { text: 'Analytics', icon: <BarChartIcon />, path: '/analytics' },
    { text: 'CRM', icon: <PeopleIcon />, path: '/crm' },
    { text: 'eCommerce', icon: <ShoppingCartIcon />, path: '/ecommerce' },
  ];

  const appsPagesItems = [
    { text: 'Email', icon: <EmailIcon />, path: '/email' },
    { text: 'Chat', icon: <ChatIcon />, path: '/chat' },
    { text: 'Calendar', icon: <CalendarMonthIcon />, path: '/calendar' },
  ];

  const formElementItems = [
    { text: 'Text Field', path: '/ui/form-elements/text-field' },
    { text: 'Select', path: '/ui/form-elements/select' },
    { text: 'Checkbox', path: '/ui/form-elements/checkbox' },
    { text: 'Radio', path: '/ui/form-elements/radio' },
    { text: 'Custom Inputs', path: '/ui/form-elements/custom-inputs' },
    { text: 'Textarea', path: '/ui/form-elements/textarea' },
    { text: 'Autocomplete', path: '/ui/form-elements/autocomplete' },
    { text: 'Date Pickers', path: '/ui/form-elements/date-pickers' },
    { text: 'Switch', path: '/ui/form-elements/switch' },
    { text: 'File Uploader', path: '/ui/form-elements/file-uploader' },
    { text: 'Editor', path: '/ui/form-elements/editor' },
    { text: 'Slider', path: '/ui/form-elements/slider' },
    { text: 'Input Mask', path: '/ui/form-elements/input-mask' },
  ];

  const userInterfaceItems = [
    { text: 'Typography', icon: <ArticleIcon />, path: '/ui/typography' },
    { text: 'Icons', icon: <ViewModuleIcon />, path: '/ui/icons' },
    { text: 'Icons Test', icon: <CheckCircleIcon />, path: '/ui/icons-test' },
  ];

  const formsTablesItems = [
    { text: 'Form Layouts', icon: <ViewModuleIcon />, path: '/ui/form-layouts' },
    { text: 'Form Validation', icon: <CheckCircleIcon />, path: '/ui/form-validation' },
  ];

  const chartsSubItems = [
    { text: 'Apex', path: '/charts/apex' },
    { text: 'Recharts', path: '/charts/recharts' },
    { text: 'ChartJS', path: '/charts/chartjs' },
  ];

  const chartsMiscItems = [
    { text: 'Access Control', icon: <SecurityIcon />, path: '/access-control' },
  ];

  const SectionTitle = ({ title }) => (
    <Typography
      variant="caption"
      sx={{
        px: 3.5,
        py: 1.5,
        display: 'block',
        color: '#a8aaae',
        fontWeight: 600,
        fontSize: '0.75rem',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
      }}
    >
      {title}
    </Typography>
  );

  const MenuItem = ({ item }) => (
    <ListItem disablePadding sx={{ mb: 0.5 }}>
      <ListItemButton
        onClick={() => handleNavigation(item.path)}
        sx={{
          mx: 2,
          px: 1.5,
          borderRadius: 1,
          backgroundColor: pathname === item.path ? '#696CFF' : 'transparent',
          color: pathname === item.path ? '#fff' : '#4b465c',
          '&:hover': {
            backgroundColor: pathname === item.path ? '#696CFF' : '#f5f5f9',
          },
        }}
      >
        <ListItemIcon sx={{ color: pathname === item.path ? '#fff' : '#4b465c', minWidth: 36 }}>
          {item.icon}
        </ListItemIcon>
        <ListItemText
          primary={item.text}
          primaryTypographyProps={{
            fontSize: '0.95rem',
            fontWeight: 500,
            noWrap: true,
          }}
        />
      </ListItemButton>
    </ListItem>
  );

  const SubMenuItem = ({ item }) => (
    <ListItem disablePadding sx={{ mb: 0.5 }}>
      <ListItemButton
        onClick={() => handleNavigation(item.path)}
        sx={{
          mx: 2,
          pl: 6,
          pr: 1.5,
          borderRadius: 1,
          backgroundColor: pathname === item.path ? '#696CFF' : 'transparent',
          color: pathname === item.path ? '#fff' : '#4b465c',
          '&:hover': {
            backgroundColor: pathname === item.path ? '#696CFF' : '#f5f5f9',
          },
        }}
      >
        <ListItemText
          primary={item.text}
          primaryTypographyProps={{
            fontSize: '0.875rem',
            fontWeight: 400,
            noWrap: true,
          }}
        />
      </ListItemButton>
    </ListItem>
  );

  return (
    <Box
      ref={sidebarRef}
      sx={{
        width: 280,
        minWidth: 280,
        maxWidth: 280,
        flexShrink: 0,
        backgroundColor: '#fff',
        borderRight: '1px solid #e7e7e7',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        overflowY: 'auto',
        overflowX: 'hidden',
        zIndex: 1200,
      }}
    >
      {/* Logo */}
      <Box sx={{ p: 3, borderBottom: '1px solid #e7e7e7' }}>
        <Box
          sx={{
            fontSize: 24,
            fontWeight: 700,
            color: '#696CFF',
            letterSpacing: 0.5,
          }}
        >
          SNEAT
        </Box>
      </Box>

      {/* Menu Items */}
      <List sx={{ py: 2 }}>
        {/* DASHBOARDS Section */}
        <SectionTitle title="Dashboards" />
        <ListItem disablePadding sx={{ mb: 0.5 }}>
          <ListItemButton
            onClick={() => setOpenDashboards(!openDashboards)}
            sx={{
              mx: 2,
              px: 1.5,
              borderRadius: 1,
              color: '#4b465c',
              '&:hover': { backgroundColor: '#f5f5f9' },
            }}
          >
            <ListItemIcon sx={{ color: '#4b465c', minWidth: 36 }}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText
              primary="Dashboards"
              primaryTypographyProps={{ fontSize: '0.95rem', fontWeight: 500 }}
            />
            {openDashboards ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={openDashboards} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {dashboardItems.map((item) => (
              <SubMenuItem key={item.path} item={item} />
            ))}
          </List>
        </Collapse>

        {/* APPS & PAGES Section */}
        <SectionTitle title="Apps & Pages" />
        {appsPagesItems.map((item) => (
          <MenuItem key={item.path} item={item} />
        ))}

        {/* USER INTERFACE Section */}
        <SectionTitle title="User Interface" />
        {userInterfaceItems.map((item) => (
          <MenuItem key={item.path} item={item} />
        ))}

        {/* FORMS & TABLES Section */}
        <SectionTitle title="Forms & Tables" />

        {/* Form Elements (Collapsible) */}
        <ListItem disablePadding sx={{ mb: 0.5 }}>
          <ListItemButton
            onClick={() => setOpenFormElements(!openFormElements)}
            sx={{
              mx: 2,
              px: 1.5,
              borderRadius: 1,
              color: '#4b465c',
              '&:hover': { backgroundColor: '#f5f5f9' },
            }}
          >
            <ListItemIcon sx={{ color: '#4b465c', minWidth: 36 }}>
              <ViewModuleIcon />
            </ListItemIcon>
            <ListItemText
              primary="Form Elements"
              primaryTypographyProps={{ fontSize: '0.95rem', fontWeight: 500 }}
            />
            {openFormElements ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={openFormElements} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {formElementItems.map((item) => (
              <SubMenuItem key={item.path} item={item} />
            ))}
          </List>
        </Collapse>

        {/* Form Layouts & Validation */}
        {formsTablesItems.map((item) => (
          <MenuItem key={item.path} item={item} />
        ))}

        {/* CHARTS & MISC Section */}
        <SectionTitle title="Charts & Misc" />

        {/* Charts (Collapsible) */}
        <ListItem disablePadding sx={{ mb: 0.5 }}>
          <ListItemButton
            onClick={() => setOpenCharts(!openCharts)}
            sx={{
              mx: 2,
              px: 1.5,
              borderRadius: 1,
              color: '#4b465c',
              '&:hover': { backgroundColor: '#f5f5f9' },
            }}
          >
            <ListItemIcon sx={{ color: '#4b465c', minWidth: 36 }}>
              <BarChartOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary="Charts"
              primaryTypographyProps={{ fontSize: '0.95rem', fontWeight: 500 }}
            />
            {openCharts ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={openCharts} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {chartsSubItems.map((item) => (
              <SubMenuItem key={item.path} item={item} />
            ))}
          </List>
        </Collapse>

        {/* Access Control */}
        {chartsMiscItems.map((item) => (
          <MenuItem key={item.path} item={item} />
        ))}
      </List>
    </Box>
  );
}

export default memo(Sidebar);
