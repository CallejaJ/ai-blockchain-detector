"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Users, FileText, Scale } from "lucide-react"

const stats = [
  {
    icon: AlertTriangle,
    value: "73%",
    label: "de textos IA pasan desapercibidos",
    description: "Los detectores actuales fallan en identificar contenido generado por IA avanzada",
  },
  {
    icon: Users,
    value: "2.1M",
    label: "estudiantes usan IA para tareas",
    description: "El uso de IA en academia ha crecido 340% en el último año",
  },
  {
    icon: FileText,
    value: "45%",
    label: "de artículos contienen IA",
    description: "Medios de comunicación luchan por verificar la autenticidad del contenido",
  },
  {
    icon: Scale,
    value: "89%",
    label: "de casos legales requieren verificación",
    description: "Documentos legales necesitan pruebas irrefutables de autoría",
  },
]

const useCases = [
  {
    title: "Academia",
    description:
      "Universidades necesitan verificar la originalidad de trabajos estudiantiles y publicaciones académicas.",
    challenges: ["Plagio sofisticado", "Evaluación justa", "Integridad académica"],
  },
  {
    title: "Periodismo",
    description: "Medios requieren autenticidad en noticias y reportajes para mantener credibilidad.",
    challenges: ["Desinformación", "Fact-checking", "Transparencia editorial"],
  },
  {
    title: "Legal",
    description: "Bufetes y tribunales necesitan pruebas irrefutables de autoría en documentos legales.",
    challenges: ["Evidencia forense", "Cadena de custodia", "Validez jurídica"],
  },
]

export function ProblemSection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            El problema es más grande de lo que imaginas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            La detección de IA actual es insuficiente. Los métodos tradicionales no pueden seguir el ritmo de la
            evolución de la inteligencia artificial.
          </p>
        </motion.div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-6 hover:bg-card/80 transition-colors">
                <CardContent className="space-y-4">
                  <div className="flex justify-center">
                    <stat.icon className="w-12 h-12 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="font-semibold">{stat.label}</div>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold mb-4">Sectores más afectados</h3>
          <p className="text-lg text-muted-foreground">
            Cada sector enfrenta desafíos únicos que requieren soluciones especializadas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:bg-card/80 transition-colors">
                <CardContent className="p-8 space-y-6">
                  <h4 className="text-2xl font-bold text-primary">{useCase.title}</h4>
                  <p className="text-muted-foreground">{useCase.description}</p>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-sm uppercase tracking-wide">Desafíos principales:</h5>
                    <ul className="space-y-1">
                      {useCase.challenges.map((challenge, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
