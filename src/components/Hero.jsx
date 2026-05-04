import React from 'react';
import { Container, Heading, Button, VideoBackground, OptimizedImage } from './StyledElements';

import { useIsMobile } from '../hooks/useIsMobile';

const Hero = () => {
  const isMobile = useIsMobile();

  const [loadVideo, setLoadVideo] = React.useState(false);

  React.useEffect(() => {
    // Pequeno atraso para priorizar o carregamento do conteúdo crítico (LCP)
    const timer = setTimeout(() => {
      setLoadVideo(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const videoSrc = isMobile ? '1080x1080.mp4' : '1920x1080.mp4';

  return (
    <Container
      id="know-how"
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        padding: isMobile ? '0 20px 80px 20px' : '100px 0 120px 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <VideoBackground 
        key={videoSrc} 
        autoPlay 
        muted 
        loop 
        playsInline 
        preload="none"
        poster={isMobile ? "FLYER.webp" : "CH8.webp"} // Usando imagens existentes como placeholder
      >
        {loadVideo && <source src={videoSrc} type="video/mp4" />}
      </VideoBackground>

      {/* Logo Hero */}
      <OptimizedImage
        src='cropped-logo-wase.webp'
        loading="eager"
        fetchPriority="high"
        style={{ width: '200px', zIndex: 1 }}
      />

      <Container style={{
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px',
        zIndex: 1
      }}>
        <Heading
          as="h1"
          style={{
            textAlign: 'center',
            color: '#FFFFFF',
            textShadow: '0 0 10px rgba(0,0,0,0.9)',
            maxWidth: '900px'
          }}
        >
          Transformamos seu evento em uma experiência visual inesquecível
        </Heading>

        <Heading
          as="p"
          style={{
            textAlign: 'center',
            color: '#FFFFFF',
            textShadow: '0 0 10px rgba(0,0,0,0.82)',
            maxWidth: '520px'
          }}
        >
          Filmagem, fotografia, edição, identidade visual, motion design e mais.
        </Heading>

        <Button
          href="https://api.whatsapp.com/send?phone=553194349157&text=Olá! Gostaria de saber mais detalhes sobre os serviços da WASE"
          target="_blank"
          style={{
            backgroundColor: '#FF6100',
            color: '#FFFFFF',
            borderRadius: '40px',
            padding: '20px 80px',
            fontWeight: '500'
          }}
        >
          Entrar em Contato
        </Button>
      </Container>
    </Container>
  );
};

export default Hero;
