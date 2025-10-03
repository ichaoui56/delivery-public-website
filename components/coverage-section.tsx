"use client"

import { Building2, Package } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ScrollAnimation from "@/components/scroll-animation"
import { TranslationType } from "@/lib/translations"

export default function CoverageSection({
  translations,
  locale,
}: {
  translations: TranslationType
  locale: string
}) {
  const t = translations.coverage as Record<string, string>

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollAnimation delay={0.1} duration={0.6}>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              {t.title} <span className="text-primary">{t.titleHighlight}</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t.subtitle}</p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto rtl:flex rtl:flex-row-reverse rtl:flex-wrap">
          {/* Add Stock Card */}
          <ScrollAnimation delay={0.2} duration={0.6}>
            <div className="bg-card border border-border rounded-3xl p-8 hover:shadow-2xl hover:scale-105 hover:border-primary/50 transition-all duration-500 group cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="text-center space-y-6 relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {t.addProductTitle}
                </h3>

                <p className="text-muted-foreground leading-relaxed">{t.addProductDesc}</p>

                <Link href={`/${locale}/nouveau-produit`}>
                  <Button className="w-full bg-gradient-to-r from-primary to-primary-dark text-white hover:opacity-90 hover:scale-105 transition-all duration-300 py-6 text-lg font-heading shadow-lg">
                    {t.addProductButton}
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollAnimation>

          {/* Add Package Card */}
          <ScrollAnimation delay={0.3} duration={0.6}>
            <div className="bg-card border border-border rounded-3xl p-8 hover:shadow-2xl hover:scale-105 hover:border-primary/50 transition-all duration-500 group cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="text-center space-y-6 relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Package className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {t.addPackageTitle}
                </h3>

                <p className="text-muted-foreground leading-relaxed">{t.addPackageDesc}</p>



                <Link href={`/${locale}/nouveau-colis`}>
                  <Button className="w-full bg-gradient-to-r from-primary to-primary-dark text-white hover:opacity-90 hover:scale-105 transition-all duration-300 py-6 text-lg font-heading shadow-lg">
                    {t.addPackageButton}
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
