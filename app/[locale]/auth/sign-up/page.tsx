import { SignUp } from "@/components/auth/sign-up"
import { getTranslations } from "@/lib/translations"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default async function InscriptionPage({ params }: { params: Promise<{ locale: "fr" | "ar" }> }) {
    const { locale } = await params
    const translations = getTranslations(locale)

    const auth = translations.auth as Record<string, any>
    const t = auth.signUp as Record<string, string>

    return (
        <div className="h-screen flex overflow-hidden" dir={locale === "ar" ? "rtl" : "ltr"}>
            {/* Left Side - Form */}
            <div className="w-full lg:w-1/2 flex flex-col bg-gray-50 lg:bg-gray-50 overflow-y-auto scrollbar-hide">
                {/* Mobile Header */}
                <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-gray-200 sticky top-0 z-10">
                    <Link
                        href={`/${locale}`}
                        className="flex items-center gap-2 text-gray-700 hover:text-[#023e88] transition-colors"
                    >
                        <ArrowLeft className={`w-5 h-5 ${locale === "ar" ? "rotate-180" : ""}`} />
                        <span className="text-sm font-medium">{locale === "fr" ? "Accueil" : "الرئيسية"}</span>
                    </Link>
                    <div className="flex items-center gap-2">
                        <Image src="/images/sonic-logo.png" alt="Sonic Delivery Logo" width={32} height={32} />
                        <span className="text-lg font-bold text-[#023e88]">Sonic Delivery</span>
                    </div>
                </div>

                {/* Form Container */}
                <div className="flex-1 flex items-center justify-center p-4 lg:p-6">
                    <div className="w-full max-w-3xl">
                        {/* Form Card */}
                        <div className="bg-white p-4 lg:p-6 lg:shadow-xl lg:border lg:border-gray-200 rounded-lg">
                            <div className="mb-4 text-center lg:text-left">
                                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">{t.title}</h2>
                                <p className="text-xs lg:text-sm text-gray-600">{t.subtitle}</p>
                            </div>

                            <SignUp translations={translations} locale={locale} />
                        </div>

                        {/* Desktop Back to Home */}
                        <div className="hidden lg:block mt-3 text-center">
                            <Link
                                href={`/${locale}`}
                                className="text-xs text-gray-600 hover:text-[#023e88] transition-colors inline-flex items-center gap-1"
                            >
                                <ArrowLeft className={`w-3 h-3 ${locale === "ar" ? "rotate-180" : ""}`} />
                                {locale === "fr" ? "Retour à l'accueil" : "العودة إلى الصفحة الرئيسية"}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Branding & Illustration */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#023e88] via-[#0358c7] to-[#0246a5] relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

                <div className="relative z-10 flex flex-col items-center justify-center w-full p-12">
                    {/* Logo */}
                    <div className="mb-6">
                        <div className="flex items-center gap-4">
                            <Image
                                src="/images/sonic-logo.png"
                                alt="Sonic Delivery Logo"
                                width={70}
                                height={70}
                                className="drop-shadow-2xl"
                            />
                            <h1 className="text-3xl font-bold text-white">Sonic Delivery</h1>
                        </div>
                    </div>

                    {/* Illustration */}
                    <div className="w-full max-w-sm mb-6">
                        <Image
                            src="/delivery-person.png"
                            alt="Delivery Illustration"
                            width={400}
                            height={400}
                            className="drop-shadow-2xl"
                        />
                    </div>

                    {/* Features List - Compact */}
                    <div className="max-w-md space-y-3">
                        <div className="flex items-center gap-3 text-white">
                            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                <span className="text-sm">✓</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-base">
                                    {locale === "fr" ? "Livraison en 24h" : "توصيل خلال 24 ساعة"}
                                </h3>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 text-white">
                            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                <span className="text-sm">✓</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-base">
                                    {locale === "fr" ? "22 MAD au lieu de 40 MAD" : "22 درهم بدلاً من 40 درهم"}
                                </h3>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 text-white">
                            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                <span className="text-sm">✓</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-base">
                                    {locale === "fr" ? "Support 24/7" : "دعم 24/7"}
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Tagline */}
                    <p className="text-white/90 text-lg text-center mt-8 max-w-md font-medium">
                        {locale === "fr" 
                            ? "Rejoignez des milliers de commerçants satisfaits" 
                            : "انضم إلى آلاف التجار الراضين"}
                    </p>
                </div>
            </div>
        </div>
    )
}