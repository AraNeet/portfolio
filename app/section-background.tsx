"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface SectionBackgroundProps {
  variant: "cyan" | "gray"
  children: React.ReactNode
  className?: string
}

export function SectionBackground({ variant, children, className = "" }: SectionBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const baseColor = variant === "cyan" ? "0, 255, 255" : "75, 75, 75"
  const overlayOpacity = variant === "cyan" ? 0.03 : 0.05

  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.5, 1, 0.5],
          background: [
            `radial-gradient(circle at 0% 0%, rgba(${baseColor}, ${overlayOpacity}) 0%, transparent 50%)`,
            `radial-gradient(circle at 100% 100%, rgba(${baseColor}, ${overlayOpacity}) 0%, transparent 50%)`,
            `radial-gradient(circle at 0% 100%, rgba(${baseColor}, ${overlayOpacity}) 0%, transparent 50%)`,
          ],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${
            mousePosition.y * 100
          }%, rgba(${baseColor}, ${overlayOpacity}) 0%, transparent 35%)`,
        }}
      />
      <div className={`relative z-10 ${variant === "gray" ? "bg-zinc-900/50" : "bg-cyan-950/5"}`}>{children}</div>
    </div>
  )
}

