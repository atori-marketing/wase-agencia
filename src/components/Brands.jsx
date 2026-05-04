import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Container, Heading, OptimizedImage } from './StyledElements';
import { useIsMobile } from '../hooks/useIsMobile';

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const MarqueeWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  background: transparent;
  padding: 40px 0;
`;

const MarqueeTrack = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} 20s linear infinite;
`;

const BrandLogo = styled.div`
  width: 250px;
  margin: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 180px;
    margin: 0 30px;
  }
`;

const StyledBrandImage = styled(OptimizedImage)`
  filter: grayscale(1) brightness(2);
  opacity: 0.8;
  transition: all 0.3s ease;
  height: 80px;
  object-fit: contain;

  &:hover {
    filter: grayscale(0) brightness(1);
    opacity: 1;
  }

  @media (max-width: 768px) {
    height: 60px;
  }
`;

const Brands = () => {
  const isMobile = useIsMobile();
  
  const logos = [
    'LOGO-ZERO31PRODUTORA.webp',
    'LOGO-ULTIMOBAILEDOANO.webp',
    'LOGO-GULLA.webp',
    'LOGO-CHEFAO.webp',
    'LOGO-BAILEDAARENA.webp',
    'LOGO_MULTFLUXO.webp'
  ];

  // Duplicamos a lista para criar o efeito infinito suave
  const doubleLogos = [...logos, ...logos];

  return (
    <Container 
      style={{ 
        backgroundColor: '#000000', 
        padding: isMobile ? '40px 0 10px 0' : '80px 0 20px 0' 
      }}
    >
      <Heading 
        as="h2" 
        style={{ 
          textAlign: 'center', 
          color: '#FFFFFF', 
          marginBottom: isMobile ? '30px' : '50px',
          padding: '0 20px' // Afasta das bordas
        }}
      >
        Marcas e Eventos que confiam
      </Heading>

      <MarqueeWrapper style={{ padding: '20px 0' }}>
        <MarqueeTrack>
          {doubleLogos.map((logo, index) => (
            <BrandLogo key={index}>
              <StyledBrandImage src={logo} alt={`Brand ${index}`} />
            </BrandLogo>
          ))}
        </MarqueeTrack>
      </MarqueeWrapper>
    </Container>
  );
};

export default Brands;
