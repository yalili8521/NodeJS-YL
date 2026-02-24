import { useState } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Slider,
} from '@mui/material';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

export default function SliderPage() {
  const [value, setValue] = useState(30);
  const [rangeValue, setRangeValue] = useState([20, 60]);
  const [volume, setVolume] = useState(50);

  const marks = [
    { value: 0, label: '0°C' },
    { value: 25, label: '25°C' },
    { value: 50, label: '50°C' },
    { value: 75, label: '75°C' },
    { value: 100, label: '100°C' },
  ];

  const priceMarks = [
    { value: 0, label: '$0' },
    { value: 500, label: '$500' },
    { value: 1000, label: '$1000' },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
        Slider
      </Typography>

      <Grid container spacing={3}>
        {/* Basic Slider */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Basic Slider
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography gutterBottom>Simple Slider</Typography>
                <Slider defaultValue={30} aria-label="Default" />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography gutterBottom>Disabled Slider</Typography>
                <Slider disabled defaultValue={30} aria-label="Disabled" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Slider with Value Label */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Slider with Value Label
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography gutterBottom>Default Value Label</Typography>
                <Slider
                  defaultValue={50}
                  valueLabelDisplay="auto"
                  aria-label="Default value label"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography gutterBottom>Always Show Value</Typography>
                <Slider
                  defaultValue={30}
                  valueLabelDisplay="on"
                  aria-label="Always on value label"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Controlled Slider */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Controlled Slider
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography gutterBottom>Value: {value}</Typography>
                <Slider
                  value={value}
                  onChange={(e, newValue) => setValue(newValue)}
                  valueLabelDisplay="auto"
                  aria-label="Controlled slider"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Range Slider */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Range Slider
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography gutterBottom>
                  Range: {rangeValue[0]} - {rangeValue[1]}
                </Typography>
                <Slider
                  value={rangeValue}
                  onChange={(e, newValue) => setRangeValue(newValue)}
                  valueLabelDisplay="auto"
                  aria-label="Range slider"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography gutterBottom>Price Range ($0 - $1000)</Typography>
                <Slider
                  defaultValue={[200, 800]}
                  valueLabelDisplay="auto"
                  min={0}
                  max={1000}
                  aria-label="Price range"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Slider with Marks */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Slider with Marks
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography gutterBottom>Temperature</Typography>
                <Slider
                  defaultValue={50}
                  marks={marks}
                  valueLabelDisplay="auto"
                  aria-label="Temperature"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom>Small Steps</Typography>
                <Slider
                  defaultValue={0}
                  step={10}
                  marks
                  min={0}
                  max={100}
                  valueLabelDisplay="auto"
                  aria-label="Small steps"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Custom Marks */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Custom Marks
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography gutterBottom>Price Filter</Typography>
                <Slider
                  defaultValue={500}
                  marks={priceMarks}
                  min={0}
                  max={1000}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(value) => `$${value}`}
                  aria-label="Price"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Slider Colors */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Slider Colors
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography gutterBottom>Primary</Typography>
                <Slider defaultValue={30} />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography gutterBottom>Secondary</Typography>
                <Slider defaultValue={30} color="secondary" />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography gutterBottom>Success</Typography>
                <Slider defaultValue={50} color="success" />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography gutterBottom>Error</Typography>
                <Slider defaultValue={30} color="error" />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography gutterBottom>Warning</Typography>
                <Slider defaultValue={70} color="warning" />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography gutterBottom>Info</Typography>
                <Slider defaultValue={40} color="info" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Slider Sizes */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Slider Sizes
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography gutterBottom>Small</Typography>
                <Slider defaultValue={30} size="small" />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography gutterBottom>Medium (Default)</Typography>
                <Slider defaultValue={30} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Volume Slider */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Volume Slider with Icons
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography gutterBottom>Volume: {volume}%</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <VolumeDown />
                  <Slider
                    value={volume}
                    onChange={(e, newValue) => setVolume(newValue)}
                    aria-label="Volume"
                  />
                  <VolumeUp />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Vertical Slider */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Vertical Slider
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', gap: 4, height: 300 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography gutterBottom>Default</Typography>
                    <Slider
                      orientation="vertical"
                      defaultValue={30}
                      aria-label="Vertical slider"
                    />
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography gutterBottom>With Marks</Typography>
                    <Slider
                      orientation="vertical"
                      defaultValue={50}
                      marks
                      min={0}
                      max={100}
                      step={10}
                      aria-label="Vertical slider with marks"
                    />
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography gutterBottom>Disabled</Typography>
                    <Slider
                      orientation="vertical"
                      defaultValue={60}
                      disabled
                      aria-label="Disabled vertical slider"
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Discrete Slider */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Discrete Slider
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography gutterBottom>Step: 10</Typography>
                <Slider
                  defaultValue={30}
                  step={10}
                  marks
                  min={0}
                  max={100}
                  valueLabelDisplay="auto"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography gutterBottom>Step: 20</Typography>
                <Slider
                  defaultValue={40}
                  step={20}
                  marks
                  min={0}
                  max={100}
                  valueLabelDisplay="auto"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
