"use client"

import { useState } from "react"
import { useActionState } from "react"
// import { signInAction } from "@/lib/actions/auth-actions"
import { FormFieldApp } from "@/components/ui/form-field-app"
import SubmitButton from "@/components/ui/submit-button"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff, Mail, Lock } from "lucide-react"
// import { signInDefaultValues } from "@/lib/zod"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import type { TranslationType } from "@/lib/translations"

interface SignInProps {
  translations: TranslationType
  locale: "fr" | "ar"
}

export function SignIn({ translations, locale }: SignInProps) {
  const [showPassword, setShowPassword] = useState(false)
//   const [state, formAction] = useActionState(signInAction, null)

  const auth = translations.auth as Record<string, any>
  const t = auth.signIn as Record<string, string>

//   const formValues = {
//     email: state?.values?.email || signInDefaultValues.email,
//     password: state?.values?.password || signInDefaultValues.password,
//   }

  return (
    <form action={""} className="space-y-5">
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

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox id="remember" />
          <label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">
            {t.rememberMe}
          </label>
        </div>
        <Link
          href={`/${locale}/mot-de-passe-oublie`}
          className="text-sm text-[#023e88] hover:text-[#0358c7] font-medium transition-colors"
        >
          {t.forgotPassword}
        </Link>
      </div>

      {/* {state?.success && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">{state.message}</div>
      )} */}

      <SubmitButton
        type="submit"
        className="w-full h-12 bg-gradient-to-r from-[#023e88] to-[#0358c7] hover:from-[#0358c7] hover:to-[#023e88] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {t.submitButton}
      </SubmitButton>

      <div className="text-center text-sm text-gray-600">
        {t.noAccount}{" "}
        <Link href={`/${locale}/auth/sign-up`} className="text-[#023e88] hover:text-[#0358c7] font-semibold">
          {t.signUpLink}
        </Link>
      </div>
    </form>
  )
}
