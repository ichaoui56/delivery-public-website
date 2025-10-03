"use client"

import { useParams } from "next/navigation"
import fr from "@/locales/fr.json"
import ar from "@/locales/ar.json"
import en from "@/locales/en.json"

type TranslationKey = string

const translations = {
  fr,
  ar,
  en,
}

export function useTranslations() {
  const params = useParams()
  const locale = (params?.locale as string) || "fr"

  const t = (key: TranslationKey): string => {
    const keys = key.split(".")
    let value: any = translations[locale as keyof typeof translations] || translations.fr

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  return t
}
