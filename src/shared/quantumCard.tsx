import { useState } from "react";
import {
    Card,
    Typography,
    Button,
    Box
} from "@mui/material";

import { motion } from "framer-motion";

interface Props {
    question: string;
    answer: string;
}

export default function QuantumCard({
    question,
    answer
}: Props) {

    const [hover, setHover] = useState(false);

    return (

        <Card

            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}

            sx={{
                position: "relative",
                overflow: "hidden",
                bgcolor: "var(--primary)",
                color: "white",
                borderRadius: 4,
                width: 350,
                height: 240,
                cursor: "pointer",
                boxShadow: "0 15px 40px rgba(0,0,0,.35)",
                transition: ".35s",
                "&:hover":{

                    boxShadow:"0 25px 60px rgba(0,255,255,.25)"
                }

            }}
        >
            {/* Garabatos */}
            <motion.div
                animate={{
                    rotate: hover ? 0 : 360
                }}
                transition={{
                    duration:15,
                    repeat:Infinity,
                    ease:"linear"

                }}
                style={{
                    position:"absolute",
                    inset:-80,
                    opacity:hover ? .05 :.18
                }}
            >
                <svg
                    width="500"
                    height="500"
                >
                    <path
                        d="
                        M20 150
                        C120 10,
                        240 280,
                        420 120
                        "
                        stroke="#00E5FF"
                        strokeWidth="3"
                        fill="transparent"
                    />

                    <path
                        d="
                        M0 260
                        C160 40,
                        300 450,
                        500 180
                        "
                        stroke="#7C4DFF"
                        strokeWidth="3"
                        fill="transparent"
                    />

                </svg>

            </motion.div>
            <Box

                sx={{
                    height:"100%",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    px:2,
                    textAlign:"center",
                    position:"relative",
                    zIndex:2
                }}
            >
                {
                    !hover ?
                    (
                        <motion.div
                            initial={{opacity:1}}
                            animate={{
                                opacity:1,
                                y:[0,-2,0,2,0]
                            }}
                            transition={{
                                duration:2,
                                repeat:Infinity
                            }}
                        >
                            <Typography
                                variant="h5"
                                fontWeight={700}
                            >
                                {question}
                            </Typography>
                        </motion.div>
                    ):(
                        <motion.div
                            initial={{
                                opacity:0,
                                scale:.8
                            }}
                            animate={{

                                opacity:1,
                                scale:1
                            }}
                        >
                            <Typography
                                variant="h5"
                                color="#00E5FF"
                                gutterBottom
                            >✔ </Typography>
                            <Typography
                                variant="h6"
                            > {answer}
                            </Typography>
                            <Button
                            variant="contained"
                                sx={{
                                    mt:1,
                                    bgcolor:"#00BCD4",
                                    color:"black",
                                    fontWeight:700,
                                    "&:hover":{
                                        bgcolor:"#4DD0E1"
                                    }
                                }}
                            >
                                Conocer más
                            </Button>
                        </motion.div>
                    )
                }
            </Box>
        </Card>
    );

}