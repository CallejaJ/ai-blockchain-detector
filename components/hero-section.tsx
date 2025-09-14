"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Shield, Zap, Lock } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="container mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="flex justify-center space-x-4 mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="p-3 rounded-full bg-primary/20 border border-primary/30"
            >
              <Shield className="w-8 h-8 text-primary" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="p-3 rounded-full bg-accent/20 border border-accent/30"
            >
              <Zap className="w-8 h-8 text-accent" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="p-3 rounded-full bg-primary/20 border border-primary/30"
            >
              <Lock className="w-8 h-8 text-primary" />
            </motion.div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
            Detecta textos IA con <span className="text-primary">verificación blockchain</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            La primera plataforma que combina detección avanzada de IA con la inmutabilidad de blockchain para
            garantizar la autenticidad de contenido académico, periodístico y legal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button size="lg" className="text-lg px-8 py-6 pulse-glow">
              Únete al Beta
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              Ver Demo
            </Button>
          </div>

          <div className="flex justify-center items-center space-x-8 mt-16 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>99.7% Precisión</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Verificación Inmutable</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span>Cumplimiento Legal</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
