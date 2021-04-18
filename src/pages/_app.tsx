import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { lightTheme, darkTheme } from '../styles/theme';
import { ThemeProvider, useTheme } from '../hooks/useTheme';

import 'swiper/swiper-bundle.css';

function AppProvider({ Component, pageProps }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <ChakraProvider
      theme={ isDark ? darkTheme : lightTheme }
    >
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <AppProvider Component={Component} pageProps={pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
