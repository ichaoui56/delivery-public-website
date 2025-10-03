"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useTranslations } from "@/hooks/use-translations"

export default function NouveauColisPage() {
  const t = useTranslations()

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/#services">
            <Button variant="ghost" className="mb-4 hover:bg-muted">
              <ArrowLeft className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
              {t("packagePage.backButton")}
            </Button>
          </Link>
          <h1 className="text-4xl font-heading font-bold text-foreground flex items-center gap-3">
            <div className="w-3 h-12 bg-primary rounded-full" />
            {t("packagePage.title")}
          </h1>
        </div>

        {/* Form */}
        <div className="bg-card border border-border rounded-3xl p-8 shadow-xl">
          <div className="space-y-6">
            {/* Tracking Code */}
            <div className="space-y-2">
              <Label htmlFor="trackingCode">{t("packagePage.trackingCode")}</Label>
              <Input id="trackingCode" placeholder={t("packagePage.trackingCodePlaceholder")} className="h-12" />
            </div>

            {/* Recipient and Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="recipient">{t("packagePage.recipient")}</Label>
                <Input id="recipient" placeholder={t("packagePage.recipientPlaceholder")} className="h-12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">{t("packagePage.phone")}</Label>
                <Input id="phone" placeholder={t("packagePage.phonePlaceholder")} type="tel" className="h-12" />
              </div>
            </div>

            {/* Merchandise and Quantity */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="merchandise">{t("packagePage.merchandise")}</Label>
                <Input id="merchandise" placeholder={t("packagePage.merchandisePlaceholder")} className="h-12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">{t("packagePage.quantity")}</Label>
                <Input
                  id="quantity"
                  placeholder={t("packagePage.quantityPlaceholder")}
                  type="number"
                  className="h-12"
                />
              </div>
            </div>

            {/* Zone and City */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="zone">{t("packagePage.zone")}</Label>
                <Select>
                  <SelectTrigger className="h-12 bg-muted">
                    <SelectValue placeholder={t("packagePage.zonePlaceholder")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="zone1">{t("packagePage.zone1")}</SelectItem>
                    <SelectItem value="zone2">{t("packagePage.zone2")}</SelectItem>
                    <SelectItem value="zone3">{t("packagePage.zone3")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">{t("packagePage.city")}</Label>
                <Input id="city" placeholder={t("packagePage.cityPlaceholder")} className="h-12 bg-muted" />
              </div>
            </div>

            {/* Address and Price */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="address">{t("packagePage.address")}</Label>
                <Textarea
                  id="address"
                  placeholder={t("packagePage.addressPlaceholder")}
                  rows={4}
                  className="resize-none"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">{t("packagePage.price")}</Label>
                <Input id="price" placeholder={t("packagePage.pricePlaceholder")} type="number" className="h-12" />
              </div>
            </div>

            {/* Comments */}
            <div className="space-y-2">
              <Label htmlFor="comments">{t("packagePage.comments")}</Label>
              <Textarea
                id="comments"
                placeholder={t("packagePage.commentsPlaceholder")}
                rows={4}
                className="resize-none"
              />
            </div>

            {/* Checkboxes and Selects */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Checkbox id="replace" />
                  <Label htmlFor="replace" className="cursor-pointer">
                    {t("packagePage.replacePackage")}
                  </Label>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Checkbox id="stock" />
                  <Label htmlFor="stock" className="cursor-pointer">
                    {t("packagePage.stockPackage")}
                  </Label>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="open">{t("packagePage.open")}</Label>
                  <Select>
                    <SelectTrigger className="h-12 bg-muted">
                      <SelectValue placeholder={t("packagePage.openYes")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">{t("packagePage.openYes")}</SelectItem>
                      <SelectItem value="no">{t("packagePage.openNo")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fragile">{t("packagePage.fragile")}</Label>
                  <Select>
                    <SelectTrigger className="h-12 bg-muted">
                      <SelectValue placeholder={t("packagePage.fragileNo")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">{t("packagePage.fragileYes")}</SelectItem>
                      <SelectItem value="no">{t("packagePage.fragileNo")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4 justify-center pt-6">
              <Button className="px-12 py-6 text-lg font-heading bg-primary hover:bg-primary-dark">
                {t("packagePage.saveButton")}
              </Button>
              <Button variant="outline" className="px-12 py-6 text-lg font-heading border-2 bg-transparent">
                {t("packagePage.resetButton")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
