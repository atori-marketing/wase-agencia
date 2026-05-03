import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { theme } from './theme';
import { GlobalStyles } from './GlobalStyles';
import ElementorRenderer from './components/ElementorRenderer';
import siteData from '../site_data.json';

function Home() {
  const homeData = siteData.home.data;
  return <ElementorRenderer elements={homeData} />;
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
