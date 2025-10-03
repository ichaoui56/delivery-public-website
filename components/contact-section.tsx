"use client"

import { MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useTranslations } from "@/hooks/use-translations"

export default function ContactSection() {
  const t = useTranslations()

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            {t("contact.title")} <span className="text-primary">{t("contact.titleHighlight")}</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("contact.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4 rtl:flex-row-reverse">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="rtl:text-right">
                  <div className="text-sm text-muted-foreground mb-1">{t("contact.needHelp")}</div>
                  <div className="text-xl font-heading font-bold text-foreground">(307) 555-0133</div>
                </div>
              </div>

              <div className="flex items-start gap-4 rtl:flex-row-reverse">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="rtl:text-right">
                  <div className="text-sm text-muted-foreground mb-1">{t("contact.location")}</div>
                  <div className="text-xl font-heading font-bold text-foreground">{t("contact.locationValue")}</div>
                </div>
              </div>

              <div className="flex items-start gap-4 rtl:flex-row-reverse">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="rtl:text-right">
                  <div className="text-sm text-muted-foreground mb-1">{t("contact.email")}</div>
                  <div className="text-xl font-heading font-bold text-foreground">{t("contact.emailValue")}</div>
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

          {/* Right Side - Contact Form */}
          <div className="bg-card border border-border rounded-3xl p-8 shadow-xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder={t("contact.namePlaceholder")} className="rounded-full h-12" />
                <Input type="email" placeholder={t("contact.emailPlaceholder")} className="rounded-full h-12" />
              </div>

              <Select>
                <SelectTrigger className="rounded-full h-12">
                  <SelectValue placeholder={t("contact.selectPlaceholder")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">{t("contact.selectGeneral")}</SelectItem>
                  <SelectItem value="support">{t("contact.selectSupport")}</SelectItem>
                  <SelectItem value="partnership">{t("contact.selectPartnership")}</SelectItem>
                  <SelectItem value="other">{t("contact.selectOther")}</SelectItem>
                </SelectContent>
              </Select>

              <Textarea placeholder={t("contact.messagePlaceholder")} className="rounded-2xl min-h-32 resize-none" />

              <Button className="bg-primary hover:bg-primary-dark text-white rounded-full px-8 py-6 font-heading font-bold text-base w-full md:w-auto">
                {t("contact.sendButton")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
