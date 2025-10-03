import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import type { TranslationType } from "@/lib/translations"

export default function Footer({
  translations,
  locale,
}: {
  translations: TranslationType
  locale: "fr" | "ar"
}) {
  const t = translations.footer as Record<string, string>

  const pages = [
    { name: t.home, href: "#home" },
    { name: t.about, href: "#about" },
    { name: t.pagesLink, href: "#pages" },
    { name: t.blog, href: "#blog" },
    { name: t.contactLink, href: "#contact" },
  ]

  return (
    <footer className="bg-gradient-to-br from-[#1a2f45] via-[#0f1b24] to-[#0a1118] text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-balance">{t.cta}</h2>
            <Button className="bg-white text-foreground hover:bg-white/90 rounded-full px-8 py-6 font-heading font-bold text-base">
              {t.ctaButton}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                <div className="text-primary text-2xl font-bold">S</div>
              </div>
              <span className="text-2xl font-heading font-bold">Sonic Delivery</span>
            </div>
            <p className="text-white/70 leading-relaxed">{t.companyInfo}</p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-6">{t.pages}</h3>
            <ul className="space-y-3">
              {pages.map((page) => (
                <li key={page.name}>
                  <Link href={page.href} className="text-white/70 hover:text-white transition-colors">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-6">{t.contact}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-white/70">{t.locationValue || "66 Broklyant, India"}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-white/70">{t.phoneValue || "012 345 678 9101"}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-white/70">{t.emailValue || "abcd@gmail.com"}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-6">{t.stayConnected}</h3>
            <div className="space-y-4">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder={t.enterEmail}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full"
                />
                <Button className="bg-primary hover:bg-primary-dark rounded-full px-6">
                  {locale === "ar" ? "←" : "→"}
                </Button>
              </div>
              <div className="flex gap-3 pt-4">
                <Link
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>{t.copyright}</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">
                {t.terms}
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                {t.privacy}
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                {t.contactUs}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
