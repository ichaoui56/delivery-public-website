"use client"

import { Play, Facebook, Linkedin, Twitter, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import type { TranslationType } from "@/lib/translations"
import ScrollAnimation from "@/components/scroll-animation"

export default function HeroSection({
  translations,
  locale,
}: {
  translations: TranslationType
  locale: string
}) {
  const [isSticky, setIsSticky] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const t = translations.hero as Record<string, string>

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("home")
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        const scrollPosition = window.scrollY + window.innerHeight / 2

        setIsSticky(scrollPosition < heroBottom)
      }
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 765)
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)
    handleScroll()
    handleResize()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const textAlignClass = isMobile
    ? "text-center"
    : locale === "ar"
      ? "text-right"
      : locale === "fr"
        ? "text-left"
        : "text-center"

  const buttonAlignment =
    typeof window !== "undefined" && window.innerWidth < 765
      ? "justify-center"
      : locale === "ar"
        ? "justify-end"
        : locale === "fr"
          ? "justify-start"
          : "justify-center"

  const textAlignment =
    typeof window !== "undefined" && window.innerWidth < 765
      ? "text-center"
      : locale === "ar"
        ? "items-end"
        : locale === "fr"
          ? "items-start"
          : "items-center"

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-32"
      style={{
        background: "linear-gradient(135deg, #5ba8d8 0%, #a8c9e0 50%, #d4dfe8 100%)",
      }}
    >
      <style jsx>{`
        @keyframes slowSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

      <div
        className={`${isSticky ? "md:fixed absolute" : "absolute"
          } md:top-1/2 md:-translate-y-1/2 top-[650px] left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 z-50 flex flex-row md:flex-col gap-4 ${locale === "ar" ? "md:pl-6" : "md:pl-6"
          } transition-all duration-300`}
        style={{
          zIndex: 0,
        }}
      >
        <div className="h-px w-16 md:w-px md:h-16 bg-gray-800 my-auto md:mx-auto" />

        <a
          href="https://www.facebook.com/share/16CE5Hq8vh/"
          target="_blank"
          className="w-10 h-10 rounded-full bg-transparent border border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors"
        >
          <Facebook className="w-4 h-4 text-gray-800 hover:text-white" />
        </a>

        <a
          href="https://www.instagram.com/sonic_delivery_dakhla?igsh=MXg3NDNhbWl3N21neA=="
          target="_blank"
          className="w-10 h-10 rounded-full bg-transparent border border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors"
        >
          <Instagram className="w-4 h-4 text-gray-800 hover:text-white" />
        </a>

        <a
          href="https://wa.me/212601717961"
          target="_blank"
          className="w-10 h-10 rounded-full bg-transparent border border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5 text-black hover:text-white" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.152"></g><g id="SVGRepo_iconCarrier"> <title>whatsapp</title> <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path> </g></svg>
        </a>

        <div className="h-px w-16 md:w-px md:h-16 bg-gray-800 my-auto md:mx-auto" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          <ScrollAnimation delay={0.2} duration={0.8}>
            <div className={`flex flex-col space-y-8 ${textAlignment}`}>
              <h1
                className={`text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight text-balance ${textAlignClass}`}
              >
                {t.title}
              </h1>

              <p
                className={`text-lg md:text-xl text-gray-800 leading-relaxed max-w-xl ${textAlignClass}`}
              >
                {t.subtitle}
              </p>

              <div className={`flex ${buttonAlignment}`}>
                <Button
                  variant="ghost"
                  className="text-gray-900 hover:text-gray-900 hover:bg-white/10 font-heading font-bold text-base tracking-wider flex items-center gap-2 group"
                >
                  <div className="w-11 h-11 rounded-full bg-white/80 flex items-center justify-center group-hover:bg-white transition-colors">
                    <Play className="w-5 h-5 fill-gray-900" />
                  </div>
                  {t.watchVideo}
                </Button>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.4} duration={0.8}>
            <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[600px]">
              {/* Star shape behind */}
              <div className="absolute lg:top-1/2 top-[40%] lg:right-0 right-[5%] -translate-y-1/2 lg:w-64 lg:h-64 w-40 h-40 z-0">
                <img src="/images/design-mode/hero-shape1.png.png" alt="" className="w-full h-full object-contain" />
              </div>

              {/* Slowly spinning circle - 120 seconds per rotation */}
              <div className="absolute lg:top-1/2 top-[50%] lg:left-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[350px] lg:w-[500px] h-[280px] sm:h-[350px] lg:h-[500px] z-10">
                <img
                  src="/images/design-mode/hero-shape2.png.png"
                  alt=""
                  className="w-full h-full object-contain"
                  style={{
                    animation: "slowSpin 120s linear infinite",
                  }}
                />
              </div>

              {/* Delivery person image */}
              <div className="relative z-20 flex items-center justify-center w-full max-w-[400px]  sm:max-w-[550px] lg:max-w-[595px] mx-auto">
                <img
                  src="/images/hero-image-no-road.png"
                  alt="Delivery Professional"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation delay={0.6} duration={0.8}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 -mt-1 sm:-mt-7 md:-mt-7 bg-[#3b8bc9] rounded-t-3xl">
            <div className="flex items-center justify-center gap-3">
              <div className="w-14 h-14 bg-[#5ba8d8] rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold text-white">
                  {t.stat1}
                </div>
                <div className="text-sm text-white/90 font-jost">
                  {t.deliveredPackage}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div className="w-14 h-14 bg-[#5ba8d8] rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold text-white">
                  {t.stat2}
                </div>
                <div className="text-sm text-white/90 font-jost">
                  {t.deliveryPersons}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div className="w-14 h-14 bg-[#5ba8d8] rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold text-white">
                  {t.stat3}
                </div>
                <div className="text-sm text-white/90 font-jost">
                  {t.satisfiedClients}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div className="w-14 h-14 bg-[#5ba8d8] rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold text-white">
                  {t.stat4}
                </div>
                <div className="text-sm text-white/90 font-jost">
                  {t.kgShipped}
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}