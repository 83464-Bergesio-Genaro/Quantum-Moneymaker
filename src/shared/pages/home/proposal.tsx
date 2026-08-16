import { Box ,Grid,Container,Typography,Stack} from "@mui/material";
import { appConfig } from "../../../config/appConfig";
import { motion, AnimatePresence } from "framer-motion";

const baseUrl = appConfig.appURL;
interface StepItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
}

// 2. Tus datos originales
const stepsData = [
  ["01", "Analizarlo", "Entender como funciona hoy nos permite mejorar mañana", "/numbers/OneRaj.svg"],
  ["02", "Planificarlo", "Entender hacia dónde podés ir, una hoja de ruta para tus metas", "/numbers/TwoRaj.svg"],
  ["03", "Resolverlo", "Entendemos el problema mejoramos el futuro", "/numbers/ThreeRaj.svg"],
];

// 3. Transformar los datos al formato de objeto
const steps: StepItem[] = stepsData.map((step) => ({
  id: step[0], // Usamos el número como ID único
  number: step[0],
  title: step[1],
  description: step[2],
  image: step[3],
}));

const SmoothList = ({ items }: { items: StepItem[] }) => {
  return (
    <Grid size={{ xs: 12, md: 6 }}>
      <Grid container spacing={2}>
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
              <Grid
                container
                component={motion.div} // 1. El Grid actúa como el elemento animado
                size={12}
                initial={{ opacity: 0, y: 30 }} // Estado inicial del contenedor
                whileInView={{ opacity: 1, y: 0 }} // Estado final al entrar en vista
                viewport={{ 
                  once: true,
                  amount: 0.5 // Se activa al 50% de visibilidad del contenedor completo
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                sx={{ 
                  borderRadius: "16px",
                  height: "120px", 
                  border: "1px solid rgba(0,128,129,0.48)",
                  overflow: "hidden" // Recomendado para evitar desbordes durante la animación
                }}
              >
              <Grid size={{xs:3}}>
                <Box
                  component="img"
                  src={`${baseUrl}${item.image}`}
                  alt="Numeros Quantum"
                  sx={{height:"120px", backgroundOrigin:"center center",backgroundSize:"cover"}}
                />
              </Grid>
              <Grid size={{xs:9}} sx={{pt:2}}>
                <Typography
                  component={motion.h6}
                  variant="h6"
                  sx={{
                    color: "var(--captions)",
                    fontWeight: 700,
                    textAlign:"left",
                    letterSpacing: "0.12em",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "var(--text)",
                    fontWeight: 700,
                    textAlign:"left",
                    letterSpacing: "0.12em",
                  }}
                >
                  {item.description}
                </Typography>                
              </Grid>

            </Grid>
            
          ))}
        </AnimatePresence>
      </Grid>
    </Grid>
  );
};
function TitleMotion(){
  return(
    <Grid size={{ xs: 12, md: 6 }}>

      <Typography
        component={motion.h2}
        variant="h2"
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ 
          once: true,
          amount: 0.5 
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        sx={{
          color: "var(--captions)",
          fontWeight: 700,
          letterSpacing: "0.12em",
          mb: 2,
        }}
      >
        NUESTRA PROPUESTA
      </Typography>
      <Typography
        component={motion.h4}
        variant="h4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        sx={{
          color: "var(--primary)",
          fontFamily: '"Galano Grotesque",sans-serif',
          mb: 3,
        }}
      >
        Una mirada integral para decisiones complejas.
      </Typography>

      {/* Animación para el Párrafo */}
      <Typography
        component={motion.p}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }} 
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
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
  )
}
export default function Proposal(){

  return(
    <Box
        component="section"
        sx={{
          backgroundColor: "var(--secondary)",
          py: {
            xs: 6,
            md: 8,
          },
        }}
      >
        <Container maxWidth="lg">
          <Grid container size={12} spacing={4}>
            <TitleMotion />
            <SmoothList items={steps}/>
          </Grid>
        </Container>
      </Box>
  )
}