"use client"

import { Zap, Wallet, Shield, Headphones, Truck, Building2, Package, Smile } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"

export default function WhyChooseUs() {
  const t = useTranslations()

  const features = [
    {
      icon: Zap,
      title: t("whyChooseUs.feature1Title"),
      description: t("whyChooseUs.feature1Desc"),
    },
    {
      icon: Wallet,
      title: t("whyChooseUs.feature2Title"),
      description: t("whyChooseUs.feature2Desc"),
    },
    {
      icon: Shield,
      title: t("whyChooseUs.feature3Title"),
      description: t("whyChooseUs.feature3Desc"),
    },
    {
      icon: Headphones,
      title: t("whyChooseUs.feature4Title"),
      description: t("whyChooseUs.feature4Desc"),
    },
  ]

  const stats = [
    {
      icon: Truck,
      number: t("whyChooseUs.stat1Number"),
      label: t("whyChooseUs.stat1Label"),
      description: t("whyChooseUs.stat1Desc"),
    },
    {
      icon: Building2,
      number: t("whyChooseUs.stat2Number"),
      label: t("whyChooseUs.stat2Label"),
      description: t("whyChooseUs.stat2Desc"),
    },
    {
      icon: Package,
      number: t("whyChooseUs.stat3Number"),
      label: t("whyChooseUs.stat3Label"),
      description: t("whyChooseUs.stat3Desc"),
    },
    {
      icon: Smile,
      number: t("whyChooseUs.stat4Number"),
      label: t("whyChooseUs.stat4Label"),
      description: t("whyChooseUs.stat4Desc"),
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
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
            {t("whyChooseUs.title")} <span className="text-primary-light">{t("whyChooseUs.titleHighlight")}</span> ?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">{t("whyChooseUs.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
              >
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
            ))}
          </div>

          {/* Right Side - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary-light" />
                </div>
                <div className="text-4xl font-heading font-bold text-primary-light mb-1">{stat.number}</div>
                <div className="text-lg font-heading font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-sm text-white/60">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
