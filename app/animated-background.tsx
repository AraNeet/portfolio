"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function AnimatedBackground() {
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

  return (
    <>
      <motion.div
        className="absolute inset-0 opacity-50"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(0, 255, 255, 0.15) 0%, rgba(39, 39, 39, 0.15) 50%, transparent 100%)",
            "radial-gradient(circle at 100% 100%, rgba(0, 255, 255, 0.15) 0%, rgba(39, 39, 39, 0.15) 50%, transparent 100%)",
            "radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.15) 0%, rgba(39, 39, 39, 0.15) 50%, transparent 100%)",
            "radial-gradient(circle at 0% 100%, rgba(0, 255, 255, 0.15) 0%, rgba(39, 39, 39, 0.15) 50%, transparent 100%)",
            "radial-gradient(circle at 100% 0%, rgba(0, 255, 255, 0.15) 0%, rgba(39, 39, 39, 0.15) 50%, transparent 100%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${
            mousePosition.y * 100
          }%, rgba(0, 255, 255, 0.2) 0%, transparent 50%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.5), transparent)",
        }}
      />
    </>
  )
}

