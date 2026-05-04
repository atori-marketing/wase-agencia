import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

// Componentes básicos mais flexíveis que priorizam o objeto style do React
// mas mantêm suporte a breakpoints via props simples quando necessário

export const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'column'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'stretch'};
  gap: ${props => props.gap || '0px'};
  width: ${props => props.width || '100%'};
  position: relative;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: ${props => props.flexDirectionMobile || props.flexDirection || 'column'};
    padding: ${props => props.paddingMobile};
  }
`;

export const Heading = styled.h2`
  margin: 0;
  text-align: ${props => props.align || 'left'};
  color: ${props => props.color || props.theme.colors.text};
  font-family: ${props => props.fontFamily || props.theme.typography.h1.family};
  
  /* Centralização do tamanho das fontes baseada no tema e na tag (h1, h2, etc) */
  font-size: ${props => {
    const tag = props.as || 'h2';
    return props.fontSize || props.theme.typography[tag]?.desktop || props.theme.typography.h2.desktop;
  }};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    text-align: ${props => props.alignMobile || props.align || 'left'};
    font-size: ${props => {
      const tag = props.as || 'h2';
      return props.fontSizeMobile || props.theme.typography[tag]?.mobile || props.theme.typography.h2.mobile;
    }};
  }
`;

export const Text = styled.div`
  line-height: 1.6;
  text-align: ${props => props.align || 'left'};
  color: ${props => props.color || props.theme.colors.text};
  font-family: ${props => props.fontFamily || props.theme.typography.system.family};
  
  font-size: ${props => props.fontSize || props.theme.typography.span.desktop};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.fontSizeMobile || props.theme.typography.span.mobile};
  }
`;

export const Button = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  font-family: inherit;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

export const OptimizedImage = styled.img.attrs(props => ({
  loading: props.loading || 'lazy',
  decoding: props.decoding || 'async',
  fetchPriority: props.fetchPriority
}))`
  max-width: 100%;
  height: auto;
  object-fit: ${props => props.objectFit || 'cover'};
`;

export const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;
