import { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
  Chip,
  OutlinedInput,
} from '@mui/material';

export default function SelectPage() {
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [multiple, setMultiple] = useState([]);
  const [multipleChip, setMultipleChip] = useState([]);

  const countries = ['USA', 'UK', 'Canada', 'Australia', 'Germany', 'France', 'Japan', 'China'];
  const names = ['Oliver Hansen', 'Van Henry', 'April Tucker', 'Ralph Hubbard', 'Omar Alexander', 'Carlos Abbott', 'Miriam Wagner', 'Bradley Wilkerson'];

  return (
    <Box sx={{ maxWidth: 1440, mx: 'auto', width: '100%' }}>
      <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
        Select
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Select components are used for collecting user provided information from a list of options
      </Typography>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: 3
      }}>
        {/* Variants */}
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Variants
            </Typography>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
              gap: 3
            }}>
              <FormControl fullWidth size="small">
                <InputLabel>Age</InputLabel>
                <Select value={age} label="Age" onChange={(e) => setAge(e.target.value)}>
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth size="small">
                <InputLabel>Age</InputLabel>
                <Select value={age} label="Age" onChange={(e) => setAge(e.target.value)}>
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth size="small">
                <InputLabel>Age</InputLabel>
                <Select value={age} label="Age" onChange={(e) => setAge(e.target.value)}>
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Paper>
        </Box>

        {/* Native Select */}
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Native Select
            </Typography>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
              gap: 3
            }}>
              <FormControl fullWidth size="small">
                <InputLabel htmlFor="native-select-1">Age</InputLabel>
                <Select native value={age} label="Age" onChange={(e) => setAge(e.target.value)} inputProps={{ id: 'native-select-1' }}>
                  <option value=""></option>
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>
              <FormControl fullWidth size="small">
                <InputLabel htmlFor="native-select-2">Age</InputLabel>
                <Select native value={age} label="Age" onChange={(e) => setAge(e.target.value)} inputProps={{ id: 'native-select-2' }}>
                  <option value=""></option>
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>
              <FormControl fullWidth size="small">
                <InputLabel htmlFor="native-select-3">Age</InputLabel>
                <Select native value={age} label="Age" onChange={(e) => setAge(e.target.value)} inputProps={{ id: 'native-select-3' }}>
                  <option value=""></option>
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>
            </Box>
          </Paper>
        </Box>

        {/* Select Props */}
        <Box sx={{ gridColumn: { xs: 'span 12' } }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Select Props
            </Typography>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(6, 1fr)' },
              gap: 3
            }}>
              <FormControl fullWidth size="small" disabled>
                <InputLabel>Age</InputLabel>
                <Select value={10} label="Age">
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                </Select>
                <FormHelperText>With label + helper text</FormHelperText>
              </FormControl>
              <FormControl fullWidth size="small" disabled>
                <InputLabel>Age</InputLabel>
                <Select value={10} label="Age">
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth size="small" error>
                <InputLabel>Age</InputLabel>
                <Select value="" label="Age">
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth size="small" sx={{ minWidth: 120 }}>
                <InputLabel>Age</InputLabel>
                <Select value="" label="Age" displayEmpty>
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth size="small" required error>
                <InputLabel>Age</InputLabel>
                <Select value="" label="Age *">
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                </Select>
                <FormHelperText>Required</FormHelperText>
              </FormControl>
              <FormControl fullWidth size="small">
                <InputLabel>Age *</InputLabel>
                <Select value="" label="Age *">
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                </Select>
                <FormHelperText>Required</FormHelperText>
              </FormControl>
            </Box>
          </Paper>
        </Box>

        {/* Controlled and Uncontrolled */}
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Controlled and Uncontrolled
            </Typography>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
              gap: 3
            }}>
              <FormControl fullWidth>
                <InputLabel>Controlled</InputLabel>
                <Select value={age} label="Controlled" onChange={(e) => setAge(e.target.value)}>
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel>Uncontrolled</InputLabel>
                <Select defaultValue="" label="Uncontrolled">
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Paper>
        </Box>

        {/* Customized Select */}
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Customized Select
            </Typography>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
              gap: 3
            }}>
              <FormControl fullWidth size="small">
                <Select value={age} onChange={(e) => setAge(e.target.value)} displayEmpty>
                  <MenuItem value=""><em>Placeholder</em></MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth size="small">
                <Select value={age} onChange={(e) => setAge(e.target.value)} displayEmpty>
                  <MenuItem value=""><em>Placeholder</em></MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Paper>
        </Box>

        {/* Multiple Select */}
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Multiple Select
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <FormControl fullWidth>
                <InputLabel>Name</InputLabel>
                <Select
                  multiple
                  value={multiple}
                  label="Name"
                  onChange={(e) => setMultiple(e.target.value)}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>Checkmarks</Typography>
                <FormControl fullWidth size="small">
                  <InputLabel>Tag</InputLabel>
                  <Select
                    multiple
                    value={multiple}
                    label="Tag"
                    onChange={(e) => setMultiple(e.target.value)}
                  >
                    {names.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>Chip</Typography>
                <FormControl fullWidth size="small">
                  <InputLabel>Chip</InputLabel>
                  <Select
                    multiple
                    value={multipleChip}
                    label="Chip"
                    onChange={(e) => setMultipleChip(e.target.value)}
                    input={<OutlinedInput label="Chip" />}
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} size="small" />
                        ))}
                      </Box>
                    )}
                  >
                    {names.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>Placeholder</Typography>
                <FormControl fullWidth size="small">
                  <Select
                    multiple
                    displayEmpty
                    value={multipleChip}
                    onChange={(e) => setMultipleChip(e.target.value)}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                      if (selected.length === 0) {
                        return <em>Placeholder</em>;
                      }
                      return selected.join(', ');
                    }}
                  >
                    <MenuItem disabled value="">
                      <em>Placeholder</em>
                    </MenuItem>
                    {names.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>Native</Typography>
                <FormControl fullWidth size="small">
                  <Select
                    multiple
                    native
                    value={multiple}
                    onChange={(e) => {
                      const { options } = e.target;
                      const value = [];
                      for (let i = 0, l = options.length; i < l; i += 1) {
                        if (options[i].selected) {
                          value.push(options[i].value);
                        }
                      }
                      setMultiple(value);
                    }}
                    inputProps={{ multiple: true }}
                  >
                    {names.map((name) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Paper>
        </Box>

        {/* Select with Dialog */}
        <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <Paper sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Select with Dialog
              </Typography>
              <FormControl fullWidth>
                <Select value="" displayEmpty>
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Grouping
              </Typography>
              <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                gap: 3
              }}>
                <FormControl fullWidth size="small">
                  <InputLabel>Grouping</InputLabel>
                  <Select value="" label="Grouping">
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth size="small">
                  <InputLabel>Grouping</InputLabel>
                  <Select value="" label="Grouping">
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
