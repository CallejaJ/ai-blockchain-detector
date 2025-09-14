"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const matrixChars = "123456789"
    const baseFontSize = 18
    const columns = Math.floor(canvas.width / baseFontSize)
    const drops: number[] = []
    const fontSizes: number[] = []

    // Initialize drops and random font sizes
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -50
      fontSizes[i] = Math.floor(Math.random() * 15) + 14
    }

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw matrix characters
      for (let i = 0; i < drops.length; i++) {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)]
        const fontSize = fontSizes[i]
        const x = i * baseFontSize
        const y = drops[i] * fontSize

        ctx.font = `${fontSize}px 'Courier New', monospace`

        if (drops[i] * fontSize < 150) {
          // Caracteres brillantes al principio (efecto trail)
          ctx.fillStyle = `rgba(0, 255, 65, 0.9)`
        } else {
          // Caracteres normales más visibles
          ctx.fillStyle = `rgba(0, 255, 65, 0.4)`
        }

        ctx.fillText(text, x, y)

        // Reset drop to top randomly
        if (y > canvas.height + 100 && Math.random() > 0.975) {
          drops[i] = -50
          fontSizes[i] = Math.floor(Math.random() * 15) + 14
        }

        drops[i] += 0.5
      }

      if (Math.random() < 0.1) {
        const randomCol = Math.floor(Math.random() * columns)
        const randomChar = matrixChars[Math.floor(Math.random() * matrixChars.length)]
        ctx.fillStyle = "rgba(255, 215, 0, 0.8)"
        ctx.font = `${fontSizes[randomCol]}px 'Courier New', monospace`
        ctx.fillText(randomChar, randomCol * baseFontSize, drops[randomCol] * fontSizes[randomCol])
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" style={{ background: "transparent" }} />
}
