import { useState } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Chip,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ImageIcon from '@mui/icons-material/Image';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

export default function FileUploaderPage() {
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles([...files, ...selectedFiles]);
  };

  const handleImageChange = (event) => {
    const selectedImages = Array.from(event.target.files);
    setImages([...images, ...selectedImages]);
  };

  const handleRemoveFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
        File Uploader
      </Typography>

      <Grid container spacing={3}>
        {/* Basic File Upload */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Basic File Upload
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Button
                  component="label"
                  variant="contained"
                  startIcon={<CloudUploadIcon />}
                  sx={{ bgcolor: '#696CFF', '&:hover': { bgcolor: '#5f5ae0' } }}
                >
                  Upload File
                  <input type="file" hidden onChange={handleFileChange} />
                </Button>
                {files.length > 0 && (
                  <List sx={{ mt: 2 }}>
                    {files.map((file, index) => (
                      <ListItem
                        key={index}
                        sx={{
                          bgcolor: '#f5f5f9',
                          borderRadius: 1,
                          mb: 1,
                        }}
                      >
                        <InsertDriveFileIcon sx={{ mr: 2, color: '#696CFF' }} />
                        <ListItemText
                          primary={file.name}
                          secondary={formatFileSize(file.size)}
                        />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" onClick={() => handleRemoveFile(index)}>
                            <DeleteIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))}
                  </List>
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <Button
                  component="label"
                  variant="outlined"
                  startIcon={<AttachFileIcon />}
                >
                  Attach File
                  <input type="file" hidden />
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Multiple File Upload */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Multiple File Upload
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Button
                  component="label"
                  variant="contained"
                  startIcon={<CloudUploadIcon />}
                  sx={{ bgcolor: '#696CFF', '&:hover': { bgcolor: '#5f5ae0' } }}
                >
                  Upload Multiple Files
                  <input type="file" hidden multiple onChange={handleFileChange} />
                </Button>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {files.length} file(s) selected
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Image Upload */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Image Upload
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Button
                  component="label"
                  variant="contained"
                  startIcon={<ImageIcon />}
                  sx={{ bgcolor: '#56CA00', '&:hover': { bgcolor: '#4db300' } }}
                >
                  Upload Images
                  <input
                    type="file"
                    hidden
                    multiple
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </Button>
                {images.length > 0 && (
                  <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    {images.map((image, index) => (
                      <Box
                        key={index}
                        sx={{
                          position: 'relative',
                          width: 150,
                          height: 150,
                          borderRadius: 1,
                          overflow: 'hidden',
                          border: '2px solid #e7e7e7',
                        }}
                      >
                        <img
                          src={URL.createObjectURL(image)}
                          alt={image.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                        />
                        <IconButton
                          sx={{
                            position: 'absolute',
                            top: 5,
                            right: 5,
                            bgcolor: 'rgba(255,255,255,0.9)',
                            '&:hover': { bgcolor: 'rgba(255,255,255,1)' },
                          }}
                          size="small"
                          onClick={() => handleRemoveImage(index)}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    ))}
                  </Box>
                )}
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Drag and Drop Zone */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Drag and Drop Zone
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box
                  component="label"
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: 200,
                    border: '2px dashed #696CFF',
                    borderRadius: 2,
                    bgcolor: '#696CFF10',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    '&:hover': {
                      bgcolor: '#696CFF20',
                      borderColor: '#5f5ae0',
                    },
                  }}
                >
                  <CloudUploadIcon sx={{ fontSize: 60, color: '#696CFF', mb: 2 }} />
                  <Typography variant="h6" color="text.secondary">
                    Drop files here or click to upload
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Support for single or bulk upload
                  </Typography>
                  <input type="file" hidden multiple onChange={handleFileChange} />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* File Type Restrictions */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              File Type Restrictions
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Button
                  component="label"
                  variant="outlined"
                  fullWidth
                  startIcon={<ImageIcon />}
                >
                  Images Only
                  <input type="file" hidden accept="image/*" />
                </Button>
                <Chip label=".jpg, .png, .gif" size="small" sx={{ mt: 1 }} />
              </Grid>
              <Grid item xs={12} md={4}>
                <Button
                  component="label"
                  variant="outlined"
                  fullWidth
                  startIcon={<InsertDriveFileIcon />}
                >
                  PDFs Only
                  <input type="file" hidden accept=".pdf" />
                </Button>
                <Chip label=".pdf" size="small" sx={{ mt: 1 }} />
              </Grid>
              <Grid item xs={12} md={4}>
                <Button
                  component="label"
                  variant="outlined"
                  fullWidth
                  startIcon={<InsertDriveFileIcon />}
                >
                  Documents
                  <input type="file" hidden accept=".doc,.docx,.txt,.pdf" />
                </Button>
                <Chip label=".doc, .docx, .txt, .pdf" size="small" sx={{ mt: 1 }} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Button Variants */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Button Variants
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  <Button component="label" variant="contained">
                    Contained
                    <input type="file" hidden />
                  </Button>
                  <Button component="label" variant="outlined">
                    Outlined
                    <input type="file" hidden />
                  </Button>
                  <Button component="label" variant="text">
                    Text
                    <input type="file" hidden />
                  </Button>
                  <Button component="label" variant="contained" color="success">
                    Success
                    <input type="file" hidden />
                  </Button>
                  <Button component="label" variant="contained" color="error">
                    Error
                    <input type="file" hidden />
                  </Button>
                  <Button component="label" variant="contained" color="warning">
                    Warning
                    <input type="file" hidden />
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Button Sizes */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Button Sizes
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Button component="label" variant="contained" size="small">
                    Small
                    <input type="file" hidden />
                  </Button>
                  <Button component="label" variant="contained" size="medium">
                    Medium
                    <input type="file" hidden />
                  </Button>
                  <Button component="label" variant="contained" size="large">
                    Large
                    <input type="file" hidden />
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
