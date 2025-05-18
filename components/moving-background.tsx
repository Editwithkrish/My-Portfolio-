"use client"

import { useRef, useEffect } from "react"
import { useTheme } from "next-themes"

export default function MovingBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create grid points
    const gridSize = 30
    const points: { x: number; y: number; vx: number; vy: number; connections: number[] }[] = []

    const createGrid = () => {
      points.length = 0
      const numX = Math.ceil(canvas.width / gridSize) + 1
      const numY = Math.ceil(canvas.height / gridSize) + 1

      for (let i = 0; i < numX; i++) {
        for (let j = 0; j < numY; j++) {
          points.push({
            x: i * gridSize,
            y: j * gridSize,
            vx: Math.random() * 0.3 - 0.15,
            vy: Math.random() * 0.3 - 0.15,
            connections: [],
          })
        }
      }
    }

    createGrid()

    // Animation loop
    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update points
      points.forEach((point, index) => {
        // Move points
        point.x += point.vx
        point.y += point.vy

        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) {
          point.vx *= -1
          point.x = Math.max(0, Math.min(canvas.width, point.x))
        }
        if (point.y < 0 || point.y > canvas.height) {
          point.vy *= -1
          point.y = Math.max(0, Math.min(canvas.height, point.y))
        }

        // Draw point
        ctx.beginPath()
        ctx.arc(point.x, point.y, 1, 0, Math.PI * 2)
        ctx.fillStyle = isDark ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"
        ctx.fill()

        // Find and draw connections
        point.connections = []
        points.forEach((otherPoint, otherIndex) => {
          if (index !== otherIndex) {
            const dx = point.x - otherPoint.x
            const dy = point.y - otherPoint.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < gridSize * 1.5) {
              point.connections.push(otherIndex)
              ctx.beginPath()
              ctx.moveTo(point.x, point.y)
              ctx.lineTo(otherPoint.x, otherPoint.y)
              const alpha = 1 - distance / (gridSize * 1.5)
              ctx.strokeStyle = isDark ? `rgba(255, 255, 255, ${alpha * 0.2})` : `rgba(0, 0, 0, ${alpha * 0.2})`
              ctx.stroke()
            }
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [isDark])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0" style={{ opacity: 0.3 }} />
  )
}
