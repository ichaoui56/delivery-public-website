"use client"

import { UserPlus, Send, Settings, Truck, Rocket, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslations } from "@/hooks/use-translations"
import ScrollAnimation from "@/components/scroll-animation"
import { TranslationType } from "@/lib/translations"

export default function HowItWorks(
  {
    translations,
    locale,
  }: {
    translations: TranslationType
    locale: string
  }
) {
  const t = translations.howItWorks as Record<string, string>

  const steps = [
    {
      number: "1",
      icon: UserPlus,
      title: t.step1Title,
      description: t.step1Desc,
      features: [t.step1Feature1, t.step1Feature2],
    },
    {
      number: "2",
      icon: Send,
      title: t.step2Title,
      description: t.step2Desc,
      features: [t.step2Feature1, t.step2Feature2],
    },
    {
      number: "3",
      icon: Settings,
      title: t.step3Title,
      description: t.step3Desc,
      features: [t.step3Feature1, t.step3Feature2],
    },
    {
      number: "4",
      icon: Truck,
      title: t.step4Title,
      description: t.step4Desc,
      features: [t.step4Feature1, t.step4Feature2],
    },
  ]

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollAnimation delay={0.1} duration={0.6}>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              {t.title} <span className="text-primary">{t.titleHighlight}</span> ?
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t.subtitle}</p>
          </div>
        </ScrollAnimation>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <ScrollAnimation key={index} delay={0.2 + index * 0.1} duration={0.6}>
              <div className="bg-card border border-border rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative">
              {/* Step Number Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-heading font-bold text-xl shadow-lg">
                {step.number}
              </div>

              <div className="mt-6 space-y-4">
                <div className="w-16 h-16 bg-foreground rounded-2xl flex items-center justify-center mx-auto">
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-heading font-bold text-foreground">{step.title}</h3>

                <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>

                <div className="pt-4 space-y-2">
                  {step.features.map((feature, idx) => (
                    <div key={idx} className="text-xs text-muted-foreground">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA Section */}
        <ScrollAnimation delay={0.5} duration={0.8}>
          <div className="bg-gradient-to-br from-muted-foreground/5 to-muted-foreground/10 rounded-3xl p-12 text-center space-y-6">
          <h3 className="text-3xl font-heading font-bold text-foreground">{t.ctaTitle}</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-primary hover:bg-primary-dark text-white rounded-full px-8 py-6 text-lg font-heading font-bold flex items-center gap-2">
              <Rocket className="w-5 h-5 rtl:order-2" />
              <span className="rtl:order-1">{t.ctaButton1}</span>
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-8 py-6 text-lg font-heading font-bold flex items-center gap-2 bg-transparent"
            >
              <MessageSquare className="w-5 h-5 rtl:order-2" />
              <span className="rtl:order-1">{t.ctaButton2}</span>
            </Button>
          </div>
        </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
