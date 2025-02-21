"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

interface TimelineItemProps {
  title: string
  company: string
  location: string
  date: string
  description: string
  isLast?: boolean
}

export function Timeline({ items }: { items: TimelineItemProps[] }) {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-4 top-4 bottom-4 w-px bg-cyan-900/50" />

      {/* Timeline Items */}
      <div className="space-y-12">
        {items.map((item, index) => (
          <TimelineItem key={index} {...item} isLast={index === items.length - 1} />
        ))}
      </div>
    </div>
  )
}

function TimelineItem({ title, company, location, date, description, isLast }: TimelineItemProps) {
  return (
    <motion.div
      className="relative pl-12"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Dot */}
      <div className="absolute left-0 w-8 h-8 flex items-center justify-center">
        <div className="w-3 h-3 bg-cyan-400 rounded-full" />
      </div>

      {/* Content */}
      <Card className="p-6 bg-black/50 border border-cyan-900/30 hover:border-cyan-400/50 transition-colors">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-cyan-400">{title}</h3>
            <p className="text-gray-400">{company}</p>
            <div className="text-sm text-gray-500">
              <p>{location}</p>
              <p>{date}</p>
            </div>
          </div>
          <p className="text-gray-400">{description}</p>
        </div>
      </Card>

      {/* Connecting Line */}
      {!isLast && (
        <div className="absolute left-4 top-8 bottom-0 w-px bg-gradient-to-b from-cyan-400/20 to-transparent h-12" />
      )}
    </motion.div>
  )
}