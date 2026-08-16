import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Box, Typography, Container, type SxProps } from '@mui/material';

// servicesStyle obligatorios de Swiper
import 'swiper/css';
import 'swiper/css/effect-fade';
import type { Theme } from '@emotion/react';
import SelectorServicios from './verticalSlider';

// Componente interno para el carrusel de fondo pasivo
const MainHero: React.FC = () => {
  const images: string[] = [
    '/services/slider1.jpg',
    '/services/slider2.jpg',
    '/services/slider3.jpg'
  ];

  return (
    <Box sx={servicesStyle.mainContainer}>
      <Box sx={servicesStyle.wrapperSwiper}>
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect='fade'
          fadeEffect={{ crossFade: true }}
          loop={true}
          allowTouchMove={false}
          simulateTouch={false}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={1500}
          style={{ width: '100%', height: '600px' }}
        >
          {images.map((ruta, indice) => (
            <SwiperSlide key={indice}>
              <Box
                sx={{
                  ...servicesStyle.slideImage,
                  backgroundImage: `url(${ruta})`,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <Box sx={servicesStyle.darkLayout} />

      <Container maxWidth="xl" sx={servicesStyle.textContainer}>
        <Typography 
         variant="h6"
          component="span" 
          sx={servicesStyle.mainSubtitle}
        >
          Encontra lo que necesitas
        </Typography>
        
        <Typography 
          variant="h2" 
          sx={servicesStyle.tituloPrincipal}
        >
          Nuestros Servicios
        </Typography>
        
        <Typography 
          variant="body1" 
          sx={servicesStyle.description}
        >
          Consultoría especializada en ingeniería fiscal. Estructuramos proyectos desde su dimensión impositiva, articulando aspectos laborales, fiduciarios y financieros.
        </Typography>
      </Container>
    </Box>
  );
};

// Componente principal exportado
export default function Services() {
  return (
    <>
      <MainHero />
      <SelectorServicios/>
    </>
  );
}

const servicesStyle: Record<string, SxProps<Theme>> = {

  mainContainer: {
    position: 'relative',
    width: '100%',
    height: '550px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    color: '#ffffff',
  },
  wrapperSwiper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  slideImage: {
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  darkLayout: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(58, 58, 58, 0.4)', 
    zIndex: 2,
    pointerEvents: 'none',
  },
  textContainer: {
    position: 'relative',
    zIndex: 3,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  mainSubtitle: {
    color:"#4fc3f7",
    letterSpacing: '2px',
    fontWeight: 700,
    textShadow: '0px 4px 10px rgba(0,0,0,0.4)',
  },
  tituloPrincipal: {
    color:"var(--secondary)",
    fontFamily:"Galano Grotesque",
    textShadow: '0px 4px 10px rgba(0,0,0,0.6)',
  },
  description: {
    lineHeight: 1.7,
    maxWidth: '720px',
    margin: '0 auto',
    color: 'white',
    textShadow: '0px 4px 10px rgba(0,0,0,0.4)',
  }
};