"use client";

import { useEffect, useRef } from "react";

/**
 * Budgeted Canvas 2D petal field — the one ambient background effect for the
 * whole site. Plain Canvas 2D rather than WebGL/Three.js: a few dozen petals
 * don't need a GPU context, and this keeps the Lighthouse budget for content.
 *
 * Capped particle count, pauses when the tab is hidden, and renders nothing
 * under prefers-reduced-motion.
 */
const PETAL_COLORS = ["rgba(233,169,184,0.5)", "rgba(199,154,70,0.4)", "rgba(241,237,228,0.22)"];
const MAX_PETALS = 26;

type Petal = {
  x: number;
  y: number;
  r: number;
  speed: number;
  drift: number;
  driftPhase: number;
  spin: number;
  angle: number;
  color: string;
};

export const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let petals: Petal[] = [];
    let frame = 0;
    let running = true;

    const petalCount = () => (window.innerWidth < 640 ? Math.round(MAX_PETALS * 0.5) : MAX_PETALS);

    const makePetal = (seedY?: number): Petal => ({
      x: Math.random() * width,
      y: seedY ?? Math.random() * height,
      r: 3 + Math.random() * 4,
      speed: 0.25 + Math.random() * 0.5,
      drift: 8 + Math.random() * 14,
      driftPhase: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.02,
      angle: Math.random() * Math.PI * 2,
      color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
    });

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = petalCount();
      petals = Array.from({ length: count }, () => makePetal());
    };

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.ellipse(0, 0, p.r, p.r * 0.6, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const tick = () => {
      if (!running) return;
      frame++;
      ctx.clearRect(0, 0, width, height);
      for (const p of petals) {
        p.y += p.speed;
        p.x += Math.sin(frame * 0.01 + p.driftPhase) * (p.drift / 400);
        p.angle += p.spin;
        if (p.y > height + 10) {
          Object.assign(p, makePetal(-10));
        }
        drawPetal(p);
      }
      requestAnimationFrame(tick);
    };

    const handleVisibility = () => {
      running = document.visibilityState === "visible";
      if (running) requestAnimationFrame(tick);
    };

    resize();
    requestAnimationFrame(tick);

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      running = false;
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
    />
  );
};
