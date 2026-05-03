import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { resolveGlobalColor } from '../theme';
import { resolveUrl } from '../utils';

const getResponsiveValue = (value, mobileValue, unit = 'px') => {
  if (!value && !mobileValue) return null;
  return css`
    ${value && `${value}${unit}`};
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      ${mobileValue ? `${mobileValue}${unit}` : value ? `${value}${unit}` : ''};
    }
  `;
};

export const Container = styled.div`
  display: flex;
  position: relative;
  width: ${props => props.settings?.width?.size ? `${props.settings.width.size}%` : '100%'};
  flex-direction: ${props => props.settings?.flex_direction || 'column'};
  justify-content: ${props => props.settings?.flex_justify_content || 'flex-start'};
  align-items: ${props => props.settings?.flex_align_items || 'stretch'};
  
  gap: ${props => props.settings?.flex_gap?.size ? `${props.settings.flex_gap.size}px` : '0px'};

  padding-top: ${props => props.settings?.padding?.top || 0}px;
  padding-right: ${props => props.settings?.padding?.right || 0}px;
  padding-bottom: ${props => props.settings?.padding?.bottom || 0}px;
  padding-left: ${props => props.settings?.padding?.left || 0}px;

  background-color: ${props => {
    const globalBg = props.settings?.__globals__?.background_color;
    if (globalBg) return resolveGlobalColor(globalBg);
    return props.settings?.background_color || 'transparent';
  }};

  ${props => props.settings?.background_background === 'classic' && props.settings?.background_image?.url && css`
    background-image: url(${resolveUrl(props.settings.background_image.url)});
    background-size: cover;
    background-position: center;
  `}

  min-height: ${props => props.settings?.min_height?.size ? `${props.settings.min_height.size}${props.settings.min_height.unit}` : 'auto'};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: ${props => props.settings?.flex_direction_mobile || props.settings?.flex_direction || 'column'};
    padding-top: ${props => props.settings?.padding_mobile?.top || props.settings?.padding?.top || 0}px;
    padding-right: ${props => props.settings?.padding_mobile?.right || props.settings?.padding?.right || 0}px;
    padding-bottom: ${props => props.settings?.padding_mobile?.bottom || props.settings?.padding?.bottom || 0}px;
    padding-left: ${props => props.settings?.padding_mobile?.left || props.settings?.padding?.left || 0}px;
    min-height: ${props => props.settings?.min_height_mobile?.size ? `${props.settings.min_height_mobile.size}${props.settings.min_height_mobile.unit}` : 'auto'};
  }
`;

export const Heading = styled.h2`
  font-family: ${props => props.styles?.family || props.theme.typography.h1.family};
  font-size: ${props => props.styles?.desktop || '2rem'};
  font-weight: ${props => props.styles?.weight || 500};
  color: ${props => {
    const globalColor = props.settings?.__globals__?.title_color;
    if (globalColor) return resolveGlobalColor(globalColor);
    return props.settings?.title_color || props.theme.colors.text;
  }};
  text-align: ${props => props.settings?.align || 'left'};
  margin-top: ${props => props.settings?._margin?.top || 0}px;
  margin-bottom: ${props => props.settings?._margin?.bottom || 0}px;

  ${props => props.settings?.text_shadow_text_shadow_type === 'yes' && css`
    text-shadow: ${props.settings.text_shadow_text_shadow.horizontal}px 
                 ${props.settings.text_shadow_text_shadow.vertical}px 
                 ${props.settings.text_shadow_text_shadow.blur}px 
                 ${props.settings.text_shadow_text_shadow.color};
  `}

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.styles?.mobile || props.styles?.desktop || '1.5rem'};
    text-align: ${props => props.settings?.align_mobile || props.settings?.align || 'left'};
  }
`;

export const Button = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.settings?.text_padding?.top || 12}px ${props => props.settings?.text_padding?.right || 24}px ${props => props.settings?.text_padding?.bottom || 12}px ${props => props.settings?.text_padding?.left || 24}px;
  background-color: ${props => {
    const globalBg = props.settings?.__globals__?.background_color;
    if (globalBg) return resolveGlobalColor(globalBg);
    return props.settings?.background_color || props.theme.colors.primary;
  }};
  color: ${props => {
    const globalColor = props.settings?.__globals__?.button_text_color;
    if (globalColor) return resolveGlobalColor(globalColor);
    return props.settings?.button_text_color || props.theme.colors.white;
  }};
  border-radius: ${props => props.settings?.border_radius?.top || 0}px;
  font-family: ${props => props.styles?.family || props.theme.typography.system.family};
  font-size: ${props => props.styles?.desktop || '1rem'};
  font-weight: ${props => props.styles?.weight || 500};
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: ${props => props.settings?.hover_color || 'transparent'};
    color: ${props => props.settings?.hover_text_color || props.theme.colors.white};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.styles?.mobile || props.styles?.desktop || '1rem'};
    width: ${props => props.settings?.align_mobile === 'center' ? 'auto' : '100%'};
  }
`;

export const Image = styled.img`
  width: ${props => props.settings?.width?.size ? `${props.settings.width.size}%` : 'auto'};
  height: ${props => props.settings?.height?.size ? `${props.settings.height.size}px` : 'auto'};
  max-width: 100%;
  object-fit: ${props => props.settings?.['object-fit'] || 'cover'};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    height: ${props => props.settings?.height_mobile?.size ? `${props.settings.height_mobile.size}px` : props.settings?.height?.size ? `${props.settings.height.size}px` : 'auto'};
  }
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

export const Divider = styled.div`
  width: ${props => props.settings?.width?.size ? `${props.settings.width.size}%` : '100%'};
  height: ${props => props.settings?.weight?.size || 1}px;
  background-color: ${props => resolveGlobalColor(props.settings?.__globals__?.color) || props.settings?.color || props.theme.colors.lightGray};
  margin: ${props => props.settings?.gap?.size || 10}px 0;
  align-self: ${props => props.settings?.align || 'center'};
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: ${props => props.settings?.item_gap?.size || 10}px;
  justify-content: ${props => props.settings?.align || 'center'};
  
  a {
    font-size: ${props => props.settings?.icon_size?.size || 20}px;
    color: ${props => resolveGlobalColor(props.settings?.__globals__?.icon_color) || props.settings?.icon_color || props.theme.colors.white};
    transition: transform 0.2s ease;
    
    &:hover {
      transform: scale(1.1);
    }
  }
`;
