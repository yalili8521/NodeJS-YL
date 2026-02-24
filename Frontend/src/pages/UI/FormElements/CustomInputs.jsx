import { useState } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
  InputAdornment,
  Rating,
  Slider as MuiSlider,
  ToggleButton,
  ToggleButtonGroup,
  Chip,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';

export default function CustomInputsPage() {
  const [rating, setRating] = useState(2);
  const [formats, setFormats] = useState(() => ['bold', 'italic']);
  const [alignment, setAlignment] = useState('left');
  const [tags, setTags] = useState(['React', 'Material-UI', 'Next.js']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const handleDeleteTag = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
        Custom Inputs
      </Typography>

      <Grid container spacing={3}>
        {/* Rating */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Rating
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography component="legend">Controlled</Typography>
                <Rating
                  value={rating}
                  onChange={(event, newValue) => setRating(newValue)}
                  size="large"
                />
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Current rating: {rating}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography component="legend">Read Only</Typography>
                <Rating value={3.5} precision={0.5} readOnly size="large" />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography component="legend">Disabled</Typography>
                <Rating value={2} disabled size="large" />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography component="legend">Custom Icon</Typography>
                <Rating
                  value={4}
                  icon={<StarIcon fontSize="inherit" />}
                  emptyIcon={<StarIcon fontSize="inherit" />}
                  size="large"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography component="legend">Different Sizes</Typography>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <Rating defaultValue={3} size="small" />
                  <Rating defaultValue={3} />
                  <Rating defaultValue={3} size="large" />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Toggle Buttons */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Toggle Buttons
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="subtitle2" sx={{ mb: 2 }}>
                  Text Formatting
                </Typography>
                <ToggleButtonGroup
                  value={formats}
                  onChange={handleFormat}
                  aria-label="text formatting"
                >
                  <ToggleButton value="bold" aria-label="bold">
                    <FormatBoldIcon />
                  </ToggleButton>
                  <ToggleButton value="italic" aria-label="italic">
                    <FormatItalicIcon />
                  </ToggleButton>
                  <ToggleButton value="underlined" aria-label="underlined">
                    <FormatUnderlinedIcon />
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" sx={{ mb: 2 }}>
                  Text Alignment
                </Typography>
                <ToggleButtonGroup
                  value={alignment}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="text alignment"
                >
                  <ToggleButton value="left" aria-label="left aligned">
                    <FormatAlignLeftIcon />
                  </ToggleButton>
                  <ToggleButton value="center" aria-label="centered">
                    <FormatAlignCenterIcon />
                  </ToggleButton>
                  <ToggleButton value="right" aria-label="right aligned">
                    <FormatAlignRightIcon />
                  </ToggleButton>
                  <ToggleButton value="justify" aria-label="justified">
                    <FormatAlignJustifyIcon />
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" sx={{ mb: 2 }}>
                  Colored Toggle Buttons
                </Typography>
                <ToggleButtonGroup color="primary" value={alignment} exclusive onChange={handleAlignment}>
                  <ToggleButton value="left">Left</ToggleButton>
                  <ToggleButton value="center">Center</ToggleButton>
                  <ToggleButton value="right">Right</ToggleButton>
                </ToggleButtonGroup>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" sx={{ mb: 2 }}>
                  Sizes
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <ToggleButtonGroup size="small" value={alignment} exclusive onChange={handleAlignment}>
                    <ToggleButton value="left">Small</ToggleButton>
                    <ToggleButton value="center">Small</ToggleButton>
                  </ToggleButtonGroup>
                  <ToggleButtonGroup size="medium" value={alignment} exclusive onChange={handleAlignment}>
                    <ToggleButton value="left">Medium</ToggleButton>
                    <ToggleButton value="center">Medium</ToggleButton>
                  </ToggleButtonGroup>
                  <ToggleButtonGroup size="large" value={alignment} exclusive onChange={handleAlignment}>
                    <ToggleButton value="left">Large</ToggleButton>
                    <ToggleButton value="center">Large</ToggleButton>
                  </ToggleButtonGroup>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Chips Input */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Chip Input (Tags)
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="subtitle2" sx={{ mb: 2 }}>
                  Tags
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  {tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      onDelete={() => handleDeleteTag(tag)}
                      color="primary"
                    />
                  ))}
                </Box>
                <TextField
                  fullWidth
                  label="Add Tags"
                  variant="outlined"
                  placeholder="Press Enter to add tag"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && e.target.value.trim()) {
                      setTags([...tags, e.target.value.trim()]);
                      e.target.value = '';
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" sx={{ mb: 2 }}>
                  Chip Variants
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  <Chip label="Default" />
                  <Chip label="Primary" color="primary" />
                  <Chip label="Secondary" color="secondary" />
                  <Chip label="Success" color="success" />
                  <Chip label="Error" color="error" />
                  <Chip label="Warning" color="warning" />
                  <Chip label="Info" color="info" />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" sx={{ mb: 2 }}>
                  Chip Sizes
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                  <Chip label="Small" size="small" color="primary" />
                  <Chip label="Medium" color="primary" />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Custom Number Input */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Custom Number Input
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  type="number"
                  label="Quantity"
                  defaultValue={1}
                  InputProps={{
                    inputProps: { min: 0, max: 100 }
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  type="number"
                  label="Price"
                  defaultValue={99.99}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  type="number"
                  label="Percentage"
                  defaultValue={25}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  type="number"
                  label="Weight"
                  defaultValue={10}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                  }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Color Picker */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Color Picker
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  type="color"
                  label="Choose Color"
                  defaultValue="#696CFF"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  type="color"
                  label="Background Color"
                  defaultValue="#FF4C51"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
