import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';

import './styles/index.css';

const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      //main: '#2a3b8f',
      main: '#1554D5',
    },
    secondary: {
      //main: '#0b0c0e',
      main: '#101828',
    },
    text: {
      // primary: '#2a3b8f',
      secondary: '#6B7280',
    },
    background: {
      paper: '#FFFFFF',
      default: '#f1f5f9',
      // default: '#f3f3f8',
    },
    icon: {
      main: '#2e3a91',
    },
    info: {
      main: '#1554D5',
    },
  },
  option: {
    // Hover
    '&[data-focus="true"]': {
      backgroundColor: '#ffffff',
      borderColor: 'transparent',
    },
    // Selected
    '&[aria-selected="true"]': {
      backgroundColor: '#ffffff',
      borderColor: 'transparent',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
