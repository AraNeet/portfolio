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
    <div className="relative max-w-3xl mx-auto">
      {/* Vertical Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-cyan-900/50 -translate-x-1/2" />

      {/* Timeline Items */}
      <div className="space-y-16">
        {items.map((item, index) => (
          <TimelineItem 
            key={index} 
            {...item} 
            isLast={index === items.length - 1}
            align={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </div>
  )
}

function TimelineItem({ 
  title, 
  company, 
  location, 
  date, 
  description, 
  isLast,
  align 
}: TimelineItemProps & { align: "left" | "right" }) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Content */}
      <div className={`
        relative 
        ${align === 'right' ? 'ml-[50%]' : 'mr-[50%]'}
      `}>
        {/* Card */}
        <div className={`
          relative
          ${align === 'right' ? 'ml-8' : 'mr-8'}
        `}>
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

          {/* Dot */}
          <div className={`
            absolute top-1/2 -translate-y-1/2
            ${align === 'right' ? 'left-0 -ml-[1.65rem]' : 'right-0 -mr-[1.65rem]'}
            w-3 h-3 bg-cyan-400 rounded-full
          `} />
        </div>
      </div>

      {/* Vertical Connecting Line */}
      {!isLast && (
        <div className="absolute left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-cyan-400/20 to-transparent h-16 transform translate-y-full" />
      )}
    </motion.div>
  )
}
