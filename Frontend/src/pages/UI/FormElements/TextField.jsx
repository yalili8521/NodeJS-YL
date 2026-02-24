import { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import SearchIcon from '@mui/icons-material/Search';

export default function TextFieldPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    search: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Box sx={{ maxWidth: 1440, mx: 'auto', width: '100%' }}>
      <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
        Text Field
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Text fields let users enter and edit text
      </Typography>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: 3
      }}>
        {/* Basic Text Fields */}
        <Box sx={{ gridColumn: { xs: 'span 12' } }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Basic Text Fields
            </Typography>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 3
            }}>
              <TextField
                fullWidth
                label="Standard"
                variant="outlined"
                placeholder="Enter text"
              />
              <TextField
                fullWidth
                label="Filled"
                variant="filled"
                placeholder="Enter text"
              />
              <TextField
                fullWidth
                label="Outlined"
                variant="outlined"
                defaultValue="Default Value"
              />
              <TextField
                fullWidth
                label="Disabled"
                variant="outlined"
                disabled
                defaultValue="Disabled"
              />
            </Box>
          </Paper>
        </Box>

        {/* Text Fields with Icons */}
        <Box sx={{ gridColumn: { xs: 'span 12' } }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Text Fields with Icons
            </Typography>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 3
            }}>
              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                value={values.name}
                onChange={handleChange('name')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
                value={values.email}
                onChange={handleChange('email')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                label="Phone"
                type="tel"
                variant="outlined"
                value={values.phone}
                onChange={handleChange('phone')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                label="Search"
                variant="outlined"
                value={values.search}
                onChange={handleChange('search')}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Paper>
        </Box>

        {/* Password Field */}
        <Box sx={{ gridColumn: { xs: 'span 12' } }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Password Field
            </Typography>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 3
            }}>
              <TextField
                fullWidth
                label="Password"
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                value={values.password}
                onChange={handleChange('password')}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Paper>
        </Box>

        {/* Validation States */}
        <Box sx={{ gridColumn: { xs: 'span 12' } }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Validation States
            </Typography>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 3
            }}>
              <TextField
                fullWidth
                label="Success"
                variant="outlined"
                defaultValue="Valid input"
                color="success"
                focused
              />
              <TextField
                fullWidth
                label="Error"
                variant="outlined"
                defaultValue="Invalid input"
                error
                helperText="This field is required"
              />
              <TextField
                fullWidth
                label="Required"
                variant="outlined"
                required
                helperText="This field is required"
              />
              <TextField
                fullWidth
                label="With Helper Text"
                variant="outlined"
                helperText="Please enter your full name"
              />
            </Box>
          </Paper>
        </Box>

        {/* Sizes */}
        <Box sx={{ gridColumn: { xs: 'span 12' } }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Sizes
            </Typography>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 3,
              alignItems: 'center'
            }}>
              <TextField
                fullWidth
                label="Small"
                variant="outlined"
                size="small"
              />
              <TextField
                fullWidth
                label="Medium"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Large"
                variant="outlined"
                sx={{
                  '& .MuiInputBase-root': {
                    fontSize: '1.2rem',
                    padding: '4px',
                  },
                }}
              />
            </Box>
          </Paper>
        </Box>

        {/* Input Types */}
        <Box sx={{ gridColumn: { xs: 'span 12' } }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Input Types
            </Typography>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 3
            }}>
              <TextField
                fullWidth
                label="Number"
                type="number"
                variant="outlined"
                defaultValue={25}
              />
              <TextField
                fullWidth
                label="URL"
                type="url"
                variant="outlined"
                placeholder="https://example.com"
              />
              <TextField
                fullWidth
                label="Date"
                type="date"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                fullWidth
                label="Time"
                type="time"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
              />
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
