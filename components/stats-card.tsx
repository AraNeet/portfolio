"use client"

import { Card } from "@/components/ui/card"
import type { ReactNode } from "react"

interface StatsCardProps {
  icon: ReactNode
  title: string
  value: number
  prefix?: string
}

export default function StatsCard({ icon, title, value, prefix = "" }: StatsCardProps) {
  return (
    <Card className="p-6 bg-black/50 border border-cyan-900/30">
      <div className="text-cyan-400 mb-4">{icon}</div>
      <div className="space-y-2">
        <div className="text-3xl font-bold text-white">
          {prefix}
          {value}
        </div>
        <p className="text-sm text-gray-400">{title}</p>
      </div>
    </Card>
  )
}