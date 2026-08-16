import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { Box, Typography, Container, type SxProps, Grid, List, ListItem, ListItemText } from '@mui/material';

// Estilos obligatorios de Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import type { Theme } from '@emotion/react';

interface Servicio {
  id: number;
  titulo: string; 
  subTitulo: string;
  descripcion: string;
  incluye: string[]; 
  icono: string;
  anguloBase: number;
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
    anguloBase: 1 // Abajo
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
    anguloBase: 90 // Extremo Izquierdo (Activo por defecto)
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
    anguloBase: 180 // Arriba
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
    anguloBase:270 
  },

];

export default function RuedaCardinalServicios() {
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

  // Calculamos cuánto debe girar la rueda grande.
  // Queremos que el servicio seleccionado se mueva hacia la posición de control (180°).
  const rotacionRuedaGrande = 180 - datosServicios[indiceActivo].anguloBase;

  return (
    <Box sx={{
        width: '100%',
        height: '600px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
        position: 'relative',
    }}>
      <Container maxWidth="xl" 
        sx={{
                display: 'grid',
                alignItems: 'center',
                height: '600px',
        }}>
        <Grid container size={12} spacing={"250px"}>
            <Grid  size={8} sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                zIndex: 10,
                height: '600px',
                px: { xs: 2, md: 4 },
                pt: {xs:2,md:12}
            }}>
            <Typography variant="overline" component="span" sx={estilos.tagSuperior}>
                NUESTROS PROCESOS
            </Typography>
            
            <Box key={indiceActivo} sx={estilos.wrapperAnimado}>
                <Typography variant="h3" component="h2" sx={estilos.tituloServicio}>
                {datosServicios[indiceActivo].titulo} – {datosServicios[indiceActivo].subTitulo}
                </Typography>
                
                <Typography variant="body1" sx={estilos.descripcionServicio}>
                {datosServicios[indiceActivo].descripcion}
                </Typography>

                {/* Título de la lista */}
                <Typography variant="subtitle1" sx={estilos.tituloIncluye}>
                Alcance
                </Typography>

                {/* Renderizado dinámico de la lista de MUI */}
                <List sx={estilos.listaContenedor}>
                {datosServicios[indiceActivo].incluye.map((item, index) => (
                    <ListItem key={index} disableGutters sx={estilos.itemLista}>
                    {/* Viñeta personalizada (podés cambiarlo por un icono de MUI si querés) */}
                    <ListItemText 
                        primary={item} 
                        sx={estilos.textoItem }
                    />
                    <Box component="span" sx={estilos.vinetaVerde}>•</Box>
                    </ListItem>
                ))}
                </List>
            </Box>
            </Grid>

            {/* --- COLUMNA DERECHA: ENGRANAJE CARDINAL --- */}
            <Grid size={4} sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
            }}>
            
            {/* Swiper invisible controlador de gestos fluidos */}
            <Box sx={estilos.capturadorSwiper}>
                <Swiper
                direction="vertical"
                modules={[Mousewheel, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                centeredSlides={true}
                loop={true}
                mousewheel={true}
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

            <Box 
                sx={{
                ...estilos.ruedaGrandeGirable,
                transform: `translateY(-50%) rotate(${rotacionRuedaGrande}deg)`
                }}
            >
                {datosServicios.map((servicio, index) => {
                // CORRECCIÓN DEL CONTRAGIRO:
                // Para cancelar la rotación total del contenedor, la burbuja gira exactamente
                // la misma cantidad de grados inversos que tiene la rueda en ese instante.
                const contrarrotacionBurbuja = -rotacionRuedaGrande;

                return (
                    <Box
                    key={servicio.id}
                    onClick={() => irAlSlide(index)}
                    sx={{
                        ...estilos.burbujaServicio,
                        // Distribución matemática exacta en los 4 cuadrantes (Radio de 400px)
                        left: `calc(50% + ${400 * Math.cos(servicio.anguloBase * Math.PI / 180)}px)`,
                        top: `calc(50% + ${400 * Math.sin(servicio.anguloBase * Math.PI / 180)}px)`,
                        transform: `translate(-50%, -50%) rotate(${contrarrotacionBurbuja}deg)`,
                        borderColor: index === indiceActivo ? '#2ecc71' : '#d1d5db',
                        scale: index === indiceActivo ? '1.15' : '0.9',

                        opacity: servicio.anguloBase === 0 ? 0 : index === indiceActivo ? 1 : 0.4
                    }}
                    >
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#333' }}>
                        {servicio.titulo}
                    </Typography>
                    <Box sx={{ 
                        ...estilos.contenedorIcono, 
                        borderColor: index === indiceActivo ? '#2ecc71' : '#e0e0e0',
                        backgroundColor: index === indiceActivo ? '#f4fbf7' : 'transparent'
                    }}>
                        <span style={{ fontSize: '1.8rem' }}>{servicio.icono}</span>
                    </Box>
                    </Box>
                );
                })}
            </Box>

            </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// Estilos limpios y optimizados para Material UI
const estilos: Record<string, SxProps<Theme>> = {
  contenedorSeccion: {
    width: '100%',
    height: '600px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    position: 'relative'
  },
  contenedorGrid: {
    display: 'grid',
    gap: 2,
    alignItems: 'center',
    height: '100%'
  },
  columnaTexto: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    zIndex: 10,
    px: { xs: 2, md: 4 }
  },
  tagSuperior: {
    letterSpacing: '2px',
    textAlign:'right',
    fontWeight: 600,
    color: '#2e7d32',
  },
  wrapperAnimado: {
    animation: 'fadeInUp 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards',
    '@keyframes fadeInUp': {
      from: { opacity: 0, transform: 'translateY(20px)' },
      to: { opacity: 1, transform: 'translateY(0)' }
    }
  },
  tituloServicio: {
    fontWeight: 700,
    color: '#1a1a1a',
    textAlign:'right',
    mb: 1
  },
  descripcionServicio: {
    fontSize: '1.1rem',
    color: '#555555',
    lineHeight: 1.7,
    paddingLeft:"5%",
    textAlign:'right',
  },
    tituloIncluye: {
    fontWeight: 600,
    color: '#1a1a1a',
    marginTop: '20px',
    marginBottom: '8px',
    fontSize: '1.1rem',
    textAlign:"right"
  },
  listaContenedor: {
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '6px' // Espaciado vertical entre cada punto
  },
  itemLista: {
    padding: 0,
    alignItems: 'flex-start' // Alinea la viñeta arriba si el texto ocupa 2 líneas
  },
  vinetaVerde: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: '12px',
    marginTop:"3px"
  },
  textoItem: {
    fontSize: '1rem',
    color: '#444444',
    textAlign:"right",
    lineHeight: 1.5
  },
  columnaInteractiva: {
    position: 'relative',
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end', 
  },
  capturadorSwiper: {
    position: 'absolute',
    right: 0,
    width: '100%',
    height: '600px',
    zIndex: 5,
    
    '& .swiper-pagination-vertical.swiper-pagination-bullets': {
      right: '20px',
      '& .swiper-pagination-bullet': {
        width: '10px',
        height: '10px',
        backgroundColor: '#000000',
        opacity: 0.25,
        margin: '14px 0',
        transition: 'all 0.3s ease',
      },
      '& .swiper-pagination-bullet-active': {
        opacity: 1,
        transform: 'scale(1.4)',
        backgroundColor: '#2ecc71'
      }
    }
  },
  ruedaGrandeGirable: {
    position: 'absolute',
    right: '-400px', // Eje central anclado al lateral derecho
    top: '50%',
    width: '800px',
    height: '800px',
    borderRadius: '50%',
    border: '2px dashed black', // Arco visible punteado
    zIndex: 3,
    transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
    pointerEvents: 'none'
  },
  burbujaServicio: {
    position: 'absolute',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    border: '3px solid',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1,
    cursor: 'pointer',
    pointerEvents: 'auto',
    // La transición del transform aplica la fluidez al contragiro
    transition: 'border-color 0.4s, scale 0.6s, opacity 0.6s, transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
    boxShadow: '0px 10px 30px rgba(0,0,0,0.05)',
    '&:hover': {
      borderColor: '#2ecc71'
    }
  },
  contenedorIcono: {
    width: '55px',
    height: '55px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid',
    borderRadius: '50%',
    transition: 'all 0.4s'
  }
};