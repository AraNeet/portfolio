"use client"

import { useEffect, useRef } from "react"

const HIRAGANA = [
  "あ",
  "い",
  "う",
  "え",
  "お",
  "か",
  "き",
  "く",
  "け",
  "こ",
  "さ",
  "し",
  "す",
  "せ",
  "そ",
  "た",
  "ち",
  "つ",
  "て",
  "と",
  "な",
  "に",
  "ぬ",
  "ね",
  "の",
  "は",
  "ひ",
  "ふ",
  "へ",
  "ほ",
  "ま",
  "み",
  "む",
  "め",
  "も",
  "や",
  "ゆ",
  "よ",
  "ら",
  "り",
  "る",
  "れ",
  "ろ",
  "わ",
  "を",
  "ん",
]

export default function ParticleEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    const particleCount = 50;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      char: string;
      alpha: number;
      hue: number;
      private canvas: HTMLCanvasElement; // Store canvas reference

      constructor(canvas: HTMLCanvasElement) { // Accept canvas as parameter
        this.canvas = canvas;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 20 + 10;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.char = HIRAGANA[Math.floor(Math.random() * HIRAGANA.length)];
        this.alpha = Math.random() * 0.5 + 0.5;
        this.hue = 180 + Math.random() * 30 - 15;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Use stored canvas reference
        if (this.x > this.canvas.width) this.x = 0;
        if (this.x < 0) this.x = this.canvas.width;
        if (this.y > this.canvas.height) this.y = 0;
        if (this.y < 0) this.y = this.canvas.height;

        if (Math.random() < 0.001) {
          this.char = HIRAGANA[Math.floor(Math.random() * HIRAGANA.length)];
        }
      }

      draw(ctx: CanvasRenderingContext2D) { // Accept ctx as parameter
        ctx.font = `${this.size}px "Sigmar"`;
        ctx.fillStyle = `hsla(${this.hue}, 70%, 70%, ${this.alpha})`;
        ctx.fillText(this.char, this.x, this.y);
      }
    }

    function init() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas || new HTMLCanvasElement)); // Pass canvas to constructor
      }
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw(ctx); // Pass context to draw
      });

      requestAnimationFrame(animate);
    }

    // ... rest of the code remains the same
    function handleResize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-30" style={{ zIndex: 0 }} />;
}
