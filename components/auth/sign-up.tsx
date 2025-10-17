"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, Loader2, Store, Building2, MapPin, Package, Link as LinkIcon, CreditCard } from "lucide-react"

interface SignUpProps {
  translations: any
  locale: "fr" | "ar"
}

export function SignUp({ translations, locale }: SignUpProps) {
  const t = translations.auth.signUp as Record<string, any>
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    storeName: "",
    email: "",
    phone: "",
    city: "",
    businessType: "",
    storeLink: "",
    bankName: "",
    rib: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false
  })

  const cities = Object.entries(t.cities as Record<string, string>)
  const businessTypes = Object.entries(t.businessTypes as Record<string, string>)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setIsLoading(false)
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1.5">
          {t.fullNameLabel}
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder={t.fullNamePlaceholder}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#023e88] focus:border-transparent transition-all"
          required
        />
      </div>

      {/* Store Name */}
      <div>
        <label htmlFor="storeName" className="block text-sm font-medium text-gray-700 mb-1.5">
          {t.storeNameLabel}
        </label>
        <div className="relative">
          <Store className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            id="storeName"
            name="storeName"
            value={formData.storeName}
            onChange={handleChange}
            placeholder={t.storeNamePlaceholder}
            className={`w-full ${locale === "ar" ? "pr-4 pl-11" : "pl-11 pr-4"} py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#023e88] focus:border-transparent transition-all`}
            required
          />
        </div>
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
            {t.emailLabel}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t.emailPlaceholder}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#023e88] focus:border-transparent transition-all"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            {t.phoneLabel}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={t.phonePlaceholder}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#023e88] focus:border-transparent transition-all"
            required
          />
        </div>
      </div>

      {/* City & Business Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1.5">
            {t.cityLabel}
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={`w-full ${locale === "ar" ? "pr-4 pl-11" : "pl-11 pr-4"} py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#023e88] focus:border-transparent transition-all appearance-none bg-white`}
              required
            >
              <option value="">{t.cityPlaceholder}</option>
              {cities.map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1.5">
            {t.businessTypeLabel}
          </label>
          <div className="relative">
            <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            <select
              id="businessType"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              className={`w-full ${locale === "ar" ? "pr-4 pl-11" : "pl-11 pr-4"} py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#023e88] focus:border-transparent transition-all appearance-none bg-white`}
            >
              <option value="">{t.businessTypePlaceholder}</option>
              {businessTypes.map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Store Link (Optional) */}
      <div>
        <label htmlFor="storeLink" className="block text-sm font-medium text-gray-700 mb-1.5">
          {t.storeLinkLabel}
        </label>
        <div className="relative">
          <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="url"
            id="storeLink"
            name="storeLink"
            value={formData.storeLink}
            onChange={handleChange}
            placeholder={t.storeLinkPlaceholder}
            className={`w-full ${locale === "ar" ? "pr-4 pl-11" : "pl-11 pr-4"} py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#023e88] focus:border-transparent transition-all`}
          />
        </div>
      </div>

      {/* Bank Name & RIB */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="bankName" className="block text-sm font-medium text-gray-700 mb-1.5">
            {t.bankNameLabel}
          </label>
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              id="bankName"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
              placeholder={t.bankNamePlaceholder}
              className={`w-full ${locale === "ar" ? "pr-4 pl-11" : "pl-11 pr-4"} py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#023e88] focus:border-transparent transition-all`}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="rib" className="block text-sm font-medium text-gray-700 mb-1.5">
            {t.ribLabel}
          </label>
          <div className="relative">
            <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              id="rib"
              name="rib"
              value={formData.rib}
              onChange={handleChange}
              placeholder={t.ribPlaceholder}
              className={`w-full ${locale === "ar" ? "pr-4 pl-11" : "pl-11 pr-4"} py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#023e88] focus:border-transparent transition-all`}
              required
            />
          </div>
        </div>
      </div>

      {/* Password & Confirm Password */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
            {t.passwordLabel}
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder={t.passwordPlaceholder}
              className={`w-full ${locale === "ar" ? "pl-11 pr-4" : "pr-11 pl-4"} py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#023e88] focus:border-transparent transition-all`}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={`absolute ${locale === "ar" ? "left-3" : "right-3"} top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700`}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1.5">
            {t.confirmPasswordLabel}
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder={t.confirmPasswordPlaceholder}
              className={`w-full ${locale === "ar" ? "pl-11 pr-4" : "pr-11 pl-4"} py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#023e88] focus:border-transparent transition-all`}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className={`absolute ${locale === "ar" ? "left-3" : "right-3"} top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700`}
            >
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Terms & Privacy */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="acceptTerms"
          name="acceptTerms"
          checked={formData.acceptTerms}
          onChange={handleChange}
          className="mt-1 w-4 h-4 text-[#023e88] border-gray-300 rounded focus:ring-[#023e88]"
          required
        />
        <label htmlFor="acceptTerms" className="text-sm text-gray-600">
          {t.termsPrefix}{" "}
          <Link href={`/${locale}/terms`} className="text-[#023e88] hover:underline font-medium">
            {t.termsLink}
          </Link>{" "}
          {t.termsAnd}{" "}
          <Link href={`/${locale}/privacy`} className="text-[#023e88] hover:underline font-medium">
            {t.privacyLink}
          </Link>
        </label>
      </div>

      {/* Approval Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800 text-center">
          ℹ️ {t.approvalNote}
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-[#023e88] text-white py-3 rounded-lg font-medium hover:bg-[#034a9e] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>{locale === "fr" ? "Création en cours..." : "جاري الإنشاء..."}</span>
          </>
        ) : (
          t.submitButton
        )}
      </button>

      {/* Sign In Link */}
      <p className="text-center text-sm text-gray-600 mt-4">
        {t.haveAccount}{" "}
        <Link href={`/${locale}/auth/sign-in`} className="text-[#023e88] hover:underline font-medium">
          {t.signInLink}
        </Link>
      </p>
    </form>
  )
}