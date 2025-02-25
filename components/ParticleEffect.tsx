"use client"

import { useEffect, useRef } from "react"

const HIRAGANA = [
  "あ", "い", "う", "え", "お",
  "か", "き", "く", "け", "こ",
  "さ", "し", "す", "せ", "そ",
  "た", "ち", "つ", "て", "と",
  "な", "に", "ぬ", "ね", "の",
  "は", "ひ", "ふ", "へ", "ほ",
  "ま", "み", "む", "め", "も",
  "や", "ゆ", "よ",
  "ら", "り", "る", "れ", "ろ",
  "わ", "を", "ん"
]

export default function ParticleEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let particles: Particle[] = []
    const particleCount = 50
    let centerX = window.innerWidth / 2
    let centerY = window.innerHeight / 2
    const orbitRadius = 500 // Increased base orbit radius
    const orbitVariation = 200 // Increased variation for more spread
    const verticalVariation = 300 // Increased vertical variation

    class Particle {
      x: number
      y: number
      size: number
      char: string
      alpha: number
      hue: number
      angle: number
      orbitSpeed: number
      individualRadius: number
      verticalOffset: number
      rotationAxis: number // Add rotation axis variation

      constructor() {
        this.x = 0
        this.y = 0
        this.angle = Math.random() * Math.PI * 2
        this.orbitSpeed = (Math.random() * 0.0008) + 0.0004 // Slightly slower speed
        this.individualRadius = orbitRadius + (Math.random() * orbitVariation - orbitVariation/2)
        this.verticalOffset = Math.random() * verticalVariation - verticalVariation/2
        this.size = Math.random() * 20 + 10
        this.char = HIRAGANA[Math.floor(Math.random() * HIRAGANA.length)]
        this.alpha = Math.random() * 0.5 + 0.3
        this.hue = 180 + Math.random() * 30 - 15
        this.rotationAxis = Math.random() * Math.PI * 2 // Random rotation axis
        this.updatePosition()
      }

      updatePosition() {
        // Calculate position with tilted elliptical orbit
        const flattenFactor = 0.5 // Adjust orbit flatten amount

        // Calculate base orbital position
        const baseX = Math.cos(this.angle) * this.individualRadius
        const baseY = Math.sin(this.angle) * this.individualRadius * flattenFactor

        // Apply tilt and rotation
        const rotatedX = baseX * Math.cos(this.rotationAxis) - baseY * Math.sin(this.rotationAxis)
        const rotatedY = baseX * Math.sin(this.rotationAxis) + baseY * Math.cos(this.rotationAxis)

        // Set final position
        this.x = centerX + rotatedX
        this.y = centerY + rotatedY + this.verticalOffset
      }

      update() {
        // Update orbit angle
        this.angle += this.orbitSpeed

        // Update position
        this.updatePosition()

        // Randomly change character occasionally
        if (Math.random() < 0.001) {
          this.char = HIRAGANA[Math.floor(Math.random() * HIRAGANA.length)]
        }

        // Fade effect based on position
        const distanceFromCenter = Math.sqrt(
          Math.pow(this.x - centerX, 2) + Math.pow(this.y - centerY, 2)
        )
        const maxDistance = orbitRadius + orbitVariation
        this.alpha = 0.3 + (1 - Math.min(distanceFromCenter / maxDistance, 1)) * 0.4
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.font = `${this.size}px "Sigmar"`
        ctx.fillStyle = `hsla(${this.hue}, 70%, 70%, ${this.alpha})`
        ctx.fillText(this.char, this.x, this.y)
      }
    }

    function init() {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw(ctx)
      })

      requestAnimationFrame(animate)
    }

    function handleResize() {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      // Update center position on resize
      centerX = window.innerWidth / 2
      centerY = window.innerHeight / 2
      init()
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none opacity-30" 
      style={{ zIndex: 0 }}
    />
  )
}
