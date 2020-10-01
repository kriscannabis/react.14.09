import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import RootRouter from '../../pages/RootRouter/RootRouter';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#001285',
    },
    secondary: {
      main: '#ff9900',
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RootRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
