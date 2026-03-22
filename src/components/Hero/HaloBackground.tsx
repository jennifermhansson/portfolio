import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import HALO from 'vanta/dist/vanta.halo.min';

const HaloBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const vantaRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    vantaRef.current = HALO({
      el: containerRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      backgroundColor: 0x9090b,
      xOffset: -0.1,
    });

    return () => {
      if (vantaRef.current && typeof vantaRef.current.destroy === 'function') {
        vantaRef.current.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="halo-bg"
    />
  );
};

export default HaloBackground;
