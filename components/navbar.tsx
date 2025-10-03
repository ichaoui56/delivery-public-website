"use client"

import { useState } from "react"
import { Phone, Mail, Clock, Search, Menu, X, Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { TranslationType } from "@/lib/translations"

export default function Navbar({
  translations,
  locale,
}: {
  translations: TranslationType
  locale: "en" | "ar"
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = translations.nav as Record<string, string>

  const navItems = [
    { name: t.home, href: "#home" },
    { name: t.services, href: "#services" },
    { name: t.whyUs, href: "#why-us" },
    { name: t.pricing, href: "#pricing" },
    { name: t.contact, href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-[#0286e5] via-[#285dc7] to-[#3976ee] text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-11 text-sm">
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{t.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{t.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{t.support}</span>
              </div>
            </div>

            <div className="ml-auto flex items-center gap-4">
              <Link
                href={locale === "en" ? "/ar" : "/en"}
                className="text-sm font-medium hover:opacity-80 transition-opacity"
              >
                {locale === "en" ? "العربية" : "English"}
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Twitter className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-primary shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center gap-3">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                <div className="text-primary text-2xl font-bold">S</div>
              </div>
              <span className="text-white text-2xl font-heading font-bold hidden sm:block">Sonic Delivery</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white font-heading font-bold text-lg hover:text-white/80 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <button className="text-white hover:text-white/80 transition-colors hidden md:block">
                <Search className="w-5 h-5" />
              </button>

              <Button className="bg-white text-foreground hover:bg-white/90 rounded-full px-6 font-heading font-bold tracking-wider hidden md:flex items-center gap-2">
                {t.becomeClient}
                <span className="text-lg">{locale === "ar" ? "←" : "→"}</span>
              </Button>

              {/* Mobile Menu Button */}
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-white">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-white/20">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-3 text-white font-heading font-bold hover:text-white/80 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="w-full mt-4 bg-white text-foreground hover:bg-white/90 rounded-full font-heading font-bold">
                {t.becomeClient}
              </Button>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
