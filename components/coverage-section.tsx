"use client"

import { Building2, Package } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslations } from "@/hooks/use-translations"

export default function CoverageSection() {
  const t = useTranslations()

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            {t("coverage.title")} <span className="text-primary">{t("coverage.titleHighlight")}</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t("coverage.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto rtl:flex rtl:flex-row-reverse rtl:flex-wrap">
          {/* Add Stock Card */}
          <div className="bg-card border border-border rounded-3xl p-8 hover:shadow-2xl hover:scale-105 hover:border-primary/50 transition-all duration-500 group cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="text-center space-y-6 relative z-10">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Building2 className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {t("coverage.addProductTitle")}
              </h3>

              <p className="text-muted-foreground leading-relaxed">{t("coverage.addProductDesc")}</p>

              <Link href="/nouveau-produit">
                <Button className="w-full bg-gradient-to-r from-primary to-primary-dark text-white hover:opacity-90 hover:scale-105 transition-all duration-300 py-6 text-lg font-heading shadow-lg">
                  {t("coverage.addProductButton")}
                </Button>
              </Link>
            </div>
          </div>

          {/* Add Package Card */}
          <div className="bg-card border border-border rounded-3xl p-8 hover:shadow-2xl hover:scale-105 hover:border-primary/50 transition-all duration-500 group cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="text-center space-y-6 relative z-10">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Package className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {t("coverage.addPackageTitle")}
              </h3>

              <p className="text-muted-foreground leading-relaxed">{t("coverage.addPackageDesc")}</p>

              <Link href="/nouveau-colis">
                <Button className="w-full bg-gradient-to-r from-primary to-primary-dark text-white hover:opacity-90 hover:scale-105 transition-all duration-300 py-6 text-lg font-heading shadow-lg">
                  {t("coverage.addPackageButton")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
