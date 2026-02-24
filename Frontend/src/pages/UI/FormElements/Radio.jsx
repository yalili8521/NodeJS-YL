import { useState } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
} from '@mui/material';

export default function RadioPage() {
  const [gender, setGender] = useState('female');
  const [payment, setPayment] = useState('');
  const [plan, setPlan] = useState('basic');

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Radio Button Components
      </Typography>

      <Grid container spacing={3}>
        {/* Basic Radio */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Basic Radio Button
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <FormControlLabel
                label="Uncontrolled"
                control={<Radio />}
              />
              <FormControlLabel
                label="Checked"
                control={<Radio checked defaultChecked />}
              />
              <FormControlLabel
                label="Unchecked"
                control={<Radio />}
              />
            </Box>
          </Paper>
        </Grid>

        {/* Disabled Radio */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Disabled Radio Button
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <FormControlLabel
                label="Disabled"
                control={<Radio disabled />}
              />
              <FormControlLabel
                label="Disabled Checked"
                control={<Radio disabled defaultChecked />}
              />
            </Box>
          </Paper>
        </Grid>

        {/* Radio Group */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Radio Group
            </Typography>
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                row
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
              <FormHelperText>Select your gender</FormHelperText>
            </FormControl>
          </Paper>
        </Grid>

        {/* Payment Method */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Payment Method
            </Typography>
            <FormControl component="fieldset" fullWidth>
              <FormLabel component="legend">Choose Payment Method</FormLabel>
              <RadioGroup
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
              >
                <FormControlLabel
                  value="credit"
                  control={<Radio />}
                  label="Credit Card"
                />
                <FormControlLabel
                  value="debit"
                  control={<Radio />}
                  label="Debit Card"
                />
                <FormControlLabel
                  value="paypal"
                  control={<Radio />}
                  label="PayPal"
                />
                <FormControlLabel
                  value="bank"
                  control={<Radio />}
                  label="Bank Transfer"
                />
              </RadioGroup>
              <FormHelperText>Select your preferred payment method</FormHelperText>
            </FormControl>
          </Paper>
        </Grid>

        {/* Plan Selection */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Subscription Plan
            </Typography>
            <FormControl component="fieldset">
              <FormLabel component="legend">Select Plan</FormLabel>
              <RadioGroup
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
              >
                <FormControlLabel
                  value="basic"
                  control={<Radio />}
                  label="Basic - Free"
                />
                <FormControlLabel
                  value="pro"
                  control={<Radio />}
                  label="Pro - $9.99/month"
                />
                <FormControlLabel
                  value="enterprise"
                  control={<Radio />}
                  label="Enterprise - Custom pricing"
                />
              </RadioGroup>
            </FormControl>
          </Paper>
        </Grid>

        {/* Radio Sizes */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Different Sizes
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <FormControlLabel
                label="Small"
                control={<Radio size="small" defaultChecked />}
              />
              <FormControlLabel
                label="Medium"
                control={<Radio size="medium" defaultChecked />}
              />
              <FormControlLabel
                label="Large"
                control={<Radio size="large" defaultChecked />}
              />
            </Box>
          </Paper>
        </Grid>

        {/* Radio Colors */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Different Colors
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
              <FormControlLabel
                label="Primary"
                control={<Radio defaultChecked color="primary" />}
              />
              <FormControlLabel
                label="Secondary"
                control={<Radio defaultChecked color="secondary" />}
              />
              <FormControlLabel
                label="Success"
                control={<Radio defaultChecked color="success" />}
              />
              <FormControlLabel
                label="Warning"
                control={<Radio defaultChecked color="warning" />}
              />
              <FormControlLabel
                label="Error"
                control={<Radio defaultChecked color="error" />}
              />
            </Box>
          </Paper>
        </Grid>

        {/* Current Selection State */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3, bgcolor: 'background.default' }}>
            <Typography variant="h6" gutterBottom>
              Current Selection State
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="body2">
                Selected Gender: <strong>{gender}</strong>
              </Typography>
              <Typography variant="body2">
                Selected Payment: <strong>{payment || 'Not selected'}</strong>
              </Typography>
              <Typography variant="body2">
                Selected Plan: <strong>{plan}</strong>
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
