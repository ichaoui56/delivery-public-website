"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useTranslations } from "@/hooks/use-translations"
import { LanguageSwitcher } from "@/components/language-switcher"

interface OrderFormProps {
  onClose: () => void
}

export default function OrderForm({ onClose }: OrderFormProps) {
  const { t, locale } = useTranslations()
  const form = t.orderForm

  return (
    <form className="space-y-6 p-6" dir={locale === "ar" ? "rtl" : "ltr"}>
      <div className="flex justify-end">
        <LanguageSwitcher currentLocale={locale} compact />
      </div>

      {/* Tracking Code */}
      <div className="space-y-2">
        <Label htmlFor="trackingCode">{form.trackingCode}</Label>
        <Input id="trackingCode" placeholder={form.trackingCode} className="bg-muted" />
      </div>

      {/* Two Column Layout */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="recipient">{form.recipient}</Label>
          <Input id="recipient" placeholder={form.recipient} className="bg-muted" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">{form.phone}</Label>
          <Input id="phone" placeholder={form.phone} className="bg-muted" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="merchandise">{form.merchandise}</Label>
          <Input id="merchandise" placeholder={form.merchandise} className="bg-muted" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="quantity">{form.quantity}</Label>
          <Input id="quantity" type="number" placeholder={form.quantity} className="bg-muted" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="zone">{form.zone}</Label>
          <Select>
            <SelectTrigger className="bg-muted">
              <SelectValue placeholder={form.selectZone} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="zone1">Zone 1</SelectItem>
              <SelectItem value="zone2">Zone 2</SelectItem>
              <SelectItem value="zone3">Zone 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="city">{form.city}</Label>
          <Input id="city" placeholder={form.region} className="bg-muted" />
        </div>
      </div>

      {/* Address */}
      <div className="space-y-2">
        <Label htmlFor="address">{form.address}</Label>
        <Textarea id="address" placeholder={form.address} className="bg-muted min-h-[100px]" />
      </div>

      {/* Price */}
      <div className="space-y-2">
        <Label htmlFor="price">{form.price}</Label>
        <Input id="price" type="number" placeholder={form.price} className="bg-muted" />
      </div>

      {/* Comments */}
      <div className="space-y-2">
        <Label htmlFor="comments">{form.comments}</Label>
        <Textarea id="comments" placeholder={form.commentsPlaceholder} className="bg-muted min-h-[100px]" />
      </div>

      {/* Checkboxes */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <Checkbox id="replace" />
          <Label htmlFor="replace" className="font-normal">
            {form.replacePackage}
          </Label>
        </div>

        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <Checkbox id="stock" />
          <Label htmlFor="stock" className="font-normal">
            {form.stockPackage}
          </Label>
        </div>
      </div>

      {/* Dropdowns */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="open">{form.open}</Label>
          <Select>
            <SelectTrigger className="bg-muted">
              <SelectValue placeholder={form.yes} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">{form.yes}</SelectItem>
              <SelectItem value="no">{form.no}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="fragile">{form.fragile}</Label>
          <Select>
            <SelectTrigger className="bg-muted">
              <SelectValue placeholder={form.no} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">{form.yes}</SelectItem>
              <SelectItem value="no">{form.no}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Submit Buttons */}
      <div className="flex justify-end gap-4 pt-4">
        <Button type="button" variant="outline" onClick={onClose} className="px-8 py-6 text-lg bg-transparent">
          {form.reset}
        </Button>
        <Button type="submit" className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-lg font-heading">
          {form.save}
        </Button>
      </div>
    </form>
  )
}
