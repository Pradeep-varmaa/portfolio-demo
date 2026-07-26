"use client";

import { useEffect, useRef } from "react";
import styles from "./style.module.css";

export default function CursorLight() {
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", move);

    const animate = () => {
      currentX += (mouseX - currentX) * 0.09;
      currentY += (mouseY - currentY) * 0.09;

      if (lightRef.current) {
        lightRef.current.style.transform = `
          translate3d(
            ${currentX - 175}px,
            ${currentY - 175}px,
            0
          )
        `;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return <div ref={lightRef} className={styles.sunlight} />;
}