import {
  Box,
  Container,
  Typography,
  IconButton,
  Link,
  Stack,
  Grid,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { appConfig } from "../../../config/appConfig";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "var(--primary)",
        color: "white",
        py: 2,
        borderTop: "1px solid rgba(255,255,255,.12)",
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={2}
          sx={{
            alignItems: "center",
          }}
        >
          {/* IZQUIERDA */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "center",
                  md: "flex-start",
                },
                alignItems: "center",
                height: "100%",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 600,
                  opacity: 0.9,
                }}
              >
                Quantum © 2026 · Todos los derechos reservados
              </Typography>
            </Box>
          </Grid>

          {/* CENTRO */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link
                href="https://linkedin.com"
                target="_blank"
                underline="none"
                color="inherit"
              >
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={{
                    px: 2,
                    py: 1,
                    borderRadius: 3,
                    transition: ".25s",
                    cursor: "pointer",

                    "&:hover": {
                      bgcolor: "rgba(255,255,255,.08)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <IconButton
                    size="small"
                    sx={{
                      color: "white",
                      p: 0,
                    }}
                  >
                    <LinkedInIcon fontSize="small" />
                  </IconButton>

                  <Typography variant="caption">
                    Seguinos en LinkedIn
                  </Typography>
                </Stack>
              </Link>
            </Box>
          </Grid>

          {/* DERECHA */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "center",
                  md: "flex-end",
                },
                alignItems: "center",
                height: "100%",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  opacity: 0.8,
                }}
              >
                Versión {appConfig.appVersion}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}