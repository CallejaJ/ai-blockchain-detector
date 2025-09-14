"use client"

import { useEffect, useRef } from "react"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  connections: number[]
  size: number
  type: "block" | "transaction" | "validator"
  pulsePhase: number
  dataFlow: number
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const nodesRef = useRef<Node[]>([])
  const timeRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createNodes = () => {
      const nodeCount = Math.floor((canvas.width * canvas.height) / 25000)
      nodesRef.current = []

      for (let i = 0; i < nodeCount; i++) {
        const nodeTypes: ("block" | "transaction" | "validator")[] = ["block", "transaction", "validator"]
        const type = nodeTypes[Math.floor(Math.random() * nodeTypes.length)]

        nodesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          connections: [],
          size: type === "block" ? 4 : type === "validator" ? 3 : 2,
          type,
          pulsePhase: Math.random() * Math.PI * 2,
          dataFlow: Math.random(),
        })
      }
    }

    const updateNodes = () => {
      timeRef.current += 0.02

      nodesRef.current.forEach((node, index) => {
        node.x += node.vx + Math.sin(timeRef.current + index * 0.1) * 0.1
        node.y += node.vy + Math.cos(timeRef.current + index * 0.1) * 0.1

        if (node.x < 20 || node.x > canvas.width - 20) node.vx *= -0.8
        if (node.y < 20 || node.y > canvas.height - 20) node.vy *= -0.8

        node.x = Math.max(20, Math.min(canvas.width - 20, node.x))
        node.y = Math.max(20, Math.min(canvas.height - 20, node.y))

        node.pulsePhase += 0.03
        node.dataFlow = (Math.sin(timeRef.current + index * 0.5) + 1) / 2
      })
    }

    const findConnections = () => {
      const maxDistance = 150
      nodesRef.current.forEach((node, i) => {
        node.connections = []
        nodesRef.current.forEach((otherNode, j) => {
          if (i !== j) {
            const distance = Math.sqrt(Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2))
            const connectionBonus =
              (node.type === "block" && otherNode.type === "transaction") ||
              (node.type === "validator" && otherNode.type === "block")
                ? 1.2
                : 1
            if (distance < maxDistance * connectionBonus) {
              node.connections.push(j)
            }
          }
        })
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      nodesRef.current.forEach((node, i) => {
        node.connections.forEach((connectionIndex) => {
          if (connectionIndex > i) {
            const connectedNode = nodesRef.current[connectionIndex]
            const distance = Math.sqrt(Math.pow(node.x - connectedNode.x, 2) + Math.pow(node.y - connectedNode.y, 2))
            const opacity = Math.max(0, 1 - distance / 150)

            let connectionColor = "rgba(147, 51, 234, " // Violeta base
            if (node.type === "block" || connectedNode.type === "block") {
              connectionColor = "rgba(168, 85, 247, " // Púrpura para bloques
            } else if (node.type === "validator" || connectedNode.type === "validator") {
              connectionColor = "rgba(124, 58, 237, " // Violeta oscuro para validadores
            }

            ctx.strokeStyle = `${connectionColor}${opacity * 0.2})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(connectedNode.x, connectedNode.y)
            ctx.stroke()

            // Partículas viajeras en las conexiones
            const flowPosition = (timeRef.current * 2 + i * 0.5) % 1
            const flowX = node.x + (connectedNode.x - node.x) * flowPosition
            const flowY = node.y + (connectedNode.y - node.y) * flowPosition

            ctx.fillStyle = `${connectionColor}${opacity * 0.8})`
            ctx.beginPath()
            ctx.arc(flowX, flowY, 1, 0, Math.PI * 2)
            ctx.fill()
          }
        })
      })

      nodesRef.current.forEach((node) => {
        const pulseIntensity = (Math.sin(node.pulsePhase) + 1) / 2

        if (node.type === "block") {
          const size = node.size + pulseIntensity * 2
          ctx.fillStyle = `rgba(168, 85, 247, ${0.6 + pulseIntensity * 0.4})`
          ctx.shadowColor = "rgba(168, 85, 247, 0.5)"
          ctx.shadowBlur = 8
          ctx.fillRect(node.x - size / 2, node.y - size / 2, size, size)
          ctx.shadowBlur = 0
        } else if (node.type === "validator") {
          const size = node.size + pulseIntensity * 1.5
          ctx.fillStyle = `rgba(124, 58, 237, ${0.7 + pulseIntensity * 0.3})`
          ctx.shadowColor = "rgba(124, 58, 237, 0.5)"
          ctx.shadowBlur = 6
          ctx.beginPath()
          ctx.moveTo(node.x, node.y - size)
          ctx.lineTo(node.x + size, node.y)
          ctx.lineTo(node.x, node.y + size)
          ctx.lineTo(node.x - size, node.y)
          ctx.closePath()
          ctx.fill()
          ctx.shadowBlur = 0
        } else {
          const size = node.size + pulseIntensity * 1
          const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, size)
          gradient.addColorStop(0, `rgba(147, 51, 234, ${0.8 + pulseIntensity * 0.2})`)
          gradient.addColorStop(1, `rgba(147, 51, 234, ${0.2 + pulseIntensity * 0.1})`)

          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(node.x, node.y, size, 0, Math.PI * 2)
          ctx.fill()
        }
      })
    }

    const animate = () => {
      updateNodes()
      findConnections()
      draw()
      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    createNodes()
    animate()

    const handleResize = () => {
      resizeCanvas()
      createNodes()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60 bg-transparent"
    />
  )
}
