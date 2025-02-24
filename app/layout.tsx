import type React from "react"
import type { Metadata } from "next"
import { Coustard } from "next/font/google"
import "./globals.css"

const coustard = Coustard({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
})


export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={coustard.className}>{children}</body>
    </html>
  )
}

