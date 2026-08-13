import { useState } from "react";

import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";

import {appConfig} from "../../../config/appConfig"


const team = [
  {
    id: "maria",
    name: "María del Carmen Sciuto",
    role: "CEO / Dirección de Operaciones y Finanzas",
    description:
      "Lidera la dirección de operaciones y finanzas, aportando experiencia y una mirada estratégica para estructurar y acompañar cada proyecto.",
    areas: [
      "Operaciones",
      "Finanzas",
      "Estrategia",
    ],
    image: "/profiles/profile1.jpg",
    icon: <AccountBalanceOutlinedIcon />,
    doodle: "finance",
  },

  {
    id: "rocio-karen",
    name: "Rocío Karen Prota Sciuto",
    role: "Dirección Creativa y Estrategia de Innovación",
    description:
      "Impulsa la creatividad y la innovación, transformando ideas y necesidades del negocio en nuevas oportunidades y estrategias.",
    areas: [
      "Creatividad",
      "Innovación",
      "Estrategia",
    ],
    image: "/profiles/profile2.jpg",
    icon: <AutoGraphOutlinedIcon />,
    doodle: "innovation",
  },

  {
    id: "rocio-miranda",
    name: "Rocio Miranda",
    role: "Dirección de Análisis Económico, Marketing y Comunicación",
    description:
      "Integra el análisis económico, el marketing y la comunicación para comprender el contexto y convertir información en decisiones.",
    areas: [
      "Análisis",
      "Marketing",
      "Comunicación",
    ],
    image: "/profiles/profile3.jpg",
    icon: <CampaignOutlinedIcon />,
    doodle: "communication",
  },
];


