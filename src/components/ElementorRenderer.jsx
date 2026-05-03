import React from 'react';
import * as S from './StyledElements';
import { resolveGlobalTypography } from '../theme';
import { resolveUrl } from '../utils';

const ElementorRenderer = ({ elements }) => {
  if (!elements || !Array.isArray(elements)) return null;

  return elements.map((element) => {
    const { id, elType, settings, elements: childElements, widgetType } = element;

    if (elType === 'container') {
      return (
        <S.Container key={id} settings={settings}>
          {settings?.background_background === 'video' && settings?.background_video_link && (
            <S.VideoBackground autoPlay muted loop playsInline>
              <source src={resolveUrl(settings.background_video_link)} type="video/mp4" />
            </S.VideoBackground>
          )}
          <ElementorRenderer elements={childElements} />
        </S.Container>
      );
    }

    if (elType === 'widget') {
      const typographyId = settings?.__globals__?.typography_typography;
      const typographyStyles = typographyId ? resolveGlobalTypography(typographyId) : null;

      switch (widgetType) {
        case 'heading':
          return (
            <S.Heading 
              key={id} 
              settings={settings} 
              styles={typographyStyles}
              as={settings.header_size === 'p' ? 'p' : settings.header_size || 'h2'}
              dangerouslySetInnerHTML={{ __html: settings.title }}
            />
          );
        
        case 'image':
          return (
            <S.Image 
              key={id} 
              src={resolveUrl(settings.image?.url)} 
              alt={settings.image?.alt || ''} 
              settings={settings}
            />
          );

        case 'button':
          return (
            <S.Button 
              key={id} 
              href={settings.link?.url} 
              target={settings.link?.is_external ? '_blank' : '_self'}
              settings={settings}
              styles={typographyStyles}
              whileHover={{ scale: settings.hover_animation === 'grow' ? 1.05 : 1 }}
            >
              {settings.text}
            </S.Button>
          );

        case 'text-editor':
          return (
            <div 
              key={id} 
              className="elementor-text-editor"
              dangerouslySetInnerHTML={{ __html: settings.editor }}
            />
          );

        case 'divider':
          return <S.Divider key={id} settings={settings} />;

        case 'social-icons':
          return (
            <S.SocialIcons key={id} settings={settings}>
              {settings.social_icon_list?.map((item, idx) => (
                <a key={idx} href={item.link?.url} target="_blank" rel="noopener noreferrer">
                  <i className={item.social_icon?.value}></i>
                </a>
              ))}
            </S.SocialIcons>
          );

        case 'html':
          return (
            <div 
              key={id} 
              dangerouslySetInnerHTML={{ __html: settings.html }} 
            />
          );

        case 'image-carousel':
          return (
            <div key={id} className="carousel-placeholder">
              {settings.carousel?.map((item, idx) => (
                <img key={idx} src={resolveUrl(item.url)} alt="" style={{ width: '100px' }} />
              ))}
            </div>
          );

        default:
          return <div key={id}>Widget: {widgetType}</div>;
      }
    }

    return null;
  });
};

export default ElementorRenderer;
