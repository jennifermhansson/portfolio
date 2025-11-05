import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";

function BackgroundParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: { color: "#1b1b1b" },
        particles: {
          number: { value: 70, density: { enable: true, area: 900 } },
          color: { value: "#1f866aff" },
          opacity: { value: 0.3 },
          size: { value: 1.7 },
          move: { enable: true, speed: 0.2 },
          links: { enable: false },
        },
      }}
    />
  );
}

export default BackgroundParticles;
