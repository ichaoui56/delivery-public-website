"use client"

import { useState } from "react"
import { Globe, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"

interface Language {
  code: string
  name: string
  nativeName: string
  flag: string
}

const languages: Language[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇬🇧" },
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇸🇦" },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷" },
]

export function LanguageSelector({ currentLocale }: { currentLocale: string }) {
  const [open, setOpen] = useState(false)
  const currentLanguage = languages.find((lang) => lang.code === currentLocale) || languages[0]

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-9 gap-2 text-white hover:bg-white/10 hover:text-white font-medium transition-all duration-200"
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLanguage.nativeName}</span>
          <span className="text-lg">{currentLanguage.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 bg-white shadow-xl border-0">
        {languages.map((language) => (
          <DropdownMenuItem key={language.code} asChild className="cursor-pointer">
            <Link
              href={`/${language.code}`}
              className="flex items-center justify-between px-3 py-2.5 hover:bg-blue-50 transition-colors duration-200"
              onClick={() => setOpen(false)}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{language.flag}</span>
                <div className="flex flex-col">
                  <span className="font-semibold text-sm text-gray-900">{language.nativeName}</span>
                  <span className="text-xs text-gray-500">{language.name}</span>
                </div>
              </div>
              {currentLocale === language.code && <Check className="h-4 w-4 text-blue-600 flex-shrink-0" />}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
