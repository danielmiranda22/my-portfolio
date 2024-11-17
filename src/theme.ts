import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'IBM Plex Mono', monospace`,
    body: `'IBM Plex Mono', monospace`,
  },
  colors: {
    gray: {
      50: '#f0f1f4',
      100: '#d3d5d9',
      200: '#b7b9c1',
      300: '#9a9dab',
      400: '#7d8094',
      500: '#63657a',
      600: '#4e4f5f',
      700: '#383843',
      800: '#212128',
      900: '#0b0b0f',
    },
  },
  lineHeights: {
    normal: '1.50',
    relaxed: '1.75',
    custom: '1.75', // Add any custom values you'd like
  },
  styles: {
    global: {
      'html, body': {
        lineHeight: 'relaxed', // This will apply globally to all text inheriting from the body
      },
    },
  },
});

export default theme;
