"use client"

import { useState } from "react"
import { Upload, Plus, ArrowLeft, Trash2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useTranslations } from "@/hooks/use-translations"

type Product = {
  id: number
  name: string
  ref: string
  quantity: string
  note: string
  image: File | null
  variantsActive: boolean
  variants: Array<{ ref: string; name: string; quantity: string }>
}

export default function NouveauProduitPage() {
  const t = useTranslations()

  const [clientInfo, setClientInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  })

  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "",
      ref: "",
      quantity: "",
      note: "",
      image: null,
      variantsActive: false,
      variants: [{ ref: "", name: "", quantity: "" }],
    },
  ])

  const addProduct = () => {
    const newProduct: Product = {
      id: Date.now(),
      name: "",
      ref: "",
      quantity: "",
      note: "",
      image: null,
      variantsActive: false,
      variants: [{ ref: "", name: "", quantity: "" }],
    }
    setProducts([...products, newProduct])
  }

  const removeProduct = (id: number) => {
    if (products.length > 1) {
      setProducts(products.filter((p) => p.id !== id))
    }
  }

  const addVariant = (productId: number) => {
    setProducts(
      products.map((p) =>
        p.id === productId ? { ...p, variants: [...p.variants, { ref: "", name: "", quantity: "" }] } : p,
      ),
    )
  }

  const toggleVariants = (productId: number, active: boolean) => {
    setProducts(products.map((p) => (p.id === productId ? { ...p, variantsActive: active } : p)))
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/#services">
            <Button variant="ghost" className="mb-4 hover:bg-muted">
              <ArrowLeft className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
              {t("productPage.backButton")}
            </Button>
          </Link>
          <h1 className="text-4xl font-heading font-bold text-foreground flex items-center gap-3">
            <div className="w-3 h-12 bg-primary rounded-full" />
            {t("productPage.title")}
          </h1>
          <p className="text-muted-foreground mt-2 ltr:ml-7 rtl:mr-7">{t("productPage.subtitle")}</p>
        </div>

        <div className="bg-card border border-border rounded-3xl p-8 shadow-xl mb-8">
          <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2">
            <div className="w-2 h-8 bg-primary rounded-full" />
            {t("productPage.clientInfoTitle")}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">{t("productPage.fullName")}</Label>
              <Input
                id="fullName"
                placeholder={t("productPage.fullNamePlaceholder")}
                className="h-12"
                value={clientInfo.fullName}
                onChange={(e) => setClientInfo({ ...clientInfo, fullName: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t("productPage.email")}</Label>
              <Input
                id="email"
                type="email"
                placeholder={t("productPage.emailPlaceholder")}
                className="h-12"
                value={clientInfo.email}
                onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">{t("productPage.phone")}</Label>
              <Input
                id="phone"
                type="tel"
                placeholder={t("productPage.phonePlaceholder")}
                className="h-12"
                value={clientInfo.phone}
                onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">{t("productPage.city")}</Label>
              <Input
                id="city"
                placeholder={t("productPage.cityPlaceholder")}
                className="h-12"
                value={clientInfo.city}
                onChange={(e) => setClientInfo({ ...clientInfo, city: e.target.value })}
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="address">{t("productPage.address")}</Label>
              <Textarea
                id="address"
                placeholder={t("productPage.addressPlaceholder")}
                rows={3}
                className="resize-none"
                value={clientInfo.address}
                onChange={(e) => setClientInfo({ ...clientInfo, address: e.target.value })}
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {products.map((product, productIndex) => (
            <div key={product.id} className="bg-card border border-border rounded-3xl p-8 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-heading font-bold flex items-center gap-2">
                  <div className="w-2 h-8 bg-primary rounded-full" />
                  {t("productPage.productTitle")} {productIndex + 1}
                </h2>
                {products.length > 1 && (
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeProduct(product.id)}
                    className="hover:scale-105 transition-transform"
                  >
                    <Trash2 className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
                    {t("productPage.deleteButton")}
                  </Button>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column - Image Upload */}
                <div className="space-y-4">
                  <Label className="text-lg font-heading">{t("productPage.uploadImage")}</Label>
                  <div className="border-2 border-dashed border-border rounded-2xl p-12 flex flex-col items-center justify-center hover:border-primary/50 transition-colors cursor-pointer group">
                    <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                      <Upload className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-muted-foreground text-center">{t("productPage.uploadText")}</p>
                  </div>
                </div>

                {/* Right Column - Product Details */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor={`productName-${product.id}`}>{t("productPage.productName")}</Label>
                    <Input
                      id={`productName-${product.id}`}
                      placeholder={t("productPage.productNamePlaceholder")}
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`productRef-${product.id}`}>{t("productPage.productRef")}</Label>
                    <Input
                      id={`productRef-${product.id}`}
                      placeholder={t("productPage.productRefPlaceholder")}
                      className="h-12 bg-muted"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`quantity-${product.id}`}>{t("productPage.quantity")}</Label>
                    <Input
                      id={`quantity-${product.id}`}
                      placeholder={t("productPage.quantityPlaceholder")}
                      type="number"
                      className="h-12 bg-muted"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`note-${product.id}`}>{t("productPage.productNote")}</Label>
                    <Textarea
                      id={`note-${product.id}`}
                      placeholder={t("productPage.productNotePlaceholder")}
                      rows={4}
                      className="resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Variants Section */}
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex items-center justify-between mb-6">
                  <Label htmlFor={`variants-${product.id}`} className="text-lg font-heading">
                    {t("productPage.variantsEnabled")}
                  </Label>
                  <Switch
                    id={`variants-${product.id}`}
                    checked={product.variantsActive}
                    onCheckedChange={(checked) => toggleVariants(product.id, checked)}
                  />
                </div>

                {product.variantsActive && (
                  <div className="space-y-4">
                    {product.variants.map((variant, variantIndex) => (
                      <div key={variantIndex} className="grid grid-cols-3 gap-4">
                        <Input placeholder={t("productPage.variantRef")} className="h-12 bg-muted" />
                        <Input placeholder={t("productPage.variantName")} className="h-12" />
                        <div className="flex gap-2">
                          <Input placeholder="1" type="number" className="h-12" />
                          {variantIndex === product.variants.length - 1 && (
                            <Button
                              onClick={() => addVariant(product.id)}
                              size="icon"
                              className="h-12 w-12 bg-green-500 hover:bg-green-600 flex-shrink-0"
                            >
                              <Plus className="w-5 h-5" />
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          <div className="flex justify-center">
            <Button
              onClick={addProduct}
              variant="outline"
              className="px-8 py-6 text-lg font-heading border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all bg-transparent"
            >
              <Plus className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
              {t("productPage.addProduct")}
            </Button>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex justify-center">
          <Button className="px-16 py-6 text-lg font-heading bg-primary hover:bg-primary-dark hover:scale-105 transition-transform">
            {t("productPage.saveButton")}
          </Button>
        </div>
      </div>
    </div>
  )
}
