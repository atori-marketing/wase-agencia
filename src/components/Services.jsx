import React from 'react';
import { Container, Heading, Text, OptimizedImage, Button } from './StyledElements';

const Services = () => {
  const serviceCards = [
    {
      title: "Filmagem",
      desc: "Cobertura cinematográfica para eventos sociais, corporativos e videoclipes com equipamentos de última geração.",
      icon: 'play.webp'
    },
    {
      title: "Fotografia",
      desc: "Capturamos cada momento com sensibilidade e técnica, garantindo recordações que duram para sempre.",
      icon: 'cronometro.webp'
    },
    {
      title: "Edição de Vídeo",
      desc: "Montagem dinâmica, correção de cor e sonorização profissional para transformar seu bruto em uma obra-prima.",
      icon: 'drone.webp'
    },
    {
      title: "Motion Design",
      desc: "Criação de identidades visuais animadas, intros e efeitos visuais para destacar seu conteúdo.",
      icon: 'play.webp'
    }
  ];

  return (
    <Container 
      id="servicos"
      style={{
        flexDirection: 'column',
        padding: '100px 20px',
        backgroundColor: '#6E04D1', // globals/colors?id=f3330ba
        alignItems: 'center',
        gap: '40px'
      }}
    >
      <Heading 
        as="h2"
        style={{ 
          textAlign: 'center', 
          color: '#FFFFFF',
          fontSize: '3rem',
          marginBottom: '20px'
        }}
      >
        Serviços
      </Heading>

      <Text 
        style={{
          textAlign: 'center',
          color: '#FFFFFF',
          fontSize: '1rem',
          maxWidth: '900px',
          margin: '0 auto',
          lineHeight: '1.8'
        }}
      >
        <p style={{ marginBottom: '20px' }}>Na nossa produção, entregamos soluções completas para eventos e campanhas, cuidando desde a <b>identidade visual </b>até a <b>experiência audiovisual</b>. Nosso trabalho é pensado para gerar impacto, inovação e conexão com o público, utilizando diferentes recursos criativos e tecnológicos.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
          <span>✔︎ Criação de Identidade Visual para Eventos</span>
          <span>✔︎ Desenvolvimento de Criativos (Estáticos e Motion)</span>
          <span>✔︎ Cobertura Audiovisual</span>
          <span>✔︎ Captação com Drone Convencional e FPV</span>
          <span>✔︎ Telões Animados</span>
        </div>
        <p style={{ marginTop: '20px' }}><b>Clique no botão abaixo e fale conosco agora mesmo!</b></p>
      </Text>

      {/* Cards Grid */}
      <Container style={{ 
        flexDirection: 'row', 
        justifyContent: 'center', 
        flexWrap: 'wrap',
        gap: '30px',
        marginTop: '40px'
      }}>
        {serviceCards.map((card, index) => (
          <Container 
            key={index}
            style={{
              width: '40%',
              minWidth: '300px',
              minHeight: '270px',
              backgroundColor: '#393939', // globals/colors?id=6e8884f
              borderRadius: '30px',
              padding: '30px',
              justifyContent: 'space-between'
            }}
          >
            {/* Icon Container */}
            <Container style={{ 
              width: '60px', 
              height: '60px', 
              backgroundColor: '#FFFFFF', 
              borderRadius: '15px',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '20px'
            }}>
              <OptimizedImage src={card.icon} style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
            </Container>

            <Container style={{ gap: '10px' }}>
              <Heading as="h3" style={{ color: '#FFFFFF', fontSize: '1.4rem' }}>
                {card.title}
              </Heading>
              <Text style={{ color: '#FFFFFF', fontSize: '1rem' }}>
                {card.desc}
              </Text>
            </Container>
          </Container>
        ))}
      </Container>

      {/* WhatsApp Action Button */}
      <Button 
        href="https://api.whatsapp.com/send?phone=553194349157&text=Olá! Gostaria de saber mais detalhes sobre os serviços da WASE"
        target="_blank"
        style={{
          backgroundColor: '#FF6100',
          color: '#FFFFFF',
          borderRadius: '40px',
          padding: '20px 80px',
          fontWeight: '600',
          marginTop: '40px'
        }}
      >
        Entrar em contato
      </Button>
    </Container>
  );
};

export default Services;
