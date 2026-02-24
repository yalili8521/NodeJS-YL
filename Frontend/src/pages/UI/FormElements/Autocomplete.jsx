import { useState } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Autocomplete,
  TextField,
  Chip,
} from '@mui/material';

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Dark Knight', year: 2008 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'Interstellar', year: 2014 },
];

const countries = ['USA', 'UK', 'Canada', 'Australia', 'Germany', 'France', 'Japan', 'China', 'India', 'Brazil'];

export default function AutocompletePage() {
  const [value, setValue] = useState(null);
  const [multipleValue, setMultipleValue] = useState([]);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
        Autocomplete
      </Typography>

      <Grid container spacing={3}>
        {/* Basic Autocomplete */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Basic Autocomplete
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Autocomplete
                  options={countries}
                  renderInput={(params) => <TextField {...params} label="Country" />}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Autocomplete
                  options={countries}
                  defaultValue="USA"
                  renderInput={(params) => <TextField {...params} label="Country with Default" />}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Autocomplete with Objects */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Autocomplete with Objects
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Autocomplete
                  options={top100Films}
                  getOptionLabel={(option) => option.title}
                  renderInput={(params) => <TextField {...params} label="Movie" />}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Autocomplete
                  options={top100Films}
                  getOptionLabel={(option) => option.title}
                  renderInput={(params) => <TextField {...params} label="Movie with Year" />}
                  renderOption={(props, option) => (
                    <Box component="li" {...props}>
                      {option.title} ({option.year})
                    </Box>
                  )}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Multiple Select Autocomplete */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Multiple Select Autocomplete
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Autocomplete
                  multiple
                  options={countries}
                  value={multipleValue}
                  onChange={(event, newValue) => setMultipleValue(newValue)}
                  renderInput={(params) => <TextField {...params} label="Countries" placeholder="Select countries" />}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Autocomplete
                  multiple
                  options={top100Films}
                  getOptionLabel={(option) => option.title}
                  defaultValue={[top100Films[0], top100Films[1]]}
                  renderInput={(params) => <TextField {...params} label="Favorite Movies" />}
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                      <Chip label={option.title} {...getTagProps({ index })} />
                    ))
                  }
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Autocomplete Variants */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Autocomplete Variants
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Autocomplete
                  options={countries}
                  renderInput={(params) => <TextField {...params} label="Outlined" variant="outlined" />}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Autocomplete
                  options={countries}
                  renderInput={(params) => <TextField {...params} label="Filled" variant="filled" />}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Autocomplete
                  options={countries}
                  renderInput={(params) => <TextField {...params} label="Standard" variant="standard" />}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Autocomplete States */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Autocomplete States
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Autocomplete
                  disabled
                  options={countries}
                  defaultValue="USA"
                  renderInput={(params) => <TextField {...params} label="Disabled" />}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Autocomplete
                  readOnly
                  options={countries}
                  defaultValue="Canada"
                  renderInput={(params) => <TextField {...params} label="Read Only" />}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Autocomplete
                  options={countries}
                  renderInput={(params) => (
                    <TextField {...params} label="Error" error helperText="This field is required" />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Autocomplete
                  options={countries}
                  renderInput={(params) => (
                    <TextField {...params} label="Required" required helperText="Please select a country" />
                  )}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Autocomplete Sizes */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Autocomplete Sizes
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Autocomplete
                  size="small"
                  options={countries}
                  renderInput={(params) => <TextField {...params} label="Small" />}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Autocomplete
                  size="medium"
                  options={countries}
                  renderInput={(params) => <TextField {...params} label="Medium" />}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Free Solo Autocomplete */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Free Solo Autocomplete
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Autocomplete
                  freeSolo
                  options={countries}
                  renderInput={(params) => (
                    <TextField {...params} label="Free Solo - Type your own value" />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Autocomplete
                  multiple
                  freeSolo
                  options={countries}
                  defaultValue={['USA']}
                  renderInput={(params) => (
                    <TextField {...params} label="Multiple Free Solo" placeholder="Add items" />
                  )}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Controlled Autocomplete */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Controlled Autocomplete
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Autocomplete
                  value={value}
                  onChange={(event, newValue) => setValue(newValue)}
                  options={top100Films}
                  getOptionLabel={(option) => option.title}
                  renderInput={(params) => <TextField {...params} label="Controlled" />}
                />
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Selected: {value ? value.title : 'None'}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
