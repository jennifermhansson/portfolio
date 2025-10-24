import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function Tsparticles() {
  const particlesInit = useCallback(async (engine) => {
    // Ladda in en lättare version av motorn
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 60,
        detectRetina: true,
        particles: {
          number: { value: 5 },
          color: { value: ["#297e6bff", "#369668ff"] },
          shape: { type: "circle" },
          opacity: {
            value: { min: 0.3, max: 0.9 },
            animation: { enable: true, speed: 1.2 },
          },
          size: {
            value: { min: 15, max: 150 },
            animation: { enable: true, speed: 2 },
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            outModes: "out",
          },
        },
        interactivity: {
          events: {
            onClick: { enable: true, mode: "repulse" },
            onHover: { enable: true, mode: "attract" },
          },
          modes: { bubble: { distance: 120, size: 8, duration: 1 } },
        },
      }}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
}

export default Tsparticles;
