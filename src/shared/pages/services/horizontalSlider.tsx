import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { Box, Typography, Container, List, ListItem, ListItemText } from '@mui/material';

import 'swiper/css';
import 'swiper/css/pagination';

interface Servicio {
  id: number;
  titulo: string;
  subTitulo: string;
  descripcion: string;
  incluye: string[];
  icono: string;
  anguloBase: number;
  color: string;
}

const datosServicios: Servicio[] = [
  {
    id: 4,
    titulo: 'Estructural',
    subTitulo: 'Estructuras Fiduciarias',
    descripcion: 'Consultoría especializada en estructuras fiduciarias. Protegemos activos mediante un marco legal sólido y eficiente.',
    incluye: [
      'Constitución de fideicomisos',
      'Blindaje y protección patrimonial',
      'Planificación sucesoria empresarial'
    ],
    icono: '🛡️',
    anguloBase: 180,
    color: '#810200' // Color Rojo Obscuro / Granate
  },
  {
    id: 1,
    titulo: 'Fiscal',
    subTitulo: 'Ingeniería fiscal',
    descripcion: 'Diseñamos estrategias fiscales adaptadas a cada negocio, minimizando riesgos y optimizando la carga tributaria dentro del marco legal.',
    incluye: [
      'Planificación tributaria anual',
      'Liquidación de impuestos nacionales, provinciales y municipales',
      'Regularización de pasivos fiscales',
      'Asistencia en inspecciones y procedimientos administrativos'
    ],
    icono: '🔍',
    anguloBase: 270,
    color: '#2ecc71' // Verde
  },
  {
    id: 2,
    titulo: 'Ingenieril',
    subTitulo: 'Consultoría Ingenieril',
    descripcion: 'La ingeniería fiscal se trata de tener las cuentas al día. Estructuramos tus proyectos bajo normativas estrictas optimizando la carga impositiva global.',
    incluye: [
      'Análisis de flujos impositivos',
      'Optimización de costos operativos',
      'Auditoría preventiva de proyectos'
    ],
    icono: '💬',
    anguloBase: 0,
    color: '#81007F' // Color Púrpura / Morado
  },
  {
    id: 3,
    titulo: 'Contador',
    subTitulo: 'Gestión Contable Integral',
    descripcion: 'Articulamos aspectos laborales y financieros. Diseñamos planes estratégicos que mitigan riesgos impositivos en transacciones complejas.',
    incluye: [
      'Balances y estados contables',
      'Auditorías financieras periódicas',
      'Asesoramiento en encuadres laborales'
    ],
    icono: '📊',
    anguloBase: 90,
    color: '#808100' // Color Olivas / Mostaza
  }
];

