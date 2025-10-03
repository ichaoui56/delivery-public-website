"use client"

import { Check, X } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"

export default function PricingSection() {
  const t = useTranslations()

  const comparisonData = [
    {
      criteria: t("pricing.criteria1"),
      traditional: t("pricing.traditional1"),
      sonic: t("pricing.sonic1"),
      sonicBetter: true,
    },
    {
      criteria: t("pricing.criteria2"),
      traditional: t("pricing.traditional2"),
      sonic: t("pricing.sonic2"),
      sonicBetter: true,
    },
    {
      criteria: t("pricing.criteria3"),
      traditional: t("pricing.traditional3"),
      sonic: t("pricing.sonic3"),
      sonicBetter: true,
    },
    {
      criteria: t("pricing.criteria4"),
      traditional: t("pricing.traditional4"),
      sonic: t("pricing.sonic4"),
      sonicBetter: true,
    },
    {
      criteria: t("pricing.criteria5"),
      traditional: t("pricing.traditional5"),
      sonic: t("pricing.sonic5"),
      sonicBetter: true,
    },
    {
      criteria: t("pricing.criteria6"),
      traditional: t("pricing.traditional6"),
      sonic: t("pricing.sonic6"),
      sonicBetter: true,
    },
    {
      criteria: t("pricing.criteria7"),
      traditional: t("pricing.traditional7"),
      sonic: t("pricing.sonic7"),
      sonicBetter: true,
    },
    {
      criteria: t("pricing.criteria8"),
      traditional: t("pricing.traditional8"),
      sonic: t("pricing.sonic8"),
      sonicBetter: true,
    },
  ]

  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-br from-[#4a9fd8] via-[#3b8bc9] to-[#2c6ba8] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">{t("pricing.title")}</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">{t("pricing.subtitle")}</p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-white/20 backdrop-blur-sm">
              <div className="p-6 text-center border-r border-white/20 rtl:border-r-0 rtl:border-l">
                <h3 className="text-xl font-heading font-bold text-white">{t("pricing.tableHeader1")}</h3>
              </div>
              <div className="p-6 text-center border-r border-white/20 rtl:border-r-0 rtl:border-l">
                <h3 className="text-xl font-heading font-bold text-white">{t("pricing.tableHeader2")}</h3>
              </div>
              <div className="p-6 text-center bg-white/10">
                <h3 className="text-xl font-heading font-bold text-white">{t("pricing.tableHeader3")}</h3>
              </div>
            </div>

            {/* Table Rows */}
            {comparisonData.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 hover:bg-white/5 transition-all duration-300 ${
                  index !== comparisonData.length - 1 ? "border-b border-white/10" : ""
                }`}
              >
                {/* Criteria */}
                <div className="p-6 border-r border-white/10 flex flex-col justify-center rtl:border-r-0 rtl:border-l">
                  <p className="text-white font-bold text-lg text-center">{row.criteria}</p>
                </div>

                {/* Traditional */}
                <div className="p-6 border-r border-white/10 flex items-center justify-center rtl:border-r-0 rtl:border-l">
                  <div className="text-center">
                    <X className="w-6 h-6 text-red-300 mx-auto mb-2" />
                    <p className="text-white/90">{row.traditional}</p>
                  </div>
                </div>

                {/* Sonic Delivery */}
                <div className="p-6 bg-white/5 flex items-center justify-center">
                  <div className="text-center">
                    <Check className="w-6 h-6 text-green-300 mx-auto mb-2" />
                    <p className="text-white font-semibold">{row.sonic}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-block bg-white text-primary px-12 py-4 rounded-full font-heading font-bold text-lg hover:scale-110 hover:shadow-2xl transition-all duration-300"
            >
              {t("pricing.ctaButton")}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
