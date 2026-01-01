import type React from "react"
import type { Metadata } from "next"
import { Inter, Rajdhani, Cairo } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const rajdhani = Rajdhani({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
  display: "swap",
})

const cairo = Cairo({
  weight: ["400", "500", "600", "700"],
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Sonixpress - Your E-commerce Logistics Simplified",
  description:
    "Reliable pickup, storage and delivery throughout Morocco. Grow your e-commerce business with our trusted logistics network.",
    generator: 'v0.app'
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale?: string }>
}>) {
  const { locale } = await params
  const isRTL = locale === "ar"

  return (
    <html
      lang="ar"
      dir={isRTL ? "rtl" : "ltr"}
      className={`${inter.variable} ${rajdhani.variable} ${cairo.variable}`}
    >
      <body className={`antialiased ${isRTL ? "font-cairo" : ""}`}>{children}</body>
    </html>
  )
}
