import React from 'react';
import styled from 'styled-components';
import { Container, Heading, OptimizedImage } from './StyledElements';
import { useIsMobile } from '../hooks/useIsMobile';

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
    padding: 0 20px;
    width: auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Cobertura = () => {
  const isMobile = useIsMobile();

  // Imagens extraídas do site_data.json e outras referências do projeto
  const portfolioImages = [
    'IMG_9085.webp',
    'IMG_1710.webp',
    'IMG_1432.webp',
  ];

  return (
    <Container 
      id="cobertura"
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        padding: isMobile ? '50px 0' : '100px 0',
        backgroundColor: '#000000'
      }}
    >
      <Heading 
        as="h2" 
        style={{ 
          textAlign: 'center', 
          color: '#FFFFFF',
          marginBottom: '50px'
        }}
      >
        Cobertura de eventos
      </Heading>

      <Grid>
        {portfolioImages.map((img, index) => (
          <OptimizedImage 
            key={index}
            src={img}
            style={{
              width: '100%',
              aspectRatio: '1/1',
              objectFit: 'cover',
              borderRadius: '5px'
            }}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Cobertura;
