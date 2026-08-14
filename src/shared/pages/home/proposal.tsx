import { Box ,Grid,Container,Typography,Stack} from "@mui/material";
import { appConfig } from "../../../config/appConfig";
import { motion, AnimatePresence } from "framer-motion";

interface ItemProps {
  id: number;
  text: string;
  description: string;
  image: string;
}
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
  ["01", "ORDEN", "Entender dónde estás.", "/numbers/OneRaj.svg"],
  ["02", "PROYECCIÓN", "Entender hacia dónde podés ir.", "/numbers/TwoRaj.svg"],
  ["03", "ESTRATEGIA", "Definir cómo llegar.", "/numbers/ThreeRaj.svg"],
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
    <div className="flex flex-col gap-4 max-w-2xl mx-auto p-4">
      <AnimatePresence mode="popLayout">
        {items.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.9 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 150 }}
            // Estilos de la tarjeta
            className="relative overflow-hidden rounded-xl shadow-lg p-6 flex items-center gap-6"
            style={{ backgroundColor: "var(--primary)", color: "white" }} 
          >
            {/* Contenedor de la imagen para controlar el tamaño */}
            <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-white/10 rounded-full">
              <img 
                src={item.image} 
                alt={item.number} 
                className="w-10 h-10 object-contain" // Tamaño reducido y controlado
              />
            </div>
            
            {/* Contenido de texto */}
            <div>
              <h3 className="font-bold text-xl tracking-wide">{item.title}</h3>
              <p className="text-white/80 mt-1 text-sm leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

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
          <Grid
            container
            spacing={8}
            alignItems="center"
          >
            <Grid size={{ xs: 12, md: 12 }}>
              <Typography
              variant="h2"
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
                variant="h4"
                sx={{
                  color: "var(--primary)",
                  fontFamily:'"Galano Grotesque",sans-serif',
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
            <Grid size={{ xs: 12, md: 12 }}>
            
              <Stack spacing={2}>
                <SmoothList items={steps}>

                </SmoothList>
              </Stack>
            </Grid>
             
          </Grid>
        </Container>
      </Box>
  )
}