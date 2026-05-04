import React from 'react';
import { Container, Heading, Button } from './StyledElements';
import { useIsMobile } from '../hooks/useIsMobile';

const CTA = () => {
  const isMobile = useIsMobile();

  return (
    <Container 
      id="contato"
      style={{ 
        backgroundColor: '#000000', 
        padding: isMobile ? '0px 20px 40px 20px' : '20px 0 60px 0',
        alignItems: 'center',
        gap: '20px'
      }}
    >
      <Heading 
        as="h3" 
        style={{ 
          textAlign: 'center', 
          color: '#FF6100', // globals/colors?id=a90cfd4
          fontSize: isMobile ? '1.2rem' : '1.5rem',
          fontWeight: '500'
        }}
      >
        Clique no botão abaixo e entre em contato conosco:
      </Heading>

      <Button 
        href="https://api.whatsapp.com/send?phone=553194349157&text=Olá! Gostaria de saber mais detalhes sobre os serviços da WASE"
        target="_blank"
        style={{
          backgroundColor: '#FF6100',
          color: '#FFFFFF',
          borderRadius: '40px',
          padding: isMobile ? '15px 40px' : '20px 80px',
          fontSize: isMobile ? '1.1rem' : '1.2rem',
          fontWeight: '600',
          boxShadow: '0 4px 15px rgba(255, 97, 0, 0.3)'
        }}
      >
        Entrar em contato
      </Button>
    </Container>
  );
};

export default CTA;
