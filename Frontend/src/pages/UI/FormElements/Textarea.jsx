import { useState } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
} from '@mui/material';

export default function TextareaPage() {
  const [value, setValue] = useState('');

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
        Textarea
      </Typography>

      <Grid container spacing={3}>
        {/* Basic Textarea */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Basic Textarea
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Standard"
                  multiline
                  rows={4}
                  placeholder="Enter your text here..."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="With Default Value"
                  multiline
                  rows={4}
                  defaultValue="This is the default text in the textarea. You can edit this content."
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Textarea Variants */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Textarea Variants
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Outlined"
                  multiline
                  rows={4}
                  variant="outlined"
                  placeholder="Outlined variant"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Filled"
                  multiline
                  rows={4}
                  variant="filled"
                  placeholder="Filled variant"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Standard"
                  multiline
                  rows={4}
                  variant="standard"
                  placeholder="Standard variant"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Textarea with Character Counter */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Textarea with Character Counter
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Limited to 200 characters"
                  multiline
                  rows={4}
                  value={value}
                  onChange={(e) => {
                    if (e.target.value.length <= 200) {
                      setValue(e.target.value);
                    }
                  }}
                  helperText={`${value.length}/200 characters`}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Description"
                  multiline
                  rows={4}
                  defaultValue="This textarea has helper text"
                  helperText="Maximum 500 characters"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Textarea States */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Textarea States
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Disabled"
                  multiline
                  rows={4}
                  disabled
                  defaultValue="This textarea is disabled and cannot be edited."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Read Only"
                  multiline
                  rows={4}
                  InputProps={{
                    readOnly: true,
                  }}
                  defaultValue="This textarea is read-only and cannot be edited."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Error State"
                  multiline
                  rows={4}
                  error
                  defaultValue="This field has an error"
                  helperText="This field is required"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Success State"
                  multiline
                  rows={4}
                  color="success"
                  focused
                  defaultValue="This field is valid"
                  helperText="Looks good!"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Textarea Sizes */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Textarea Sizes
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Small (2 rows)"
                  multiline
                  rows={2}
                  size="small"
                  placeholder="Small textarea"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Medium (4 rows)"
                  multiline
                  rows={4}
                  placeholder="Medium textarea"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Large (6 rows)"
                  multiline
                  rows={6}
                  placeholder="Large textarea for longer content"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Auto-growing Textarea */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Auto-growing Textarea
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Auto-grow (Min 2 rows)"
                  multiline
                  minRows={2}
                  maxRows={8}
                  placeholder="This textarea will grow automatically as you type..."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Auto-grow (Min 3 rows, Max 10 rows)"
                  multiline
                  minRows={3}
                  maxRows={10}
                  placeholder="Type more to see it grow..."
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Required Textarea */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Required Textarea
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  label="Required Field"
                  multiline
                  rows={4}
                  helperText="This field is required"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  label="Comments"
                  multiline
                  rows={4}
                  placeholder="Please enter your comments..."
                  helperText="Minimum 10 characters required"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
