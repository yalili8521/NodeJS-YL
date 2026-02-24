import { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  TextField,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Divider,
} from '@mui/material';

export default function FormLayoutsPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    company: '',
    country: '',
    // Basic with Icons
    fullName: '',
    emailIcon: '',
    phoneNumber: '',
    address: '',
    // Basic Custom Form Appearance
    username: '',
    emailCustom: '',
    password: '',
    confirmPassword: '',
    // Form with Tabs
    firstName2: '',
    lastName2: '',
    country2: '',
    language: '',
    birthDate: '',
    phoneNo: '',
    // Collapsible Sections
    deliveryAddress: '',
    deliveryLandmark: '',
    deliveryCity: '',
    deliveryPincode: '',
    billingAddress: '',
    billingLandmark: '',
    billingCity: '',
    billingPincode: '',
    // Form Alignment
    username2: '',
    email2: '',
    password2: '',
    rememberMe: false,
  });

  const handleChange = (field) => (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setFormData({ ...formData, [field]: value });
  };

  return (
    <Box sx={{ p: 3, maxWidth: 1440, mx: 'auto', width: '100%' }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
        Form Layouts
      </Typography>

      <Grid container spacing={3}>
        {/* Basic */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Basic
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="First Name"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange('firstName')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  placeholder="john.doe@example.com"
                  value={formData.email}
                  onChange={handleChange('email')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Company"
                  placeholder="ABC Pvt Ltd"
                  value={formData.company}
                  onChange={handleChange('company')}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Country</InputLabel>
                  <Select
                    value={formData.country}
                    onChange={handleChange('country')}
                    label="Country"
                  >
                    <MenuItem value="">Select Value</MenuItem>
                    <MenuItem value="australia">Australia</MenuItem>
                    <MenuItem value="bangladesh">Bangladesh</MenuItem>
                    <MenuItem value="belarus">Belarus</MenuItem>
                    <MenuItem value="brazil">Brazil</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" sx={{ backgroundColor: '#696CFF', mr: 2 }}>
                  Submit
                </Button>
                <Button variant="outlined" sx={{ borderColor: '#696CFF', color: '#696CFF' }}>
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Basic with Icons */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Basic with Icons
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Full Name"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange('fullName')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  placeholder="john.doe@example.com"
                  value={formData.emailIcon}
                  onChange={handleChange('emailIcon')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone No"
                  placeholder="658 799 8941"
                  value={formData.phoneNumber}
                  onChange={handleChange('phoneNumber')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Address"
                  placeholder="1456, Mall Road"
                  value={formData.address}
                  onChange={handleChange('address')}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" sx={{ backgroundColor: '#696CFF', mr: 2 }}>
                  Submit
                </Button>
                <Button variant="outlined" sx={{ borderColor: '#696CFF', color: '#696CFF' }}>
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Multi Column with Form Separator */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
              Multi Column with Form Separator
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Enter Your Account Details
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Username"
                  placeholder="johndoe"
                  value={formData.username}
                  onChange={handleChange('username')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  placeholder="john.doe@example.com"
                  value={formData.emailCustom}
                  onChange={handleChange('emailCustom')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  placeholder="············"
                  value={formData.password}
                  onChange={handleChange('password')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Confirm Password"
                  type="password"
                  placeholder="············"
                  value={formData.confirmPassword}
                  onChange={handleChange('confirmPassword')}
                />
              </Grid>

              <Grid item xs={12}>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Enter Your Personal Info
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  placeholder="John"
                  value={formData.firstName2}
                  onChange={handleChange('firstName2')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  placeholder="Doe"
                  value={formData.lastName2}
                  onChange={handleChange('lastName2')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Country</InputLabel>
                  <Select
                    value={formData.country2}
                    onChange={handleChange('country2')}
                    label="Country"
                  >
                    <MenuItem value="">Select Value</MenuItem>
                    <MenuItem value="uk">UK</MenuItem>
                    <MenuItem value="usa">USA</MenuItem>
                    <MenuItem value="spain">Spain</MenuItem>
                    <MenuItem value="france">France</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Language</InputLabel>
                  <Select
                    value={formData.language}
                    onChange={handleChange('language')}
                    label="Language"
                  >
                    <MenuItem value="">Select Language</MenuItem>
                    <MenuItem value="english">English</MenuItem>
                    <MenuItem value="french">French</MenuItem>
                    <MenuItem value="german">German</MenuItem>
                    <MenuItem value="spanish">Spanish</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Birth Date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={formData.birthDate}
                  onChange={handleChange('birthDate')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone No"
                  placeholder="658 799 8941"
                  value={formData.phoneNo}
                  onChange={handleChange('phoneNo')}
                />
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained" sx={{ backgroundColor: '#696CFF', mr: 2 }}>
                  Submit
                </Button>
                <Button variant="outlined" sx={{ borderColor: '#696CFF', color: '#696CFF' }}>
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Collapsible Sections */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Collapsible Sections
            </Typography>

            <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
              Delivery Address
            </Typography>
            <Grid container spacing={3} sx={{ mb: 3 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Address"
                  placeholder="98, North Street"
                  value={formData.deliveryAddress}
                  onChange={handleChange('deliveryAddress')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Landmark"
                  placeholder="Near Hospital"
                  value={formData.deliveryLandmark}
                  onChange={handleChange('deliveryLandmark')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="City"
                  placeholder="Los Angeles"
                  value={formData.deliveryCity}
                  onChange={handleChange('deliveryCity')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Pincode"
                  placeholder="123456"
                  value={formData.deliveryPincode}
                  onChange={handleChange('deliveryPincode')}
                />
              </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
              Billing Address
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Address"
                  placeholder="98, North Street"
                  value={formData.billingAddress}
                  onChange={handleChange('billingAddress')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Landmark"
                  placeholder="Near Hospital"
                  value={formData.billingLandmark}
                  onChange={handleChange('billingLandmark')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="City"
                  placeholder="Los Angeles"
                  value={formData.billingCity}
                  onChange={handleChange('billingCity')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Pincode"
                  placeholder="123456"
                  value={formData.billingPincode}
                  onChange={handleChange('billingPincode')}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Use as a billing address?"
                />
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained" sx={{ backgroundColor: '#696CFF', mr: 2 }}>
                  Submit
                </Button>
                <Button variant="outlined" sx={{ borderColor: '#696CFF', color: '#696CFF' }}>
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Form Alignment */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Form Alignment
            </Typography>
            <Box sx={{ maxWidth: 600, mx: 'auto' }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Username"
                    placeholder="johndoe"
                    value={formData.username2}
                    onChange={handleChange('username2')}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    placeholder="john.doe@example.com"
                    value={formData.email2}
                    onChange={handleChange('email2')}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    placeholder="············"
                    value={formData.password2}
                    onChange={handleChange('password2')}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.rememberMe}
                        onChange={handleChange('rememberMe')}
                      />
                    }
                    label="Remember me"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ backgroundColor: '#696CFF', mb: 1 }}
                  >
                    Sign In
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
