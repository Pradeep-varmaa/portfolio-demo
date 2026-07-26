"use client";

import { useEffect, useRef } from "react";

export default function CursorLight() {
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let animationId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      if (lightRef.current) {
        lightRef.current.style.transform = `translate3d(${currentX - 200}px, ${currentY - 200}px, 0)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      ref={lightRef}
      style={{
        position: "fixed",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        pointerEvents: "none",
        background: "radial-gradient(circle, rgba(99, 236, 248, 0.15) 0%, rgba(156, 47, 174, 0.1) 40%, transparent 70%)",
        filter: "blur(40px)",
        zIndex: 1,
        mixBlendMode: "screen",
        transition: "opacity 0.3s ease",
      }}
    />
  );
}
