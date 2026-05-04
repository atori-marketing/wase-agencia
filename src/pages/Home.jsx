import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { GlobalStyles } from '../GlobalStyles';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Brands from '../components/Brands';
import CTA from '../components/CTA';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Cobertura from '../components/Cobertura';
import Footer from '../components/Footer';

const PageWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PageWrapper>
        <Header />
        <Hero />
        <Brands />
        <CTA />
        <Portfolio />
        <Services />
        <Cobertura />
        <Footer />
      </PageWrapper>
    </ThemeProvider>
  );
};

export default Home;
