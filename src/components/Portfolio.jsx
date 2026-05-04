import React from 'react';
import styled from 'styled-components';
import { Container, Heading, OptimizedImage } from './StyledElements';
import { useIsMobile } from '../hooks/useIsMobile';
import { motion } from 'framer-motion';

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const PortfolioImage = styled(OptimizedImage)`
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const Portfolio = () => {
  const isMobile = useIsMobile();

  const images = [
    'FRXV-CH68.webp',
    'FRXV-CH54.webp',
    'FLYER-RET.webp',
    'FLYER.webp',
    'flyer_edt.webp',
    'CH8.webp',
    'NUME-0003.webp',
    'BDA-62.webp',
    'BDA-43.webp'
  ];

  return (
    <Container 
      id="portfolio"
      style={{ 
        backgroundColor: '#171717', 
        flexDirection: 'column',
        alignItems: 'center',
        padding: isMobile ? '60px 0' : '100px 0',
        gap: '40px'
      }}
    >
      {/* Logo Símbolo Laranja com Animação */}
      <OptimizedImage 
        as={motion.img}
        src="SL-WASE-LARANJA.webp"
        alt="Wase Logo"
        initial={{ rotate: -180, opacity: 0 }}
        whileInView={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{ 
          width: isMobile ? '250px' : '900px',
          maxWidth: '90%',
          aspectRatio: '1/1' // Logo is usually square or specific ratio
        }}
      />

      <Heading 
        as="h2" 
        style={{ 
          textAlign: 'center', 
          color: '#FFFFFF',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: '1.2',
          padding: '0 20px'
        }}
      >
        Transformamos o seu evento em uma experiência visual inesquecível
      </Heading>

      <PortfolioGrid>
        {images.map((img, index) => (
          <PortfolioImage 
            key={index} 
            src={img} 
            alt={`Portfolio ${index}`}
            loading="lazy"
          />
        ))}
      </PortfolioGrid>
    </Container>
  );
};

export default Portfolio;
