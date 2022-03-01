import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route } from "react-router-dom";

import Home from './views/pages/home';
import SignIn from './views/pages/signIn';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        // TODO Global Style here
      `,
      //theme color custom setting
      // palette: {
      //   primary: {
      //     light: '#757ce8',
      //     main: '#3f50b5',
      //     dark: '#002884',
      //     contrastText: '#fff',
      //   },
      //   secondary: {
      //     light: '#ff7961',
      //     main: '#f44336',
      //     dark: '#ba000d',
      //     contrastText: '#000',
      //   },
      // },
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
      </React.Fragment>
    </ThemeProvider>
  );
}