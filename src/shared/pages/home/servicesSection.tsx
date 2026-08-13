import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import ArchitectureOutlinedIcon from '@mui/icons-material/ArchitectureOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';

interface ProblemServiceItem {
  id: string;
  number: string;
  icon: React.ReactNode;
  painPoints: string[];
  solutionTitle: string;
  solutionDescription: string;
}

const INTERACTIVE_CARDS: ProblemServiceItem[] = [
  {
    id: "fiscal",
    number: "01",
    icon: <AccountBalanceOutlinedIcon fontSize="large" />,
    painPoints: [
      "¿No sabés si estás pagando impuestos de más o de menos?",
      "¿Tenés deuda fiscal acumulada y no sabés cómo regularizarla?",
      "¿Tu contador te da números pero no una estrategia?"
    ],
    solutionTitle: "Ingeniería Fiscal",
    solutionDescription: "Planificación impositiva a medida, liquidación eficiente y estrategias de regularización para proteger tu caja."
  },
  {
    id: "fiduciario",
    number: "02",
    icon: <ArchitectureOutlinedIcon fontSize="large" />,
    painPoints: [
      "¿Querés armar un fideicomiso pero no sabés cómo estructurarlo?",
      "¿No sabés cómo separar tu patrimonio personal del de tu empresa?",
      "¿Le tenés miedo al costo fiscal de reorganizar tu sociedad?"
    ],
    solutionTitle: "Estructuración Fiduciaria",
    solutionDescription: "Blindaje patrimonial, diseño de fideicomisos y reorganizaciones societarias optimizadas fiscalmente."
  },
  {
    id: "laboral",
    number: "03",
    icon: <GroupsOutlinedIcon fontSize="large" />,
    painPoints: [
      "¿Tenés personal en convenio y se te dificulta la gestión?",
      "¿Tuviste un conflicto laboral y querés resolverlo sin ir a juicio?",
      "¿Dudás de si estás cumpliendo todas las obligaciones?"
    ],
    solutionTitle: "Estrategia Laboral",
    solutionDescription: "Gestión integral de nómina, manejo de convenios/ART y resolución preventiva de desacuerdos laborales."
  },
  {
    id: "financiero",
    number: "04",
    icon: <TrendingUpOutlinedIcon fontSize="large" />,
    painPoints: [
      "¿No tenés claro si tu proyecto es viable financieramente?",
      "¿Tu negocio crece pero los números finales no te cierran?",
      "¿Necesitás análisis económico para tomar decisiones clave?"
    ],
    solutionTitle: "Análisis Financiero",
    solutionDescription: "Modelado de viabilidad, proyecciones de flujo de fondos y diagnóstico de rentabilidad por etapa."
  },
  {
    id: "estructural",
    number: "05",
    icon: <AccountTreeOutlinedIcon fontSize="large" />,
    painPoints: [
      "¿Tus asesores (contador, abogado, financiero) no hablan entre sí?",
      "¿No tenés un profesional que vea toda la foto de tu negocio?",
      "¿Necesitás orden, proyección y acompañamiento estratégico?"
    ],
    solutionTitle: "Diagnóstico Estructural",
    solutionDescription: "Alineación holística de todas las áreas operativas, contables y legales bajo una misma visión de negocio."
  }
];

export const ServicesSection: React.FC = () => {
  // Estado para gestionar cuál tarjeta está activa al presionar en Mobile
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setActiveCard((prev) => (prev === id ? null : id));
  };

  return (
    <Box sx={{ backgroundColor: "var(--contrastCaptions)", py: 10, px: { xs: 2, md: 6 } }}>
      {/* Título Principal Grande */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            color: "var(--warningText)",
            letterSpacing: "-0.02em",
            mb: 2
          }}
        >
          ¿Te identificás con esto?
        </Typography>
      </Box>

      {/* Grid de Tarjetas */}
      <Grid container spacing={4} justifyContent="center">
        {INTERACTIVE_CARDS.map((item) => {
          const isFlipped = activeCard === item.id;

          return (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
              <Card
                onClick={() => handleCardClick(item.id)}
                elevation={0}
                sx={{
                  height: "380px",
                  borderRadius: 4,
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 107, 107, 0.2)",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.4s ease",

                  "&:hover": {
                    borderColor: "#64ffda",
                    transform: "translateY(-6px)",
                    boxShadow: "0 15px 35px -10px rgba(100, 255, 218, 0.2)",
                    "& .solution-overlay": {
                      opacity: 1,
                      visibility: "visible",
                      transform: "translateY(0)"
                    }
                  }
                }}
              >
                <CardContent
                  sx={{
                    p: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    boxSizing: "border-box"
                  }}
                >
                  {/* Cabecera Frente: Número e Ícono */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 3
                    }}
                  >
                    <Typography
                      sx={{
                        color: "var(--warningText)",
                        fontWeight: 800,
                        fontSize: "1.2rem"
                      }}
                    >
                      {item.number}
                    </Typography>
                    <Box sx={{ color: "var(--warningText)" }}>{item.icon}</Box>
                  </Box>

                  {/* Lista de Preguntas (Grandes) */}
                  <Box
                    component="ul"
                    sx={{
                      p: 0,
                      m: 0,
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      my: "auto"
                    }}
                  >
                    {item.painPoints.map((point, index) => (
                      <Typography
                        component="li"
                        key={index}
                        sx={{
                          color: "#e6f1ff",
                          fontSize: { xs: "0.95rem", md: "1.05rem" },
                          fontWeight: 600,
                          lineHeight: 1.4,
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 1.5
                        }}
                      >
                        <Box component="span" sx={{ color: "var(--warningText)" }}>
                          •
                        </Box>
                        {point}
                      </Typography>
                    ))}
                  </Box>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      color: "var(--warningText)",
                      mt: 0.5,
                    }}
                  >
                    ¿Cómo lo solucionamos?
                  </Typography>
                </CardContent>

                {/* Capa de Solución (Aparece en Hover / Tap Mobile) */}
                <Box
                  className="solution-overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#0d203d",
                    border: "2px solid #64ffda",
                    borderRadius: 4,
                    p: 4,
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    transition: "all 0.4s ease-in-out",
                    opacity: isFlipped ? 1 : 0,
                    visibility: isFlipped ? "visible" : "hidden",
                    transform: isFlipped ? "translateY(0)" : "translateY(10px)"
                  }}
                >
                  <Typography
                    sx={{
                      color: "#64ffda",
                      fontWeight: 800,
                      fontSize: "0.85rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      mb: 1
                    }}
                  >
                    Solución propuesta
                  </Typography>

                  <Typography
                    variant="h5"
                    sx={{
                      color: "#e6f1ff",
                      fontWeight: 700,
                      mb: 2
                    }}
                  >
                    {item.solutionTitle}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#8892b0",
                      fontSize: "0.95rem",
                      lineHeight: 1.6
                    }}
                  >
                    {item.solutionDescription}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};