function TeamDoodle({
  type,
  active,
}: {
  type: string;
  active: boolean;
}) {
  return (
    <Box
      sx={{
        position: "absolute",
        inset: -25,
        pointerEvents: "none",

        opacity: active ? 0 : 0.65,

        transform: active
          ? "scale(1.15) rotate(8deg)"
          : "scale(1) rotate(0deg)",

        transition:
          "opacity 500ms ease, transform 700ms ease",

        zIndex: 0,

        // Animaciones generales de los garabatos
        "& .doodle-float": {
          animation:
            "doodleFloat 5s ease-in-out infinite",
          transformOrigin: "center",
        },

        "& .doodle-float-slow": {
          animation:
            "doodleFloatSlow 7s ease-in-out infinite",
          transformOrigin: "center",
        },

        "& .doodle-rotate": {
          animation:
            "doodleRotate 12s linear infinite",
          transformOrigin: "center",
        },

        "& .doodle-pulse": {
          animation:
            "doodlePulse 4s ease-in-out infinite",
          transformOrigin: "center",
        },

        "@keyframes doodleFloat": {
          "0%": {
            transform:
              "translate(0px, 0px) rotate(0deg)",
          },

          "50%": {
            transform:
              "translate(5px, -8px) rotate(2deg)",
          },

          "100%": {
            transform:
              "translate(0px, 0px) rotate(0deg)",
          },
        },

        "@keyframes doodleFloatSlow": {
          "0%": {
            transform:
              "translate(0px, 0px)",
          },

          "50%": {
            transform:
              "translate(-7px, 6px)",
          },

          "100%": {
            transform:
              "translate(0px, 0px)",
          },
        },

        "@keyframes doodleRotate": {
          "0%": {
            transform:
              "rotate(0deg)",
          },

          "100%": {
            transform:
              "rotate(360deg)",
          },
        },

        "@keyframes doodlePulse": {
          "0%": {
            opacity: 0.45,
            transform:
              "scale(1)",
          },

          "50%": {
            opacity: 0.9,
            transform:
              "scale(1.08)",
          },

          "100%": {
            opacity: 0.45,
            transform:
              "scale(1)",
          },
        },
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* =====================================================
            FINANZAS
        ===================================================== */}

        {type === "finance" && (
          <>
            <path
              className="doodle-float"
              d="M55 370 C25 330 70 300 48 260 C25 215 70 185 55 140"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="7 9"
            />

            <path
              className="doodle-float-slow"
              d="M325 380 C360 335 315 300 345 255 C370 215 325 180 345 125"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="6 8"
            />

            <path
              className="doodle-rotate"
              d="M75 90 L115 65 L145 85"
              stroke="currentColor"
              strokeWidth="2"
            />

            <path
              className="doodle-float"
              d="M270 420 L305 390 L335 405"
              stroke="currentColor"
              strokeWidth="2"
            />

            <circle
              className="doodle-pulse"
              cx="90"
              cy="110"
              r="8"
              stroke="currentColor"
              strokeWidth="2"
            />

            <circle
              className="doodle-pulse"
              cx="310"
              cy="95"
              r="6"
              stroke="currentColor"
              strokeWidth="2"
            />
          </>
        )}

        {/* =====================================================
            INNOVACIÓN
        ===================================================== */}

        {type === "innovation" && (
          <>
            <path
              className="doodle-float-slow"
              d="M65 120 C20 170 80 205 40 250 C5 290 65 325 45 380"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="8 8"
            />

            <path
              className="doodle-float"
              d="M335 110 C375 155 320 195 355 240 C385 285 325 320 350 375"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="6 10"
            />

            <path
              className="doodle-float"
              d="M200 45 L200 75"
              stroke="currentColor"
              strokeWidth="2"
            />

            <path
              className="doodle-rotate"
              d="M175 60 L155 45"
              stroke="currentColor"
              strokeWidth="2"
            />

            <path
              className="doodle-rotate"
              d="M225 60 L245 45"
              stroke="currentColor"
              strokeWidth="2"
            />

            <circle
              className="doodle-pulse"
              cx="200"
              cy="40"
              r="7"
              stroke="currentColor"
              strokeWidth="2"
            />
          </>
        )}

        {/* =====================================================
            COMUNICACIÓN
        ===================================================== */}

        {type === "communication" && (
          <>
            <path
              className="doodle-float"
              d="M45 160 C100 100 135 180 185 120 C235 60 285 150 350 90"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="7 7"
            />

            <path
              className="doodle-float-slow"
              d="M50 330 C100 270 145 350 195 290 C250 225 300 320 350 255"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="6 9"
            />

            <circle
              className="doodle-pulse"
              cx="75"
              cy="145"
              r="8"
              stroke="currentColor"
              strokeWidth="2"
            />

            <circle
              className="doodle-pulse"
              cx="325"
              cy="105"
              r="6"
              stroke="currentColor"
              strokeWidth="2"
            />

            <circle
              className="doodle-pulse"
              cx="90"
              cy="345"
              r="6"
              stroke="currentColor"
              strokeWidth="2"
            />

            <circle
              className="doodle-pulse"
              cx="320"
              cy="260"
              r="8"
              stroke="currentColor"
              strokeWidth="2"
            />
          </>
        )}
      </svg>
    </Box>
  );
}

function TeamCard({
  person,
  selected,
  onSelect,
  isMobile,
}: {
  person: (typeof team)[number];
  selected: boolean;
  onSelect: () => void;
  isMobile: boolean;
}) {
  return (
    <Box
      component="button"
      onClick={onSelect}
      sx={{
        position: "relative",
        width: "100%",
        minHeight: {
          xs: 440,
          md: 500,
        },
        border: "none",
        background: "transparent",
        cursor: "pointer",
        p: {
          xs: 1,
          md: 2,
        },
        color: "inherit",
        textAlign: "center",
        transition:
          "transform 500ms cubic-bezier(.2,.8,.2,1), opacity 500ms ease",
        transform: selected
          ? "translateY(-10px)"
          : "translateY(0)",
        opacity:
          !isMobile && selected === false
            ? 0.75
            : 1,
        "&:hover": {
          transform: "translateY(-10px)",
          opacity: 1,
        },

        "&:focus-visible": {
          outline:
            "3px solid #0096c8",
          outlineOffset: 4,
          borderRadius: 4,
        },
      }}
    >
      <TeamDoodle
        type={person.doodle}
        active={selected}
      />

      {/* CONTENEDOR FOTO */}

      <Box
        sx={{
          position: "relative",
          width: {
            xs: 230,
            sm: 250,
            md: 270,
          },

          height: {
            xs: 300,
            sm: 330,
            md: 360,
          },
          mx: "auto",
          overflow: "hidden",
          borderRadius:
            "140px 140px 25px 25px",
          backgroundColor:
            "rgba(0,128,129,0.06)",
          border: selected
            ? "2px solid #018081"
            : "1px solid rgba(1,128,129,0.18)",
          boxShadow: selected
            ? "0 25px 70px rgba(0,128,129,0.28)"
            : "0 15px 45px rgba(0,40,50,0.12)",
          transition:
            "all 500ms ease",
          zIndex: 1,
        }}
      >
        <Box
          component="img"
          src={`${appConfig.appURL}${person.image}`}
          alt={person.name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: selected
            ? "grayscale(0)"
            : "grayscale(100%)",

            transform: selected
              ? "scale(1.03)"
              : "scale(1)",

            transition:
              "filter 700ms ease, transform 800ms ease",
          }}
        />

        {/* HALO */}

        <Box
          sx={{
            position: "absolute",
            inset: 0,

            background:
              selected
                ? "linear-gradient(180deg, transparent 50%, rgba(0,128,129,0.20))"
                : "linear-gradient(180deg, transparent 55%, rgba(0,10,15,0.15))",

            transition:
              "background 500ms ease",
          }}
        />
      </Box>

      {/* INFORMACIÓN */}

      <Box
        sx={{
          position: "relative",
          zIndex: 2,

          mt: -1,
          px: 1,
        }}
      >
        <Typography
          component="h3"
          sx={{
            mt: 2,

            fontSize: {
              xs: "1rem",
              md: "1.15rem",
            },
            lineHeight: 1.2,
            fontWeight: 800,
            color: "var(--primary)",
          }}
        >
          {person.name}
        </Typography>

        <Typography
          sx={{
            mt: 1,

            fontSize: {
              xs: "0.7rem",
              md: "0.75rem",
            },

            lineHeight: 1.4,

            fontWeight: 600,

            color: "var(--captions)",
          }}
        >
          {person.role}
        </Typography>

        {/* DESCRIPCIÓN */}

        {selected && (
          <Box
            sx={{
              mt: 2,

              animation:
                "teamDescriptionIn 400ms ease",

              "@keyframes teamDescriptionIn": {
                from: {
                  opacity: 0,
                  transform:
                    "translateY(8px)",
                },

                to: {
                  opacity: 1,
                  transform:
                    "translateY(0)",
                },
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "0.78rem",
                lineHeight: 1.55,
                color: "#536568",
                maxWidth: 350,
                mx: "auto",
              }}
            >
              {person.description}
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 1,

                mt: 1.5,

                flexWrap: "wrap",
              }}
            >
              {person.areas.map(
                (area) => (
                  <Box
                    key={area}
                    sx={{
                      px: 1.2,
                      py: 0.5,

                      borderRadius: 10,

                      backgroundColor:
                        "var(--secondary)",

                      color:
                        "var(--primary)",

                      fontSize:
                        "0.62rem",

                      fontWeight: 700,
                    }}
                  >
                    {area}
                  </Box>
                )
              )}
            </Box>
          </Box>
        )}

        {/* INDICADOR */}

        {!selected && (
          <Typography
            sx={{
              mt: 1.5,

              fontSize: "0.65rem",

              fontWeight: 600,

              color:
                "var(--captions)",

              opacity: 0.9,
            }}
          >
            {isMobile
              ? "Tocá para conocer más →"
              : "Conocé más →"}
          </Typography>
        )}
      </Box>
    </Box>
  );
}


