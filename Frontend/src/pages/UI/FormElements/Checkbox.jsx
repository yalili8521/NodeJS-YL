import { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormControl,
  FormLabel,
  FormHelperText,
} from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import StarBorder from '@mui/icons-material/StarBorder';
import Star from '@mui/icons-material/Star';

export default function CheckboxPage() {
  const [checked, setChecked] = useState(true);
  const [controlled, setControlled] = useState(true);
  const [uncontrolled, setUncontrolled] = useState(true);
  const [gilad, setGilad] = useState(true);
  const [jason, setJason] = useState(false);
  const [antoine, setAntoine] = useState(false);
  const [labelTop, setLabelTop] = useState(false);
  const [labelBottom, setLabelBottom] = useState(false);
  const [labelStart, setLabelStart] = useState(false);
  const [labelEnd, setLabelEnd] = useState(false);
  const [errorGilad, setErrorGilad] = useState(true);
  const [errorJason, setErrorJason] = useState(false);
  const [errorAntoine, setErrorAntoine] = useState(false);

  return (
    <Box sx={{ maxWidth: 1440, mx: 'auto', width: '100%' }}>
      <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
        Checkbox
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Checkboxes allow the user to select one or more items from a set
      </Typography>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: 3
      }}>
        {/* Basic Checkboxes */}
        <Box sx={{ gridColumn: { xs: 'span 12' } }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Basic Checkboxes
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Checked" />
              <FormControlLabel control={<Checkbox />} label="Unchecked" />
              <FormControlLabel disabled control={<Checkbox />} label="Disabled Checked" />
              <FormControlLabel disabled control={<Checkbox defaultChecked />} label="Disabled Unchecked" />
            </Box>
          </Paper>
        </Box>

        {/* Controlled and Uncontrolled */}
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Controlled and Uncontrolled
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Manage <code>checked</code> prop with the help of a state for controlled <code>Checkbox</code> and use <code>defaultChecked</code> prop for uncontrolled <code>Checkbox</code>.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <FormControlLabel
                control={<Checkbox checked={controlled} onChange={(e) => setControlled(e.target.checked)} />}
                label="Controlled"
              />
              <FormControlLabel
                control={<Checkbox checked={uncontrolled} onChange={(e) => setUncontrolled(e.target.checked)} />}
                label="Uncontrolled"
              />
            </Box>
          </Paper>
        </Box>

        {/* Colors */}
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Colors
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use <code>color</code> prop for different colored checkbox.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Primary" />
              <FormControlLabel control={<Checkbox defaultChecked color="secondary" />} label="Secondary" />
              <FormControlLabel control={<Checkbox defaultChecked color="success" />} label="Success" />
              <FormControlLabel control={<Checkbox defaultChecked color="error" />} label="Error" />
              <FormControlLabel control={<Checkbox defaultChecked color="warning" />} label="Warning" />
              <FormControlLabel control={<Checkbox defaultChecked color="info" />} label="Info" />
            </Box>
          </Paper>
        </Box>

        {/* Customized */}
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Customized
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use <code>styled</code> hook to customize your checkbox.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Checkbox defaultChecked />
              <Checkbox defaultChecked />
            </Box>
          </Paper>
        </Box>

        {/* Custom Icons */}
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Custom Icons
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use <code>icon</code> and <code>checkedIcon</code> props with <code>Checkbox</code> component to change default checkbox icons.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
              <Checkbox icon={<StarBorder />} checkedIcon={<Star />} />
            </Box>
          </Paper>
        </Box>

        {/* Label Placement */}
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Label Placement
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use <code>labelPlacement</code> prop with <code>FormControlLabel</code> component to change the placement of the label.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                <FormControlLabel
                  labelPlacement="top"
                  control={<Checkbox checked={labelTop} onChange={(e) => setLabelTop(e.target.checked)} />}
                  label="Top"
                />
                <FormControlLabel
                  labelPlacement="bottom"
                  control={<Checkbox checked={labelBottom} onChange={(e) => setLabelBottom(e.target.checked)} />}
                  label="Bottom"
                />
              </Box>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <FormControlLabel
                  labelPlacement="start"
                  control={<Checkbox checked={labelStart} onChange={(e) => setLabelStart(e.target.checked)} />}
                  label="Start"
                />
                <FormControlLabel
                  labelPlacement="end"
                  control={<Checkbox checked={labelEnd} onChange={(e) => setLabelEnd(e.target.checked)} />}
                  label="End"
                />
              </Box>
            </Box>
          </Paper>
        </Box>

        {/* Show Error */}
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Show Error
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              You can display error by managing <code>error</code> prop with <code>FormControl</code> component with the help of a state.
            </Typography>
            <FormControl error={!errorGilad && !errorJason && !errorAntoine}>
              <FormLabel component="legend">Assign responsibility</FormLabel>
              <FormGroup>
                <Box sx={{ display: 'flex', gap: 3 }}>
                  <Box>
                    <FormControlLabel
                      control={<Checkbox checked={errorGilad} onChange={(e) => setErrorGilad(e.target.checked)} />}
                      label="Gilad Gray"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={errorJason} onChange={(e) => setErrorJason(e.target.checked)} />}
                      label="Jason Killian"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={errorAntoine} onChange={(e) => setErrorAntoine(e.target.checked)} />}
                      label="Antoine Llorca"
                    />
                  </Box>
                  <Box>
                    <FormControlLabel control={<Checkbox checked={errorGilad} disabled />} label="Gilad Gray" />
                    <FormControlLabel control={<Checkbox checked={errorJason} disabled />} label="Jason Killian" />
                    <FormControlLabel control={<Checkbox checked={errorAntoine} disabled />} label="Antoine Llorca" />
                  </Box>
                </Box>
              </FormGroup>
              <FormHelperText sx={{ mx: 0 }}>
                {!errorGilad && !errorJason && !errorAntoine ? 'You can display an error' : 'Be careful'}
              </FormHelperText>
            </FormControl>
          </Paper>
        </Box>

        {/* Sizes */}
        <Box sx={{ gridColumn: { xs: 'span 12' } }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Sizes
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use <code>icon</code> and <code>checkedIcon</code> props with <code>Checkbox</code> component and use <code>fontSize='small'</code> prop with the former props for small checkbox.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <FormControlLabel control={<Checkbox size="small" defaultChecked />} label="Small" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Default" />
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
