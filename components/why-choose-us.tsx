"use client"

import { Zap, Wallet, Shield, Headphones, Truck, Building2, Package, Smile } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"
import ScrollAnimation from "@/components/scroll-animation"
import { TranslationType } from "@/lib/translations"

export default function WhyChooseUs({
  translations,
  locale,
}: {
  translations: TranslationType
  locale: string
}) {
  const t = translations.whyChooseUs as Record<string, string>

  const features = [
    {
      icon: Zap,
      title: t.feature1Title,
      description: t.feature1Desc,
    },
    {
      icon: Wallet,
      title: t.feature2Title,
      description: t.feature2Desc,
    },
    {
      icon: Shield,
      title: t.feature3Title,
      description: t.feature3Desc,
    },
    {
      icon: Headphones,
      title: t.feature4Title,
      description: t.feature4Desc,
    },
  ]

  const stats = [
    {
      icon: Truck,
      number: t.stat1Number,
      label: t.stat1Label,
      description: t.stat1Desc,
    },
    {
      icon: Building2,
      number: t.stat2Number,
      label: t.stat2Label,
      description: t.stat2Desc,
    },
    {
      icon: Package,
      number: t.stat3Number,
      label: t.stat3Label,
      description: t.stat3Desc,
    },
    {
      icon: Smile,
      number: t.stat4Number,
      label: t.stat4Label,
      description: t.stat4Desc,
    },
  ]

  return (
    <section
      id="why-us"
      className="py-20 bg-gradient-to-br from-[#1a2f45] via-[#0f1b24] to-[#0a1118] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <ScrollAnimation delay={0.1} duration={0.6}>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
              {t.title} <span className="text-primary-light">{t.titleHighlight}</span> ?
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
            <p
              className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t.subtitle }}
            />
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <ScrollAnimation key={index} delay={0.2 + index * 0.1} duration={0.6}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
                  <div className="flex items-start gap-4 rtl:flex-row-reverse">
                    <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                      <feature.icon className="w-7 h-7 text-primary-light" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-white/70 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Right Side - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <ScrollAnimation key={index} delay={0.3 + index * 0.1} duration={0.6}>
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-primary-light" />
                  </div>
                  <div className="text-4xl font-heading font-bold text-primary-light mb-1">{stat.number}</div>
                  <div className="text-lg font-heading font-semibold text-white mb-1">{stat.label}</div>
                  <div className="text-sm text-white/60">{stat.description}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
