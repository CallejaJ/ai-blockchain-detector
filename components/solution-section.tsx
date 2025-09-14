"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Shield, Zap, CheckCircle, ChevronDown } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "IA Avanzada",
    description: "Algoritmos de última generación que detectan patrones sutiles en texto generado por IA",
    details: ["Análisis semántico profundo", "Detección de múltiples modelos", "Actualización continua"],
  },
  {
    icon: Shield,
    title: "Blockchain Inmutable",
    description: "Cada verificación se registra en blockchain para crear un historial inmutable",
    details: ["Prueba criptográfica", "Trazabilidad completa", "Validez legal"],
  },
  {
    icon: Zap,
    title: "Procesamiento Rápido",
    description: "Análisis en tiempo real con resultados instantáneos y detallados",
    details: ["< 3 segundos", "API escalable", "Integración simple"],
  },
]

const process = [
  {
    step: "01",
    title: "Análisis de Texto",
    description: "Nuestros algoritmos analizan patrones lingüísticos, coherencia semántica y marcadores de IA",
  },
  {
    step: "02",
    title: "Verificación Blockchain",
    description: "El resultado se registra en blockchain con timestamp y hash criptográfico inmutable",
  },
  {
    step: "03",
    title: "Certificado Digital",
    description: "Generas un certificado verificable que puede ser validado independientemente",
  },
]

export function SolutionSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">La solución que el mundo necesita</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Combinamos lo mejor de la inteligencia artificial con la seguridad de blockchain para crear la herramienta
            de verificación más confiable del mercado.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="float-animation"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <Card className="h-full hover:bg-card/80 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 space-y-6">
                  <div className="flex justify-center">
                    <div className="p-4 rounded-full bg-primary/20 border border-primary/30">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-center">{feature.title}</h3>
                  <p className="text-muted-foreground text-center">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process Demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold mb-4">Cómo funciona</h3>
          <p className="text-lg text-muted-foreground">
            Un proceso simple de 3 pasos que garantiza máxima precisión y confiabilidad
          </p>
        </motion.div>

        <div className="space-y-8 mb-16">
          {process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <Card className="text-center p-8 hover:bg-card/80 transition-colors max-w-md w-full">
                <CardContent className="space-y-4">
                  <div className="text-4xl font-bold text-primary mb-4">{step.step}</div>
                  <h4 className="text-xl font-bold">{step.title}</h4>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
              {index < process.length - 1 && (
                <div className="mt-6 mb-2">
                  <ChevronDown className="w-8 h-8 text-muted-foreground animate-bounce" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Demo CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="space-y-6">
              <h3 className="text-2xl font-bold">¿Listo para probarlo?</h3>
              <p className="text-muted-foreground">
                Experimenta la precisión de nuestra tecnología con una demo interactiva
              </p>
              <Button size="lg" className="pulse-glow">
                Probar Demo Gratuita
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
