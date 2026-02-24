import { createTheme } from '@mui/material/styles';

export const getTheme = (mode) => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: '#696CFF',
        light: '#8B8DFF',
        dark: '#5F61E6',
      },
      secondary: {
        main: '#8A8D93',
        light: '#A8AAAE',
        dark: '#777B82',
      },
      success: {
        main: '#71DD37',
        light: '#8FE45E',
        dark: '#68CA32',
      },
      error: {
        main: '#FF4C51',
        light: '#FF6F73',
        dark: '#E6454A',
      },
      warning: {
        main: '#FFB400',
        light: '#FFC233',
        dark: '#E6A200',
      },
      info: {
        main: '#16B1FF',
        light: '#45C0FF',
        dark: '#149FE6',
      },
      background: {
        default: mode === 'light' ? '#F5F5F9' : '#2F3349',
        paper: mode === 'light' ? '#FFFFFF' : '#30334E',
      },
      text: {
        primary: mode === 'light' ? '#5D596C' : '#EBEAEF',
        secondary: mode === 'light' ? '#8A8D93' : '#B9B8BD',
      },
    },
    typography: {
      fontFamily: '"Public Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      h1: {
        fontSize: '3rem',
        fontWeight: 600,
      },
      h2: {
        fontSize: '2.5rem',
        fontWeight: 600,
      },
      h3: {
        fontSize: '2rem',
        fontWeight: 600,
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: 600,
      },
      h5: {
        fontSize: '1.25rem',
        fontWeight: 600,
      },
      h6: {
        fontSize: '1rem',
        fontWeight: 600,
      },
    },
    shape: {
      borderRadius: 8,
    },
    shadows: [
      'none',
      '0px 2px 6px rgba(47, 43, 61, 0.14)',
      '0px 4px 8px rgba(47, 43, 61, 0.14)',
      '0px 6px 12px rgba(47, 43, 61, 0.14)',
      '0px 8px 16px rgba(47, 43, 61, 0.14)',
      '0px 10px 20px rgba(47, 43, 61, 0.14)',
      ...Array(19).fill('0px 12px 24px rgba(47, 43, 61, 0.14)'),
    ],
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 500,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
    },
  });
};
