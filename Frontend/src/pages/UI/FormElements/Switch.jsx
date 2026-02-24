import { useState } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Switch,
  FormControlLabel,
  FormGroup,
  FormControl,
  FormLabel,
} from '@mui/material';

export default function SwitchPage() {
  const [state, setState] = useState({
    notifications: true,
    darkMode: false,
    autoSave: true,
    publicProfile: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
        Switch
      </Typography>

      <Grid container spacing={3}>
        {/* Basic Switches */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Basic Switches
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <FormControlLabel
                    control={<Switch defaultChecked />}
                    label="Checked"
                  />
                  <FormControlLabel
                    control={<Switch />}
                    label="Unchecked"
                  />
                  <FormControlLabel
                    control={<Switch disabled />}
                    label="Disabled"
                  />
                  <FormControlLabel
                    control={<Switch disabled checked />}
                    label="Disabled Checked"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <FormControlLabel
                    control={<Switch required />}
                    label="Required"
                  />
                  <FormControlLabel
                    control={<Switch defaultChecked size="small" />}
                    label="Small Size"
                  />
                  <FormControlLabel
                    control={<Switch defaultChecked size="medium" />}
                    label="Medium Size"
                  />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Switch Colors */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Switch Colors
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  <FormControlLabel
                    control={<Switch defaultChecked />}
                    label="Primary"
                  />
                  <FormControlLabel
                    control={<Switch defaultChecked color="secondary" />}
                    label="Secondary"
                  />
                  <FormControlLabel
                    control={<Switch defaultChecked color="success" />}
                    label="Success"
                  />
                  <FormControlLabel
                    control={<Switch defaultChecked color="error" />}
                    label="Error"
                  />
                  <FormControlLabel
                    control={<Switch defaultChecked color="warning" />}
                    label="Warning"
                  />
                  <FormControlLabel
                    control={<Switch defaultChecked color="info" />}
                    label="Info"
                  />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Label Placement */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Label Placement
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                  <FormControlLabel
                    control={<Switch defaultChecked />}
                    label="End"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    control={<Switch defaultChecked />}
                    label="Start"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    control={<Switch defaultChecked />}
                    label="Top"
                    labelPlacement="top"
                  />
                  <FormControlLabel
                    control={<Switch defaultChecked />}
                    label="Bottom"
                    labelPlacement="bottom"
                  />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Controlled Switches */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Controlled Switches
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Settings</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={state.notifications}
                          onChange={handleChange}
                          name="notifications"
                        />
                      }
                      label={`Notifications (${state.notifications ? 'On' : 'Off'})`}
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={state.darkMode}
                          onChange={handleChange}
                          name="darkMode"
                        />
                      }
                      label={`Dark Mode (${state.darkMode ? 'On' : 'Off'})`}
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={state.autoSave}
                          onChange={handleChange}
                          name="autoSave"
                        />
                      }
                      label={`Auto Save (${state.autoSave ? 'On' : 'Off'})`}
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={state.publicProfile}
                          onChange={handleChange}
                          name="publicProfile"
                        />
                      }
                      label={`Public Profile (${state.publicProfile ? 'On' : 'Off'})`}
                    />
                  </FormGroup>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Switch Sizes */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Switch Sizes
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  <FormControlLabel
                    control={<Switch size="small" defaultChecked />}
                    label="Small"
                  />
                  <FormControlLabel
                    control={<Switch size="medium" defaultChecked />}
                    label="Medium"
                  />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Switch Group */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Switch Group
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Privacy Settings</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="Show email address"
                    />
                    <FormControlLabel
                      control={<Switch />}
                      label="Show phone number"
                    />
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="Show profile picture"
                    />
                    <FormControlLabel
                      control={<Switch />}
                      label="Allow messages from strangers"
                    />
                  </FormGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Notification Preferences</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={<Switch defaultChecked color="success" />}
                      label="Email notifications"
                    />
                    <FormControlLabel
                      control={<Switch defaultChecked color="success" />}
                      label="Push notifications"
                    />
                    <FormControlLabel
                      control={<Switch color="success" />}
                      label="SMS notifications"
                    />
                    <FormControlLabel
                      control={<Switch defaultChecked color="success" />}
                      label="Marketing emails"
                    />
                  </FormGroup>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Custom Styled Switches */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Custom Styled Switches
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {[
                    { label: 'WiFi', color: 'primary', checked: true },
                    { label: 'Bluetooth', color: 'info', checked: true },
                    { label: 'Location Services', color: 'warning', checked: false },
                    { label: 'Airplane Mode', color: 'error', checked: false },
                  ].map((item, index) => (
                    <Paper
                      key={index}
                      sx={{
                        p: 2,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        border: '1px solid #e7e7e7',
                      }}
                    >
                      <Typography variant="subtitle1">{item.label}</Typography>
                      <Switch defaultChecked={item.checked} color={item.color} />
                    </Paper>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
