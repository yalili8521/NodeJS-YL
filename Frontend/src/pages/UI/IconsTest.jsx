import { Box, Typography } from '@mui/material';
import { Icon } from '@iconify/react';

export default function IconsPage() {
  return (
    <Box sx={{ p: 3, maxWidth: 1440, mx: 'auto', width: '100%' }}>
      {/* Header */}
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
        All the icons are made with the help of our custom component.
      </Typography>

      {/* Icons from APIs */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
          Icons from APIs
        </Typography>

        {/* Online Icons */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 500, mb: 1 }}>
            Online Icons
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
            Boxicons coming from Iconify's API
          </Typography>
        </Box>

        {/* FakeDB Box icons but offline */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 500, mb: 1 }}>
            FakeDB Box icons but offline
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
            Box icons coming from our API and SVGs are from the Iconify Bundle
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Icon icon="bx:link" width="24" height="24" />
            <Icon icon="bx:paint" width="24" height="24" />
            <Icon icon="bx:message" width="24" height="24" />
            <Icon icon="bx:envelope" width="24" height="24" />
            <Icon icon="bx:check-circle" width="24" height="24" />
            <Icon icon="bx:star" width="24" height="24" />
          </Box>
        </Box>
      </Box>

      {/* Offline Icons */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
          Offline Icons
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
          Iconify icons come with the following props as well:{' '}
          <Box component="span" sx={{ color: '#696CFF', fontFamily: 'monospace' }}>
            id · key · name · ref · role · simplet-props
          </Box>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
          Our icon wrapped with{' '}
          <Box component="span" sx={{ color: '#696CFF', fontFamily: 'monospace' }}>
            Box
          </Box>{' '}
          component{' '}
          <Icon icon="mdi:rocket-launch" width="20" height="20" style={{ verticalAlign: 'middle', color: '#FF4C51' }} />
        </Typography>

        {/* Material Line Icons with height */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>
            Material Line Icons with height
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
            <Icon icon="material-symbols:home-outline" width="24" height="24" />
            <Icon icon="material-symbols:star-outline" width="24" height="24" />
            <Icon icon="material-symbols:file-copy-outline" width="24" height="24" />
            <Icon icon="material-symbols:folder-outline" width="24" height="24" />
            <Icon icon="material-symbols:mail-outline" width="24" height="24" />
          </Box>
        </Box>

        {/* Simple Box Icon */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>
            Simple Box Icon{' '}
            <Icon icon="mdi:heart" width="20" height="20" style={{ verticalAlign: 'middle', color: '#FF4C51' }} />
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
            Box icon wrapped with{' '}
            <Box component="span" sx={{ color: '#56CA00', fontFamily: 'monospace' }}>
              Box
            </Box>{' '}
            component{' '}
            <Icon icon="mdi:leaf" width="20" height="20" style={{ verticalAlign: 'middle', color: '#56CA00' }} />
          </Typography>
        </Box>

        {/* Various Box Icon Examples */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Box icon with font-size{' '}
            <Icon icon="mdi:heart" width="32" height="32" style={{ verticalAlign: 'middle', color: '#FF4C51' }} />
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Box icon with color and passed color-name{' '}
            <Icon icon="mdi:heart" width="24" height="24" style={{ verticalAlign: 'middle', color: '#FF4C51' }} />
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Box icon with horizontal flip{' '}
            <Icon icon="mdi:code-tags" width="24" height="24" style={{ verticalAlign: 'middle' }} hFlip={true} />
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Box icon with vertical flip{' '}
            <Icon icon="mdi:code-tags" width="24" height="24" style={{ verticalAlign: 'middle' }} vFlip={true} />
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Box icon with vertical & horizontal flip{' '}
            <Icon icon="mdi:code-tags" width="24" height="24" style={{ verticalAlign: 'middle' }} hFlip={true} vFlip={true} />
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Box icon with rotate 90 degree{' '}
            <Icon icon="mdi:alert-circle" width="24" height="24" style={{ verticalAlign: 'middle' }} rotate={1} />
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Box icon with rotate 270 degree{' '}
            <Icon icon="mdi:alert-circle" width="24" height="24" style={{ verticalAlign: 'middle' }} rotate={3} />
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Inline Box Icon{' '}
            <Icon icon="mdi:rocket-launch" width="24" height="24" style={{ verticalAlign: 'middle', color: '#FF4C51' }} />
          </Typography>
        </Box>

        {/* Different sized icons */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Box icon with width{' '}
            <Icon icon="mdi:rocket-launch" width="40" height="40" style={{ verticalAlign: 'middle', color: '#696CFF' }} />
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Box icon with height{' '}
            <Icon icon="mdi:rocket-launch" width="50" height="50" style={{ verticalAlign: 'middle', color: '#696CFF' }} />
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Box icon with cursor pointer{' '}
            <Icon icon="mdi:rocket-launch" width="24" height="24" style={{ verticalAlign: 'middle', color: '#696CFF', cursor: 'pointer' }} />
          </Typography>
        </Box>
      </Box>

      {/* Icons from different icon libraries */}
      <Box>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
          Icons from different icon libraries
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Icon icon="mdi:home" width="24" height="24" />
          <Icon icon="bx:heart" width="24" height="24" />
          <Icon icon="lucide:star" width="24" height="24" />
          <Icon icon="tabler:bell" width="24" height="24" />
          <Icon icon="solar:settings-bold" width="24" height="24" />
          <Icon icon="heroicons:user" width="24" height="24" />
        </Box>
      </Box>
    </Box>
  );
}
