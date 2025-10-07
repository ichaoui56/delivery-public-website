import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import WhyChooseUs from "@/components/why-choose-us"
import ServicesSection from "@/components/services-section"
import CoverageSection from "@/components/coverage-section"
import HowItWorks from "@/components/how-it-works"
import PricingSection from "@/components/pricing-section"
import FaqSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import { NewsletterSection } from "@/components/newsletter-section"
import Footer from "@/components/footer"
import { getTranslations } from "@/lib/translations"

export default async function Home({ params }: { params: Promise<{ locale: "fr" | "ar" }> }) {
  const { locale } = await params
  const translations = getTranslations(locale)

  return (
    <main className="min-h-screen">
      <Navbar translations={translations} locale={locale} />
      <HeroSection translations={translations} locale={locale} />
      <ServicesSection translations={translations} locale={locale} />
      <WhyChooseUs translations={translations} locale={locale} />
      <CoverageSection translations={translations} locale={locale} />
      <PricingSection translations={translations} locale={locale} />
      <HowItWorks translations={translations} locale={locale} />
      <NewsletterSection translations={translations} locale={locale} />
      <FaqSection translations={translations} locale={locale} />
      <ContactSection translations={translations} locale={locale} />
      <Footer translations={translations} locale={locale} />
    </main>
  )
}
