"use client"

import { useState } from "react"
import { useActionState } from "react"
// import { signUpAction } from "@/lib/actions/auth-actions"
import { FormFieldApp } from "@/components/ui/form-field-app"
import SubmitButton from "@/components/ui/submit-button"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react"
// import { signUpDefaultValues } from "@/lib/zod"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import type { TranslationType } from "@/lib/translations"

interface SignUpProps {
  translations: TranslationType
  locale: "fr" | "ar"
}

export function SignUp({ translations, locale }: SignUpProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
//   const [state, formAction] = useActionState(signUpAction, null)

  const auth = translations.auth as Record<string, any>
  const t = auth.signUp as Record<string, string>

//   const formValues = {
//     fullName: state?.values?.fullName || signUpDefaultValues.fullName,
//     email: state?.values?.email || signUpDefaultValues.email,
//     phone: state?.values?.phone || signUpDefaultValues.phone,
//     password: state?.values?.password || signUpDefaultValues.password,
//     confirmPassword: state?.values?.confirmPassword || signUpDefaultValues.confirmPassword,
//   }

  return (
    <form action={""} className="space-y-4">
      <div className="relative">
        <User className="absolute left-3 top-[30px] w-5 h-5 text-gray-400" />
        <FormFieldApp
        //   defaultValues={formValues}
        //   errors={state?.errors}
          name="fullName"
          label={t.fullNameLabel}
          type="text"
          placeholder={t.fullNamePlaceholder}
          required
          className="pl-10"
        />
      </div>

      <div className="relative">
        <Mail className="absolute left-3 top-[30px] w-5 h-5 text-gray-400" />
        <FormFieldApp
        //   defaultValues={formValues}
        //   errors={state?.errors}
          name="email"
          label={t.emailLabel}
          type="email"
          placeholder={t.emailPlaceholder}
          required
          className="pl-10"
        />
      </div>

      <div className="relative">
        <Phone className="absolute left-3 top-[30px] w-5 h-5 text-gray-400" />
        <FormFieldApp
        //   defaultValues={formValues}
        //   errors={state?.errors}
          name="phone"
          label={t.phoneLabel}
          type="tel"
          placeholder={t.phonePlaceholder}
          required
          className="pl-10"
        />
      </div>

      <div className="relative">
        <Lock className="absolute left-3 top-[30px] w-5 h-5 text-gray-400" />
        <FormFieldApp
        //   defaultValues={formValues}
        //   errors={state?.errors}
          name="password"
          label={t.passwordLabel}
          type={showPassword ? "text" : "password"}
          placeholder={t.passwordPlaceholder}
          required
          className="pl-10 pr-10"
        />
        <Button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-0 top-[23px] text-gray-400 hover:text-[#023e88] bg-transparent border-none hover:bg-transparent transition-colors"
        >
          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </Button>
      </div>

      <div className="relative">
        <Lock className="absolute left-3 top-[30px] w-5 h-5 text-gray-400" />
        <FormFieldApp
        //   defaultValues={formValues}
        //   errors={state?.errors}
          name="confirmPassword"
          label={t.confirmPasswordLabel}
          type={showConfirmPassword ? "text" : "password"}
          placeholder={t.confirmPasswordPlaceholder}
          required
          className="pl-10 pr-10"
        />
        <Button
          type="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="absolute right-0 top-[23px] text-gray-400 hover:text-[#023e88] bg-transparent border-none hover:bg-transparent transition-colors"
        >
          {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </Button>
      </div>

      <div className="flex items-start space-x-2 pt-2">
        <Checkbox id="terms" required className="mt-1" />
        <label htmlFor="terms" className="text-xs text-gray-600 cursor-pointer leading-relaxed">
          {t.termsPrefix}{" "}
          <Link href={`/${locale}/conditions`} className="text-[#023e88] hover:text-[#0358c7] font-medium">
            {t.termsLink}
          </Link>{" "}
          {t.termsAnd}{" "}
          <Link href={`/${locale}/confidentialite`} className="text-[#023e88] hover:text-[#0358c7] font-medium">
            {t.privacyLink}
          </Link>
        </label>
      </div>

      {/* {state?.success && (
        <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">{state.message}</div>
      )} */}

      <SubmitButton
        type="submit"
        className="w-full h-12 bg-gradient-to-r from-[#023e88] to-[#0358c7] hover:from-[#0358c7] hover:to-[#023e88] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {t.submitButton}
      </SubmitButton>

      <div className="text-center text-sm text-gray-600">
        {t.haveAccount}{" "}
        <Link href={`/${locale}/auth/sign-in`} className="text-[#023e88] hover:text-[#0358c7] font-semibold">
          {t.signInLink}
        </Link>
      </div>
    </form>
  )
}
