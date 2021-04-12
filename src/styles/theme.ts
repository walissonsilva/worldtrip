import { extendTheme } from '@chakra-ui/react';

export const lightTheme = extendTheme({
  colors: {
    "text-color": "#F5F8FA",
    "info": "#DADADA",
    "infoAlpha": "rgba(153, 153, 153, 0.5)",
    "highlight": "#FFBA08",
    "highlightAlpha": "rgba(255, 186, 8, 0.5)",
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'text-color',
      }
    }
  }
})

export const darkTheme = extendTheme({
  colors: {
    "text-color": "#47585B",
    "info": "#999999",
    "infoAlpha": "rgba(153, 153, 153, 0.5)",
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'text-color',
      }
    }
  }
})