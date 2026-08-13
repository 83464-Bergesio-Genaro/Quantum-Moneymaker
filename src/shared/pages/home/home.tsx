import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import ArchitectureOutlinedIcon from "@mui/icons-material/ArchitectureOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MainHero from "./hero";
import { ServicesSection } from "./servicesSection";

const colors = {
  background: "var(--background)",
  primary: "var(--primary)",
  primaryHover:"#006969",
  secondary: "var(--secondary)",
  captions: "var(--captions)",
  text: "var(--text)",
  white: "var(--white)",
};


export default function Home() {
  return (
    <Box
      sx={{
        backgroundColor: colors.background,
        color: colors.text,
        overflow:"hidden",
      }}
    >
    <MainHero/>
    <ServicesSection/>
      {/* =========================================================
          STATS
      ========================================================= */}

      <Box
        sx={{
          backgroundColor: colors.primary,
          color: colors.white,
          py: 5,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {[
              {
                number: "33",
                title: "AÑOS",
                description: "de trayectoria profesional",
              },
              {
                number: "04",
                title: "ÁREAS",
                description: "integradas en una estrategia",
              },
              {
                number: "01",
                title: "INTERLOCUTOR",
                description: "para decisiones complejas",
              },
              {
                number: "360°",
                title: "VISIÓN",
                description: "sobre cada proyecto",
              },
            ].map((stat) => (
              <Grid size={{ xs: 6, md: 3 }} key={stat.title}>
                <Box
                  sx={{
                    textAlign: "center",
                    px: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "2rem",
                        md: "2.6rem",
                      },

                      fontWeight: 800,
                    }}
                  >
                    {stat.number}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "0.7rem",
                      letterSpacing: "0.12em",
                      fontWeight: 700,
                    }}
                  >
                    {stat.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                      opacity: 0.75,
                      mt: 0.5,
                    }}
                  >
                    {stat.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* =========================================================
          PROBLEMAS
      ========================================================= */}

      <Box
        component="section"
        sx={{
          py: {
            xs: 9,
            md: 14,
          },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 760, mb: 7 }}>
            <Typography
              sx={{
                color: colors.captions,
                fontWeight: 700,
                letterSpacing: "0.12em",
                fontSize: "0.75rem",
                mb: 2,
              }}
            >
              EL PROBLEMA
            </Typography>

            <Typography
              component="h2"
              sx={{
                fontSize: {
                  xs: "2.2rem",
                  md: "3.2rem",
                },

                lineHeight: 1.1,

                fontWeight: 800,

                letterSpacing: "-0.04em",

                color: colors.primary,

                mb: 2,
              }}
            >
              El problema no siempre es el número. Es la estructura.
            </Typography>

            <Typography
              sx={{
                color: "#5a6c6f",
                lineHeight: 1.7,
              }}
            >
              Cuando las decisiones fiscales, laborales, fiduciarias y
              financieras se analizan por separado, la empresa pierde
              perspectiva.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {[
              {
                title: "Problemas fiscales",
                text: "No sé si estoy pagando impuestos de más o de menos.",
                icon: <AccountBalanceOutlinedIcon />,
              },
              {
                title: "Problemas fiduciarios",
                text: "Quiero estructurar un proyecto pero no sé qué vehículo utilizar.",
                icon: <ArchitectureOutlinedIcon />,
              },
              {
                title: "Problemas laborales",
                text: "Tengo personal y necesito reducir riesgos laborales.",
                icon: <GroupsOutlinedIcon />,
              },
              {
                title: "Problemas financieros",
                text: "Mi negocio crece pero los números no me cierran.",
                icon: <TrendingUpOutlinedIcon />,
              },
            ].map((problem) => (
              <Grid size={{ xs: 12, sm: 6 }} key={problem.title}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",

                    borderRadius: 4,

                    border: "1px solid rgba(0,128,129,0.1)",

                    backgroundColor: colors.white,

                    transition: "0.3s",

                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow:
                        "0 20px 50px rgba(0,80,90,0.1)",
                      borderColor: `${colors.primary}40`,
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,

                        borderRadius: 3,

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",

                        backgroundColor: colors.secondary,

                        color: colors.primary,

                        mb: 3,
                      }}
                    >
                      {problem.icon}
                    </Box>

                    <Typography
                      sx={{
                        fontWeight: 800,
                        fontSize: "1.15rem",
                        mb: 1.5,
                      }}
                    >
                      {problem.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#607174",
                        lineHeight: 1.7,
                      }}
                    >
                      “{problem.text}”
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* =========================================================
          PROPUESTA
      ========================================================= */}

      <Box
        component="section"
        sx={{
          backgroundColor: colors.secondary,
          py: {
            xs: 9,
            md: 14,
          },
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={8}
            alignItems="center"
          >
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                sx={{
                  color: colors.captions,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  fontSize: "0.75rem",
                  mb: 2,
                }}
              >
                NUESTRA PROPUESTA
              </Typography>

              <Typography
                component="h2"
                sx={{
                  fontSize: {
                    xs: "2.3rem",
                    md: "3.3rem",
                  },

                  lineHeight: 1.1,

                  fontWeight: 800,

                  letterSpacing: "-0.04em",

                  color: colors.primary,

                  mb: 3,
                }}
              >
                Una mirada integral para decisiones complejas.
              </Typography>

              <Typography
                sx={{
                  color: "#506669",
                  lineHeight: 1.8,
                }}
              >
                Unificamos las distintas dimensiones que intervienen
                en un proyecto para que puedas tomar decisiones con
                mayor claridad y menor incertidumbre.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={2}>
                {[
                  ["01", "ORDEN", "Entender dónde estás."],
                  ["02", "PROYECCIÓN", "Entender hacia dónde podés ir."],
                  ["03", "ESTRATEGIA", "Definir cómo llegar."],
                ].map(([number, title, description]) => (
                  <Box
                    key={number}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 3,

                      backgroundColor: colors.white,

                      borderRadius: 4,

                      p: {
                        xs: 2.5,
                        md: 3,
                      },

                      border: "1px solid rgba(0,128,129,0.08)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "1.5rem",
                        fontWeight: 800,
                        color: colors.captions,
                        minWidth: 40,
                      }}
                    >
                      {number}
                    </Typography>

                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 800,
                          color: colors.primary,
                        }}
                      >
                        {title}
                      </Typography>

                      <Typography
                        sx={{
                          color: "#627477",
                          fontSize: "0.9rem",
                        }}
                      >
                        {description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* =========================================================
          SERVICIOS
      ========================================================= */}

      <Box
        component="section"
        sx={{
          py: {
            xs: 9,
            md: 14,
          },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              textAlign: "center",
              maxWidth: 750,
              mx: "auto",
              mb: 8,
            }}
          >
            <Typography
              sx={{
                color: colors.captions,
                fontWeight: 700,
                letterSpacing: "0.12em",
                fontSize: "0.75rem",
                mb: 2,
              }}
            >
              QUÉ HACEMOS
            </Typography>

            <Typography
              component="h2"
              sx={{
                fontSize: {
                  xs: "2.3rem",
                  md: "3.2rem",
                },

                fontWeight: 800,

                color: colors.primary,

                letterSpacing: "-0.04em",

                mb: 2,
              }}
            >
              Cuatro dimensiones. Una estrategia.
            </Typography>

            <Typography
              sx={{
                color: "#607174",
                lineHeight: 1.7,
              }}
            >
              Consultoría especializada en ingeniería fiscal,
              articulando aspectos laborales, fiduciarios y financieros.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {[
              {
                number: "01",
                title: "Ingeniería fiscal",
                description:
                  "Planificación, liquidación y regularización impositiva.",
                icon: <AccountBalanceOutlinedIcon />,
              },
              {
                number: "02",
                title: "Estructuración fiduciaria",
                description:
                  "Armado y tratamiento impositivo de fideicomisos.",
                icon: <ArchitectureOutlinedIcon />,
              },
              {
                number: "03",
                title: "Estrategia laboral",
                description:
                  "Gestión de personal, convenios, ART y desvinculaciones.",
                icon: <GroupsOutlinedIcon />,
              },
              {
                number: "04",
                title: "Análisis financiero",
                description:
                  "Evaluación y planificación económica por etapa.",
                icon: <TrendingUpOutlinedIcon />,
              },
            ].map((service) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 3 }}
                key={service.number}
              >
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    borderRadius: 4,

                    border:
                      "1px solid rgba(0,128,129,0.12)",

                    transition: "0.3s",

                    "&:hover": {
                      transform: "translateY(-8px)",
                      backgroundColor: colors.primary,

                      "& .service-text": {
                        color: colors.white,
                      },

                      "& .service-icon": {
                        backgroundColor: colors.white,
                        color: colors.primary,
                      },

                      "& .service-number": {
                        color: colors.white,
                      },
                    },
                  }}
                >
                  <CardContent sx={{ p: 3.5 }}>
                    <Typography
                      className="service-number"
                      sx={{
                        color: colors.captions,
                        fontWeight: 800,
                        fontSize: "0.8rem",
                        mb: 3,
                      }}
                    >
                      {service.number}
                    </Typography>

                    <Box
                      className="service-icon"
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: 3,

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",

                        backgroundColor: colors.secondary,

                        color: colors.primary,

                        mb: 3,
                      }}
                    >
                      {service.icon}
                    </Box>

                    <Typography
                      className="service-text"
                      sx={{
                        fontWeight: 800,
                        fontSize: "1.05rem",
                        mb: 1.5,
                        transition: "0.3s",
                      }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      className="service-text"
                      sx={{
                        color: "#687a7c",
                        fontSize: "0.9rem",
                        lineHeight: 1.7,
                        transition: "0.3s",
                      }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* =========================================================
          33 AÑOS
      ========================================================= */}

      <Box
        component="section"
        sx={{
          backgroundColor: "#061e19",
          color: colors.white,
          py: {
            xs: 9,
            md: 13,
          },

          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={8}
            alignItems="center"
          >
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "6rem",
                    md: "9rem",
                  },

                  lineHeight: 0.8,

                  fontWeight: 900,

                  color: colors.captions,

                  letterSpacing: "-0.08em",
                }}
              >
                33
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  fontSize: "0.8rem",
                }}
              >
                AÑOS DE TRAYECTORIA
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                component="h2"
                sx={{
                  fontSize: {
                    xs: "2.2rem",
                    md: "3.3rem",
                  },

                  lineHeight: 1.1,

                  fontWeight: 800,

                  letterSpacing: "-0.04em",

                  mb: 3,
                }}
              >
                33 años viendo cómo cambian las reglas.
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.8,
                  maxWidth: 650,
                }}
              >
                La experiencia no consiste solamente en conocer las
                normas. Consiste en entender cómo impactan en las
                decisiones reales de una empresa.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* =========================================================
          CTA
      ========================================================= */}

      <Box
        component="section"
        sx={{
          py: {
            xs: 10,
            md: 14,
          },
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              backgroundColor: colors.primary,
              borderRadius: {
                xs: 4,
                md: 6,
              },

              p: {
                xs: 4,
                md: 8,
              },

              textAlign: "center",

              position: "relative",
              overflow: "hidden",
            }}
          >
            <Typography
              component="h2"
              sx={{
                fontSize: {
                  xs: "2rem",
                  md: "3.2rem",
                },

                lineHeight: 1.1,

                fontWeight: 800,

                color: colors.white,

                letterSpacing: "-0.04em",

                mb: 3,
              }}
            >
              ¿Tu negocio crece pero los impuestos también crecen sin
              control?
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.75)",
                mb: 4,
                lineHeight: 1.7,
              }}
            >
              Empecemos por entender dónde estás hoy y qué
              oportunidades existen para tu proyecto.
            </Typography>

            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                backgroundColor: colors.white,
                color: colors.primary,
                borderRadius: "30px",
                px: 4,
                py: 1.5,
                fontWeight: 800,

                "&:hover": {
                  backgroundColor: colors.secondary,
                },
              }}
            >
              Quiero mi diagnóstico
            </Button>
          </Box>
        </Container>
      </Box>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <Box
        component="footer"
        sx={{
          backgroundColor: "#000a0f",
          color: colors.white,
          py: 7,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: "1.5rem",
                  color: colors.white,
                }}
              >
                QUANTUM
              </Typography>

              <Typography
                sx={{
                  color: colors.captions,
                  fontSize: "0.65rem",
                  letterSpacing: "0.18em",
                  fontWeight: 600,
                  mb: 3,
                }}
              >
                CONSULTORA SAS
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.55)",
                  maxWidth: 450,
                  lineHeight: 1.7,
                }}
              >
                Ingeniería fiscal aplicada a proyectos reales.
                Orden, proyección y estrategia para empresas que
                crecen.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                sx={{
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Contacto
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.55)",
                  mb: 1,
                }}
              >
                Email: a completar
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                Teléfono: a completar
              </Typography>
            </Grid>
          </Grid>

          <Divider
            sx={{
              borderColor: "rgba(255,255,255,0.1)",
              my: 5,
            }}
          />

          <Stack
            direction={{
              xs: "column",
              md: "row",
            }}
            justifyContent="space-between"
            spacing={2}
          >
            <Typography
              sx={{
                color: "rgba(255,255,255,0.4)",
                fontSize: "0.8rem",
              }}
            >
              © {new Date().getFullYear()} Quantum Consultora SAS
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.4)",
                fontSize: "0.8rem",
              }}
            >
              Orden · Proyección · Estrategia
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}