"use client"

import { useState, useEffect } from "react"
import { Phone, Mail, Clock, Search, Facebook, Instagram, Twitter, ChevronRight } from "lucide-react"
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
    { name: t.espaceClient, href: `/${locale}/espace-client` },
  ]

  // Get the opposite language for display
  const getOppositeLanguage = () => {
    return locale === "fr" ? "العربية" : "Français"
  }

  const getOppositeLocale = () => {
    return locale === "fr" ? "ar" : "fr"
  }

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

            <div className="flex items-center gap-3 sm:gap-4">
              {/* Language Switcher in Top Banner */}
              <div className="flex items-center gap-2">
                <Link
                  href={`/${getOppositeLocale()}`}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-200 hover:scale-105 text-white font-medium text-sm"
                >
                  <span>{getOppositeLanguage()}</span>
                </Link>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <Link
                  href="https://www.facebook.com/share/16CE5Hq8vh/"
                  target="_blank"
                  className="hover:scale-110 transition-transform duration-200 hover:bg-white/10 p-1.5 rounded-full"
                >
                  <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
                <Link
                  href="https://www.instagram.com/sonic_delivery_dakhla?igsh=MXg3NDNhbWl3N21neA=="
                  target="_blank"
                  className="hover:scale-110 transition-transform duration-200 hover:bg-white/10 p-1.5 rounded-full"
                >
                  <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
                <a
                  href="https://wa.me/212601717961"
                  target="_blank"
                  className="hover:scale-110 transition-transform duration-200 hover:bg-white/10 p-1.5 rounded-full"
                >
                  <svg className="w-5 h-5 text-black hover:text-white" fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.152"></g><g id="SVGRepo_iconCarrier"> <title>whatsapp</title> <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path> </g></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav
        className={`transition-all duration-300 ${scrolled ? "bg-[#023e88]/95 backdrop-blur-lg shadow-2xl" : "bg-[#023e88] shadow-lg"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href={`/${locale}`} className="flex items-center gap-2 sm:gap-3 group">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-white shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-white text-lg sm:text-2xl font-heading font-bold group-hover:text-white/90 transition-colors">
                Sonixpress
              </span>
            </Link>

            {/* Desktop Navigation */}
            {/* Desktop Navigation */}
            <div
              className={`hidden lg:flex items-center gap-1 ${locale === "ar" ? "flex-row-reverse text-right" : "flex-row text-left"
                }`}
            >
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-white font-heading font-semibold text-base px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 relative group ${locale === "ar" ? "ml-0 mr-2" : "mr-0 ml-2"
                    }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 ${locale === "ar" ? "right-1/2 translate-x-1/2" : "left-1/2 -translate-x-1/2"
                      } w-0 h-0.5 bg-white group-hover:w-3/4 transition-all duration-300`}
                  />
                </Link>
              ))}
            </div>


            <div className="flex items-center gap-2 sm:gap-4">
             

              <Link href="https://sonic-delivery.up.railway.app/login">
                <Button className="bg-white text-[#023e88] hover:bg-white/90 hover:scale-105 rounded-full px-4 sm:px-6 py-2 sm:py-2.5 font-heading font-bold tracking-wide hidden md:flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base">
                  {t.becomeClient}
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-200 relative z-50"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <div className="relative w-5 h-4">
                    <span
                      className={`absolute left-0 w-full h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${mobileMenuOpen ? "top-1/2 rotate-45 -translate-y-1/2" : "top-0 rotate-0"
                        }`}
                    />
                    <span
                      className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${mobileMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                        }`}
                    />
                    <span
                      className={`absolute left-0 w-full h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${mobileMenuOpen ? "top-1/2 -rotate-45 -translate-y-1/2" : "bottom-0 rotate-0"
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
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 ${locale === "ar" ? "left-0" : "right-0"} h-full w-[85%] max-w-sm bg-gradient-to-br from-[#023e88] via-[#0246a5] to-[#0358c7] shadow-2xl transform transition-transform duration-300 ease-out lg:hidden overflow-y-auto ${mobileMenuOpen ? "translate-x-0" : locale === "ar" ? "-translate-x-full" : "translate-x-full"
          }`}
      >
        <div className="p-6 pt-6">
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/20">
            <div>
              <h2 className="text-white text-2xl font-heading font-bold mb-2">Menu</h2>
              <p className="text-white/70 text-sm">Navigate to your destination</p>
            </div>
          </div>

          {/* Mobile Language Switcher */}
          <div className="mb-6 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
            <p className="text-white/70 text-xs font-medium mb-3 uppercase tracking-wider">
              {locale === "fr" ? "Langue" : "اللغة"}
            </p>
            <div className="flex flex-col gap-2">
              <Link
                href={`/${getOppositeLocale()}`}
                className="flex items-center justify-between w-full p-3 bg-white/20 hover:bg-white/30 rounded-lg transition-all duration-200 text-white font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{getOppositeLanguage()}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
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
          <Link href="https://sonic-delivery.up.railway.app/login">
            <Button className="w-full bg-white text-[#023e88] hover:bg-white/90 rounded-xl py-6 font-heading font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2">
              {t.becomeClient}
              <ChevronRight className="w-5 h-5" />
            </Button>
          </Link>

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
              href="https://www.facebook.com/share/16CE5Hq8vh/"
              target="_blank"
              className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200 hover:scale-110"
            >
              <Facebook className="w-5 h-5 text-white" />
            </Link>
            <Link
              href="https://www.instagram.com/sonic_delivery_dakhla?igsh=MXg3NDNhbWl3N21neA=="
              target="_blank"
              className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200 hover:scale-110"
            >
              <Instagram className="w-5 h-5 text-white" />
            </Link>
            <a
              href="https://wa.me/212601717961"
              target="_blank"
              className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200 hover:scale-110"
            >
              <svg className="w-5 h-5 text-black hover:text-white" fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.152"></g><g id="SVGRepo_iconCarrier"> <title>whatsapp</title> <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path> </g></svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
