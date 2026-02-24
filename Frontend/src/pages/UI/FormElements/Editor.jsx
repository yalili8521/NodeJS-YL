import { useState } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
} from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import LinkIcon from '@mui/icons-material/Link';
import ImageIcon from '@mui/icons-material/Image';

export default function EditorPage() {
  const [content, setContent] = useState('');
  const [formats, setFormats] = useState(() => []);
  const [alignment, setAlignment] = useState('left');

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
        Editor
      </Typography>

      <Grid container spacing={3}>
        {/* Rich Text Editor */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Rich Text Editor
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box sx={{ border: '1px solid #e7e7e7', borderRadius: 1 }}>
                  {/* Toolbar */}
                  <Box sx={{ p: 2, bgcolor: '#f5f5f9', borderBottom: '1px solid #e7e7e7' }}>
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
                      <ToggleButtonGroup
                        value={formats}
                        onChange={handleFormat}
                        size="small"
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

                      <Divider orientation="vertical" flexItem />

                      <ToggleButtonGroup
                        value={alignment}
                        exclusive
                        onChange={handleAlignment}
                        size="small"
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
                      </ToggleButtonGroup>

                      <Divider orientation="vertical" flexItem />

                      <ToggleButtonGroup size="small">
                        <ToggleButton value="bulletList" aria-label="bullet list">
                          <FormatListBulletedIcon />
                        </ToggleButton>
                        <ToggleButton value="numberedList" aria-label="numbered list">
                          <FormatListNumberedIcon />
                        </ToggleButton>
                      </ToggleButtonGroup>

                      <Divider orientation="vertical" flexItem />

                      <ToggleButtonGroup size="small">
                        <ToggleButton value="link" aria-label="link">
                          <LinkIcon />
                        </ToggleButton>
                        <ToggleButton value="image" aria-label="image">
                          <ImageIcon />
                        </ToggleButton>
                      </ToggleButtonGroup>
                    </Box>
                  </Box>

                  {/* Editor Content */}
                  <TextField
                    fullWidth
                    multiline
                    rows={10}
                    placeholder="Start typing your content here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                      sx: { p: 2 },
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Simple Editor */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Simple Editor
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={8}
                  label="Content"
                  placeholder="Write your content here..."
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Code Editor */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Code Editor
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={10}
                  placeholder="// Write your code here..."
                  variant="outlined"
                  InputProps={{
                    sx: {
                      fontFamily: 'monospace',
                      bgcolor: '#1e1e1e',
                      color: '#d4d4d4',
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#1e1e1e',
                      },
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Editor with Character Count */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Editor with Character Count
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  label="Description"
                  placeholder="Maximum 500 characters..."
                  variant="outlined"
                  value={content}
                  onChange={(e) => {
                    if (e.target.value.length <= 500) {
                      setContent(e.target.value);
                    }
                  }}
                  helperText={`${content.length}/500 characters`}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Multiple Editors */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Multiple Editors
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  label="Editor 1"
                  placeholder="First editor..."
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  label="Editor 2"
                  placeholder="Second editor..."
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  label="Notes"
                  placeholder="Add your notes..."
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  label="Comments"
                  placeholder="Add your comments..."
                  variant="filled"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Editor States */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Editor States
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Disabled Editor"
                  defaultValue="This editor is disabled"
                  disabled
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Read Only Editor"
                  defaultValue="This editor is read-only"
                  InputProps={{ readOnly: true }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Error State"
                  error
                  helperText="Content is required"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Success State"
                  defaultValue="Content validated successfully"
                  color="success"
                  focused
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
