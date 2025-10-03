"use client"

import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"
import { useRouter } from "next/navigation"

interface LanguageSwitcherProps {
  currentLocale: "fr" | "ar"
  compact?: boolean
}

export function LanguageSwitcher({ currentLocale, compact = false }: LanguageSwitcherProps) {
  const router = useRouter()

  const toggleLanguage = () => {
    const newLocale = currentLocale === "fr" ? "ar" : "fr"
    // Store the preference
    localStorage.setItem("preferredLocale", newLocale)
    // Trigger a page refresh with new locale
    window.location.reload()
  }

  if (compact) {
    return (
      <Button type="button" onClick={toggleLanguage} variant="outline" size="sm" className="gap-2 bg-transparent">
        <Languages className="w-4 h-4" />
        {currentLocale === "fr" ? "العربية" : "Français"}
      </Button>
    )
  }

  return (
    <Button type="button" onClick={toggleLanguage} variant="outline" className="gap-2 bg-transparent">
      <Languages className="w-4 h-4" />
      {currentLocale === "fr" ? "Switch to Arabic" : "التبديل إلى الفرنسية"}
    </Button>
  )
}
