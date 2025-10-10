"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import { TranslationType } from "@/lib/translations"
import Link from "next/link"

export function NewsletterSection(
  {
    translations,
    locale,
  }: {
    translations: TranslationType
    locale: string
  }
) {
  const t = translations.newsletter as Record<string, string>

  return (
    <section className="w-full bg-[#0f90d6] shadow-[0px_0px_60px_#0000000d] relative py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollAnimation delay={0.1} duration={0.6}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Title Section */}
            <div className="flex-shrink-0 text-center lg:text-left">
              <h2 className=" font-bold text-white text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-tight">
                {t.title}
              </h2>
              <p className=" text-white/90 text-sm md:text-base mt-2">{t.subtitle}</p>
            </div>

            {/* Form Section */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto lg:ml-auto">
              <Button className="w-full sm:w-auto min-w-[157px] h-[60px] bg-black hover:bg-black/90 rounded-[30px] font-bold text-white text-[15px] tracking-[1.60px] leading-[26px]">
                <Link href={`${locale}/auth/sign-in`} className="flex items-center justify-center gap-3">
                  {t.subscribe}
                  <ArrowRight className={`w-4 h-4 ${locale === "ar" ? "mr-2 rotate-180" : "ml-2"}`} />
                </Link>
              </Button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
