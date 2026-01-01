"use client"

import { Warehouse, Package, CheckCircle, Gift, Truck } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"
import ScrollAnimation from "@/components/scroll-animation"
import { TranslationType } from "@/lib/translations"

export default function ServicesSection({
  translations,
  locale,
}: {
  translations: TranslationType
  locale: string
}) {
  const t = translations.services as Record<string, string>

  const services = [
    {
      icon: Warehouse,
      title: t.service1Title,
      description: t.service1Desc,
    },
    {
      icon: Package,
      title: t.service2Title,
      description: t.service2Desc,
    },
    {
      icon: CheckCircle,
      title: t.service3Title,
      description: t.service3Desc,
    },
    {
      icon: Gift,
      title: t.service4Title,
      description: t.service4Desc,
    },
    {
      icon: Truck,
      title: t.service5Title,
      description: t.service5Desc,
    },
  ]

  const priorities = [
    t.priority1,
    t.priority2,
    t.priority3,
    t.priority4,
    t.priority5,
    t.priority6,
  ]

  const isRTL = locale === "ar"

  return (
    <section id="services" className="py-20 bg-background" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollAnimation delay={0.1} duration={0.6}>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              {t.title} <span className="text-primary">{t.titleHighlight}</span>{" "}
              {t.titleEnd}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
            <p
              className={`text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed ${isRTL ? "text-right" : "text-left"
                }`}
            >
              {t.subtitle}
            </p>
          </div>
        </ScrollAnimation>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {services.map((service, index) => (
            <ScrollAnimation key={index} delay={0.2 + index * 0.1} duration={0.6}>
              <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-2xl hover:border-primary/50 transition-all duration-500 hover:-translate-y-3 hover:scale-105 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Priorities Section */}
        <ScrollAnimation delay={0.3} duration={0.8}>
          <div className="bg-muted rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className={`relative h-[500px] lg:h-[600px] ${isRTL ? "lg:order-2" : "lg:order-1"
                }`}>
                <img
                  src="/delivery-person-holding-stacked-boxes-with-sonic-d.jpg"
                  alt="Sonixpress Delivery Service"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className={`p-8 lg:p-12 space-y-6 ${isRTL ? "lg:order-1" : "lg:order-2"
                }`}>
                <h3 className={`text-3xl font-heading font-bold text-foreground mb-8 ${isRTL ? "text-right" : "text-left"
                  }`}>
                  {t.prioritiesTitle}
                </h3>

                <div className="space-y-4 ">
                  {priorities.map((priority, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-3 ${isRTL ? "flex-row text-right" : "flex-row text-left"
                        }`}
                    >
                      {/* Check icon always comes first in reading order */}
                      <CheckCircle className={`w-6 h-6 text-primary flex-shrink-0 mt-0.5 ${isRTL ? "ml-3" : "mr-3"
                        }`} />
                      <span className="text-lg text-foreground flex-1">{priority}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}