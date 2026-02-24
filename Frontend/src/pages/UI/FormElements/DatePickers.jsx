import { useState } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
} from '@mui/material';

export default function DatePickersPage() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [datetime, setDatetime] = useState('');

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
        Date Pickers
      </Typography>

      <Grid container spacing={3}>
        {/* Basic Date Pickers */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Basic Date Pickers
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Date with Default Value"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  defaultValue="2024-01-15"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Time Pickers */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Time Pickers
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Time"
                  type="time"
                  InputLabelProps={{ shrink: true }}
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Time with Default Value"
                  type="time"
                  InputLabelProps={{ shrink: true }}
                  defaultValue="13:30"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* DateTime Pickers */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              DateTime Pickers
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="DateTime Local"
                  type="datetime-local"
                  InputLabelProps={{ shrink: true }}
                  value={datetime}
                  onChange={(e) => setDatetime(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="DateTime with Default"
                  type="datetime-local"
                  InputLabelProps={{ shrink: true }}
                  defaultValue="2024-01-15T13:30"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Month and Week Pickers */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Month and Week Pickers
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Month"
                  type="month"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Week"
                  type="week"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Date Picker States */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Date Picker States
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Disabled"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  disabled
                  defaultValue="2024-01-15"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Read Only"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  InputProps={{ readOnly: true }}
                  defaultValue="2024-01-15"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Error"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  error
                  helperText="This field is required"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Required"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  required
                  helperText="Please select a date"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Date Picker Sizes */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Date Picker Sizes
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Small"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Medium"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Date Range */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Date Range
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Start Date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="End Date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Date Picker Variants */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Date Picker Variants
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Outlined"
                  type="date"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Filled"
                  type="date"
                  variant="filled"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Standard"
                  type="date"
                  variant="standard"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Date with Min and Max */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Date with Min and Max Values
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Date with Min Value"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ min: '2024-01-01' }}
                  helperText="Minimum date: 2024-01-01"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Date with Max Value"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ max: '2024-12-31' }}
                  helperText="Maximum date: 2024-12-31"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Date Range (Min & Max)"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ min: '2024-01-01', max: '2024-12-31' }}
                  helperText="Only dates between 2024-01-01 and 2024-12-31 are allowed"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
