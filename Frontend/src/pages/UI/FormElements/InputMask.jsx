import { useState } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
  InputAdornment,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function InputMaskPage() {
  const [phone, setPhone] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [ssn, setSsn] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [currency, setCurrency] = useState('');

  // Phone number mask (XXX) XXX-XXXX
  const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/\D/g, '');
    if (phoneNumber.length <= 3) {
      return phoneNumber;
    } else if (phoneNumber.length <= 6) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }
  };

  // Credit card mask XXXX XXXX XXXX XXXX
  const formatCreditCard = (value) => {
    const cardNumber = value.replace(/\D/g, '');
    return cardNumber.match(/.{1,4}/g)?.join(' ') || cardNumber;
  };

  // Date mask MM/DD/YYYY
  const formatDate = (value) => {
    const dateValue = value.replace(/\D/g, '');
    if (dateValue.length <= 2) {
      return dateValue;
    } else if (dateValue.length <= 4) {
      return `${dateValue.slice(0, 2)}/${dateValue.slice(2)}`;
    } else {
      return `${dateValue.slice(0, 2)}/${dateValue.slice(2, 4)}/${dateValue.slice(4, 8)}`;
    }
  };

  // Time mask HH:MM
  const formatTime = (value) => {
    const timeValue = value.replace(/\D/g, '');
    if (timeValue.length <= 2) {
      return timeValue;
    } else {
      return `${timeValue.slice(0, 2)}:${timeValue.slice(2, 4)}`;
    }
  };

  // SSN mask XXX-XX-XXXX
  const formatSSN = (value) => {
    const ssnValue = value.replace(/\D/g, '');
    if (ssnValue.length <= 3) {
      return ssnValue;
    } else if (ssnValue.length <= 5) {
      return `${ssnValue.slice(0, 3)}-${ssnValue.slice(3)}`;
    } else {
      return `${ssnValue.slice(0, 3)}-${ssnValue.slice(3, 5)}-${ssnValue.slice(5, 9)}`;
    }
  };

  // Zip code mask XXXXX or XXXXX-XXXX
  const formatZipCode = (value) => {
    const zipValue = value.replace(/\D/g, '');
    if (zipValue.length <= 5) {
      return zipValue;
    } else {
      return `${zipValue.slice(0, 5)}-${zipValue.slice(5, 9)}`;
    }
  };

  // Currency mask
  const formatCurrency = (value) => {
    const currencyValue = value.replace(/\D/g, '');
    if (!currencyValue) return '';
    const amount = parseInt(currencyValue) / 100;
    return amount.toFixed(2);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
        Input Mask
      </Typography>

      <Grid container spacing={3}>
        {/* Phone Number Mask */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Phone Number Mask
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  placeholder="(XXX) XXX-XXXX"
                  value={phone}
                  onChange={(e) => {
                    const formatted = formatPhoneNumber(e.target.value);
                    if (formatted.replace(/\D/g, '').length <= 10) {
                      setPhone(formatted);
                    }
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon />
                      </InputAdornment>
                    ),
                  }}
                  helperText="Format: (XXX) XXX-XXXX"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="International Phone"
                  placeholder="+1 (XXX) XXX-XXXX"
                  helperText="Format: +1 (XXX) XXX-XXXX"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Credit Card Mask */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Credit Card Mask
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Credit Card Number"
                  placeholder="XXXX XXXX XXXX XXXX"
                  value={creditCard}
                  onChange={(e) => {
                    const formatted = formatCreditCard(e.target.value);
                    if (formatted.replace(/\D/g, '').length <= 16) {
                      setCreditCard(formatted);
                    }
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CreditCardIcon />
                      </InputAdornment>
                    ),
                  }}
                  helperText="Format: XXXX XXXX XXXX XXXX"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="CVV"
                  placeholder="XXX"
                  inputProps={{ maxLength: 3 }}
                  helperText="3 digits on the back"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Date Mask */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Date Mask
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Date"
                  placeholder="MM/DD/YYYY"
                  value={date}
                  onChange={(e) => {
                    const formatted = formatDate(e.target.value);
                    if (formatted.replace(/\D/g, '').length <= 8) {
                      setDate(formatted);
                    }
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CalendarTodayIcon />
                      </InputAdornment>
                    ),
                  }}
                  helperText="Format: MM/DD/YYYY"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Expiration Date"
                  placeholder="MM/YY"
                  inputProps={{ maxLength: 5 }}
                  helperText="Format: MM/YY"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Time Mask */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Time Mask
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Time"
                  placeholder="HH:MM"
                  value={time}
                  onChange={(e) => {
                    const formatted = formatTime(e.target.value);
                    if (formatted.replace(/\D/g, '').length <= 4) {
                      setTime(formatted);
                    }
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccessTimeIcon />
                      </InputAdornment>
                    ),
                  }}
                  helperText="Format: HH:MM (24-hour)"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="12-Hour Time"
                  placeholder="HH:MM AM/PM"
                  helperText="Format: HH:MM AM/PM"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* SSN Mask */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Social Security Number Mask
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="SSN"
                  placeholder="XXX-XX-XXXX"
                  value={ssn}
                  onChange={(e) => {
                    const formatted = formatSSN(e.target.value);
                    if (formatted.replace(/\D/g, '').length <= 9) {
                      setSsn(formatted);
                    }
                  }}
                  helperText="Format: XXX-XX-XXXX"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Tax ID"
                  placeholder="XX-XXXXXXX"
                  helperText="Format: XX-XXXXXXX"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Zip Code Mask */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Zip Code Mask
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Zip Code"
                  placeholder="XXXXX or XXXXX-XXXX"
                  value={zipCode}
                  onChange={(e) => {
                    const formatted = formatZipCode(e.target.value);
                    if (formatted.replace(/\D/g, '').length <= 9) {
                      setZipCode(formatted);
                    }
                  }}
                  helperText="Format: XXXXX or XXXXX-XXXX"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Postal Code"
                  placeholder="A1A 1A1"
                  helperText="Canadian postal code format"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Currency Mask */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Currency Mask
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Amount"
                  placeholder="0.00"
                  value={currency}
                  onChange={(e) => {
                    const formatted = formatCurrency(e.target.value);
                    setCurrency(formatted);
                  }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  }}
                  helperText="US Dollar format"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Price"
                  type="number"
                  placeholder="0.00"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  }}
                  helperText="Enter price"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Custom Masks */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Custom Masks
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="License Plate"
                  placeholder="ABC-1234"
                  inputProps={{ maxLength: 8 }}
                  helperText="Format: ABC-1234"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="IP Address"
                  placeholder="XXX.XXX.XXX.XXX"
                  helperText="Format: XXX.XXX.XXX.XXX"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="MAC Address"
                  placeholder="XX:XX:XX:XX:XX:XX"
                  helperText="Format: XX:XX:XX:XX:XX:XX"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="ISBN"
                  placeholder="XXX-X-XXX-XXXXX-X"
                  helperText="Format: XXX-X-XXX-XXXXX-X"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
