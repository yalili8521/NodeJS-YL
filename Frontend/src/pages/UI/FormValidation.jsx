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
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Checkbox,
  InputAdornment,
  IconButton,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function FormValidationPage() {
  // Basic form state
  const [basicForm, setBasicForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dateOfBirth: '',
    country: '',
    bio: '',
    gender: '',
    agreeToTerms: false,
  });
  const [basicErrors, setBasicErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  // Validation Schema With OnChange
  const [validationForm, setValidationForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [validationErrors, setValidationErrors] = useState({});
  const [showValidationPassword, setShowValidationPassword] = useState(false);

  // Async Submit form state
  const [asyncForm, setAsyncForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [asyncErrors, setAsyncErrors] = useState({});
  const [showAsyncPassword, setShowAsyncPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation functions
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateBasicForm = () => {
    const errors = {};

    if (!basicForm.firstName.trim()) {
      errors.firstName = 'First name is required';
    }
    if (!basicForm.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }
    if (!basicForm.email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(basicForm.email)) {
      errors.email = 'Invalid email format';
    }
    if (!basicForm.password) {
      errors.password = 'Password is required';
    } else if (basicForm.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    if (!basicForm.country) {
      errors.country = 'Please select a country';
    }
    if (!basicForm.gender) {
      errors.gender = 'Please select a gender';
    }
    if (!basicForm.agreeToTerms) {
      errors.agreeToTerms = 'You must agree to terms and conditions';
    }

    return errors;
  };

  const validateValidationForm = (field, value) => {
    const errors = { ...validationErrors };

    switch (field) {
      case 'firstName':
        if (!value.trim()) {
          errors.firstName = 'First name is required';
        } else {
          delete errors.firstName;
        }
        break;
      case 'lastName':
        if (!value.trim()) {
          errors.lastName = 'Last name is required';
        } else {
          delete errors.lastName;
        }
        break;
      case 'email':
        if (!value.trim()) {
          errors.email = 'Email is required';
        } else if (!validateEmail(value)) {
          errors.email = 'Invalid email format';
        } else {
          delete errors.email;
        }
        break;
      case 'password':
        if (!value) {
          errors.password = 'Password is required';
        } else if (value.length < 6) {
          errors.password = 'Password must be at least 6 characters';
        } else {
          delete errors.password;
        }
        break;
    }

    setValidationErrors(errors);
  };

  // Handle Basic form submit
  const handleBasicSubmit = (e) => {
    e.preventDefault();
    const errors = validateBasicForm();
    setBasicErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log('Basic form submitted:', basicForm);
      alert('Form submitted successfully!');
    }
  };

  // Handle Validation form change
  const handleValidationChange = (field) => (e) => {
    const value = e.target.value;
    setValidationForm({ ...validationForm, [field]: value });
    validateValidationForm(field, value);
  };

  // Handle Validation form submit
  const handleValidationSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    Object.keys(validationForm).forEach(field => {
      validateValidationForm(field, validationForm[field]);
    });

    if (Object.keys(validationErrors).length === 0) {
      console.log('Validation form submitted:', validationForm);
      alert('Form submitted successfully!');
    }
  };

  // Handle Async form submit
  const handleAsyncSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate async validation
    setTimeout(() => {
      const errors = {};

      if (!asyncForm.firstName.trim()) {
        errors.firstName = 'First name is required';
      }
      if (!asyncForm.lastName.trim()) {
        errors.lastName = 'Last name is required';
      }
      if (!asyncForm.email.trim()) {
        errors.email = 'Email is required';
      } else if (!validateEmail(asyncForm.email)) {
        errors.email = 'Invalid email format';
      }
      if (!asyncForm.password) {
        errors.password = 'Password is required';
      }

      setAsyncErrors(errors);
      setIsSubmitting(false);

      if (Object.keys(errors).length === 0) {
        console.log('Async form submitted:', asyncForm);
        alert('Form submitted successfully!');
      }
    }, 1000);
  };

  return (
    <Box sx={{ p: 3, maxWidth: 1440, mx: 'auto', width: '100%' }}>
      <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
        React Hook Form
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        React Hooks for forms validation (Web + React Native)
      </Typography>

      <Grid container spacing={3}>
        {/* Basic Form */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Basic
            </Typography>
            <form onSubmit={handleBasicSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    placeholder="John"
                    value={basicForm.firstName}
                    onChange={(e) => setBasicForm({ ...basicForm, firstName: e.target.value })}
                    error={!!basicErrors.firstName}
                    helperText={basicErrors.firstName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    placeholder="Doe"
                    value={basicForm.lastName}
                    onChange={(e) => setBasicForm({ ...basicForm, lastName: e.target.value })}
                    error={!!basicErrors.lastName}
                    helperText={basicErrors.lastName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    placeholder="john.doe@example.com"
                    value={basicForm.email}
                    onChange={(e) => setBasicForm({ ...basicForm, email: e.target.value })}
                    error={!!basicErrors.email}
                    helperText={basicErrors.email}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="············"
                    value={basicForm.password}
                    onChange={(e) => setBasicForm({ ...basicForm, password: e.target.value })}
                    error={!!basicErrors.password}
                    helperText={basicErrors.password}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Date of Birth"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    value={basicForm.dateOfBirth}
                    onChange={(e) => setBasicForm({ ...basicForm, dateOfBirth: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={!!basicErrors.country}>
                    <InputLabel>Country</InputLabel>
                    <Select
                      value={basicForm.country}
                      onChange={(e) => setBasicForm({ ...basicForm, country: e.target.value })}
                      label="Country"
                    >
                      <MenuItem value="">Select</MenuItem>
                      <MenuItem value="usa">USA</MenuItem>
                      <MenuItem value="uk">UK</MenuItem>
                      <MenuItem value="canada">Canada</MenuItem>
                      <MenuItem value="australia">Australia</MenuItem>
                    </Select>
                    {basicErrors.country && (
                      <Typography variant="caption" color="error" sx={{ mt: 0.5, ml: 1.5 }}>
                        {basicErrors.country}
                      </Typography>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Bio"
                    multiline
                    rows={4}
                    placeholder="Tell us about yourself..."
                    value={basicForm.bio}
                    onChange={(e) => setBasicForm({ ...basicForm, bio: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl component="fieldset" error={!!basicErrors.gender}>
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup
                      row
                      value={basicForm.gender}
                      onChange={(e) => setBasicForm({ ...basicForm, gender: e.target.value })}
                    >
                      <FormControlLabel value="female" control={<Radio />} label="Female" />
                      <FormControlLabel value="male" control={<Radio />} label="Male" />
                      <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                    {basicErrors.gender && (
                      <Typography variant="caption" color="error">
                        {basicErrors.gender}
                      </Typography>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={basicForm.agreeToTerms}
                        onChange={(e) => setBasicForm({ ...basicForm, agreeToTerms: e.target.checked })}
                      />
                    }
                    label="Agree to our terms and conditions"
                  />
                  {basicErrors.agreeToTerms && (
                    <Typography variant="caption" color="error" sx={{ display: 'block', ml: 4 }}>
                      {basicErrors.agreeToTerms}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ backgroundColor: '#696CFF' }}
                  >
                    SUBMIT
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>

        <Grid container item xs={12} spacing={3}>
          {/* Validation Schema With OnChange */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Validation Schema With OnChange
              </Typography>
              <form onSubmit={handleValidationSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="First Name"
                      placeholder="John"
                      value={validationForm.firstName}
                      onChange={handleValidationChange('firstName')}
                      error={!!validationErrors.firstName}
                      helperText={validationErrors.firstName}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      placeholder="Doe"
                      value={validationForm.lastName}
                      onChange={handleValidationChange('lastName')}
                      error={!!validationErrors.lastName}
                      helperText={validationErrors.lastName}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      placeholder="john.doe@example.com"
                      value={validationForm.email}
                      onChange={handleValidationChange('email')}
                      error={!!validationErrors.email}
                      helperText={validationErrors.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Password"
                      type={showValidationPassword ? 'text' : 'password'}
                      placeholder="············"
                      value={validationForm.password}
                      onChange={handleValidationChange('password')}
                      error={!!validationErrors.password}
                      helperText={validationErrors.password}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowValidationPassword(!showValidationPassword)}
                              edge="end"
                            >
                              {showValidationPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ backgroundColor: '#696CFF' }}
                    >
                      SUBMIT
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>

          {/* Async Submit */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Async Submit
              </Typography>
              <form onSubmit={handleAsyncSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="First Name"
                      placeholder="John"
                      value={asyncForm.firstName}
                      onChange={(e) => setAsyncForm({ ...asyncForm, firstName: e.target.value })}
                      error={!!asyncErrors.firstName}
                      helperText={asyncErrors.firstName}
                      disabled={isSubmitting}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      placeholder="Doe"
                      value={asyncForm.lastName}
                      onChange={(e) => setAsyncForm({ ...asyncForm, lastName: e.target.value })}
                      error={!!asyncErrors.lastName}
                      helperText={asyncErrors.lastName}
                      disabled={isSubmitting}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      placeholder="john.doe@example.com"
                      value={asyncForm.email}
                      onChange={(e) => setAsyncForm({ ...asyncForm, email: e.target.value })}
                      error={!!asyncErrors.email}
                      helperText={asyncErrors.email}
                      disabled={isSubmitting}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Password"
                      type={showAsyncPassword ? 'text' : 'password'}
                      placeholder="············"
                      value={asyncForm.password}
                      onChange={(e) => setAsyncForm({ ...asyncForm, password: e.target.value })}
                      error={!!asyncErrors.password}
                      helperText={asyncErrors.password}
                      disabled={isSubmitting}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowAsyncPassword(!showAsyncPassword)}
                              edge="end"
                              disabled={isSubmitting}
                            >
                              {showAsyncPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ backgroundColor: '#696CFF' }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
