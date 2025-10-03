"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"

export default function FaqSection() {
  const t = useTranslations()
  const [openIndex, setOpenIndex] = useState<number>(0)

  const faqs = [
    {
      question: t("faq.question1"),
      answer: t("faq.answer1"),
    },
    {
      question: t("faq.question2"),
      answer: t("faq.answer2"),
    },
    {
      question: t("faq.question3"),
      answer: t("faq.answer3"),
    },
    {
      question: t("faq.question4"),
      answer: t("faq.answer4"),
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            {t("faq.title")} <span className="text-primary">{t("faq.titleHighlight")}</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors rtl:text-right"
                >
                  <span className="text-lg font-heading font-bold text-foreground pr-4 rtl:pr-0 rtl:pl-4">
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
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-border pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
