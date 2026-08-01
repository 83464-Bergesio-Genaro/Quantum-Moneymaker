import { Box, Container, Typography, Button, Grid, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import { appConfig } from '../../config/appConfig';
import { keyframes } from "@emotion/react";
import SolarSystem from './solarSystem';


export default function SharedMain(){
    return(
        <>
            <HomeHero2/>
            <HomeHero/>
        </>
        
    );
}
const planets = [
  {
    text: "¿Mis proyectos son viables?",
    radius: 140,
    duration: 18,
    angle: 180,
  },
  {
    text: "¿Cómo regularizo mis deudas?",
    radius: 220,
    duration: 30,
    angle: 0,
  },
  {
    text: "¿Estoy pagando mis impuestos?",
    radius: 220,
    duration: 26,
    angle: 300,
  },
  {
    text: "¿Estoy logrando mis metas?",
    radius: 300,
    duration: 40,
    angle: 180,
  },
];
const orbit = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }`;

 function HomeHero2(){

    return(
        <SolarSystem logo={`${appConfig.appURL}/identidadBase/isotipoBase.png`} />
    );
 }

 function HomeHero() {
  const baseUrl = "/"; // Ajusta según tu configuración

  return (
    <Box 
      sx={{ 
        backgroundColor: '#0a192f', // Azul marino premium/tecnológico
        color: '#ffffff',
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 12 },
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Grid spacing={4} alignItems="center">
          
          {/* Columna de Textos */}
          <Grid xs={12} md={7}>
            <Stack spacing={3}>
              
              {/* H1: Título Principal */}
              <Typography 
                component="h1" 
                variant="h2" 
                sx={{ 
                  fontWeight: 800, 
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                  lineHeight: 1.2,
                  background: 'linear-gradient(45deg, #ffffff 30%, #90caf9 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Ingeniería fiscal aplicada a proyectos reales.
              </Typography>

              {/* H2: Subtítulo */}
              <Typography 
                component="h2" 
                variant="h5" 
                sx={{ 
                  color: '#90caf9', // Color de acento sutil
                  fontWeight: 500,
                  fontSize: { xs: '1.2rem', md: '1.5rem' }
                }}
              >
                Orden, proyección y estrategia para empresas que crecen.
              </Typography>

              {/* Texto Principal */}
              <Stack spacing={2} sx={{ color: '#b0bec5', maxWidth: '600px' }}>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
                  Brindamos servicios a empresas y profesionales que buscan ordenar su estructura, 
                  proyectar su crecimiento y tomar decisiones considerando el contexto económico, 
                  político y regulatorio.
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
                  Sin limitarnos a un sector específico, diseñamos soluciones fiscales, fiduciarias 
                  y financieras adaptadas a las necesidades de cada organización.
                </Typography>
              </Stack>

              {/* Frase de Cierre y Call To Action */}
              <Stack spacing={2} sx={{ pt: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#e3f2fd' }}>
                  ¿Tu negocio crece pero los impuestos también crecen sin control?
                </Typography>
                
                <Box>
                  <Button 
                    component={Link}
                    to="/diagnostico"
                    variant="contained" 
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ 
                      backgroundColor: '#2196f3',
                      textTransform: 'none',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      px: 4,
                      py: 1.5,
                      borderRadius: '8px',
                      '&:hover': {
                        backgroundColor: '#1976d2',
                      }
                    }}
                  >
                    Quiero mi diagnóstico
                  </Button>
                </Box>
              </Stack>

            </Stack>
          </Grid>

          {/* Columna Derecha: Elemento Gráfico (Opcional pero recomendado) */}
          <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box 
              sx={{ 
                display: 'flex', 
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative'
              }}
            >
              {/* Un contenedor abstracto que simula orden y estructura */}
              <Box 
                sx={{
                  width: '350px',
                  height: '350px',
                  borderRadius: '16px',
                  border: '1px solid rgba(144, 202, 249, 0.2)',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                {/* Aquí inyectamos tu logo nítidamente */}
                <Box 
                  component="img"
                  src={`${baseUrl}QuantumLogoWhite.svg`}
                  alt="Quantum Logo"
                  sx={{ 
                    width: '80%', 
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </Box>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}