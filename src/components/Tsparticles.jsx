import { tsParticles } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

function Tsparticles() {
  async function startParticles() {
    await loadSlim(tsParticles);

    await tsParticles.load({
      id: "tsparticles",
      options: {
        fullScreen: { enable: false }, // ❗ Viktigt
        background: { color: "  transparent" },
        fpsLimit: 60,
        particles: {
          number: { value: 3, max: 10 },
          color: { value: ["#297e6bff", "#369668ff", "#6596c8ff"] },
          shape: { type: "circle" },
          opacity: {
            value: { min: 0.3, max: 0.9 },
            animation: { enable: true, speed: 1.5 },
          },
          size: {
            value: { min: 15, max: 40 },
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
        detectRetina: true,
      },
    });
  }

  startParticles();
}
export default Tsparticles;
