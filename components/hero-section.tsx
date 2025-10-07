"use client"

import { Play, Facebook, Linkedin, Twitter } from "lucide-react"
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
      : locale === "en"
        ? "text-left"
        : "text-center"

  const buttonAlignment =
    typeof window !== "undefined" && window.innerWidth < 765
      ? "justify-center"
      : locale === "ar"
        ? "justify-end"
        : locale === "en"
          ? "justify-start"
          : "justify-center"

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
          href="#"
          className="w-10 h-10 rounded-full bg-transparent border border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors"
        >
          <Facebook className="w-4 h-4 text-gray-800 hover:text-white" />
        </a>

        <a
          href="#"
          className="w-10 h-10 rounded-full bg-transparent border border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors"
        >
          <Linkedin className="w-4 h-4 text-gray-800 hover:text-white" />
        </a>

        <a
          href="#"
          className="w-10 h-10 rounded-full bg-transparent border border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors"
        >
          <Twitter className="w-4 h-4 text-gray-800 hover:text-white" />
        </a>

        <a
          href="#"
          className="w-10 h-10 rounded-full bg-transparent border border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors"
        >
          <svg
            className="w-4 h-4 text-gray-800"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
          </svg>
        </a>

        <div className="h-px w-16 md:w-px md:h-16 bg-gray-800 my-auto md:mx-auto" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          <ScrollAnimation delay={0.2} duration={0.8}>
            <div className="space-y-8">
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
            <div className="relative">
              {/* Star shape behind */}
              <div className="absolute hidden sm:block lg:top-1/2 -top-[400px] lg:right-0 -right-[10%] -translate-y-1/2 lg:w-64 lg:h-64 w-48 h-48 z-0">
                <img src="/images/design-mode/hero-shape1.png.png" alt="" className="w-full h-full object-contain" />
              </div>

              {/* Slowly spinning circle - 120 seconds per rotation */}
              <div className="absolute hidden sm:block lg:top-1/2 -top-[300px] lg:left-1/2 left-[80%] -translate-x-1/2 -translate-y-1/2 w-[300px] lg:w-[500px] h-[500px] z-10">
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
              <div className="relative hidden lg:block z-20 flex items-center justify-center">
                <img
                  src="/images/design-mode/4bfd00b0-fd1a-401d-9916-551337535f91__1_-removebg-preview.png"
                  alt="Delivery Professional"
                  className="w-full max-w-md object-contain"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation delay={0.6} duration={0.8}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 mt-12 bg-[#3b8bc9] rounded-t-3xl">
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
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold text-white">
                  {t.stat2}
                </div>
                <div className="text-sm text-white/90 font-jost">
                  {t.citiesCovered}
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
