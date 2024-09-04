import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Geist Mono'`,
    body: `'Geist Mono'`,
  },
});

export default theme;
