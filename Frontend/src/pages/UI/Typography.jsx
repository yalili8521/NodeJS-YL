import { Box, Paper, Typography } from '@mui/material';

export default function TypographyPage() {
  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
          Typography
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Headings
          </Typography>
          <Typography variant="h1" sx={{ mb: 1 }}>h1. Heading</Typography>
          <Typography variant="h2" sx={{ mb: 1 }}>h2. Heading</Typography>
          <Typography variant="h3" sx={{ mb: 1 }}>h3. Heading</Typography>
          <Typography variant="h4" sx={{ mb: 1 }}>h4. Heading</Typography>
          <Typography variant="h5" sx={{ mb: 1 }}>h5. Heading</Typography>
          <Typography variant="h6" sx={{ mb: 1 }}>h6. Heading</Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Body Text
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Other Variants
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography>
          <Typography variant="caption" sx={{ mb: 1, display: 'block' }}>
            caption text
          </Typography>
          <Typography variant="overline" sx={{ mb: 1, display: 'block' }}>
            overline text
          </Typography>
        </Box>

        <Box>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Font Weights
          </Typography>
          <Typography sx={{ fontWeight: 300, mb: 1 }}>Light (300)</Typography>
          <Typography sx={{ fontWeight: 400, mb: 1 }}>Regular (400)</Typography>
          <Typography sx={{ fontWeight: 500, mb: 1 }}>Medium (500)</Typography>
          <Typography sx={{ fontWeight: 600, mb: 1 }}>Semi Bold (600)</Typography>
          <Typography sx={{ fontWeight: 700, mb: 1 }}>Bold (700)</Typography>
        </Box>
      </Paper>
    </Box>
  );
}
