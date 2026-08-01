import { useEffect, useMemo, useRef, useState } from "react";
import { Box, Paper, Typography } from "@mui/material";

interface Planet {
    question: string;
    answer: string;
    radius: number;
    speed: number;      // grados por segundo
    angle: number;
}

interface SolarSystemProps {
    logo: string;
}

export default function SolarSystem({ logo }: SolarSystemProps) {

    const [time, setTime] = useState(0);

    const animationRef = useRef<number>(1);

    useEffect(() => {

        let last = performance.now();

        const animate = (now: number) => {

            const delta = now - last;

            last = now;

            setTime((t) => t + delta);

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationRef.current!);

    }, []);

    const planets = useMemo<Planet[]>(() => [

        {
            question: "¿Mis proyectos son viables?",
            answer: "Evaluamos su rentabilidad.",
            radius: 200,
            speed: 0.015,
            angle: 0
        },

        {
            question: "¿Estoy pagando mis impuestos?",
            answer: "Revisamos toda tu situación fiscal.",
            radius: 200,
            speed: 0.015,
            angle: 180
        },

        {
            question: "¿Cómo regularizo mis deudas?",
            answer: "Diseñamos un plan financiero.",
            radius:300,
            speed: -0.010,
            angle: 45
        },

        {
            question: "¿Cómo aumentar mis ganancias?",
            answer: "Detectamos oportunidades.",
            radius: 300,
            speed: -0.010,
            angle: 225
        },

        {
            question: "¿Estoy logrando mis metas?",
            answer: "Medimos indicadores clave.",
            radius: 400,
            speed: 0.006,
            angle: 90
        },

        {
            question: "¿Cómo invertir mejor?",
            answer: "Creamos una estrategia.",
            radius: 400,
            speed: 0.006,
            angle: 280
        }

    ], []);

    return (

        <Box
            sx={{
                position: "relative",
                width: "100%",
                height: {
                    xs: 600,
                    md: 900
                },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
            }}
        >

            {/* ORBITAS */}

            {[200,300,400].map((radius)=>(
                <Box
                    key={radius}
                    sx={{
                        position:"absolute",
                        width:radius*2,
                        height:radius*2,
                        borderRadius:"50%",
                        border:"1px solid var(--captions)"
                    }}
                />
            ))}

            {/* PLANETAS */}

            {planets.map((planet,index)=>{

                const angle =
                    (planet.angle + time * planet.speed) * Math.PI / 180;

                const x =
                    Math.cos(angle) * planet.radius;

                const y =
                    Math.sin(angle) * planet.radius;

                return(

                    <PlanetCard
                        key={index}
                        x={x}
                        y={y}
                        question={planet.question}
                        answer={planet.answer}
                    />

                )

            })}

            {/* LOGO */}

            <Box
                sx={{
                    position:"absolute",
                    width:200,
                    height:200,
                    borderRadius:"50%",
                    background:"rgba(255, 255, 255, 0.05)",
                    backdropFilter:"blur(5px)",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    boxShadow:"0 0 80px rgba(0,180,255,.3)"
                }}
            >

                <Box
                    component="img"
                    src={logo}
                    sx={{
                        width:180,
                        userSelect:"none",
                        pointerEvents:"none"
                    }}
                />

            </Box>

        </Box>

    );

}

interface PlanetCardProps{

    x:number;
    y:number;

    question:string;
    answer:string;

}

function PlanetCard({
    x,
    y,
    question,
    answer
    }:PlanetCardProps){

    const [hover,setHover] = useState(false);

    return(

        <Paper
            elevation={0}
            onMouseEnter={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}
            sx={{

                position:"absolute",
                left:"50%",
                top:"50%",
                transform:`translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                px:3,
                py:1.5,
                width:220,
                borderRadius:8,
                cursor:"pointer",
                transition:"all .35s",
                backdropFilter:"blur(12px)",
                background:"var(--primary)",
                color:"white",
                border:"1px solid rgba(255,255,255,.12)",

                "&:hover":{
                    transform:`translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1.08)`,
                    boxShadow:"0 0 40px rgba(0,180,255,.35)",
                    background:"var(--secondary)",
                    color:"black"
                }
            }}
        >
            <Typography

                align="center"
                fontWeight={700}
            >
                {hover ? answer : question}
            </Typography>

        </Paper>

    )

}