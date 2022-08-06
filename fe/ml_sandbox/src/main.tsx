import React from 'react';
import { indigo } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom/client';
import App from './App';

const theme = createTheme({
  palette: {
    primary: {
      main: '#14213e',
    },
    secondary: {
      main: indigo[400],
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
