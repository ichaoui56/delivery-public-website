import { SignIn } from "@/components/auth/sign-in"
import { getTranslations } from "@/lib/translations"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default async function ConnexionPage({ params }: { params: Promise<{ locale: "fr" | "ar" }> }) {
  const { locale } = await params
  const translations = getTranslations(locale)

  const auth = translations.auth as Record<string, any>
  const t = auth.signIn as Record<string, string>

  return (
    <div className="h-screen flex overflow-hidden" dir={locale === "ar" ? "rtl" : "ltr"}>
      {/* Left Side - Branding & Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#023e88] via-[#0358c7] to-[#0246a5] relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-col items-center justify-center w-full p-12">
          {/* Logo */}
          <div className="mb-8">
            <div className="flex items-center gap-4">
              <Image
                src="/images/sonic-logo.png"
                alt="Sonic Delivery Logo"
                width={80}
                height={80}
                className="drop-shadow-2xl"
              />
              <h1 className="text-4xl font-bold text-white">Sonic Delivery</h1>
            </div>
          </div>

          {/* Illustration */}
          <div className="w-full max-w-md">
            <Image
              src="/delivery-person.png"
              alt="Delivery Illustration"
              width={500}
              height={500}
              className="drop-shadow-2xl"
            />
          </div>

          {/* Tagline */}
          <p className="text-white/90 text-xl text-center mt-8 max-w-md">
            {locale === "fr" ? "Livraison rapide et fiable à votre porte" : "توصيل سريع وموثوق إلى باب منزلك"}
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col bg-gray-50 lg:bg-gray-50">
        <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-gray-200">
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 text-gray-700 hover:text-[#023e88] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">{locale === "fr" ? "Accueil" : "الرئيسية"}</span>
          </Link>
          <div className="flex items-center gap-2">
            <Image src="/images/sonic-logo.png" alt="Sonic Delivery Logo" width={32} height={32} />
            <span className="text-lg font-bold text-[#023e88]">Sonic Delivery</span>
          </div>
        </div>

        {/* Form Container */}
        <div className="flex-1 flex items-center justify-center p-4 lg:p-8 overflow-y-auto">
          <div className="w-full max-w-md">
          

            {/* Form Card */}
            <div className="bg-white p-6 lg:p-8">
              {/* Header */}
              <div className="mb-6 lg:mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{t.title}</h2>
                <p className="text-sm lg:text-base text-gray-600">{t.subtitle}</p>
              </div>

              <SignIn translations={translations} locale={locale} />
            </div>

            {/* Desktop Back to Home */}
            <div className="hidden lg:block mt-6 text-center">
              <Link href={`/${locale}`} className="text-sm text-gray-600 hover:text-[#023e88] transition-colors">
                ← {locale === "fr" ? "Retour à l'accueil" : "العودة إلى الصفحة الرئيسية"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
