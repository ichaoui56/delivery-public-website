"use client"

import { useState, useEffect } from "react"
import { Phone, Mail, Clock, Search, Facebook, Instagram, Twitter, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { TranslationType } from "@/lib/translations"

export default function Navbar({
  translations,
  locale,
}: {
  translations: TranslationType
  locale: string
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const t = translations.nav as Record<string, string>

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  const navItems = [
    { name: t.home, href: "#home" },
    { name: t.services, href: "#services" },
    { name: t.whyUs, href: "#why-us" },
    { name: t.pricing, href: "#pricing" },
    { name: t.contact, href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="hidden md:block bg-gradient-to-r from-[#0246a5] via-[#0358c7] to-[#0a74da] text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between py-2 sm:py-2.5 gap-2 sm:gap-4 text-xs sm:text-sm">
            {/* Contact Info - Scrolling on mobile, static on desktop */}
            <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto sm:overflow-visible w-full sm:w-auto scrollbar-hide">
              <div className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="font-medium">{t.phone}</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="font-medium">{t.email}</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span className="font-medium">{t.support}</span>
              </div>
            </div>

            {/* Language + Social Icons */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                href={locale === "en" ? "/ar" : "/en"}
                className="text-xs sm:text-sm font-bold hover:scale-105 transition-transform duration-200 px-2 py-1 rounded-md hover:bg-white/10"
              >
                {locale === "en" ? "العربية" : "English"}
              </Link>
              <div className="flex items-center gap-2 sm:gap-3">
                <Link
                  href="#"
                  className="hover:scale-110 transition-transform duration-200 hover:bg-white/10 p-1.5 rounded-full"
                >
                  <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
                <Link
                  href="#"
                  className="hover:scale-110 transition-transform duration-200 hover:bg-white/10 p-1.5 rounded-full"
                >
                  <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
                <Link
                  href="#"
                  className="hover:scale-110 transition-transform duration-200 hover:bg-white/10 p-1.5 rounded-full"
                >
                  <Twitter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav
        className={`transition-all duration-300 ${
          scrolled ? "bg-[#023e88]/95 backdrop-blur-lg shadow-2xl" : "bg-[#023e88] shadow-lg"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href={`/${locale}`} className="flex items-center gap-2 sm:gap-3 group">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-white shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-white text-lg sm:text-2xl font-heading font-bold group-hover:text-white/90 transition-colors">
                Sonic Delivery
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white font-heading font-semibold text-base px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 relative group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-3/4 transition-all duration-300" />
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <button className="text-white hover:bg-white/10 p-2 rounded-full transition-all duration-200 hover:scale-110 hidden sm:block">
                <Search className="w-5 h-5" />
              </button>

              <Button className="bg-white text-[#023e88] hover:bg-white/90 hover:scale-105 rounded-full px-4 sm:px-6 py-2 sm:py-2.5 font-heading font-bold tracking-wide hidden md:flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base">
                {t.becomeClient}
                <ChevronRight className="w-4 h-4" />
              </Button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-200 relative z-50"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <div className="relative w-5 h-4">
                    <span
                      className={`absolute left-0 w-full h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${
                        mobileMenuOpen ? "top-1/2 rotate-45 -translate-y-1/2" : "top-0 rotate-0"
                      }`}
                    />
                    <span
                      className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${
                        mobileMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                      }`}
                    />
                    <span
                      className={`absolute left-0 w-full h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${
                        mobileMenuOpen ? "top-1/2 -rotate-45 -translate-y-1/2" : "bottom-0 rotate-0"
                      }`}
                    />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 ${locale === "ar" ? "left-0" : "right-0"} h-full w-[85%] max-w-sm bg-gradient-to-br from-[#023e88] via-[#0246a5] to-[#0358c7] shadow-2xl transform transition-transform duration-300 ease-out lg:hidden overflow-y-auto ${
          mobileMenuOpen ? "translate-x-0" : locale === "ar" ? "-translate-x-full" : "translate-x-full"
        }`}
      >
        <div className="p-6 pt-6">
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/20">
            <div>
              <h2 className="text-white text-2xl font-heading font-bold mb-2">Menu</h2>
              <p className="text-white/70 text-sm">Navigate to your destination</p>
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="space-y-2 mb-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center justify-between text-white font-heading font-semibold text-lg py-4 px-4 rounded-xl hover:bg-white/10 transition-all duration-200 group"
                onClick={() => setMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span>{item.name}</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            ))}
          </nav>

          {/* Mobile CTA Button */}
          <Button className="w-full bg-white text-[#023e88] hover:bg-white/90 rounded-xl py-6 font-heading font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2">
            {t.becomeClient}
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Mobile Contact Info */}
          <div className="mt-8 pt-6 border-t border-white/20 space-y-4">
            <div className="flex items-center gap-3 text-white/90">
              <div className="p-2 bg-white/10 rounded-lg">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium">{t.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="p-2 bg-white/10 rounded-lg">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium">{t.email}</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="p-2 bg-white/10 rounded-lg">
                <Clock className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium">{t.support}</span>
            </div>
          </div>

          {/* Mobile Social Links */}
          <div className="mt-6 flex items-center gap-3">
            <Link
              href="#"
              className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200 hover:scale-110"
            >
              <Facebook className="w-5 h-5 text-white" />
            </Link>
            <Link
              href="#"
              className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200 hover:scale-110"
            >
              <Instagram className="w-5 h-5 text-white" />
            </Link>
            <Link
              href="#"
              className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200 hover:scale-110"
            >
              <Twitter className="w-5 h-5 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
