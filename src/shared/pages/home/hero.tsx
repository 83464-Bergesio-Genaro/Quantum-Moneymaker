import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import ArchitectureOutlinedIcon from "@mui/icons-material/ArchitectureOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { appConfig } from "../../../config/appConfig";
import { useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

const baseUrl = appConfig.appURL
const areas = [
  {
    text: "FISCAL",
    icon: <AccountBalanceOutlinedIcon />,
    description:
      "Planificación, optimización y regularización de la estructura tributaria.",
    orbit: "outer",
    top: "45%",
    left: "18%",
    right: "0%",
    bottom:"0%",    
  },
  {
    text: "LABORAL",
    icon: <GroupsOutlinedIcon />,
    description:
      "Gestión de personal, convenios, ART y prevención de riesgos laborales.",
    orbit: "outer",
    top: "50%",
    left: "none",
    bottom:"none",    
    right: "8%",
  },
  {
    text: "FIDUCIARIO",
    icon: <ArchitectureOutlinedIcon />,
    description:
      "Diseño y tratamiento impositivo de fideicomisos y estructuras fiduciarias.",
    orbit: "inner",
    top: "4%",
    left: "none",
    right: "34%",
    bottom:"none",
  },
  {
    text: "FINANCIERO",
    icon: <TrendingUpOutlinedIcon />,
    description:
      "Análisis de viabilidad, proyecciones, flujos y rentabilidad.",
    orbit: "inner",
    top: "none",
    left: "none",
    right: "42%",
    bottom:"-5%",
  },
];

export default function MainHero(){
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return(
        <Box
        component="section"
        sx={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        py: { xs: 4,xl:12},
        }}
        >
        {/*Una mancha random que le gusto al chat, lo reemplazaria por los fondos de lineas*/}
        <Box
          sx={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            backgroundColor: "var(--secondary)",
            filter: "blur(80px)",
            opacity: 0.7,
            top: -150,
            right: -150,
            zIndex: 0,
          }}
        />

        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            zIndex: 1
          }}
        >
            <Grid
                container
                spacing={{ xs: 6, sm: 4 }}
                alignItems="stretch"
                sx={{
                    minHeight: {
                    sm: "auto",
                    md: "auto",
                    },
                }}
            >

            <Grid container size={{ xs: 12,sm:6 }} spacing={1}>
              <Grid size={{ xs: 12 }} >
                <Typography
                  sx={{
                    color: "var(--captions)",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    textAlign:"center",
                    letterSpacing: "0.5em",
                  }}
                >
                  METAS INTELIGENTES
                </Typography>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Typography
                  variant="h1"
                  sx={{
                    lineHeight: 1.05,
                    fontWeight: 800,
                    letterSpacing: "-0.055em",
                    color: "var(--primary)",

                  }}
                >
                  Ingeniería fiscal en cada negocio.
                </Typography>                
              </Grid>
              <Grid size={{ xs: 12 }}>
                {isMobile && (
                  <Typography
                    variant="h6"
                  >
                    Orden, proyección y estrategia para empresas <i>que no paran de soñar.</i>
                  </Typography>
                )}
                 {!isMobile && (
                  <>
                    <Typography
                      variant="h6"
                    >
                      Orden, proyección y estrategia para empresas
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{letterSpacing: "-0.055em",}}
                      >
                      <i>que no paran de soñar.</i>
                    </Typography>
                  </>
                 )}

              </Grid>
              <Grid size={{ xs: 12 }}>
                {!isMobile &&(
                  <Typography
                  variant="body1"
                  sx={{
                    color: "var(--text2)",
                    mb:{xs:1,xl:4},
                  }}
                  >
                    Brindamos servicios a empresas que buscan
                    ordenar su estructura proyectando su crecimiento mediante
                    decisiones que consideran las dimensiones económicas, políticas y
                    regulatorias.
                  </Typography>
                )}
                {/*isMobile &&(
                  <Typography
                  variant="body2"
                  sx={{
                    color: "var(--text2)",
                    mb:{xs:1,md: 4},
                  }}
                  >
                    Brindamos servicios a empresas que buscan
                    ordenar su estructura proyectando su crecimiento mediante
                    decisiones que consideran las dimensiones económicas, políticas y
                    regulatorias.
                  </Typography>
                )*/}
              </Grid>
              {isMobile && (<MobileAreasCards/>)}
              <Grid size={{ xs: 12,sm:6  }} >
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    my:1,
                    width:"100%",
                    borderRadius: "30px",
                    fontSize:{xs:"0.6rem",sm:"0.65rem",xl:"0.875rem"},
                    backgroundColor: "var(--primary)",
                    fontWeight: 700,
                    "&:hover": {
                      backgroundColor: "var(--contrastPrimary)",
                    },
                  }}
                >
                  Quiero mi diagnóstico
                </Button>
              </Grid>
              <Grid size={{ xs: 12,sm:6 }}>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 3.5,
                    py: 1.5,
                    my: 1,
                    width:"100%",
                    fontSize:{xs:"0.6rem",sm:"0.65rem",xl:"0.875rem"},
                    borderRadius: "30px",
                    borderColor: "var(--primary)",
                    color: "var(--primary)",
                    "&:hover": {
                      borderColor: "var(--text)",
                      backgroundColor: "var(--contrastSecondary)",
                    },
                  }}
                >
                  Conocé nuestros servicios
                </Button>              
              </Grid>
            </Grid>

            {/* --------------- VISUAL DERECHO ---------------- */}
            {/* Con esto no renderiza sino es telefono la animacion que consume mucho */}
            {!isMobile && (<OrbitalDiagram/> )}

          </Grid>
        </Container>
      </Box>

    );
}
function OrbitalDiagram(){
    return(
    <Grid size={{ sm: 6 }}>
        <Box
        sx={{
          
            position: "relative",
            width: "100%",
            maxWidth: 600,
            mx: "auto",
            aspectRatio: "1 / 1",
        }}
        >
        {/* ÓRBITAS */}
        <Box
            sx={{
            position: "absolute",
            inset: "4%",
            border: "2px dashed black",
            borderRadius: "50%",
            }}
        />

        <Box
            sx={{
            position: "absolute",
            inset: "20%",
            border: "2px dashed black",
            borderRadius: "50%",
            }}
        />

        {/* CONTENEDOR QUE ROTA */}
        <Box
            sx={{
            position: "absolute",
            inset: 0,

            "@keyframes orbit": {
                from: {
                transform: "rotate(0deg)",
                },
                to: {
                transform: "rotate(360deg)",
                },
            },

            animation: "orbit 28s linear infinite",
            }}
        >
            {areas.map((item) => (
            <Box
                key={item.text}
                sx={{
                position: "absolute",
                top: item.top,
                left: item.left,
                right: item.right,
                bottom: item.bottom,
                width: {
                    sm: 85,
                    md: 100,
                    xl:125
                },

                height: {
                    sm: 85,
                    md: 100,
                    xl:125
                },
                marginLeft: "-52px",
                marginTop: "-52px",
                borderRadius: "50%",
                backgroundColor: "var(--contrastText)",
                border: "1px solid var(--primary)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow:
                    "0 15px 40px rgba(0,40,50,0.18)",
                "@keyframes counterOrbit": {
                    from: {
                    transform: "rotate(0deg)",
                    },
                    to: {
                    transform: "rotate(-360deg)",
                    },
                },
                animation:
                    "counterOrbit 28s linear infinite",
                }}
            >
                <Box
                sx={{
                    color: "var(--captions)",
                    mb: 0.5,
                }}
                >
                {item.icon}
                </Box>

                <Typography
                sx={{
                    fontSize: {
                    sm: "0.6rem",
                    md: "0.7rem",
                    },

                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    color:"var(--primary)",
                }}
                >
                {item.text}
                </Typography>
            </Box>
            ))}
        </Box>

        {/* LOGO CENTRAL */}
        <Box
            sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: {sm:120,xl:200},
            height: {sm:120,xl:200},
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow:
                "0 25px 90px rgba(0,128,129,0.45)",

            zIndex: 2,
            }}
        >
            <Box
            component="img"
            src={`${baseUrl}QuantumLogo.svg`}
            alt="Quantum Logo"
            sx={{
                width: "80%",
            }}
            />
        </Box>
      </Box>
    </Grid>
    )
}
function MobileAreasCards() {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  return (
    <Grid size={{ xs: 12 }}>
      <Grid container spacing={2} sx={{p:2}}>
        {areas.map((item) => {
          const isSelected = selectedArea === item.text;

          return (
            <Grid
              size={{ xs: 6 }}
              key={item.text}
            >
              <Box
                component="button"
                onClick={() =>
                  setSelectedArea(
                    isSelected ? null : item.text
                  )
                }
                sx={{
                  width: "100%",
                  minHeight: 150,
                  p: 2,
                  borderRadius: 3,
                  border: isSelected
                    ? "1px solid var(--primary)"
                    : "1px solid var(--primary)",

                  backgroundColor: isSelected
                    ? "var(--primary)"
                    : "var(--contrastText)",

                  color: isSelected
                    ? "var(--contrastText)"
                    : "var(--primary)",

                  boxShadow: isSelected
                    ? "0 12px 35px rgba(0,128,129,0.25)"
                    : "0 10px 30px rgba(0,40,50,0.08)",

                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  cursor: "pointer",
                  transition:
                    "all 0.3s ease",
                  "&:active": {
                    transform: "scale(0.97)",
                  },
                  "&:focus-visible": {
                    outline:
                      "3px solid var(--captions)",
                    outlineOffset: 2,
                  },
                }}
              >
                {/* ICONO */}
                {!isSelected && (
                  <>
                    <Box
                      sx={{
                        color: isSelected
                          ? "var(--contrastText)"
                          : "var(--captions)",

                        transition:
                          "color 0.3s ease",
                      }}
                    >
                      {item.icon}
                    </Box>

                    {/* TÍTULO */}

                    <Typography
                      component="span"
                      sx={{
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        color: "inherit",
                        textAlign: "center",
                      }}
                    >
                      {item.text}
                    </Typography>                  
                  </>
                )}
                

                {/* CONTENIDO NORMAL */}

                {!isSelected && (
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      color: "var(--captions)",
                      mt: 0.5,
                    }}
                  >
                    Conocé más →
                  </Typography>
                )}

                {/* CONTENIDO SELECCIONADO */}

                {isSelected && (
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "0.8rem",
                      lineHeight: 1.5,
                      color:
                        "var(--contrastText)",
                      opacity: 0.9,
                      textAlign: "center"
                    }}
                  >
                    {item.description}
                  </Typography>
                )}
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}