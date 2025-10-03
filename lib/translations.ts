import fr from "@/locales/fr.json"
import ar from "@/locales/ar.json"

export type TranslationType = {
  [key: string]: string | { [key: string]: string }
}

export const getTranslations = (locale: "fr" | "ar"): TranslationType => {
  switch (locale) {
    case "fr":
      return fr
    case "ar":
      return ar
    default:
      return fr
  }
}

export const locales = ["fr", "ar"] as const
export type LocaleType = (typeof locales)[number]
