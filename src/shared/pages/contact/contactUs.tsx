import { useState } from "react";

import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MailOutlineIcon from "@mui/icons-material/MailOutlineOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


interface ContactForm {
  nombre: string;
  empresa: string;
  cargo: string;
  email: string;
  telefono: string;
  momento: string;
  desafio: string;
  situacion: string;
}


const initialForm: ContactForm = {
  nombre: "",
  empresa: "",
  cargo: "",
  email: "",
  telefono: "",
  momento: "",
  desafio: "",
  situacion: "",
};

export default function ContactUs() {

  return (
    <Box
      component="main"
      sx={{
        minHeight:
          "calc(100vh - 80px)",
        backgroundColor:
          "var(--background)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          backgroundColor:
            "var(--secondary)",
          filter: "blur(100px)",
          opacity: 0.65,
          top: -220,
          right: -180,
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 350,
          height: 350,
          borderRadius: "50%",
          backgroundColor:
            "rgba(0,150,200,0.08)",
          filter: "blur(90px)",
          bottom: -180,
          left: -150,
          pointerEvents: "none",
        }}
      />
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 1,
          py: {
            xs: 6
          },
        }}
      >
        <ContactHero/>
        <ContactForm/>
        <ContactInfo/>
      </Container>
      
    </Box>
    
  );
}
function ContactForm(){
const [form, setForm] =
    useState<ContactForm>(initialForm);
  const [sending, setSending] =
    useState(false);
  const handleChange = (
    field: keyof ContactForm,
    value: string
  ) => {

    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

  };


  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {

    event.preventDefault();

    setSending(true);

    try {
      console.log("Formulario:", form);

      await new Promise(
        (resolve) =>
          setTimeout(resolve, 1000)
      );

      alert(
        "¡Gracias por contactarnos! Nos comunicaremos con vos a la brevedad."
      );

      setForm(initialForm);

    } catch (error) {

      console.error(
        "Error enviando formulario:",
        error
      );

    } finally {

      setSending(false);

    }
  };

  return(
    <Grid
        size={{
          xs: 12
        }}
        sx={{my:8}}
      >

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            backgroundColor:
              "rgba(255,255,255,0.65)",

            border:
              "1px solid rgba(1,128,129,0.14)",

            borderRadius: 4,

            p: {
              xs: 3,
              sm: 4,
              md: 5,
            },

            boxShadow:
              "0 25px 70px rgba(0,40,50,0.10)",

            backdropFilter:
              "blur(10px)",
          }}
        >

          <Typography
            variant="h5"
            sx={{
              color:
                "var(--primary)",

              fontWeight: 800,

              mb: 1,
            }}
          >
            Contanos sobre tu empresa
          </Typography>

          <Typography
            sx={{
              color:
                "#536568",
              mb: 4,
            }}
          >
            Esperamos tu consulta y buscamos ayudarte a completar tus metas!
          </Typography>


          {/* =============================================
              DATOS PERSONALES
          ============================================= */}

          <Grid
            container
            spacing={2.5}
          >

            {/* NOMBRE */}

            <Grid
              size={{
                xs: 12,
                sm: 6,
              }}
            >
              <TextField
                fullWidth
                required
                label="Nombre y apellido"
                value={form.nombre}
                onChange={(e) =>
                  handleChange(
                    "nombre",
                    e.target.value
                  )
                }
              />
            </Grid>


            {/* EMPRESA */}

            <Grid
              size={{
                xs: 12,
                sm: 6,
              }}
            >
              <TextField
                fullWidth
                label="Empresa"
                value={form.empresa}
                onChange={(e) =>
                  handleChange(
                    "empresa",
                    e.target.value
                  )
                }
              />
            </Grid>


            {/* CARGO */}

            <Grid
              size={{
                xs: 12,
                sm: 6,
              }}
            >
              <TextField
                fullWidth
                label="Cargo"
                value={form.cargo}
                onChange={(e) =>
                  handleChange(
                    "cargo",
                    e.target.value
                  )
                }
              />
            </Grid>


            {/* EMAIL */}

            <Grid
              size={{
                xs: 12,
                sm: 6,
              }}
            >
              <TextField
                fullWidth
                required
                type="email"
                label="Email"
                value={form.email}
                onChange={(e) =>
                  handleChange(
                    "email",
                    e.target.value
                  )
                }
              />
            </Grid>


            {/* TELÉFONO */}

            <Grid
              size={{
                xs: 12,
                sm: 6,
              }}
            >
              <TextField
                fullWidth
                label="Teléfono"
                value={form.telefono}
                onChange={(e) =>
                  handleChange(
                    "telefono",
                    e.target.value
                  )
                }
              />
            </Grid>


            {/* =========================================
                MOMENTO ACTUAL
            ========================================= */}

            <Grid
              size={{
                xs: 12,
                sm: 6,
              }}
            >

              <FormControl
                fullWidth
                required
              >

                <InputLabel>
                  Momento actual
                </InputLabel>

                <Select
                  value={form.momento}
                  label="Momento actual"
                  onChange={(e) =>
                    handleChange(
                      "momento",
                      e.target.value
                    )
                  }
                >

                  <MenuItem value="crecimiento">
                    Crecimiento
                  </MenuItem>

                  <MenuItem value="estabilidad">
                    Estabilidad
                  </MenuItem>

                  <MenuItem value="crisis">
                    Crisis
                  </MenuItem>

                  <MenuItem value="reorganizacion">
                    Reorganización
                  </MenuItem>

                </Select>

              </FormControl>

            </Grid>


            {/* =========================================
                DESAFÍO
            ========================================= */}

            <Grid
              size={{
                xs: 12,
              }}
            >

              <FormControl
                fullWidth
                required
              >

                <InputLabel>
                  Principal desafío
                </InputLabel>

                <Select
                  value={form.desafio}
                  label="Principal desafío"
                  onChange={(e) =>
                    handleChange(
                      "desafio",
                      e.target.value
                    )
                  }
                >

                  <MenuItem value="fiscal">
                    Fiscal
                  </MenuItem>

                  <MenuItem value="fiduciario">
                    Fiduciario
                  </MenuItem>

                  <MenuItem value="laboral">
                    Laboral
                  </MenuItem>

                  <MenuItem value="financiero">
                    Financiero
                  </MenuItem>

                  <MenuItem value="estructural">
                    Estructural
                  </MenuItem>

                </Select>

              </FormControl>

            </Grid>


            {/* =========================================
                SITUACIÓN
            ========================================= */}

            <Grid
              size={{
                xs: 12,
              }}
            >

              <TextField
                fullWidth
                required
                multiline
                minRows={5}
                label="Contanos brevemente tu situación"
                placeholder="¿Qué está pasando actualmente en tu empresa y qué necesitás resolver?"
                value={form.situacion}
                onChange={(e) =>
                  handleChange(
                    "situacion",
                    e.target.value
                  )
                }
              />

            </Grid>


            {/* =========================================
                BOTÓN
            ========================================= */}

            <Grid
              size={{
                xs: 12,
              }}
            >

              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                disabled={sending}
                endIcon={
                  <ArrowForwardIcon />
                }
                sx={{
                  mt: 1,

                  py: 1.6,

                  borderRadius: 30,

                  backgroundColor:
                    "var(--primary)",

                  fontWeight: 700,

                  fontSize:
                    "0.95rem",

                  "&:hover": {
                    backgroundColor:
                      "#006969",
                  },

                  "&:disabled": {
                    backgroundColor:
                      "rgba(1,128,129,0.45)",
                  },
                }}
              >
                {sending
                  ? "Enviando..."
                  : "Enviar consulta"}
              </Button>

            </Grid>
          </Grid>
          
        </Box>
      </Grid>
  )
}
function ContactInfo(){
  return(
    <>
      <Grid
          size={{
            xs: 12
          }}
        >

          <Box
            sx={{
              position:
                "sticky",
              top: 100,
            }}
          >

            <Typography
              variant="h5"
              sx={{
                color:
                  "var(--primary)",
                mb: 2,
              }}
            >
              Empecemos una
              conversación.
            </Typography>

            <Typography
              sx={{
                color:
                  "#536568",
                lineHeight: 1.7,
                mb: 4,
              }}
            >
              No importa en qué etapa
              se encuentre tu empresa.
              Podemos ayudarte a ordenar
              la situación actual y pensar
              los próximos pasos.
            </Typography>
          </Box>
        </Grid>
      <Grid container size={12}>
        <Grid size={{xs:12,md:4}}>
          <Box
            sx={{
              display: "flex",
              alignItems:
                "center",
              ml:15,
              mb: 3,
            }}
          >
            <Box
              sx={{
                width: 45,
                height: 45,
                borderRadius: "50%",
                display: "flex",
                alignItems:
                  "center",
                justifyContent:
                  "center",
                backgroundColor:
                  "var(--secondary)",
                color:
                  "var(--captions)",
              }}
            >
              <MailOutlineIcon />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontWeight: 800,
                  letterSpacing:
                    "0.1em",
                  color:
                    "var(--captions)",
                }}
              >
                EMAIL
              </Typography>
              <Typography
                sx={{
                  color:
                    "var(--primary)",

                  fontWeight: 600,
                }}
              >
                contacto@quantum.com
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid size={{xs:12,md:4}}>
          <Box
            component="a"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              ml:10,
              display: "flex",
              alignItems:
                "center",
              gap: 2,
              textDecoration:
                "none",
            }}
          >
            <Box
              sx={{
                width: 45,
                height: 45,
                borderRadius: "50%",
                display: "flex",
                alignItems:
                  "center",
                justifyContent:
                  "center",
                backgroundColor:
                  "var(--secondary)",
                color:
                  "var(--captions)",
              }}
            >
              <LinkedInIcon />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontWeight: 800,
                  letterSpacing:
                    "0.1em",
                  color:
                    "var(--captions)",
                }}
              >
                LINKEDIN
              </Typography>

              <Typography
                sx={{
                  color:
                    "var(--primary)",
                  fontWeight: 600,
                }}
              >
                Quantum Consultora
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid size={{xs:12,md:4}}>
          <Box
            sx={{
              display: "flex",
              alignItems:
                "center",
              gap: 2,
              mb: 3,
              ml:10,
            }}
          >
            <Box
              sx={{
                width: 45,
                height: 45,
                borderRadius: "50%",
                display: "flex",
                alignItems:
                  "center",
                justifyContent:
                  "center",
                backgroundColor:
                  "var(--secondary)",
                color:
                  "var(--captions)",
              }}
            >
              <PhoneOutlinedIcon />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontWeight: 800,
                  letterSpacing:
                    "0.1em",
                  color:
                    "var(--captions)",
                }}
              >
                TELÉFONO
              </Typography>

              <Typography
                sx={{
                  color:
                    "var(--primary)",
                  fontWeight: 600,
                }}
              >
                +54 9 11 XXXX XXXX
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
function ContactHero(){
  return(
    <Grid container size={12} spacing={2}>
      <Grid size={{xs:12}}>
        <Typography
            variant="h1"
            sx={{
              color:
                "var(--primary)",
            }}
          >
            Hablemos sobre
            tu proyecto.
          </Typography>
      </Grid>
      
    </Grid>
  )
}