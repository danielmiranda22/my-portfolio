import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
};

const theme = extendTheme({
  config,
  fonts: {
    // Use system fonts like robod.dev
    heading: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif`,
    body: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif`,
    mono: `'Fira Code', monospace`, // Keep mono for code
  },
  colors: {
    brand: {
      50: '#e6f7f7',
      100: '#b3e6e6',
      200: '#80d5d5',
      300: '#4dc4c4',
      400: '#1ab3b3',
      500: '#008080', // main teal
      600: '#006666',
      700: '#004d4d',
      800: '#003333',
      900: '#001a1a',
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'white',
        color: props.colorMode === 'dark' ? 'gray.100' : 'gray.900',
        fontSize: '16px',
        lineHeight: '1.7',
      },
      'h1, h2, h3, h4, h5, h6': {
        letterSpacing: '-0.02em',
        fontWeight: 600,
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 500,
      },
    },
    Container: {
      baseStyle: {
        maxW: '3xl',
      },
    },
  },
});

export default theme;
