import React from 'react';
import styled from 'styled-components';
import { Container, OptimizedImage, Text } from './StyledElements';
import { useIsMobile } from '../hooks/useIsMobile';
import { motion } from 'framer-motion';

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #000000;
  color: #FFFFFF;
  padding: 60px 0 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 40px 40px 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 30px;
    padding: 0 20px 40px 20px;
  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Slogan = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
`;

const IconLink = styled(motion.a)`
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 0.3s ease;
  font-size: 28px;
  
  &:hover {
    color: #FF6100;
  }
`;

const Copyright = styled.div`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.4);
  padding-top: 30px;
  text-align: center;
  width: 100%;
  max-width: 1200px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 20px;
`;

const Footer = () => {
  const isMobile = useIsMobile();
  const year = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterTop>
        <LogoSection>
          <OptimizedImage 
            src="WASE_BRANCA.webp" 
            style={{ height: '80px', width: 'auto', objectFit: 'contain' }} 
          />
          <Slogan>Transformando visões em experiências inesquecíveis.</Slogan>
        </LogoSection>

        <SocialIcons>
          {/* Instagram Icon */}
          <IconLink 
            href="https://www.instagram.com/wase_ag/" 
            target="_blank"
            whileHover={{ scale: 1.1 }}
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </IconLink>

          {/* Behance Icon */}
          <IconLink 
            href="https://www.behance.net/wasedg" 
            target="_blank"
            whileHover={{ scale: 1.1 }}
            aria-label="Behance"
          >
            <i className="fab fa-behance"></i>
          </IconLink>
        </SocialIcons>
      </FooterTop>

      <Copyright>
        © {year} Wase Agência. Todos os direitos reservados.
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;
