"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle, Mail, Users, FileText, ExternalLink } from "lucide-react"

const benefits = [
  {
    icon: Mail,
    title: "Acceso Prioritario",
    description: "Sé el primero en probar todas las funcionalidades",
  },
  {
    icon: Users,
    title: "Comunidad Exclusiva",
    description: "Conecta con otros early adopters y expertos",
  },
  {
    icon: FileText,
    title: "Feedback Directo",
    description: "Influye en el desarrollo del producto",
  },
]

export function BetaSignupSection() {
  const [formData, setFormData] = useState({
    email: "",
    sector: "",
    useCase: "",
    acceptPrivacy: false,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <section className="py-24 px-4 bg-gradient-to-b from-card/20 to-background">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Card className="p-12 bg-gradient-to-r from-green-500/10 to-primary/10 border-green-500/20">
              <CardContent className="space-y-6">
                <div className="flex justify-center">
                  <CheckCircle className="w-16 h-16 text-green-500" />
                </div>
                <h2 className="text-3xl font-bold">¡Bienvenido al futuro!</h2>
                <p className="text-lg text-muted-foreground">
                  Te hemos registrado exitosamente en nuestro programa beta. Recibirás un email con los próximos pasos
                  en las siguientes 24 horas.
                </p>
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground">
                    Mientras tanto, síguenos en nuestras redes sociales para las últimas actualizaciones.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-card/20 to-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Únete al programa beta</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Sé parte de la revolución en detección de IA. Acceso exclusivo, funcionalidades avanzadas y la oportunidad
            de moldear el futuro de la verificación de contenido.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-8">¿Por qué unirte al beta?</h3>

            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="p-3 rounded-full bg-primary/20 border border-primary/30 flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>
            ))}

            <div className="mt-12 p-6 rounded-lg bg-accent/10 border border-accent/20">
              <h4 className="font-semibold text-accent mb-2">Acceso Limitado</h4>
              <p className="text-sm text-muted-foreground">
                Solo aceptamos 1,000 usuarios en esta fase beta. Regístrate ahora para asegurar tu lugar.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Solicita tu acceso</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email profesional *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@empresa.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sector">Sector *</Label>
                    <Select onValueChange={(value) => handleInputChange("sector", value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu sector" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="academia">Academia / Educación</SelectItem>
                        <SelectItem value="periodismo">Periodismo / Medios</SelectItem>
                        <SelectItem value="legal">Legal / Jurídico</SelectItem>
                        <SelectItem value="corporativo">Corporativo</SelectItem>
                        <SelectItem value="gobierno">Gobierno / Público</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="useCase">Caso de uso principal *</Label>
                    <Textarea
                      id="useCase"
                      placeholder="Describe cómo planeas usar nuestra herramienta..."
                      value={formData.useCase}
                      onChange={(e) => handleInputChange("useCase", e.target.value)}
                      rows={4}
                      required
                    />
                  </div>

                  <div className="p-4 rounded-lg bg-muted/30 border border-muted">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="privacy"
                        checked={formData.acceptPrivacy}
                        onCheckedChange={(checked) => handleInputChange("acceptPrivacy", checked as boolean)}
                        required
                        className="mt-1"
                      />
                      <div className="space-y-2">
                        <Label htmlFor="privacy" className="text-sm font-medium leading-relaxed cursor-pointer">
                          Acepto los términos y condiciones
                        </Label>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Al registrarte, aceptas nuestra{" "}
                          <a href="#" className="text-primary hover:underline inline-flex items-center gap-1">
                            política de privacidad
                            <ExternalLink className="w-3 h-3" />
                          </a>{" "}
                          y el procesamiento de tus datos para el programa beta. Puedes cancelar tu suscripción en
                          cualquier momento.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full pulse-glow"
                    disabled={!formData.email || !formData.sector || !formData.useCase || !formData.acceptPrivacy}
                  >
                    Solicitar Acceso Beta
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Procesaremos tu solicitud en 2-3 días hábiles. Te contactaremos solo si eres seleccionado.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
