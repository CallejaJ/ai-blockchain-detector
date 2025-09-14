"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Dr. María González",
    role: "Directora de Investigación",
    company: "Universidad Complutense",
    content:
      "Esta herramienta ha revolucionado cómo evaluamos la originalidad en trabajos académicos. La verificación blockchain nos da la confianza que necesitábamos.",
    rating: 5,
    avatar: "/professional-woman-researcher.png",
  },
  {
    name: "Carlos Ruiz",
    role: "Editor Jefe",
    company: "El Periódico Digital",
    content:
      "Implementamos esta solución y hemos reducido un 90% los casos de contenido no verificado. Es indispensable para el periodismo moderno.",
    rating: 5,
    avatar: "/professional-journalist.png",
  },
  {
    name: "Ana Martínez",
    role: "Socia Senior",
    company: "Bufete Legal Martínez & Asociados",
    content:
      "La inmutabilidad de blockchain nos permite presentar evidencias irrefutables en casos legales. Un cambio de juego para nuestra práctica.",
    rating: 5,
    avatar: "/professional-woman-lawyer.png",
  },
]

const logos = [
  { name: "Universidad Complutense", logo: "/generic-university-logo.png" },
  { name: "El País", logo: "/newspaper-logo.jpg" },
  { name: "Bufete Legal", logo: "/law-firm-logo.png" },
  { name: "Instituto Cervantes", logo: "/generic-institute-logo.png" },
  { name: "Revista Científica", logo: "/abstract-journal-logo.png" },
  { name: "Tribunal Superior", logo: "/generic-court-logo.png" },
]

const stats = [
  { value: "10,000+", label: "Documentos verificados" },
  { value: "99.7%", label: "Precisión promedio" },
  { value: "500+", label: "Organizaciones confían en nosotros" },
  { value: "24/7", label: "Soporte disponible" },
]

export function SocialProofSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Confianza respaldada por resultados</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Organizaciones líderes ya confían en nuestra tecnología para garantizar la autenticidad de su contenido más
            importante.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:bg-card/80 transition-colors">
                <CardContent className="p-8 space-y-6">
                  <div className="flex justify-center mb-4">
                    <Quote className="w-8 h-8 text-primary" />
                  </div>

                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-muted-foreground italic text-center">"{testimonial.content}"</p>

                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-sm text-primary">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-muted-foreground">Organizaciones que confían en nosotros</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <img
                  src={logo.logo || "/placeholder.svg"}
                  alt={logo.name}
                  className="h-8 md:h-10 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
