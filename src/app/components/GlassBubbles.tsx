"use client";

import { useEffect, useRef } from "react";

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  wobbleSpeed: number;
  wobbleAmount: number;
}

export default function GlassBubbles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let bubbles: Bubble[] = [];
    const BUBBLE_COUNT = 14;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createBubble = (id: number, startFromBottom = false): Bubble => ({
      id,
      x: Math.random() * canvas.width,
      y: startFromBottom ? canvas.height + Math.random() * 200 : Math.random() * canvas.height,
      size: Math.random() * 22 + 8,
      speed: Math.random() * 0.6 + 0.2,
      opacity: Math.random() * 0.25 + 0.08,
      wobbleSpeed: Math.random() * 0.02 + 0.005,
      wobbleAmount: Math.random() * 30 + 10,
    });

    const init = () => {
      resize();
      bubbles = Array.from({ length: BUBBLE_COUNT }, (_, i) => createBubble(i));
    };

    const drawBubble = (bubble: Bubble, time: number) => {
      const wobbleX = Math.sin(time * bubble.wobbleSpeed + bubble.id) * bubble.wobbleAmount;
      const x = bubble.x + wobbleX;
      const y = bubble.y;

      // Glassmorphism bubble
      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, bubble.size, 0, Math.PI * 2);

      // Gradient for glass effect
      const gradient = ctx.createRadialGradient(
        x - bubble.size * 0.3,
        y - bubble.size * 0.3,
        0,
        x,
        y,
        bubble.size
      );
      gradient.addColorStop(0, `rgba(255, 255, 255, ${bubble.opacity * 1.2})`);
      gradient.addColorStop(0.5, `rgba(99, 236, 248, ${bubble.opacity * 0.5})`);
      gradient.addColorStop(1, `rgba(156, 47, 174, ${bubble.opacity * 0.3})`);

      ctx.fillStyle = gradient;
      ctx.fill();

      // Glass border
      ctx.strokeStyle = `rgba(255, 255, 255, ${bubble.opacity * 0.6})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Highlight/reflection
      ctx.beginPath();
      ctx.arc(x - bubble.size * 0.25, y - bubble.size * 0.25, bubble.size * 0.3, 0, Math.PI * 2);
      const highlightGradient = ctx.createRadialGradient(
        x - bubble.size * 0.25,
        y - bubble.size * 0.25,
        0,
        x - bubble.size * 0.25,
        y - bubble.size * 0.25,
        bubble.size * 0.3
      );
      highlightGradient.addColorStop(0, `rgba(255, 255, 255, ${bubble.opacity * 1.5})`);
      highlightGradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = highlightGradient;
      ctx.fill();

      ctx.restore();
    };

    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time++;

      bubbles.forEach((bubble) => {
        bubble.y -= bubble.speed;

        // Reset bubble when it goes off screen
        if (bubble.y < -bubble.size * 2) {
          Object.assign(bubble, createBubble(bubble.id, true));
        }

        drawBubble(bubble, time);
      });

      animationId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
