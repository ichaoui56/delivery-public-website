"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Upload, Plus } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"
import { LanguageSwitcher } from "@/components/language-switcher"

interface StockFormProps {
  onClose: () => void
}

export default function StockForm({ onClose }: StockFormProps) {
  const [variants, setVariants] = useState([{ ref: "", name: "", quantity: "" }])
  const [variantsActive, setVariantsActive] = useState(false)
  const { t, locale } = useTranslations()
  const form = t.stockForm

  const addVariant = () => {
    setVariants([...variants, { ref: "", name: "", quantity: "" }])
  }

  return (
    <form className="space-y-6 p-6" dir={locale === "ar" ? "rtl" : "ltr"}>
      <div className="flex justify-end">
        <LanguageSwitcher currentLocale={locale} compact />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Upload Image */}
        <div className="space-y-2">
          <Label>{form.uploadImage}</Label>
          <div className="border-2 border-dashed border-border rounded-xl p-12 text-center hover:border-primary transition-colors cursor-pointer">
            <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground">{form.dragDrop}</p>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="productName">{form.productName}</Label>
            <Input id="productName" placeholder={form.productName} className="bg-muted" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="productRef">{form.productRef}</Label>
            <Input id="productRef" placeholder={form.productRef} className="bg-muted" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="quantity">{form.quantity}</Label>
            <Input id="quantity" type="number" placeholder={form.quantity} className="bg-muted" />
          </div>
        </div>
      </div>

      {/* Product Note */}
      <div className="space-y-2">
        <Label htmlFor="note">{form.productNote}</Label>
        <Textarea id="note" placeholder={form.productNote} className="bg-muted min-h-[100px]" />
      </div>

      {/* Variants Toggle */}
      <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
        <Label htmlFor="variants" className="text-lg font-heading">
          {form.variantsEnabled}
        </Label>
        <Switch id="variants" checked={variantsActive} onCheckedChange={setVariantsActive} />
      </div>

      {/* Variants Section */}
      {variantsActive && (
        <div className="space-y-4">
          {variants.map((variant, index) => (
            <div key={index} className="grid grid-cols-3 gap-4">
              <Input placeholder={form.variantRef} className="bg-muted" />
              <Input placeholder={form.variantName} className="bg-muted" />
              <div className="flex gap-2">
                <Input type="number" placeholder="1" className="bg-muted" />
                {index === variants.length - 1 && (
                  <Button
                    type="button"
                    onClick={addVariant}
                    className="bg-[#85e502] hover:bg-[#85e502]/90 text-white px-4"
                  >
                    <Plus className="w-5 h-5" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Submit Button */}
      <div className="flex justify-center pt-4">
        <Button type="submit" className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-lg font-heading">
          {form.save}
        </Button>
      </div>
    </form>
  )
}
