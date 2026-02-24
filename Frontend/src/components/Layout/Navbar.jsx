import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  InputBase,
  alpha,
  Dialog,
  DialogContent,
  List,
  ListItem,
  ListItemButton,
  Grid,
} from '@mui/material';
import {
  LightMode,
  DarkMode,
  AccountCircle,
  Logout,
  Settings,
  Search,
  Close,
} from '@mui/icons-material';
import { toggleTheme } from '../../store/slices/themeSlice';
import { logout } from '../../store/slices/authSlice';
import { toast } from 'react-toastify';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { mode } = useSelector((state) => state.theme);

  const [anchorEl, setAnchorEl] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      toast.success('Logged out successfully');
      navigate('/login');
    } catch (error) {
      toast.error('Logout failed');
    }
    handleClose();
  };

  const handleSearchClick = () => {
    setSearchOpen(true);
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
    setSearchQuery('');
  };

  const searchItems = {
    'Popular Searches': [
      { label: 'Analytics', icon: '📊', path: '/analytics' },
      { label: 'CRM', icon: '🎯', path: '/crm' },
      { label: 'eCommerce', icon: '🛒', path: '/ecommerce' },
    ],
    'Apps & Pages': [
      { label: 'Email', icon: '✉️', path: '/email' },
      { label: 'Chat', icon: '💬', path: '/chat' },
      { label: 'Calendar', icon: '📅', path: '/calendar' },
    ],
    'User Interface': [
      { label: 'Typography', icon: '📝', path: '/ui/typography' },
      { label: 'Icons', icon: '⭐', path: '/ui/icons' },
      { label: 'Icons Test', icon: '✓', path: '/ui/icons-test' },
    ],
    'Forms & Tables': [
      { label: 'Form Elements', icon: '📋', path: '/ui/form-elements/text-field' },
      { label: 'Form Layouts', icon: '📐', path: '/ui/form-layouts' },
      { label: 'Form Validation', icon: '✔️', path: '/ui/form-validation' },
    ],
  };

  const handleNavigate = (path) => {
    navigate(path);
    handleSearchClose();
  };

  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{
        left: 280,
        width: 'calc(100% - 280px)',
        backgroundColor: '#fff',
        color: '#4b465c',
        borderBottom: '1px solid #e7e7e7',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', gap: 2 }}>
        {/* Search Bar */}
        <Box
          sx={{
            position: 'relative',
            borderRadius: 1,
            backgroundColor: alpha('#696CFF', 0.05),
            '&:hover': {
              backgroundColor: alpha('#696CFF', 0.08),
            },
            marginLeft: 0,
            flex: 1,
            border: '1px solid',
            borderColor: alpha('#696CFF', 0.1),
          }}
        >
          <Box
            sx={{
              padding: '0 12px',
              height: '100%',
              position: 'absolute',
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Search sx={{ color: 'text.secondary', fontSize: 20 }} />
          </Box>
          <InputBase
            placeholder="Search (Ctrl+/)"
            inputProps={{ 'aria-label': 'search' }}
            onClick={handleSearchClick}
            readOnly
            sx={{
              color: 'inherit',
              width: '100%',
              cursor: 'pointer',
              '& .MuiInputBase-input': {
                padding: '8px 8px 8px 0',
                paddingLeft: `calc(1em + 32px)`,
                fontSize: '0.875rem',
                cursor: 'pointer',
              },
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {/* Theme Toggle */}
          <IconButton onClick={handleThemeToggle} color="inherit">
            {mode === 'light' ? <DarkMode /> : <LightMode />}
          </IconButton>

          {/* User Menu */}
          <IconButton onClick={handleMenu} sx={{ ml: 1 }}>
            <Avatar
              sx={{
                width: 36,
                height: 36,
                bgcolor: '#696CFF',
                fontSize: '0.875rem',
              }}
            >
              {user?.firstName?.charAt(0) || user?.email?.charAt(0) || 'U'}
            </Avatar>
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 3,
              sx: {
                minWidth: 200,
                mt: 1.5,
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.08))',
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <Box sx={{ px: 2, py: 1.5 }}>
              <Typography variant="subtitle2" fontWeight={600}>
                {user?.firstName && user?.lastName
                  ? `${user.firstName} ${user.lastName}`
                  : user?.email}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {user?.role || 'User'}
              </Typography>
            </Box>

            <Divider />

            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <AccountCircle fontSize="small" />
              </ListItemIcon>
              <ListItemText>My Profile</ListItemText>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              <ListItemText>Settings</ListItemText>
            </MenuItem>

            <Divider />

            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <Logout fontSize="small" color="error" />
              </ListItemIcon>
              <ListItemText>
                <Typography color="error">Logout</Typography>
              </ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>

      {/* Search Dialog */}
      <Dialog
        open={searchOpen}
        onClose={handleSearchClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            position: 'fixed',
            top: 80,
            m: 0,
            borderRadius: 2,
          },
        }}
      >
        <Box sx={{ p: 2, borderBottom: '1px solid #e7e7e7' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Search sx={{ color: 'text.secondary', fontSize: 20 }} />
            <InputBase
              autoFocus
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{
                flex: 1,
                fontSize: '0.95rem',
                '& .MuiInputBase-input': {
                  padding: '4px 0',
                },
              }}
            />
            <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
              <Box
                sx={{
                  px: 1,
                  py: 0.3,
                  bgcolor: '#f5f5f5',
                  borderRadius: 0.5,
                  fontSize: '0.75rem',
                  color: 'text.secondary',
                }}
              >
                [esc]
              </Box>
              <IconButton size="small" onClick={handleSearchClose}>
                <Close fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <DialogContent sx={{ p: 3 }}>
          <Grid container spacing={4}>
            {Object.entries(searchItems).map(([category, items]) => (
              <Grid item xs={6} key={category}>
                <Typography
                  variant="caption"
                  sx={{
                    color: 'text.secondary',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    letterSpacing: 0.5,
                    mb: 1.5,
                    display: 'block',
                  }}
                >
                  {category}
                </Typography>
                <List sx={{ p: 0 }}>
                  {items.map((item) => (
                    <ListItem key={item.label} disablePadding sx={{ mb: 0.5 }}>
                      <ListItemButton
                        onClick={() => handleNavigate(item.path)}
                        sx={{
                          borderRadius: 1,
                          py: 1,
                          px: 1.5,
                          '&:hover': {
                            bgcolor: '#f5f5f5',
                          },
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                          <Box
                            sx={{
                              width: 36,
                              height: 36,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              bgcolor: '#f5f5f5',
                              borderRadius: 1,
                              fontSize: '1.2rem',
                            }}
                          >
                            {item.icon}
                          </Box>
                          <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                            {item.label}
                          </Typography>
                        </Box>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
      </Dialog>
    </AppBar>
  );
};

export default Navbar;
