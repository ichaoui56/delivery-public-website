"use client"

import { MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ScrollAnimation from "@/components/scroll-animation"
import { TranslationType } from "@/lib/translations"

export default function ContactSection({
  translations,
  locale,
}: {
  translations: TranslationType
  locale: string
}) {
  const t = translations.contact as Record<string, string>

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <ScrollAnimation delay={0.1} duration={0.6}>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              {t.title} <span className="text-primary">{t.titleHighlight}</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.subtitle}</p>
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Left Side - Contact Info */}
          <ScrollAnimation delay={0.2} duration={0.6}>
            <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4 rtl:flex-row-reverse">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="rtl:text-right">
                  <div className="text-sm text-muted-foreground mb-1">{t.needHelp}</div>
                  <div className="text-xl font-heading font-bold text-foreground">(307) 555-0133</div>
                </div>
              </div>

              <div className="flex items-start gap-4 rtl:flex-row-reverse">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="rtl:text-right">
                  <div className="text-sm text-muted-foreground mb-1">{t.location}</div>
                  <div className="text-xl font-heading font-bold text-foreground">{t.locationValue}</div>
                </div>
              </div>

              <div className="flex items-start gap-4 rtl:flex-row-reverse">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="rtl:text-right">
                  <div className="text-sm text-muted-foreground mb-1">{t.email}</div>
                  <div className="text-xl font-heading font-bold text-foreground">{t.emailValue}</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden h-64 lg:h-80">
              <img
                src="/smiling-delivery-person-holding-cardboard-boxes.jpg"
                alt="Contact Us"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          </ScrollAnimation>

          {/* Right Side - Contact Form */}
          <ScrollAnimation delay={0.3} duration={0.6}>
            <div className="bg-card border border-border rounded-3xl p-8 shadow-xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder={t.namePlaceholder} className="rounded-full h-12" />
                <Input type="email" placeholder={t.emailPlaceholder} className="rounded-full h-12" />
              </div>

              <Select>
                <SelectTrigger className="rounded-full h-12">
                  <SelectValue placeholder={t.selectPlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">{t.selectGeneral}</SelectItem>
                  <SelectItem value="support">{t.selectSupport}</SelectItem>
                  <SelectItem value="partnership">{t.selectPartnership}</SelectItem>
                  <SelectItem value="other">{t.selectOther}</SelectItem>
                </SelectContent>
              </Select>

              <Textarea placeholder={t.messagePlaceholder} className="rounded-2xl min-h-32 resize-none" />

              <Button className="bg-primary hover:bg-primary-dark text-white rounded-full px-8 py-6 font-heading font-bold text-base w-full md:w-auto">
                {t.sendButton}
              </Button>
            </form>
          </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
