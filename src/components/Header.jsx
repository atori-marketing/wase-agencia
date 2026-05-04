import React from 'react';
import { Container, OptimizedImage, Button } from './StyledElements';

import { useIsMobile } from '../hooks/useIsMobile';

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <Container 
      style={{ 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: '80px',
        backgroundColor: '#000000',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        padding: isMobile ? '0 15px' : '0 100px'
      }}
    >
      {/* Logo Container */}
      <Container style={{ width: 'auto' }}>
        <OptimizedImage 
          src='WASE_BRANCA.webp'
          loading="eager"
          fetchPriority="high"
          style={{ height: isMobile ? '60px' : '100px', objectFit: 'contain' }}
        />
      </Container>

      {/* Button Container */}
      <Container style={{ 
        width: 'auto', 
        flexDirection: 'row', 
        justifyContent: 'flex-end'
      }}>
        <Button 
          href="https://api.whatsapp.com/send?phone=553194349157&text=Olá! Gostaria de saber mais detalhes sobre os serviços da WASE"
          target="_blank"
          style={{
            backgroundColor: '#03A688',
            color: '#FFFFFF',
            borderRadius: '40px',
            padding: isMobile ? '8px 20px' : '10px 30px',
            fontSize: isMobile ? '0.9rem' : '1rem',
            fontWeight: '500'
          }}
        >
          Fale conosco
        </Button>
      </Container>
    </Container>
  );
};

export default Header;
