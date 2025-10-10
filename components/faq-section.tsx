"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import { TranslationType } from "@/lib/translations"

export default function FaqSection({
  translations,
  locale,
}: {
  translations: TranslationType
  locale: string
}) {
  const t = translations.faq as Record<string, string>
  const [openIndex, setOpenIndex] = useState<number>(0)

  const faqs = [
    {
      question: t.question1,
      answer: t.answer1,
    },
    {
      question: t.question2,
      answer: t.answer2,
    },
    {
      question: t.question3,
      answer: t.answer3,
    },
    {
      question: t.question4,
      answer: t.answer4,
    },
    {
      question: t.question5,
      answer: t.answer5,
    },
  ]

  const isRTL = locale === "ar"

  return (
    <section
      className="py-20 bg-background"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4">
        <ScrollAnimation delay={0.1} duration={0.6}>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              {t.title} <span className="text-primary">{t.titleHighlight}</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollAnimation key={index} delay={0.2 + index * 0.1} duration={0.6}>
                <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className={`w-full flex items-center justify-between p-6 hover:bg-muted/50 transition-colors ${isRTL
                        ? "text-right flex-row"
                        : "text-left"
                      }`}
                  >
                    <span className={`text-lg font-heading font-bold text-foreground ${isRTL ? "pl-4 text-right" : "pr-4 text-left"
                      }`}>
                      {faq.question}
                    </span>
                    <div className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center flex-shrink-0">
                      {openIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-white" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-white" />
                      )}
                    </div>
                  </button>

                  {openIndex === index && (
                    <div
                      className={`px-6 pb-6 text-muted-foreground leading-relaxed border-t border-border pt-4 ${isRTL ? "text-right" : "text-left"
                        }`}
                      style={{ lineHeight: '1.8' }}
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  )}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}