export default function HorizontalSlider() {
  const [indiceActivo, setIndiceActivo] = useState<number>(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const manejarCambioSlide = (swiper: SwiperType) => {
    setIndiceActivo(swiper.realIndex);
  };

  const irAlSlide = (indice: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(indice);
    }
  };

  // Posiciona el ítem destacado en la parte INFERIOR de la rueda (90°)
  const rotacionRueda = 90 - datosServicios[indiceActivo].anguloBase;
  const colorActivoActual = datosServicios[indiceActivo].color;

  return (
    <Box sx={{ width: '100%', py: 2, backgroundColor: '#ffffff', overflow: 'hidden' }}>
      <Container maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* --- RUEDA GIRATORIA ARRIBA (SOLO MOSTRANDO ARCO INFERIOR) --- */}
        <Box sx={{ position: 'relative', width: '100%', height: '180px', overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
          
          {/* Swiper invisible horizontal para capturar el gesto swipe */}
          <Box 
            sx={{
              ...estilos.capturadorSwiper,
              '& .swiper-pagination-horizontal .swiper-pagination-bullet-active': {
                backgroundColor: colorActivoActual
              }
            }}
          >
            <Swiper
              direction="horizontal"
              modules={[Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={manejarCambioSlide}
              pagination={{ clickable: true }}
              style={{ width: '100%', height: '100%' }}
            >
              {datosServicios.map((_, index) => (
                <SwiperSlide key={index} style={{ opacity: 0 }} />
              ))}
            </Swiper>
          </Box>

          {/* Rueda recortada */}
          <Box
            sx={{
              ...estilos.ruedaGrandeGirable,
              transform: `translateX(-50%) rotate(${rotacionRueda}deg)`
            }}
          >
            {datosServicios.map((servicio, index) => {
              const contrarrotacionBurbuja = -rotacionRueda;

              return (
                <Box
                  key={servicio.id}
                  onClick={() => irAlSlide(index)}
                  sx={{
                    ...estilos.burbujaServicio,
                    left: `calc(50% + ${140 * Math.cos((servicio.anguloBase * Math.PI) / 180)}px)`,
                    top: `calc(50% + ${140 * Math.sin((servicio.anguloBase * Math.PI) / 180)}px)`,
                    transform: `translate(-50%, -50%) rotate(${contrarrotacionBurbuja}deg)`,
                    borderColor: index === indiceActivo ? servicio.color : '#d1d5db',
                    scale: index === indiceActivo ? '1.05' : '0.8',
                    opacity: index === indiceActivo ? 1 : 0.35
                  }}
                >
                  <Typography variant="caption" sx={{ fontWeight: 700, color: '#333', fontSize: '0.7rem' }}>
                    {servicio.titulo}
                  </Typography>
                  <Box
                    sx={{
                      ...estilos.contenedorIcono,
                      borderColor: index === indiceActivo ? servicio.color : '#e0e0e0',
                      backgroundColor: index === indiceActivo ? `${servicio.color}15` : 'transparent'
                    }}
                  >
                    <span style={{ fontSize: '1.1rem' }}>{servicio.icono}</span>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>

        {/* --- TEXTO Y CONTENIDO ABAJO --- */}
        <Box key={indiceActivo} sx={{ width: '100%', mt: 1, px: 1, textAlign: 'center' }}>
          <Typography variant="overline" component="span" sx={{ ...estilos.tagSuperior, color: colorActivoActual }}>
            NUESTROS PROCESOS
          </Typography>

          <Typography variant="h5" component="h2" sx={estilos.tituloServicio}>
            {datosServicios[indiceActivo].titulo} – {datosServicios[indiceActivo].subTitulo}
          </Typography>

          <Typography variant="body2" sx={estilos.descripcionServicio}>
            {datosServicios[indiceActivo].descripcion}
          </Typography>

          <Typography variant="subtitle2" sx={estilos.tituloIncluye}>
            Alcance
          </Typography>

          <List sx={estilos.listaContenedor}>
            {datosServicios[indiceActivo].incluye.map((item, index) => (
              <ListItem key={index} disableGutters sx={estilos.itemLista}>
                <ListItemText primary={item} sx={estilos.textoItem} />
              </ListItem>
            ))}
          </List>
        </Box>

      </Container>
    </Box>
  );
}

const estilos = {
  tagSuperior: {
    letterSpacing: '2px',
    fontWeight: 600,
    display: 'block',
    mb: 1,
    transition: 'color 0.4s ease'
  },
  tituloServicio: {
    fontWeight: 700,
    color: '#1a1a1a',
    mb: 1,
    fontSize: '1.3rem'
  },
  descripcionServicio: {
    fontSize: '0.9rem',
    color: '#555555',
    lineHeight: 1.5,
    mb: 2
  },
  tituloIncluye: {
    fontWeight: 600,
    color: '#1a1a1a',
    fontSize: '0.95rem',
    mb: 1
  },
  listaContenedor: {
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px'
  },
  itemLista: {
    padding: 0,
    justifyContent: 'center',
    textAlign: 'center'
  },
  textoItem: {
    '& .MuiTypography-root': {
      fontSize: '0.85rem',
      color: '#444444'
    }
  },
  capturadorSwiper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 5,
    '& .swiper-pagination-horizontal': {
      top: '8px',
      bottom: 'auto',
      '& .swiper-pagination-bullet': {
        width: '7px',
        height: '7px',
        backgroundColor: '#000000',
        opacity: 0.25,
        margin: '0 4px',
        transition: 'all 0.3s ease'
      },
      '& .swiper-pagination-bullet-active': {
        opacity: 1,
        transform: 'scale(1.3)',
        transition: 'all 0.3s ease'
      }
    }
  },
  ruedaGrandeGirable: {
    position: 'absolute',
    left: '50%',
    top: '-160px', 
    width: '280px',
    height: '280px',
    borderRadius: '50%',
    border: '2px dashed #bbb',
    zIndex: 3,
    transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
    pointerEvents: 'none'
  },
  burbujaServicio: {
    position: 'absolute',
    width: '85px',
    height: '85px',
    borderRadius: '50%',
    border: '2px solid',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 0.3,
    cursor: 'pointer',
    pointerEvents: 'auto',
    transition: 'border-color 0.4s, scale 0.6s, opacity 0.6s, transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
    boxShadow: '0px 4px 12px rgba(0,0,0,0.08)'
  },
  contenedorIcono: {
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid',
    borderRadius: '50%',
    transition: 'all 0.4s'
  }
};