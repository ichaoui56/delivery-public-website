"use client"

import { UserPlus, Send, Settings, Truck, Rocket, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslations } from "@/hooks/use-translations"

export default function HowItWorks() {
  const t = useTranslations()

  const steps = [
    {
      number: "1",
      icon: UserPlus,
      title: t("howItWorks.step1Title"),
      description: t("howItWorks.step1Desc"),
      features: [t("howItWorks.step1Feature1"), t("howItWorks.step1Feature2")],
    },
    {
      number: "2",
      icon: Send,
      title: t("howItWorks.step2Title"),
      description: t("howItWorks.step2Desc"),
      features: [t("howItWorks.step2Feature1"), t("howItWorks.step2Feature2")],
    },
    {
      number: "3",
      icon: Settings,
      title: t("howItWorks.step3Title"),
      description: t("howItWorks.step3Desc"),
      features: [t("howItWorks.step3Feature1"), t("howItWorks.step3Feature2")],
    },
    {
      number: "4",
      icon: Truck,
      title: t("howItWorks.step4Title"),
      description: t("howItWorks.step4Desc"),
      features: [t("howItWorks.step4Feature1"), t("howItWorks.step4Feature2")],
    },
  ]

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            {t("howItWorks.title")} <span className="text-primary">{t("howItWorks.titleHighlight")}</span> ?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t("howItWorks.subtitle")}</p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative"
            >
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
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-muted-foreground/5 to-muted-foreground/10 rounded-3xl p-12 text-center space-y-6">
          <h3 className="text-3xl font-heading font-bold text-foreground">{t("howItWorks.ctaTitle")}</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("howItWorks.ctaSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-primary hover:bg-primary-dark text-white rounded-full px-8 py-6 text-lg font-heading font-bold flex items-center gap-2">
              <Rocket className="w-5 h-5 rtl:order-2" />
              <span className="rtl:order-1">{t("howItWorks.ctaButton1")}</span>
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-8 py-6 text-lg font-heading font-bold flex items-center gap-2 bg-transparent"
            >
              <MessageSquare className="w-5 h-5 rtl:order-2" />
              <span className="rtl:order-1">{t("howItWorks.ctaButton2")}</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