export default function AboutUs() {
  const theme = useTheme();

  const isMobile = useMediaQuery(
    theme.breakpoints.down("sm")
  );

  const [selectedPerson, setSelectedPerson] =
    useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelectedPerson(
      selectedPerson === id
        ? null
        : id
    );
  };

  return (
    <Box
      component="main"
      sx={{
        overflow: "hidden",
        backgroundColor:
          "var(--background)",
      }}
    >
      
      <Box
        component="section"
        sx={{
          py: {
            xs: 6,
          },
          backgroundColor:
            "var(--secondary)",
        }}
      >
        <Container
          maxWidth="xl"
        >
            <Box
            sx={{
              textAlign: "center",
              mb: 2,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color:
                  "var(--primary)",
                letterSpacing:
                  "-0.04em",
              }}
            >
              Distintas
              especialidades.
            </Typography>
            <Typography
            variant="h6"
              sx={{
                color:
                  "var(--captions)",
                letterSpacing:
                  "0.3em",
                mb: 2,
              }}
            >
              UNA MISMA VISIÓN
            </Typography>
          </Box>
          <Grid
            container
            spacing={{
              xs: 3,
              md: 4,
            }}
            justifyContent="center"
            alignItems="flex-start"
          >
            {team.map((person) => (
              <Grid
                key={person.id}
                size={{
                  xs: 12,
                  sm: 4,
                }}
              >
                <TeamCard
                  person={person}
                  selected={
                    selectedPerson ===
                    person.id
                  }
                  onSelect={() =>
                    handleSelect(
                      person.id
                    )
                  }
                  isMobile={
                    isMobile
                  }
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}