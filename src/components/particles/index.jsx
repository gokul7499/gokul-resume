import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Ensure this is correctly imported
import { useStyles } from "./styles/particles";

const CustomParticles = () => {
  const classes = useStyles();

  const particlesInit = useCallback(async (engine) => {
    console.log("Initializing tsParticles...");
    await loadSlim(engine); // Ensure correct initialization
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      canvasClassName={classes.Particles}
      options={{
        particles: {
          number: {
            value: 45,
            density: {
              enable: true,
              value_area: 900,
            },
          },
          shape: {
            type: "circle",
            stroke: {
              width: 1,
              color: "tomato",
            },
          },
          size: {
            value: 3,
            random: true,
            animation: {
              enable: true,
              speed: 10,
              size_min: 0.1,
              sync: true,
            },
          },
          opacity: {
            value: 1,
            random: true,
            animation: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: true,
            },
          },
        },
      }}
    />
  );
};

export default CustomParticles;
